---
title: 「学习笔记」大模型嵌入模型（Embedding Models）
date: 2026-01-28 10:30:00
tags: [AI大模型, 学习笔记, 嵌入模型]
categories: [AI大模型]
series: AI大模型
toc: true
math: true
---


## 一、什么是嵌入模型

**嵌入模型（Embedding Model）** 是一种将非结构化数据（文本、图像、音频等）转换为**高维向量**的机器学习模型。这些向量能够捕捉数据的**语义信息**，使得相似的内容在向量空间中距离更近。

### 1.1 核心概念

| 概念 | 说明 |
| --- | --- |
| **嵌入（Embedding）** | 将离散符号（如单词、图像）映射到连续向量空间的过程 |
| **向量空间（Vector Space）** | 嵌入向量所在的高维空间，维度通常为 768、1024、1536 等 |
| **语义相似性（Semantic Similarity）** | 通过向量距离衡量数据语义相近程度 |
| **上下文理解（Context Understanding）** | 模型理解词语在不同语境下的含义 |

### 1.2 嵌入模型的作用

```text
文本 "猫很可爱" ──→ [0.12, 0.34, -0.56, ...] ──→ 向量
文本 "猫咪很萌" ──→ [0.11, 0.35, -0.54, ...] ──→ 向量（与上者距离很近）
```

嵌入模型是以下应用的基础：
- **语义搜索**：根据语义相似度检索文档
- **推荐系统**：找到相似的商品或内容
- **RAG（检索增强生成）**：为LLM提供外部知识
- **聚类分析**：自动分组相似的数据


## 二、主流嵌入模型

### 2.1 模型分类

| 类型 | 代表模型 | 特点 |
| --- | --- | --- |
| **通用文本嵌入** | BERT、Sentence-BERT、OpenAI Embedding | 适用于大多数文本任务 |
| **多语言嵌入** | XLM-RoBERTa、mBERT | 支持多种语言 |
| **长文本嵌入** | Longformer、LED | 处理超长文本（10K+ tokens） |
| **多模态嵌入** | CLIP、ALBEF | 同时处理文本和图像 |

### 2.2 常用模型对比

| 模型 | 维度 | 适用场景 | 特点 |
| --- | --- | --- | --- |
| **text-embedding-3-small** | 1536 | 通用场景，平衡性能与速度 | OpenAI最新模型 |
| **text-embedding-3-large** | 3072 | 需要高精度的场景 | 更高维度，更好性能 |
| **all-MiniLM-L6-v2** | 384 | 轻量级，快速推理 | Sentence-BERT系列 |
| **all-mpnet-base-v2** | 768 | 平衡效果与效率 | 常用开源选择 |
| **bge-large-en** | 1024 | 中文优化，效果优异 | 中文场景首选 |


## 三、嵌入模型工作原理

### 3.1 从词嵌入到句嵌入

**词嵌入（Word Embedding）**：
- 将单个词语转换为向量
- 经典模型：Word2Vec、GloVe
- 局限：无法处理多义词和上下文

**句嵌入（Sentence Embedding）**：
- 将整个句子/段落转换为向量
- 方法1：取BERT [CLS] token的输出
- 方法2：对所有token向量进行池化（mean/max）

### 3.2 Sentence-BERT的创新

传统BERT用于句子嵌入的问题：
- BERT是为分类任务设计的
- 直接使用[CLS] token效果不佳

Sentence-BERT的解决方案：
```python
# 训练目标：对比学习
# 输入：anchor句、positive句（相似）、negative句（不相似）
# 目标：让anchor与positive距离近，与negative距离远

from sentence_transformers import SentenceTransformer, InputExample, losses
from torch.utils.data import DataLoader

model = SentenceTransformer('all-MiniLM-L6-v2')

# 构建训练数据
train_examples = [
    InputExample(texts=["猫很可爱", "猫咪很萌"], label=1.0),  # 相似
    InputExample(texts=["猫很可爱", "狗很忠诚"], label=0.0),  # 不相似
]

# 使用对比损失训练
train_dataloader = DataLoader(train_examples, shuffle=True, batch_size=8)
train_loss = losses.CosineSimilarityLoss(model)

# 微调模型
model.fit(
    train_objectives=[(train_dataloader, train_loss)],
    epochs=1,
    warmup_steps=100
)
```

### 3.3 向量相似度计算

常用的相似度度量方法：

| 方法 | 公式 | 适用场景 |
| --- | --- | --- |
| **余弦相似度** | \( \cos(\theta) = \frac{A \cdot B}{\|A\| \|B\|} \) | 文本语义匹配 |
| **欧氏距离** | \( d = \sqrt{\sum (a_i - b_i)^2} \) | 图像检索 |
| **内积相似度** | \( A \cdot B = \sum a_i b_i \) | 推荐系统 |

**选择建议**：
- 文本语义匹配：优先使用 **余弦相似度**
- 需要考虑向量长度：使用 **内积相似度**（需归一化）
- 高维数据：余弦相似度更稳定


## 四、实战：使用嵌入模型

### 4.1 使用 OpenAI Embedding

```python
from openai import OpenAI

client = OpenAI(api_key="your-api-key")

# 获取文本嵌入
response = client.embeddings.create(
    input="猫很可爱",
    model="text-embedding-3-small"
)

embedding = response.data[0].embedding
print(f"嵌入向量维度: {len(embedding)}")  # 输出: 1536
```

### 4.2 使用开源模型（Sentence-BERT）

```python
from sentence_transformers import SentenceTransformer

# 加载预训练模型
model = SentenceTransformer('all-MiniLM-L6-v2')

# 生成嵌入
sentences = ["猫很可爱", "猫咪很萌", "狗很忠诚"]
embeddings = model.encode(sentences)

print(f"句子数量: {len(embeddings)}")
print(f"向量维度: {len(embeddings[0])}")  # 输出: 384
```

### 4.3 计算相似度

```python
from sentence_transformers import util

# 计算余弦相似度
similarity = util.cos_sim(embeddings[0], embeddings[1])
print(f"相似度: {similarity.item():.4f}")  # 输出: ~0.9
```

### 4.4 中文嵌入模型

```python
# 使用BGE中文模型
model = SentenceTransformer('BAAI/bge-large-zh-v1.5')

sentences = ["人工智能很强大", "机器学习改变世界"]
embeddings = model.encode(sentences)

# 计算相似度
similarity = util.cos_sim(embeddings[0], embeddings[1])
print(f"相似度: {similarity.item():.4f}")
```


## 五、嵌入模型在RAG中的应用

### 5.1 RAG中的嵌入流程

```text
1. 文档加载 → 2. 文档分割 → 3. 生成嵌入 → 4. 存储向量
                        ↓ 
用户提问 → 生成查询嵌入 → 向量检索 → 生成回答
```

### 5.2 代码示例：构建简单RAG

```python
from sentence_transformers import SentenceTransformer, util
import numpy as np

# 1. 准备知识库
documents = [
    "Milvus是一个开源向量数据库",
    "向量数据库用于存储和检索高维向量",
    "RAG是检索增强生成技术"
]

# 2. 加载嵌入模型
model = SentenceTransformer('all-MiniLM-L6-v2')

# 3. 生成文档嵌入
doc_embeddings = model.encode(documents)

# 4. 用户提问
query = "什么是向量数据库？"
query_embedding = model.encode(query)

# 5. 检索相似文档
similarities = util.cos_sim(query_embedding, doc_embeddings)[0]
top_k = 2
top_indices = np.argsort(-similarities.numpy())[:top_k]

# 6. 输出结果
print(f"查询: {query}")
print("最相关的文档:")
for idx in top_indices:
    print(f"- {documents[idx]} (相似度: {similarities[idx]:.4f})")
```

### 5.3 输出示例

```bash
查询: 什么是向量数据库？
最相关的文档:
- Milvus是一个开源向量数据库 (相似度: 0.7890)
- 向量数据库用于存储和检索高维向量 (相似度: 0.7562)
```


## 六、最佳实践与注意事项

### 6.1 模型选择指南

| 场景 | 推荐模型 | 理由 |
| --- | --- | --- |
| **快速原型** | all-MiniLM-L6-v2 | 轻量快速，效果不错 |
| **中文场景** | bge-large-zh-v1.5 | 专为中文优化 |
| **生产环境** | text-embedding-3-small | 平衡性能与效果 |
| **高精度需求** | text-embedding-3-large | 最佳效果 |

### 6.2 性能优化技巧

1. **选择合适的维度**：
   - 低维度（384）：速度快，内存占用小
   - 高维度（1536+）：效果更好，但资源消耗大

2. **批量处理**：
   ```python
   # 批量处理提高效率
   sentences = ["句子1", "句子2", "句子3", ...]
   embeddings = model.encode(sentences, batch_size=32)
   ```

3. **缓存嵌入结果**：
   - 将生成的嵌入向量持久化存储
   - 避免重复计算

### 6.3 常见问题

**Q1：嵌入模型会产生幻觉吗？**
- 嵌入模型本身不会产生幻觉
- 但基于嵌入检索的RAG系统可能因为检索错误导致幻觉

**Q2：如何选择嵌入维度？**
- 小规模数据集：512维足够
- 大规模知识库：1024-1536维效果更好

**Q3：是否需要微调嵌入模型？**
- 通用场景：预训练模型足够
- 特定领域（如法律、医疗）：建议使用领域数据微调


## 七、总结

嵌入模型是连接非结构化数据与向量数据库的桥梁，是构建RAG系统、语义搜索、推荐系统的核心技术。选择合适的嵌入模型需要权衡效果、速度和资源消耗，在实际应用中应根据具体场景进行选择和优化。

**关键要点：**
1. 嵌入模型将文本转换为语义向量
2. Sentence-BERT是最常用的开源句嵌入模型
3. 余弦相似度是文本匹配的首选度量方法
4. 嵌入质量直接影响RAG系统的检索效果