---
title: 「工程实践」LangChain 入门与实战
date: 2026-03-09 18:30:15
tags: [AI大模型, LangChain, 工程实践]
categories: [AI大模型]
series: AI大模型
toc: true
math: true
---

LangChain 是一个开源的大语言模型（LLM）应用开发框架，由 Harrison Chase 于2022年底推出。它的核心价值在于将大模型从单纯的文本生成能力，转化为可落地的工程化应用。你可以将其理解为一套“AI应用开发积木”——通过提供标准化的组件和灵活的编排能力，让开发者无需从零编写底层逻辑，就能快速构建智能问答、数据分析助手、自动化工作流等复杂应用。

## 一、LangChain 的核心架构

### 1.1 核心组件

LangChain 的功能围绕六大核心模块展开，每个模块各司其职又相互配合：

| 模块 | 核心职责 | 关键能力 |
| --- | --- | --- |
| **Models（模型层）** | 统一模型接口 | 屏蔽不同厂商 API 差异，支持云端模型（OpenAI、通义千问等）和本地开源模型（Llama 等），一行代码切换底层模型 |
| **Prompts（提示词工程层）** | 标准化提示词管理 | 模板化动态插入变量、少样本提示、输出解析器（强制 JSON 等格式） |
| **Memory（记忆层）** | 对话上下文存储 | 完整保存历史、自动总结节省 Token、向量形式长期记忆，支持持久化到数据库或文件 |
| **Chains（链层）** | 工作流编排 | 将多个步骤串联，如“文档检索 → 大模型回答”组成 RAG 核心链 |
| **Data Connection（数据连接层）** | 外部数据接入 | 文档加载器（PDF、网页等）、文本分割、向量化、向量数据库对接，是 RAG 的基础 |
| **Agents（智能体层）** | 自主决策与工具调用 | 思考任务目标、规划调用顺序、自动调用外部工具（搜索、计算器、API 等） |

### 1.2 典型应用场景

借助这些组件，LangChain 可快速构建以下应用：

- **智能问答系统**：结合 RAG 技术，让 AI 基于私有文档或知识库精准回答问题
- **多轮对话机器人**：利用 Memory 模块实现流畅的上下文感知对话
- **自动化工作流**：自动执行翻译、总结、改写等多步骤任务，或生成报告、社交媒体内容
- **数据分析助手**：将自然语言转换为 SQL 查询，辅助数据洞察与决策
- **代码辅助工具**：AI 辅助编程、代码解释与自动生成

### 1.3 LCEL（LangChain Expression Language）

LCEL 是 LangChain 的核心特性，通过管道符 `|` 实现组件的优雅组合：

```python
# 示例：提示词 → 模型 → 输出解析器
chain = prompt | llm | output_parser
```

这种声明式语法让代码简洁易读，便于维护和扩展，是 LangChain 的标志性设计。


## 二、入门示例

本文使用阿里云百炼平台的 DeepSeek 模型进行演示。**获取 API Key**：

1. 访问 [阿里云百炼控制台 - DeepSeek-V4-Pro](https://bailian.console.aliyun.com/cn-beijing/?tab=model#/model-market/detail/deepseek-v4-pro?serviceSite=asia-pacific-china)
2. 注册账号并开通服务
3. 在「API-KEY 管理」中创建 API Key

### 2.1 项目初始化

创建 `.env` 文件配置 API Key：

```text
OPENAI_API_KEY=your-dashscope-api-key
OPENAI_BASE_URL=https://dashscope.aliyuncs.com/compatible-mode/v1
```

创建 `pyproject.toml` 文件（遵循 PEP 621 标准）：

```toml
[build-system]
requires = ["setuptools>=61.0", "wheel"]
build-backend = "setuptools.build_meta"

[project]
name = "langchain-demo"
version = "0.1.0"
description = "LangChain Core Knowledge and Practice"
requires-python = ">=3.10"
dependencies = [
    "openai>=0.1.0",
    "langchain>=0.1.0",
    "langchain-openai>=0.1.0",
    "python-dotenv>=1.0.0",
    "pydantic-settings>=2.0",
]

[tool.pytest.ini_options]
testpaths = ["tests"]
pythonpath = ["src"]

[tool.ruff]
line-length = 120
```

安装依赖：

```powershell
# 使用 uv 安装依赖（推荐，更快更可靠）
uv sync

# 或使用 pip（需在项目根目录运行）
pip install -e .
```

### 2.2 原生方式调用 LLM

创建 `test01.py`，使用原生 OpenAI SDK 调用 DeepSeek：

```python
import os
from dotenv import load_dotenv
from openai import OpenAI

load_dotenv()  # 从 .env 文件加载 API Key

client = OpenAI(
    api_key=os.getenv("OPENAI_API_KEY"),
    base_url="https://dashscope.aliyuncs.com/compatible-mode/v1",
)

completion = client.chat.completions.create(
    model="deepseek-v4-pro",
    messages=[{"role": "user", "content": "你是谁"}]
)

print(completion.model_dump_json())
```

运行 `python test01.py`，返回完整的 API 响应（包含元数据和 Token 统计）:
```text
{"id":"chatcmpl-d8b7bf2c-f581-923d-89c7-104b7c1316e4","choices":[{"finish_reason":"stop","index":0,"logprobs":null,"message":{"content":"你好！我是 DeepSeek，由深度求索公司创造的 AI 助手。😊\n\n我是一个纯文本模型，可以帮你解答问题、处理信息、进行对话。虽然我不支持多模态识别（比如直接识别图片内容），但我可以通过文件上传功能读取图像、txt、pdf、ppt、word、excel 等文件中的文字信息来帮助你。\n\n我的一些特点：\n- **免费使用**，无需付费\n- **上下文长度 1M**，可以一次性处理像《三体》三部曲那么大体量的内容\n- 支持**联网搜索**（需要手动开启）\n- **知识截止日期**到 2025 年 5 月\n- App 端支持**语音输入** 功能\n\n有什么我可以帮你的吗？无论是学习、工作还是日常问题，我都很乐意帮忙！🌟","refusal":null,"role":"assistant","annotations":null,"audio":null,"function_call":null,"tool_calls":null}}],"created":1780278674,"model":"deepseek-v4-pro","object":"chat.completion","service_tier":null,"system_fingerprint":null,"usage":{"completion_tokens":173,"prompt_tokens":5,"total_tokens":178,"completion_tokens_details":null,"prompt_tokens_details":{"audio_tokens":null,"cached_tokens":0}}}
```

### 2.3 LangChain 调用 LLM

创建 `test02.py`，使用 LangChain 简化调用：

```python
import os
import sys
from dotenv import load_dotenv
from langchain_openai import ChatOpenAI

sys.stdout.reconfigure(encoding='utf-8')

load_dotenv()

llm = ChatOpenAI(
    model_name="deepseek-v4-pro"
)

response = llm.invoke("你是谁")
print(response.content)
```

运行 `python test02.py`，输出更简洁：

```text
你好！我是 DeepSeek，由深度求索公司创造的 AI 助手。😊

我是一个纯文本模型，可以帮你解答各种问题、提供信息、进行对话交流等等。
我的特点包括：完全免费使用、上下文长度 1M、支持联网搜索、支持语音输入（App 端）。
知识截止到 2025 年 5 月。

有什么我可以帮你的吗？无论是学习、工作还是日常问题，尽管问我！🌟
```

**流式输出示例**：

```python
llm = ChatOpenAI(
    model_name="deepseek-v4-pro",
    streaming=True,
)
for chunk in llm.stream("你是谁"):
    print(chunk.content, end="", flush=True)
```

## 三、场景实战

### 3.1 Function Call（工具函数调用）

让 AI 能够调用外部工具（如查天气、查数据库、调用 API），创建 `test03.py`：

```python
import os
from dotenv import load_dotenv
from langchain_core.tools import tool
from langchain_openai import ChatOpenAI

load_dotenv()

# 1. 定义工具函数
@tool
def get_weather(city: str) -> str:
    """获取指定城市的天气"""
    return f"{city} 25℃ 晴"

# 2. 绑定工具函数到 LLM
llm = ChatOpenAI(model_name="deepseek-v4-pro")
llm_with_tools = llm.bind_tools([get_weather])

# 3. 调用并处理工具调用
response = llm_with_tools.invoke("深圳今天天气怎么样？")
if response.tool_calls:
    for tool_call in response.tool_calls:
        print(f"需要调用工具：{tool_call['name']}")
        print(f"参数：{tool_call['args']}")
        if tool_call['name'] == "get_weather":
            result = get_weather.invoke(tool_call['args'])
            print(f"工具返回结果：{result}")
            final_response = llm.invoke(f"总结：{result}")
            print(f"最终回复：{final_response.content}")
```

**运行结果**：
```text
需要调用工具：get_weather
参数：{'city': '深圳'}
工具返回结果：深圳 25℃ 晴
最终回复：根据您提供的信息，深圳当前天气晴朗，气温25℃。
```

### 3.2 Memory（对话记忆）

让 AI 记住历史对话内容，实现上下文感知的多轮对话，创建 `test04.py`：

```python
import os
from dotenv import load_dotenv
from langchain_openai import ChatOpenAI
from langchain_core.chat_history import InMemoryChatMessageHistory
from langchain_core.prompts import ChatPromptTemplate, MessagesPlaceholder

load_dotenv()

llm = ChatOpenAI(model_name="deepseek-v4-pro")
history = InMemoryChatMessageHistory()

prompt = ChatPromptTemplate.from_messages([
    ("system", "你是一个有帮助的助手。"),
    MessagesPlaceholder(variable_name="history"),
    ("human", "{input}")
])

chain = prompt | llm

def chat(input_text: str) -> str:
    response = chain.invoke({
        "history": history.messages,
        "input": input_text
    })
    history.add_user_message(input_text)
    history.add_ai_message(response.content)
    return response.content

# 多轮对话
chat("你好，我叫小明")
chat("我叫什么名字？")  # AI 会记住"小明"

# 打印交互过程
print("完整对话历史:")
for i, message in enumerate(history.messages, 1):
    role = "用户" if message.type == "human" else "AI"
    print(f"{i}. [{role}]: {message.content}")
```

**运行结果**：
```text
完整对话历史:
1. [用户]: 你好，我叫小明
2. [AI]: 你好呀，小明！很高兴认识你～有什么我可以帮你的吗？😊
3. [用户]: 我叫什么名字？
4. [AI]: 你刚才告诉我啦，你叫**小明**～ 😄 放心，我记着呢！还有什么想聊的吗？
```

### 3.3 Prompts（提示词模板）

动态生成提示词，避免重复编写相似的提示文本，创建 `test05.py`：

```python
from dotenv import load_dotenv
from langchain_openai import ChatOpenAI
from langchain_core.prompts import PromptTemplate

load_dotenv()

template = PromptTemplate.from_template("给我讲个关于{subject}的一句话笑话")
print("===Template===")
print(template)

llm = ChatOpenAI(model_name="deepseek-v4-pro")
ret = llm.invoke(template.format(subject='兔子'))
print("===打印输出===")
print(ret.content)
```

**运行结果**：
```text
===Template===
input_variables=['subject'] input_types={} partial_variables={} template='给我讲个关于{subject}的一句话笑话'
===打印输出===
“兔子红着眼睛对胡萝卜说：我可不是为你哭的，是昨晚熬夜打游戏熬的！”
```

`ChatPromptTemplate` 实现了标准的 Runnable 接口，可以通过链来完成调用：

```python
from dotenv import load_dotenv
from langchain_openai import ChatOpenAI
from langchain_core.output_parsers import StrOutputParser
from langchain_core.prompts import ChatPromptTemplate

load_dotenv()

prompt_template = ChatPromptTemplate([
    ("system", "translate the following into {language}."),
    ("user", "{text}")
])

llm = ChatOpenAI(model_name="deepseek-v4-pro")
parser = StrOutputParser()

chain = prompt_template | llm | parser

for token in chain.stream({
    "language": "English",
    "text": "你好，现在是几点？"
}):
    print(token, end="", flush=True)
```

**运行结果**：
```text
Hello, what time is it now?
```

### 3.4 结构化输出

让 LLM 返回结构化数据（而非自由文本），便于程序处理，创建 `test07.py`：

```python
from dotenv import load_dotenv
from langchain_openai import ChatOpenAI
from pydantic import BaseModel, Field
from typing import List
from langchain_core.prompts import ChatPromptTemplate
from langchain_core.output_parsers import PydanticOutputParser

load_dotenv()

llm = ChatOpenAI(model_name="deepseek-v4-pro", temperature=0)

# 定义数据模型
class ProductInfo(BaseModel):
    """商品信息"""
    name: str = Field(description="商品名称")
    price: float = Field(description="价格")
    category: str = Field(description="分类")
    features: List[str] = Field(description="特点列表")

# 创建解析器
parser = PydanticOutputParser(pydantic_object=ProductInfo)

# 构建 Prompt
prompt = ChatPromptTemplate.from_template("""
    {format_instructions}
    请分析以下产品：{product}
""")

chain = prompt | llm | parser

# 执行
result = chain.invoke({
    "product": "iPhone 17",
    "format_instructions": parser.get_format_instructions()
})

print(result)
print(result.price)  # 7999.0
```

**运行结果**：
```text
name='iPhone 17' price=7999.0 category='智能手机' features=['A19芯片', '6.7英寸 OLED 屏幕', ...]
7999.0
```

## 四、LangSmith 可观测性平台

LangSmith 是 LangChain 官方的可观测性平台，专为调试和监控 LLM 应用而设计。当 Agent 在后台运行时，其内部执行过程是一个"黑盒"——你无法直接看到调用了哪些模型、执行了哪些工具、每一步消耗了多少 Token。LangSmith 通过提供完整的追踪和监控能力，帮助开发者打开这个黑盒。

### 4.1 核心功能

| 功能 | 说明 |
| --- | --- |
| 执行追踪 | 记录 Agent 每一步的执行轨迹，支持可视化查看 |
| 性能监控 | 统计每次调用的耗时和 Token 消耗，便于成本优化 |
| 调试回放 | 查看历史执行的详细信息，支持断点调试 |
| 评估测试 | 创建测试集评估 Agent 表现，支持自动化测试 |

### 4.2 快速开始

首先安装 LangSmith：

```powershell
pip install langsmith
```

在 [smith.langchain.com](https://smith.langchain.com/) 注册账号，获取 API Key，然后在 `.env` 中配置：

```text
# .env 文件
LANGCHAIN_TRACING_V2=true
LANGCHAIN_API_KEY=lsv2_pt_your_key_here
LANGCHAIN_PROJECT=my-agent-project
```

### 4.3 查看追踪记录

执行任意示例代码后，在 LangSmith 控制台中可以查看完整的执行轨迹：

- **执行时间线**：模型调用 → 工具调用 → 结果汇总的完整流程
- **输入/输出**：每一步的输入消息和模型返回结果
- **Token 用量**：每次模型调用的 Token 消耗和费用估算
- **延迟分析**：各步骤的耗时分布，便于性能优化
- **错误信息**：完整的错误堆栈，便于快速定位问题

### 4.4 常用配置

| 环境变量 | 说明 | 示例 |
| --- | --- | --- |
| `LANGCHAIN_TRACING_V2` | 启用追踪（必须设为 true） | `true` |
| `LANGCHAIN_API_KEY` | LangSmith API Key | `lsv2_pt_xxx` |
| `LANGCHAIN_PROJECT` | 项目名称（用于分组追踪数据） | `my-agent` |
| `LANGCHAIN_ENDPOINT` | API 端点（默认即可） | `https://api.smith.langchain.com` |

> **最佳实践**：生产环境建议降低追踪采样率（避免记录所有请求导致成本过高），仅在需要调试时开启完整追踪。LangSmith 支持通过环境变量配置采样策略。
