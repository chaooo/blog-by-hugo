---
title: 「学习笔记」Milvus 向量数据库入门
date: 2025-12-05 15:30:12
tags: [AI大模型, 学习笔记]
categories: [AI大模型]
series: AI大模型
toc: true
draft: true
---


## 1. 基础概念
**Milvus** 是一款开源的、专注于**向量相似度搜索**和**AI应用开发**的数据库。它能够高效地处理由非结构化数据（如图片、音频、文本）转换而来的**嵌入向量**，并通过计算向量间的相似度，实现诸如“以图搜图”、“语义搜索”、“推荐系统”等功能。
1. **集合 (Collection)**：
    *   相当于传统数据库中的**表**，是存储向量的主要单元。
    *   用于存放具有相同结构的向量数据。
2. **分区 (Partition)**：
    *   集合的物理分割，用于数据隔离和优化查询性能。
    *   常见用法：按数据来源或日期分区（如 `partition_2023`, `partition_2024`）。
3. **集合模式 (Schema)**：
    *   集合的结构定义，描述了集合中包含哪些字段及其数据类型。每个 Schema 包含一个或多个字段，其中一个字段必须是主键（`Primary Key`）。
4. **实体 (Entity)**：
    *   **一条完整的数据记录**，包含一个向量和其关联的标量数据。
    *   例如：`{id: 1, vector: [0.1, 0.2, ..., 0.8], book_name: "深入理解Milvus", price: 99}`
5. **向量 (Vector)**：
    *   一组描述非结构化数据特征的数值数组（例如，由 OpenAI Embedding 模型生成的 1536 维数组）。
    *   是 Milvus 存储和操作的核心对象。
6. **标量 (Scalar)**：
    *   传统的结构化数据，如 `ID`, `书名`, `价格` 等。
    *   在 Milvus 中，标量作为**元数据**与向量一起存储，可用于过滤。
7. **索引 (Index)**：
    *   Milvus **性能的核心**。为了加速大规模向量的相似性搜索，必须为向量字段创建专门的索引。
    *   常用索引类型：`IVF_FLAT`, `HNSW`, `DISKANN`等。不同索引在**查询速度**、**准确率**和**资源消耗**上各有权衡。
8. **度量类型 (Metric Type)**：
    *   衡量两个向量相似度的计算方法。
    *   `L2` (欧氏距离)：距离越小越相似。
    *   `IP` (内积)：数值越大越相似。
    *   `COSINE` (余弦相似度)：数值越大越相似（最常用于文本嵌入）。
9. **向量搜索 (Search)**：进行向量相似性搜索。
10. **标量查询 (Query)**：通过标量字段进行精确匹配查询。query 操作用于过滤满足特定条件的记录。
11. **混合搜索 (Hybrid Search)**：结合向量搜索和标量查询，实现更复杂的检索需求。例如，先通过标量字段过滤一部分数据，再在这些数据中进行向量相似性搜索。
12. **加载 (Load)**：将集合加载到内存中，以便进行查询。只有加载后的集合才能执行搜索等操作。
13. **刷新 (Flush)**：将插入的数据持久化到磁盘，并更新索引。


## 2. 工作原理与流程
使用 Milvus 的典型工作流分为 **写入** 和 **查询** 两部分。

### 2.1 数据写入 (Ingestion) 流程
![](20251202174921.png)

### 2.2 数据查询 (Query) 流程
![](20251202175243.png)


## 3. 快速上手：Hello Milvus (Python)
以下是一个使用 `pymilvus` 连接 Milvus、创建集合、插入数据并进行搜索的极简示例。

















### 步骤 1: 安装与连接
```bash
pip install pymilvus
```

```python
from pymilvus import connections, Collection, utility

# 连接到 Milvus 服务器（这里以单机版为例）
connections.connect(alias="default", host='localhost', port='19530')

# 检查服务器状态
print(utility.get_server_version())
```

#### 步骤 2: 创建集合

```python
from pymilvus import FieldSchema, CollectionSchema, DataType, Collection

# 1. 定义字段
fields = [
    FieldSchema(name="id", dtype=DataType.INT64, is_primary=True, auto_id=True),
    FieldSchema(name="book_name", dtype=DataType.VARCHAR, max_length=200),
    FieldSchema(name="feature_vector", dtype=DataType.FLOAT_VECTOR, dim=128) # dim 必须与你生成的向量维度一致
]

# 2. 定义集合Schema
schema = CollectionSchema(fields=fields, description="Book search demo")

# 3. 创建集合
collection_name = "book_collection"
collection = Collection(name=collection_name, schema=schema)
```

#### 步骤 3: 创建索引

```python
# 为向量字段创建索引（以 IVF_FLAT 为例）
index_params = {
    "index_type": "IVF_FLAT",
    "metric_type": "L2",
    "params": {"nlist": 128}  # 聚类中心数，影响搜索精度和速度
}

# 指定为哪个字段创建索引
collection.create_index(field_name="feature_vector", index_params=index_params)

# 将集合加载到内存（搜索前必须步骤）
collection.load()
```

#### 步骤 4: 插入数据

假设我们有一些模拟数据。
```python
import random

# 模拟数据：3本书的名字和对应的随机向量（128维）
data = [
    ["零基础入门Milvus", "Milvus权威指南", "向量数据库实战"],  # book_names
    [[random.random() for _ in range(128)] for _ in range(3)]  # feature_vectors
]

# 准备插入的实体（注意顺序要与Schema定义的字段顺序一致）
entities = [
    data[0],  # book_name 字段的数据
    data[1]   # feature_vector 字段的数据
]

# 插入数据
insert_result = collection.insert(entities)

# 插入后，建议调用flush将数据持久化
collection.flush()
print(insert_result.primary_keys)  # 打印自动生成的ID
```

#### 步骤 5: 搜索向量

```python
# 1. 创建一个随机向量作为查询向量
query_vector = [[random.random() for _ in range(128)]]

# 2. 定义搜索参数
search_params = {"metric_type": "L2", "params": {"nprobe": 10}} # nprobe: 搜索的聚类中心数

# 3. 执行搜索
results = collection.search(
    data=query_vector,
    anns_field="feature_vector", # 在哪个字段上搜索
    param=search_params,
    limit=3, # 返回最相似的3个结果
    output_fields=['book_name'] # 同时返回哪些元数据字段
)

# 4. 解析并打印结果
for hits in results:
    for hit in hits:
        print(f"ID: {hit.id}, 书名: {hit.entity.get('book_name')}, 距离: {hit.distance}")
```






- 部署与选型：从`Lite`快速验证想法，再平滑升级到`Standalone`/`Distributed`，代码无需重写。

| 部署模式       | 数据规模      | 特点                              | 适用场景               |
|--------------------|-------------------|---------------------------------------|----------------------------|
| Milvus Lite    | ≤百万级向量       | Python库形式，无需运维                | Jupyter原型开发 |
| Standalone     | ≤1亿向量          | 单机Docker部署，HA支持                | 中小规模生产环境 |
| Distributed    | 百亿级向量        | K8s集群部署，分片与负载均衡           | 大规模高并发场景 |


### 五、部署方式

1.  **单机版 (Standalone)**：
    *   适用于开发、测试和学习。
    *   使用 Docker Compose 一键部署最简单。
2.  **集群版 (Cluster)**：
    *   适用于生产环境，具备高可用、可扩展性。
    *   通常包含协调节点 (Coordinator Node)、工作节点 (Worker Node)、日志节点 (Log Broker) 和对象存储 (Object Storage) 等多个组件，部署复杂度高。

**对于初学者，强烈建议从 Docker Compose 启动单机版开始。**

### 六、学习建议与资源

1.  **官方文档**：永远是最好的资源。从 [https://milvus.io/docs](https://milvus.io/docs) 开始。
2.  **动手实践**：按照官方文档的示例，自己敲一遍代码，感受每个步骤。
3.  **理解概念**：务必搞懂**集合、分区、索引、度量类型**等核心概念。
4.  **尝试不同索引**：对比 `IVF_FLAT` 和 `HNSW` 索引在速度和精度上的区别。
5.  **探索应用场景**：尝试将其与 LangChain 等框架结合，构建一个简单的 RAG 应用。

希望这份笔记能为你打开 Milvus 世界的大门！








