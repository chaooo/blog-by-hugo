---
title: 「学习笔记」Milvus 向量数据库入门
date: 2026-01-06 15:30:12
tags: [AI大模型, 学习笔记]
categories: [AI大模型]
series: AI大模型
toc: true
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
    *   一条完整的数据记录，**字段（Field）** 包含主键、向量和其关联的标量数据。
    *   例如：`{id: 1, vector: [0.1, 0.2, ..., 0.8], book_name: "深入理解Milvus", price: 99}`
5. **向量 (Vector)**：
    *   一组描述非结构化数据特征的**数值数组**（例如，由 OpenAI Embedding 模型生成的 1536 维数组）。
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
- 数据写入 (Ingestion) 流程

![](20251202174921.png)

- 数据查询 (Query) 流程

![](20251202175243.png)


## 3. 本地部署 Milvus Lite
- 部署与选型：从`Lite`快速验证想法，再平滑升级到`Standalone`/`Distributed`，代码无需重写。

| 部署模式       | 数据规模      | 特点                              | 适用场景               |
|--------------------|-------------------|---------------------------------------|----------------------------|
| Milvus Lite    | ≤百万级向量       | Python库形式，无需运维                | Jupyter原型开发 |
| Standalone     | ≤1亿向量          | 单机Docker部署，HA支持                | 中小规模生产环境 |
| Distributed    | 百亿级向量        | K8s集群部署，分片与负载均衡           | 大规模高并发场景 |

1. 用`Conda`为`Milvus`项目创建独立的环境 (Python)
   - `Conda`是一个强大的命令行工具，通过**环境隔离**和**依赖管理**彻底解决了多项目开发的版本冲突问题，已成为数据科学领域的标准工具，可在 Windows、macOS 和 Linux 上运行。
   ```bash
   conda create -n milvus_lite_env python=3.13
   conda activate milvus_lite_env
   ```

2. 安装`Milvus Lite`
   - `Milvus Lite`可以通过`Python`的包管理工具`pip`直接安装。
   ```bash
   pip install milvus
   pip install pymilvus
   ```
   - 验证安装：
   ```bash
   python -c "import pymilvus; print('pymilvus version:', pymilvus.__version__)"
   ```

3. 测试`Milvus Lite`
   - 安装完成后，创建一个简单的`test_milvus.py`脚本来测试`Milvus Lite`是否正常工作。
```python
from milvus import default_server
from pymilvus import connections, Collection, utility

# 1. 启动 Milvus Lite 服务器
print("Starting Milvus Lite server...")
default_server.start()

# 2. 连接到服务器
try:
    connections.connect(alias="default", host="127.0.0.1", port=default_server.listen_port)
    print(f"Connected to Milvus. Port: {default_server.listen_port}")

    # 3. 检查服务器状态
    print(f"Server is running: {utility.get_server_version()}")

    # 4. 创建一个简单的集合（这里只是一个示例，实际使用需要定义Schema）
    # 注意：以下代码仅为演示连接成功，创建复杂Schema需要更多步骤。
    if utility.has_collection("hello_milvus"):
        utility.drop_collection("hello_milvus")
        print("Dropped existing 'hello_milvus' collection.")

    # 在实际应用中，您需要在这里定义 fields, schema 等。
    # 此处仅用 has_collection 和 drop_collection 来演示与服务器的交互是成功的。

    print("Milvus Lite is working correctly!")

except Exception as e:
    print(f"Error: {e}")

finally:
    # 5. 停止服务器 (重要!)
    print("Stopping Milvus Lite server...")
    default_server.stop()
    print("Server stopped.")
```
在激活的`milvus_lite_env`环境中运行这个脚本：
```bash
python test_milvus.py
```
预期输出：
```bash
Starting Milvus Lite server...
Connected to Milvus. Port: 19530
Server is running: v2.2.16-lite
Milvus Lite is working correctly!
Stopping Milvus Lite server...
Server stopped.
```


## 4. 快速上手：Hello Milvus (Python)
创建第一个向量搜索应用：一个简单的“电影搜索”Demo。根据电影简介的 Embedding 向量，找到相似的电影。
- 创建`demo_movies.py`文件：

```python
from milvus import default_server
from pymilvus import connections, Collection, CollectionSchema, FieldSchema, DataType, utility
import random

# 设置基础目录和端口
default_server.set_base_dir('./milvus_data')  # 指定数据存储目录
default_server.cleanup()  # 清理之前的运行状态

# 启动 Milvus Lite 服务器
print("Starting Milvus Lite server...")
default_server.start()

# 连接到服务器
try:
    connections.connect(alias="default", host="127.0.0.1", port=default_server.listen_port)
    print(f"Connected to Milvus. Port: {default_server.listen_port}")
    # 检查服务器状态
    print(f"Server is running: {utility.get_server_version()}")

    # 1. 定义 Schema
    # 我们创建三个字段：电影ID（主键）、电影名称（标量）、电影简介的向量
    fields = [
        FieldSchema(name="movie_id", dtype=DataType.INT64, is_primary=True, auto_id=True),
        FieldSchema(name="title", dtype=DataType.VARCHAR, max_length=200),
        FieldSchema(name="embedding", dtype=DataType.FLOAT_VECTOR, dim=8) # 使用8维向量方便演示
    ]
    schema = CollectionSchema(fields=fields, description="Movie search demo")

    # 2. 创建集合
    collection_name = "demo_movies"
    # 删除已存在的同名集合（如果是第一次运行，可以注释掉这几行）
    if utility.has_collection(collection_name):
        utility.drop_collection(collection_name)
        print(f"Dropped existing collection: {collection_name}")
    # 执行创建
    collection = Collection(name=collection_name, schema=schema)
    print(f"Collection '{collection_name}' created.")

    # 3. 创建索引（在插入数据后创建效率更高，但这里先创建以演示完整流程）
    index_params = {
        "index_type": "AUTOINDEX", # 对于 Milvus Lite，使用 AUTOINDEX 即可
        "metric_type": "L2",       # 使用 L2 距离（欧氏距离）
        "params": {}
    }
    collection.create_index(field_name="embedding", index_params=index_params)
    print("Index on 'embedding' field created.")

    # 4. 插入数据
    movies = [ # 模拟一些电影数据和对应的8维向量
        {"title": "The Matrix", "embedding": [0.1, 0.3, 0.5, 0.2, 0.9, 0.1, 0.6, 0.4]},
        {"title": "Inception", "embedding": [0.2, 0.4, 0.5, 0.3, 0.8, 0.2, 0.5, 0.3]},
        {"title": "The Godfather", "embedding": [0.8, 0.1, 0.1, 0.9, 0.2, 0.8, 0.1, 0.9]},
        {"title": "Pulp Fiction", "embedding": [0.7, 0.2, 0.2, 0.8, 0.3, 0.7, 0.2, 0.8]},
        {"title": "The Dark Knight", "embedding": [0.3, 0.5, 0.6, 0.4, 0.7, 0.3, 0.4, 0.2]},
    ]
    # 准备插入的数据
    titles = [movie["title"] for movie in movies]
    embeddings = [movie["embedding"] for movie in movies]
    # 注意：movie_id 是 auto_id，所以我们不需要提供
    entities = [titles, embeddings]
    # 执行插入
    insert_result = collection.insert(entities)
    print(f"Inserted {len(insert_result.primary_keys)} movies.")

    # 5. 将集合加载到内存（搜索前必须执行此步骤）
    collection.load()
    print("Collection loaded into memory.")

    # 6. 执行向量搜索
    print("\n--- Starting Vector Search ---")
    # 假设我们想找与 "Inception" 相似的电影，使用它的向量作为查询向量
    query_embedding = [0.2, 0.4, 0.5, 0.3, 0.8, 0.2, 0.5, 0.3] # Inception 的向量
    # 定义搜索参数
    search_params = {
        "metric_type": "L2",     # 使用 L2 距离（欧氏距离）
        "params": {"nprobe": 10} # 搜索时探查的聚类数
    }
    # 执行搜索，返回最相似的2部电影
    results = collection.search(
        data=[query_embedding],
        anns_field="embedding",
        param=search_params,
        limit=3,                # 返回前3个结果
        output_fields=["title"] # 指定要返回的标量字段
    )
    # 处理并打印搜索结果
    print(f"Search for movies similar to 'Inception':")
    for i, hits in enumerate(results):
        print(f"Query {i+1} results:")
        for hit in hits:
            print(f"  Title: {hit.entity.get('title')}, Distance: {hit.distance:.4f}")

    # 7. 执行混合搜索（向量搜索 + 标量过滤）
    print("\n--- Starting Hybrid Search (with filter) ---")
    # 假设我们想找相似的电影，但标题中不能包含 "Pulp"
    filter_expression = "title not in [\"Pulp Fiction\"]"
    results_hybrid = collection.search(
        data=[query_embedding],
        anns_field="embedding",
        param=search_params,
        limit=3,
        expr=filter_expression, # 这里添加过滤条件
        output_fields=["title"]
    )
    # 处理并打印搜索结果
    print(f"Hybrid search for movies similar to 'Inception' but not 'Pulp Fiction':")
    for i, hits in enumerate(results_hybrid):
        print(f"Query {i+1} results:")
        for hit in hits:
            print(f"  Title: {hit.entity.get('title')}, Distance: {hit.distance:.4f}")

    # 8. 清理资源
    print("\nCleaning up...")
    collection.release()
    print("Demo finished!")

except Exception as e:
    print(f"Error: {e}")

finally:
    # 停止服务器 (重要!)
    print("Stopping Milvus Lite server...")
    default_server.stop()
    print("Server stopped.")
```

- 运行Demo：`python demo_movies.py`
- 预期输出：
```bash
Starting Milvus Lite server...
Connected to Milvus. Port: 19530
Server is running: v2.2.16-lite
Collection 'demo_movies' created.
Index on 'embedding' field created.
Inserted 5 movies.
Collection loaded into memory.

--- Starting Vector Search ---
Search for movies similar to 'Inception':
Query 1 results:
  Title: Inception, Distance: 0.0000
  Title: The Matrix, Distance: 0.0700
  Title: The Dark Knight, Distance: 0.0800

--- Starting Hybrid Search (with filter) ---
Hybrid search for movies similar to 'Inception' but not 'Pulp Fiction':
Query 1 results:
  Title: Inception, Distance: 0.0000
  Title: The Matrix, Distance: 0.0700
  Title: The Dark Knight, Distance: 0.0800

Cleaning up...
Demo finished!
Stopping Milvus Lite server...
Server stopped.
```

