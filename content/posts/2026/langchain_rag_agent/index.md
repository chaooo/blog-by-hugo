---
title: 「工程实践」LangChain RAG + Agent 搭建多工具 AI 知识库问答助手系统
date: 2026-06-04 15:30:15
tags: [AI大模型, LangChain, RAG, Agent, 知识库]
categories: [AI大模型]
series: AI大模型
toc: true
math: true
---

## 一、项目概述
从零开始，使用 Python 基于 **LangChain RAG**（检索增强生成）+ **Agent**（智能代理） 构建一个完整的多工具 AI 知识库问答助手系统。系统具备文档问答、数学计算、天气查询、时间查询和提醒设置等多种功能，能够根据用户问题智能选择合适的工具进行处理。

### 1.1 技术选型
| 组件 | 技术 | 版本 | 说明 |
|------|------|------|------|
| 语言 | Python | 3.10+ | 主开发语言 |
| AI 框架 | LangChain | 0.1+ | Agent 和工具链管理 |
| 向量数据库 | Chroma | 0.4+ | 轻量级本地向量存储 |
| 嵌入模型 | DashScope Embeddings | - | 阿里百炼嵌入服务 |
| 大语言模型 | DeepSeek | - | 对话生成 |

### 1.2 项目结构
```text
PROJECT/
├── src/
│   └── ai_personal_assistant/
│       ├── __init__.py
│       ├── main.py             # 主入口文件
│       ├── service/            # 业务服务层
│       │   ├── __init__.py
│       │   └── agent.py        # Agent构建逻辑
│       └── utils/              # 工具模块
│           ├── __init__.py
│           ├── tools.py        # 工具定义
│           └── vector_db.py    # 向量数据库操作
├── data/                       # 知识库文档目录
├── vector_db/                  # 向量数据库存储目录
├── tests/                      # 测试文件
├── .env.example               # 环境变量示例
├── DEPLOYMENT.md              # 部署说明
├── README.md                  # 项目说明
├── TUTORIAL.md                # 使用教程
└── pyproject.toml             # 项目配置
```

### 1.3 技术架构
```text
┌─────────────────────────────────────────────────────────────────┐
│                        用户层                                    │
│                    CLI 命令行交互界面                              │
└───────────────────────────┬─────────────────────────────────────┘
                            ▼
┌─────────────────────────────────────────────────────────────────┐
│                        Agent 层                                 │
│              create_agent + System Prompt + Tools              │
│     核心能力：决策推理、工具选择、结果整合、自然语言回复                 │
└───────────────────────────┬─────────────────────────────────────┘
          ┌─────────────────┼─────────────────┬─────────────────┐
          ▼                 ▼                 ▼                 ▼
┌──────────────┐ ┌─────────────┐ ┌───────────────┐ ┌─────────────────┐
│  retrieve_   │ │  calculate  │ │  get_weather  │ │ get_current_time│
│   document   │ │             │ │               │ │   set_reminder  │
│ (RAG检索工具)  │ │  (数学计算)  │ │   (天气查询)    │ │   (时间/提醒)    │
└──────┬───────┘ └─────────────┘ └───────────────┘ └─────────────────┘
       ▼
┌───────────────────────────────────────────────┐
│               向量数据库层                      │
│      Chroma + DashScope Embeddings            │
│ 文档加载 → 文本分割 → 向量化 → 向量存储 → 相似度检索  │
└───────────────────────────────────────────────┘
```


## 二、环境准备
### 2.1 安装依赖
```powershell
pip install langchain langchain-openai langchain-chroma langchain-community python-dotenv pypdf dashscope
```

### 2.2 配置环境变量
创建 `.env` 文件：
```text
# API Key 配置
OPENAI_API_KEY=your-openai-api-key
DASHSCOPE_API_KEY=your-dashscope-api-key

# API Base URL（使用阿里云百炼兼容模式）
OPENAI_BASE_URL=https://dashscope.aliyuncs.com/compatible-mode/v1
```
> **说明**：本项目使用阿里云百炼平台提供的 DeepSeek 模型，通过 OpenAI 兼容接口调用。


## 三、核心模块实现

### 3.1 向量数据库模块（utils/vector_db.py）
负责文档加载、文本分割、向量化和向量存储：

| 技术点 | 实现方式 | 作用 |
| --- | --- | --- |
| 文档加载 | `PyPDFLoader` | 支持PDF文档解析 |
| 文本分割 | `RecursiveCharacterTextSplitter` | 将长文档切分为合适大小的chunk |
| 向量化 | `DashScopeEmbeddings` | 使用阿里云百炼嵌入模型 |
| 向量存储 | `Chroma` | 轻量级向量数据库，支持持久化 |

```python
import os
from typing import Optional, List
from langchain_community.document_loaders import PyPDFLoader
from langchain_text_splitters import RecursiveCharacterTextSplitter
from langchain_community.embeddings import DashScopeEmbeddings
from langchain_chroma import Chroma
from langchain_core.documents import Document

# 加载PDF文档
def load_pdf_document(file_path: str) -> List[Document]:
    loader = PyPDFLoader(file_path)
    documents = loader.load()
    return documents

# 将文档分割为文本块
def split_documents(docs, chunk_size=500, chunk_overlap=50) -> List[Document]:
    text_splitter = RecursiveCharacterTextSplitter(
        chunk_size=chunk_size,
        chunk_overlap=chunk_overlap,
        length_function=len,
        add_start_index=True,
    )
    split_docs = text_splitter.split_documents(docs)
    return split_docs

# 创建向量数据库
def create_vector_database(docs, persist_dir="./vector_db", api_key) -> Chroma:
    embeddings = DashScopeEmbeddings(
        model="text-embedding-v4",
        dashscope_api_key=api_key,
    )
    vector_db = Chroma.from_documents(
        documents=docs,
        embedding=embeddings,
        persist_directory=persist_dir,
    )
    return vector_db

# 加载已存在的向量数据库
def load_vector_database(persist_dir="./vector_db", api_key) -> Optional[Chroma]:
    if not os.path.exists(persist_dir) or not os.listdir(persist_dir):
        return None
    embeddings = DashScopeEmbeddings(
        model="text-embedding-v4",
        dashscope_api_key=api_key,
    )
    vector_db = Chroma(
        persist_directory=persist_dir,
        embedding_function=embeddings,
    )
    count = vector_db._collection.count()
    print(f"向量数据库加载完成，共 {count} 个文档块")
    return vector_db
```


### 3.2 工具模块（utils/tools.py）
定义 Agent 可调用的工具集：
1. **文档字符串必须清晰**：工具的功能描述和参数说明是 Agent 判断是否调用该工具的关键依据
2. **参数类型明确**：使用类型注解明确参数类型，帮助 Agent 正确传参
3. **错误处理完善**：工具应返回友好的错误信息，便于调试和用户理解
4. **返回格式统一**：返回结构化的字符串，便于 Agent 理解和整合结果

```python
import datetime
from langchain_core.tools import tool

@tool
def calculate(expression: str) -> str:
    """计算数学表达式。
    Args:
        expression: 数学表达式，如 "2 + 3 * 4"
    """
    try:
        result = eval(expression, {"__builtins__": {}}, {})
        return f"计算结果: {expression} = {result}"
    except Exception as e:
        return f"计算错误: {str(e)}"

@tool
def get_weather(city: str) -> str:
    """查询指定城市的天气。
    Args:
        city: 城市名称，如 "北京"、"上海"
    """
    weather_data = {
        "北京": {"天气": "晴", "温度": "18°C", "湿度": "45%", "风力": "微风"},
        "上海": {"天气": "多云", "温度": "22°C", "湿度": "60%", "风力": "东风3级"},
        # 更多城市天气信息...
    }
    if city in weather_data:
        data = weather_data[city]
        return f"{city}天气：{data['天气']}，温度{data['温度']}，湿度{data['湿度']}，风力{data['风力']}"
    else:
        return f"抱歉，暂未查询到{city}的天气信息"

@tool
def get_current_time() -> str:
    """获取当前日期和时间。"""
    now = datetime.datetime.now()
    return f"当前时间：{now.strftime('%Y年%m月%d日 %H:%M:%S')}"

@tool
def set_reminder(reminder: str, time: str) -> str:
    """设置提醒事项。
    Args:
        reminder: 提醒内容
        time: 提醒时间，格式如 "2024-01-15 14:30"
    """
    try:
        datetime.datetime.strptime(time, "%Y-%m-%d %H:%M")
        return f"已设置提醒：{time} - {reminder}"
    except ValueError:
        return f"时间格式错误，请使用 'YYYY-MM-DD HH:MM' 格式"

def build_retrieval_tool(vector_db):
    """构建文档检索工具。
    Args:
        vector_db: Chroma向量数据库实例
    Returns:
        检索工具函数
    """
    retriever = vector_db.as_retriever(
        search_type="similarity",
        search_kwargs={"k": 3},
    )
    def format_docs(docs):
        formatted = []
        for i, doc in enumerate(docs, 1):
            source = doc.metadata.get("source", "未知来源")
            page = doc.metadata.get("page", "N/A")
            formatted.append(
                f"【文档{i}】来源: {source}, 页码: {page}\n内容:\n{doc.page_content}"
            )
        return "\n\n".join(formatted)

    @tool
    def retrieve_document(query: str) -> str:
        """从知识库文档中检索相关信息。
        Args:
            query: 用户的查询问题
        """
        docs = retriever.invoke(query)
        return format_docs(docs)
    return retrieve_document

def get_default_tools():
    """获取所有默认工具（不包含检索工具）。"""
    return [
        calculate,
        get_weather,
        get_current_time,
        set_reminder,
    ]
```


### 3.3 Agent 模块（service/agent.py）
构建具备多工具调用能力的智能代理, **System Prompt 设计要点**：

| 要素 | 说明 |
| --- | --- |
| 角色定义 | 明确 Agent 的身份和定位 |
| 工具列表 | 列出所有可用工具及其用途 |
| 使用规则 | 指导 Agent 在什么情况下调用什么工具 |
| 输出要求 | 定义回答的格式和风格 |

```python
from typing import Optional, Callable
from langchain_openai import ChatOpenAI
from langchain.agents import create_agent
from langchain_core.tools import BaseTool
from ..utils.tools import get_default_tools


def build_personal_assistant(retrieval_tool, model_name="deepseek-v4-pro", api_key) -> object:
    """构建多工具个人助手 Agent。
    Args:
        retrieval_tool: 文档检索工具（可选）
        model_name: LLM模型名称
        api_key: API密钥
    Returns:
        Agent实例
    """
    llm = ChatOpenAI(model_name=model_name, openai_api_key=api_key)
    tools = get_default_tools()
    if retrieval_tool:
        tools.append(retrieval_tool)
    system_prompt = """你是一个智能个人助手，可以帮助用户完成多种任务。
        可用工具：
        1. retrieve_document - 从知识库文档中检索信息，适用于文档问答
        2. calculate - 数学计算
        3. get_weather - 查询城市天气
        4. get_current_time - 获取当前时间
        5. set_reminder - 设置提醒事项
        使用规则：
        - 当用户的问题涉及文档内容时，使用 retrieve_document 工具
        - 当用户需要计算时，使用 calculate 工具
        - 当用户询问天气时，使用 get_weather 工具
        - 当用户询问时间时，使用 get_current_time 工具
        - 当用户需要设置提醒时，使用 set_reminder 工具
        - 如果不需要工具，可以直接回答用户的问题
    请根据用户的问题，选择最合适的工具或直接回答。回答要清晰友好。"""

    assistant = create_agent(
        model=llm,
        tools=tools,
        name="personal_assistant",
        system_prompt=system_prompt,
    )
    print("工具助手Agent构建成功")
    return assistant
```


### 3.4 主入口模块（main.py）
整合所有模块，提供命令行交互界面：

```python
import os
import sys
from dotenv import load_dotenv
from langchain.messages import HumanMessage
from .utils.vector_db import (
    load_pdf_document,
    split_documents,
    create_vector_database,
    load_vector_database,
)
from .utils.tools import build_retrieval_tool
from .service.agent import build_personal_assistant


def main():
    load_dotenv()
    sys.stdout.reconfigure(encoding="utf-8")
    print("环境变量加载完成")

    persist_dir = "./vector_db"
    pdf_path = "./data/Java开发手册(黄山版).pdf"
    api_key = os.getenv("DASHSCOPE_API_KEY")
    vector_db = None

    try:
        if os.path.exists(persist_dir) and os.listdir(persist_dir):
            print("检测到已存在的向量库，跳过文档加载")
            vector_db = load_vector_database(persist_dir, api_key)
        else:
            print("未检测到向量库，开始加载文档并创建向量库")
            if not os.path.exists(pdf_path):
                vector_db = create_vector_database([], persist_dir, api_key)
            else:
                documents = load_pdf_document(pdf_path)
                split_docs = split_documents(documents)
                vector_db = create_vector_database(split_docs, persist_dir, api_key)
    except Exception as e:
        print(f"知识库加载失败: {str(e)}")
        import traceback
        traceback.print_exc()

    retrieval_tool = build_retrieval_tool(vector_db) if vector_db else None
    assistant = build_personal_assistant(
        retrieval_tool,
        "deepseek-v4-pro", 
        os.getenv("OPENAI_API_KEY")
    )

    print("\n" + "=" * 50)
    print("多工具个人助手已就绪")
    print("可用功能：文档问答、数学计算、天气查询、时间查询、设置提醒")
    print("输入 'exit' 或 'quit' 退出")
    print("=" * 50)

    while True:
        try:
            user_input = input("\n用户: ")
            if user_input.lower() in ["exit", "quit", "退出"]:
                print("再见！")
                break
            result = assistant.invoke(
                {"messages": [HumanMessage(content=user_input)]}
            )
            print(f"助手: {result['messages'][-1].content}")
        except KeyboardInterrupt:
            print("\n再见！")
            break
        except Exception as e:
            print(f"处理错误: {str(e)}")

if __name__ == "__main__":
    main()
```


## 四、运行示例
### 4.1 启动应用
```powershell
cd aiPersonalAssistant
python -m src.ai_personal_assistant.main
```

### 4.2 运行日志
```text
环境变量加载完成
检测到已存在的向量库，跳过文档加载
向量数据库加载完成，共 184 个文档块
工具助手Agent构建成功
==================================================
多工具个人助手已就绪
可用功能：文档问答、数学计算、天气查询、时间查询、设置提醒
输入 'exit' 或 'quit' 退出
==================================================
用户: 文档中关于数据库强制规约有哪些？
助手: 根据《Java开发手册（黄山版）》文档，数据库强制规约主要分为建表规约、索引规约和SQL规约三大部分，具体如下：
一、建表规约
1. 【强制】表达"是/否"概念的字段，必须使用 `is_xxx` 的方式命名...
...

用户: 计算 25 * 4 + 30 / 2
助手: 计算结果: 25 * 4 + 30 / 2 = 115

用户: 杭州今天天气怎么样？
助手: 杭州天气：阴，温度25°C，湿度70%，风力东南风2级

用户: 现在几点了？
助手: 当前时间：2026年06月04日 15:30:45

用户: exit
再见！
```


## 五、核心工作流程
### 5.1 RAG + Agent 协同工作流程
```text
用户提问 → Agent分析 → 判断是否需要工具 → 调用工具 → 获取结果 → 生成回答
     ↓              ↓                    ↓
  "文档中关于数据库的规约？"            retrieve_document
                                          ↓
                                   向量数据库检索
                                          ↓
                                   返回相关文档片段
                                          ↓
                                   LLM生成最终回答
```

### 5.2 Agent 工具选择决策逻辑
| 用户问题类型 | 触发工具 | 判断依据 |
| --- | --- | --- |
| 涉及文档内容 | `retrieve_document` | 问题涉及知识库中的信息 |
| 数学表达式 | `calculate` | 包含数字和运算符 |
| 天气查询 | `get_weather` | 包含"天气"关键词 + 城市名 |
| 时间查询 | `get_current_time` | 包含"时间"、"几点"等关键词 |
| 提醒设置 | `set_reminder` | 包含"提醒"、"闹钟"等关键词 |
| 其他问题 | 直接回答 | 不需要调用工具 |


### 5.3 性能优化策略

| 优化方向 | 实现方案 |
| --- | --- |
| 向量库缓存 | 复用已加载的向量数据库，避免重复加载 |
| 检索结果缓存 | 对相同查询进行缓存，减少向量检索次数 |
| 流式输出 | 使用 `astream` 方法实现流式响应 |
| 并行工具调用 | 同时调用多个独立工具，提升响应效率 |


### 5.4 总结
通过将 RAG 的检索能力与 Agent 的决策能力相结合，系统能够提供更准确、更有依据的回答，适用于企业知识库问答、智能客服等多种场景。

