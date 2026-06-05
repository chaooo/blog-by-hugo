---
title: 「工程实践」LangChain RAG 深度解析与实战
date: 2026-04-15 18:30:15
tags: [AI大模型, LangChain, RAG, 工程实践]
categories: [AI大模型]
series: AI大模型
toc: true
math: true
---

## 一、基础概念
RAG（Retrieval-Augmented Generation，检索增强生成）是一种将**信息检索**与**文本生成**相结合的人工智能技术。通过从外部知识库中检索相关信息，并将其作为上下文（Context）输入给大语言模型（LLM），以增强模型处理知识密集型任务的能力，如智能问答、文本摘要、内容生成等。

其核心流程可概括为：`用户提问 → 检索相关文档 → 将检索结果与问题融合 → 生成最终答案`

### 1.1 RAG 核心步骤
1. **文档加载**：从多种数据源（PDF、Word、网页、数据库等）加载文档
2. **文本分割**：将长文档切分成合适大小的片段（chunk）
3. **文本向量化**：将文本片段转换为向量嵌入（Embedding）
4. **向量存储**：将向量存储到向量数据库中
5. **查询处理**：将用户问题转换为向量
6. **相似度检索**：从向量数据库中检索相关文档片段
7. **生成回答**：将检索到的上下文与问题一起输入大模型生成回答


### 1.2 环境准备
1. 安装 RAG 相关依赖：
    - `langchain-deepseek`：提供 OpenAI Embedding 模型
    - `langchain-chroma`：Chroma 向量数据库的 LangChain 集成
    - `chromadb`：Chroma 向量数据库（轻量级，适合入门）
    ```bash
    pip install langchain-deepseek langchain-chroma chromadb
    ```

2. 创建 `.env` 文件配置 API 密钥：
   ```text
   OPENAI_API_KEY=your-api-key
   OPENAI_BASE_URL=https://dashscope.aliyuncs.com/compatible-mode/v1
   ```

## 二、Document Loader（文档加载器）
LangChain 提供了丰富的文档加载器（Document Loaders），支持从各种数据源加载文档。这些加载器统一返回 `Document` 对象，便于后续处理。

| Loader | 来源 | 安装包 |
| --- | --- | --- |
| TextLoader | .txt 文件 | langchain（内置） |
| PyPDFLoader | PDF 文件 | langchain-community + pypdf |
| WebBaseLoader | 网页 URL | langchain-community + beautifulsoup4 |
| CSVLoader | CSV 文件 | langchain-community |
| UnstructuredMarkdownLoader | Markdown 文件 | langchain-community + unstructured |

```python
# 加载文本文件（内置，无需额外安装）
from langchain_community.document_loaders import TextLoader
loader = TextLoader("knowledge.txt", encoding="utf-8")
documents = loader.load()

# 加载 PDF
# pip install langchain-community pypdf
from langchain_community.document_loaders import PyPDFLoader
loader = PyPDFLoader("document.pdf")
documents = loader.load()
print(f"加载了 {len(documents)} 个文档")

# 加载网页
# pip install langchain-community beautifulsoup4
from langchain_community.document_loaders import WebBaseLoader
loader = WebBaseLoader("https://www.runoob.com/python/python-tutorial.html")
documents = loader.load()
print(f"\n网页内容: {documents[0].page_content[:150]}...")
```


## 三、LangChain RAG 核心组件
### 3.1 Text Splitters（文本分割器）
文本分割是 RAG 中关键的一步，切分策略直接影响 RAG 效果：
```python
from langchain.text_splitter import RecursiveCharacterTextSplitter

# 创建切分器
text_splitter = RecursiveCharacterTextSplitter(
    chunk_size=100,         # 每个chunk(块)最多 100 个字符
    chunk_overlap=20,       # chunk(块)之间重叠 20 个字符
    separators=["\n\n", "\n", "。", "！", "？", "；", "，", " ", ""],# 优先按段落分割，然后是句子，最后是字符
)

# 示例文档
long_text = """RAG（Retrieval-Augmented Generation，检索增强生成）是一种将信息检索与文本生成相结合的人工智能技术。通过从外部知识库中检索相关信息，并将其作为上下文（Context）输入给大语言模型（LLM），以增强模型处理知识密集型任务的能力，如智能问答、文本摘要、内容生成等。
其核心流程可概括为：`用户提问 → 检索相关文档 → 将检索结果与问题融合 → 生成最终答案`
"""

# 切分文档
chunks = text_splitter.split_text(long_text)

print(f"原文长度: {len(long_text)} 字")
print(f"切分后: {len(chunks)} 块\n")
for i, chunk in enumerate(chunks):
    print(f"--- 块 {i+1} ({len(chunk)} 字) ---")
    print(chunk)
    print()
```
**运行结果**：
```text
原文长度: 197 字
切分后: 3 块

--- 块 1 (65 字) ---
RAG（Retrieval-Augmented Generation，检索增强生成）是一种将信息检索与文本生成相结合的人工智能技术

--- 块 2 (83 字) ---
。通过从外部知识库中检索相关信息，并将其作为上下文（Context）输入给大语言模型（LLM），以增强模型处理知识密集型任务的能力，如智能问答、文本摘要、内容生成等。

--- 块 3 (47 字) ---
其核心流程可概括为：`用户提问 → 检索相关文档 → 将检索结果与问题融合 → 生成最终答案`
```
> chunk_overlap 很重要。如果块之间没有重叠，一个完整的句子可能被切成两半，导致检索时遗漏关键信息。50-100 字符的重叠是常见的设置。

切分参数设置建议：

| 场景 | chunk_size | chunk_overlap | 原因 |
| --- | --- | --- | --- |
| FAQ 问答 | 200~500 | 20~50 | 问答对较短，小块即可 |
| 技术文档 | 500~1000 | 50~100 | 技术内容需要更多上下文 |
| 长文章/论文 | 1000~2000 | 100~200 | 需要保留段落完整性 |
| 代码库 | 500~1500 | 0~50 | 函数/类作为自然边界 |


### 3.2 Embeddings（向量化模型）
将文本转换为向量表示：
```python
# 需先安装：pip install dashscope langchain-community
import os
from langchain_community.embeddings import DashScopeEmbeddings
from langchain_chroma import Chroma
from langchain_core.documents import Document

# ==================== 流程1：文档切分（见3.1节） =================
# 将字符串列表（3.1节切分后的chunks）转换为 Document 对象列表
docs = [Document(page_content=chunk) for chunk in chunks]

# ==================== 流程2：向量化与向量存储 ====================
# 初始化阿里云百炼嵌入模型，使用 text-embedding-v4 模型将文本转换为向量表示
embeddings = DashScopeEmbeddings(
    model="text-embedding-v4",                     # 指定使用的嵌入模型名称
    dashscope_api_key=os.getenv("OPENAI_API_KEY"), # 从环境变量获取 API Key
)

# 创建 Chroma 向量数据库并将文档存入（数据保存在本地目录）
vector_db = Chroma.from_documents(
    documents=docs,           # 要存储的文档列表
    embedding=embeddings,     # 使用的嵌入模型，负责将文本转换为向量
    persist_directory="./test_db",  # 数据库持久化目录，数据会保存到该文件夹
)

# 输出索引建立结果，确认文档已成功存入向量数据库
print(f"已建立索引：{len(chunks)} 个文档块")

# ==================== 流程3：相似度检索 ====================
# 使用相似度搜索：该方法会计算查询语句与向量库中所有文档的余弦相似度，并返回最相似的结果
results = vector_db.similarity_search(
    query="RAG 核心流程是什么？",  # 用户查询语句
    k=2                         # 返回的最相似文档数量
)

# 每个结果是一个 Document 对象，包含 page_content（文档内容）和 metadata（元数据）
for doc in results:
    print(f"检索结果: {doc.page_content}")
```
**运行结果**：
```text
已建立索引：3 个文档块
检索结果: 其核心流程可概括为：`用户提问 → 检索相关文档 → 将检索结果与问题融合 → 生成最终答案`
检索结果: RAG（Retrieval-Augmented Generation，检索增强生成）是一种将信息检索与文本生成相结合的人工智能技术
```

### 3.3 Retrievers（检索器）
检索器负责从向量库中查找相关文档：
```python
# 从 vector_db 创建 retriever
retriever = vector_db.as_retriever(
    search_type="similarity",  # 相似度搜索
    search_kwargs={"k": 3},    # 返回前 3 个结果
)

# 使用 retriever
docs = retriever.invoke("RAG的核心流程？")
for doc in docs:
    print(f"检索结果: {doc.page_content[:60]}...")
```
**运行结果**：
```text
检索结果: 其核心流程可概括为：`用户提问 → 检索相关文档 → 将检索结果与问题融合 → 生成最终答案`...
检索结果: RAG（Retrieval-Augmented Generation，检索增强生成）是一种将信息检索与文本生成相结合的人...
检索结果: 。通过从外部知识库中检索相关信息，并将其作为上下文（Context）输入给大语言模型（LLM），以增强模型处理知识密集型...
```


## 四、LangChain RAG 实战

### 4.1 环境准备
```powershell
pip install langchain langchain-openai langchain-chroma python-dotenv pypdf
```

创建 `.env` 文件：
```text
OPENAI_API_KEY=your-api-key
OPENAI_BASE_URL=https://dashscope.aliyuncs.com/compatible-mode/v1
```

### 4.2 完整示例：PDF 文档问答
```python
import os
from dotenv import load_dotenv
from langchain_community.document_loaders import PyPDFLoader
from langchain_text_splitters import RecursiveCharacterTextSplitter
from langchain_community.embeddings import DashScopeEmbeddings
from langchain_chroma import Chroma
from langchain_openai import ChatOpenAI
from langchain_core.prompts import ChatPromptTemplate
from langchain_core.output_parsers import StrOutputParser
from langchain_core.runnables import RunnablePassthrough

# 从指定路径加载PDF文档
def load_pdf_document(file_path: str):
    loader = PyPDFLoader(file_path)
    documents = loader.load()
    print(f"已加载 {len(documents)} 页")
    return documents

# 将文档分割为较小的文本块用于向量化
def split_documents(documents, chunk_size=500, chunk_overlap=50):
    text_splitter = RecursiveCharacterTextSplitter(
        chunk_size=chunk_size,       # 每个文本块的最大字符数（默认: 500）
        chunk_overlap=chunk_overlap, # 相邻文本块的重叠字符数（默认: 50）
        length_function=len,
        add_start_index=True,
    )
    split_docs = text_splitter.split_documents(documents)
    print(f"已分割为 {len(split_docs)} 个文本块")
    # 返回分割后的文档块列表
    return split_docs

# 创建Chroma向量数据库并存储文档向量（数据保存在本地目录）
def create_vector_database(docs, persist_dir="./test_db"):
    # 使用阿里百炼嵌入模型 text-embedding-v4
    embeddings = DashScopeEmbeddings(
        model="text-embedding-v4",
        dashscope_api_key=os.getenv("OPENAI_API_KEY"),
    )
    vector_db = Chroma.from_documents(
        documents=docs,               # 文档列表
        embedding=embeddings,         # 使用的嵌入模型
        persist_directory=persist_dir,# 数据库持久化目录
    )
    print(f"向量数据库创建完成，已索引 {len(docs)} 个文档块")
    # 返回Chroma向量数据库实例
    return vector_db

# 构建带有引用来源的RAG问答链
def build_qa_chain(vector_db):
    # 定义问答链的提示模板，包含系统角色和人类提问部分
    prompt = ChatPromptTemplate.from_messages([
        ("system",
            "你是专业的文档问答助手。请严格根据提供的上下文回答问题。"
            "回答末尾请按格式列出引用来源：【来源: 文件名, 页码: X】"),
        ("human", "上下文:\n{context}\n\n问题: {question}"),
    ])
    # 初始化大语言模型（LLM）实例，使用阿里百炼 deepseek-v4-pro 模型
    llm = ChatOpenAI(model_name="deepseek-v4-pro")
    # 将向量数据库转换为检索器，设置相似度搜索参数
    retriever = vector_db.as_retriever(
        search_type="similarity",
        search_kwargs={"k": 3},
    )
    # 定义一个函数来格式化检索到的文档块，提取来源信息并构建上下文字符串
    def format_docs(docs):
        formatted = []
        for i, doc in enumerate(docs, 1):
            source = doc.metadata.get('source', '未知来源')
            page = doc.metadata.get('page', 'N/A')
            formatted.append(f"【文档{i}】来源: {source}, 页码: {page}\n内容:\n{doc.page_content}")
        return "\n\n".join(formatted)
    # 构建一个可调用的问答链
    qa_chain = (
        {"context": retriever | format_docs, "question": RunnablePassthrough()}
        | prompt
        | llm
        | StrOutputParser()
    )
    print("问答链构建成功")
    # 返回可调用的问答链
    return qa_chain

# RAG工作流程的主入口
def main():
    # 加载环境变量，确保API Key可用
    load_dotenv()
    print("环境变量加载完成")
    pdf_path = "D:/WorkDemo/AI/langchain-demo/data/Java开发手册(黄山版).pdf"
    try:
        # 1. 加载PDF文档
        documents = load_pdf_document(pdf_path)
        # 2. 切分文档为文本块
        split_docs = split_documents(documents)
        # 3. 创建向量数据库并存储文档向量
        vector_db = create_vector_database(split_docs)
        # 4. 构建RAG问答链
        qa_chain = build_qa_chain(vector_db)
        
        print("\n==========================================")
        print("开始问答测试")
        print("==========================================")
        questions = [
            "文档中关于数据库强制规约有哪些？",
            "文档中关于高并发的强制规约有哪些？",
        ]
        for question in questions:
            print(f"\n问题: {question}")
            result = qa_chain.invoke(question)
            print(f"回答:\n{result}")
            print("------------------------------------------")

    except Exception as e:
        print(f"错误: {str(e)}")

# 运行主函数
if __name__ == "__main__":
    main()
```
**运行结果**：
```text
环境变量加载完成
已加载 55 页
已分割为 184 个文本块
向量数据库创建完成，已索引 184 个文档块
问答链构建成功
==========================================
开始问答测试
==========================================
问题: 文档中关于数据库强制规约有哪些？
回答:
根据文档内容，数据库中相关的强制规约如下：
1. 代码中写分页查询逻辑时，若 count 为 0 应直接返回，避免执行后面的分页语句。
2. 不得使用外键与级联，一切外键概念必须在应用层解决。
3. 禁止使用存储过程，存储过程难以调试和扩展，更没有移植性。
4. 数据订正（特别是删除或修改记录操作）时，要先 select，避免出现误删除的情况，确认无误才能执行更新语句。
5. 对于数据库中表记录的查询和变更，只要涉及多个表，都需要在列名前加表的别名（或表名）进行限定。
【来源: Java开发手册(黄山版).pdf, 页码: 36】
------------------------------------------
问题: 文档中关于高并发的强制规约有哪些？
回答:
根据提供的文档内容，关于高并发的强制规约有一条：
**【强制】高并发时，同步调用应该去考量锁的性能损耗。能用无锁数据结构，就不要用锁；能锁区块，就不要锁整个方法体；能用对象锁， 就不要用类锁。**
说明：尽可能使加锁的代码块工作量尽可能的小，避免在锁代码块中调用 RPC 方法。
【来源: Java开发手册(黄山版).pdf, 页码: 17】
------------------------------------------
```


## 五、RAG 与 Agent 结合
RAG Agent 是将 RAG 的检索能力与 Agent 的决策能力相结合的高级应用模式。它让 Agent 能够在需要时自动调用知识库检索，从而提供更准确、更有依据的回答。

### 5.1 完整示例：RAG + Agent 文档问答
```python
import os
from dotenv import load_dotenv
from langchain_community.document_loaders import PyPDFLoader
from langchain_text_splitters import RecursiveCharacterTextSplitter
from langchain_community.embeddings import DashScopeEmbeddings
from langchain_chroma import Chroma
from langchain_openai import ChatOpenAI
from langchain_core.tools import tool
from langchain.agents import create_agent
from langchain.messages import HumanMessage

# 从指定路径加载PDF文档
def load_pdf_document(file_path: str):
    loader = PyPDFLoader(file_path)
    documents = loader.load()
    print(f"已加载 {len(documents)} 页")
    return documents

# 将文档分割为较小的文本块用于向量化
def split_documents(documents, chunk_size=500, chunk_overlap=50):
    text_splitter = RecursiveCharacterTextSplitter(
        chunk_size=chunk_size,
        chunk_overlap=chunk_overlap,
        length_function=len,
        add_start_index=True,
    )
    split_docs = text_splitter.split_documents(documents)
    print(f"已分割为 {len(split_docs)} 个文本块")
    return split_docs

# 创建向量数据库
def create_vector_database(docs, persist_dir="./test_db"):
    embeddings = DashScopeEmbeddings(
        model="text-embedding-v4",
        dashscope_api_key=os.getenv("OPENAI_API_KEY"),
    )
    vector_db = Chroma.from_documents(
        documents=docs,
        embedding=embeddings,
        persist_directory=persist_dir,
    )
    print(f"向量数据库创建完成，已索引 {len(docs)} 个文档块")
    return vector_db

# 构建检索工具
def build_retrieval_tool(vector_db):
    # 创建检索器
    retriever = vector_db.as_retriever(
        search_type="similarity",
        search_kwargs={"k": 3},
    )
    # 格式化检索结果
    def format_docs(docs):
        formatted = []
        for i, doc in enumerate(docs, 1):
            source = doc.metadata.get('source', '未知来源')
            page = doc.metadata.get('page', 'N/A')
            formatted.append(f"【文档{i}】来源: {source}, 页码: {page}\n内容:\n{doc.page_content}")
        return "\n\n".join(formatted)
    # 定义检索工具
    @tool
    def retrieve_document(query: str) -> str:
        """从文档中检索相关信息。
        Args:
            query: 用户的查询问题
        """
        docs = retriever.invoke(query)
        return format_docs(docs)
    # 返回检索工具
    return retrieve_document

# 构建RAG Agent
def build_rag_agent(retrieval_tool):
    # 创建LLM模型
    llm = ChatOpenAI(model_name="deepseek-v4-pro")
    # 创建RAG Agent
    rag_agent = create_agent(
        model=llm,
        tools=[retrieval_tool],
        name="rag_document_expert",
        system_prompt="""你是专业的文档问答助手。请严格根据提供的上下文回答问题。
                         当用户提出问题时，首先使用 retrieve_document 工具从文档中检索相关信息，
                         然后根据检索结果进行回答。回答末尾请按格式列出引用来源：【来源: 文件名, 页码: X】""",
    )
    print("RAG Agent 构建成功")
    # 返回RAG Agent
    return rag_agent

def main():
    load_dotenv()
    print("环境变量加载完成")
    pdf_path = "D:/WorkDemo/AI/langchain-demo/data/Java开发手册(黄山版).pdf"
    try:
        # 加载PDF文档
        documents = load_pdf_document(pdf_path)
        # 分割文档
        split_docs = split_documents(documents)
        # 创建向量数据库
        vector_db = create_vector_database(split_docs)
        # 构建检索工具
        retrieval_tool = build_retrieval_tool(vector_db)
        # 构建RAG Agent
        rag_agent = build_rag_agent(retrieval_tool)
        
        print("\n==========================================")
        print("开始 RAG Agent 问答测试")
        print("==========================================")
        questions = [
            "文档中关于数据库强制规约有哪些？",
            "文档中关于高并发的强制规约有哪些？",
        ]
        for question in questions:
            print(f"\n问题: {question}")
            result = rag_agent.invoke({
                "messages": [HumanMessage(content=question)]
            })
            print(f"回答:\n{result['messages'][-1].content}")
            print("------------------------------------------")
    except Exception as e:
        print(f"错误: {str(e)}")
        import traceback
        traceback.print_exc()
# 主函数入口
if __name__ == "__main__":
    main()
```
**运行结果**：
```text
环境变量加载完成
已加载 55 页
已分割为 184 个文本块
向量数据库创建完成，已索引 184 个文档块
RAG Agent 构建成功
==========================================
开始 RAG Agent 问答测试
==========================================
问题: 文档中关于数据库强制规约有哪些？
回答:
根据《Java开发手册（黄山版）》文档，数据库强制规约主要分为**建表规约**、**索引规约**和**SQL规约**三大部分，具体如下：
---
## 一、建表规约
1. **【强制】表达"是/否"概念的字段**，必须使用 `is_xxx` 的方式命名，数据类型是 `unsigned tinyint`（1 表示是，0 表示否）。POJO 类中的布尔类型变量不要加 is 前缀，需要在 `<resultMap>` 中设置从 `is_xxx` 到 `Xxx` 的映射关系。
2. **【强制】表名、字段名必须使用小写字母或数字**，禁止出现数字开头，禁止两个下划线中间只出现数字。
3. **【强制】表名不使用复数名词。**
4. **【强制】禁用保留字**，如 `desc`、`range`、`match`、`delayed` 等。
5. **【强制】索引命名规范**：主键索引名为 `pk_字段名`；唯一索引名为 `uk_字段名`；普通索引名为 `idx_字段名`。
6. **【强制】小数类型为 `decimal`**，禁止使用 `float` 和 `double`（存在精度损失问题）。
7. **【强制】如果存储的字符串长度几乎相等，使用 `char` 定长字符串类型。**
8. **【强制】`varchar` 长度不要超过 5000**，如果存储长度大于此值，定义字段类型为 `text`，独立出来一张表，用主键来对应，避免影响其它字段索引率。
9. **【强制】表必备三字段**：`id`、`create_time`、`update_time`。其中 `id` 必为主键，类型为 `bigint unsigned`、单表时自增、步长为 1。
10. **【强制】在数据库中不能使用物理删除操作，要使用逻辑删除。**
---
## 二、索引规约
1. **【强制】业务上具有唯一特性的字段，即使是组合字段，也必须建成唯一索引。**
2. **【强制】超过三个表禁止 join**。需要 join 的字段，数据类型保持绝对一致；多表关联查询时，保证被关联的字段需要有索引。
3. **【强制】在 `varchar` 字段上建立索引时，必须指定索引长度**，根据实际文本区分度决定。
4. **【强制】页面搜索严禁左模糊或者全模糊**，如果需要请走搜索引擎来解决。
---
## 三、SQL规约
5. **【强制】分页查询逻辑中，若 count 为 0 应直接返回**，避免执行后面的分页语句。
6. **【强制】不得使用外键与级联**，一切外键概念必须在应用层解决。
7. **【强制】禁止使用存储过程**，存储过程难以调试和扩展，更没有移植性。
8. **【强制】数据订正时（特别是删除或修改记录操作）**，要先 `select`，确认无误后才能执行更新语句，避免误操作。
9. **【强制】涉及多个表的查询和变更**，都需要在列名前加表的别名（或表名）进行限定。
---
【来源: Java开发手册(黄山版).pdf, 页码: 34-37】
------------------------------------------
问题: 文档中关于高并发的强制规约有哪些？
回答:
根据文档检索结果，关于**高并发**的【强制】规约主要有以下几条：
---
### 一、锁的使用规范
**1. 高并发时考量锁的性能损耗**
> 【强制】高并发时，同步调用应该去考量锁的性能损耗。能用无锁数据结构，就不要用锁；能锁区块，就不要锁整个方法体；能用对象锁， 就不要用类锁。
> 说明：尽可能使加锁的代码块工作量尽可能的小，避免在锁代码块中调用 RPC 方法。
**2. 保持一致的加锁顺序，避免死锁**
> 【强制】对多个资源、数据库表、对象同时加锁时，需要保持一致的加锁顺序，否则可能会造成死锁。
**3. 并发修改同一记录需加锁，避免更新丢失**
> 【强制】并发修改同一记录时，避免更新丢失，需要加锁。要么在应用层加锁，要么在缓存加锁，要么在数据库层使用乐观锁，使用 version 作为更新依据。
> 说明：如果每次访问冲突概率小于 20%，推荐使用乐观锁，否则使用悲观锁。乐观锁的重试次数不得小于 3 次。
---
### 二、多线程与线程安全
**4. 定时任务避免使用 Timer**
> 【强制】多线程并行处理定时任务时，Timer 运行多个 TimeTask 时，只要其中之一没有捕获抛出的异常，其它任务便会自动终止运行，使 用 ScheduledExecutorService 则没有这个问题。
**5. 必须回收 ThreadLocal 变量**
> 【强制】必须回收自定义的 ThreadLocal 变量记录的当前线程的值，尤其在线程池场景下，线程经常会被复用，如果不清理自定义的 ThreadLocal 变量，可能会影响后续业务逻辑和造成内存泄露等问题。尽量在代码中使用 try-finally 块进行回收。
---
### 三、远程调用超时
**6. 远程操作必须有超时设置**
> 【强制】调用远程操作必须有超时设置。
> 说明：类似于 HttpClient 的超时设置需要自己明确去设置 Timeout。根据经验表明，无数次的故障都是因为没有设置超时时间。
---
**【来源: Java开发手册(黄山版).pdf, 页码: 17-18, 41】**
------------------------------------------
```

### 5.2 RAG Agent 对比

| 架构模式 | 纯 RAG 链式调用                                                            | RAG + Agent 结合                                                          |
|------|------------------------------------------------------------------|----------------------------------------------------------------------|
| **核心组件** | `RunnableSequence` (链式管道) | `Agent` (智能代理) |
| **检索触发方式** | 固定触发（每次都检索） | Agent 自主决策是否检索 |
| **执行流程** | 用户提问(固定流程) → 检索文档(必须检索) → 拼接上下文(固定格式) → LLM生成(固定prompt) → 返回答案(直接返回) | 用户提问(灵活决策) → Agent分析(自主判断) → [可选]调用工具(按需) → LLM生成(动态prompt) → 返回答案(消息格式) |
| **适用场景** | 简单的文档问答场景，逻辑固定，性能较好 | 需要多工具协作、复杂决策的场景，具备更强的灵活性和扩展性 |


## 总结
RAG 是构建企业级 AI 应用的关键技术，LangChain 为 RAG 提供了完整的工具链支持。通过合理设计文档加载、文本分割、向量化、检索和生成等环节，可以构建出准确、可靠的智能问答系统。结合 Agent 技术，还可以实现更复杂的多工具协作场景。
