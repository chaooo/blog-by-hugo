---
title: 「学习笔记」大模型GraphRAG（知识图谱增强检索）
date: 2026-02-10 19:22:25
tags: [AI大模型, RAG, 学习笔记]
categories: [AI大模型]
series: AI大模型
toc: true
---


## 一、基础概念
**GraphRAG**（Graph Retrieval-Augmented Generation）是将知识图谱与检索增强生成（RAG）融合的技术，通过构建实体与关系的图结构，提升复杂语义任务中的信息检索与生成质量。相比传统 RAG 依赖文本相似性匹配，GraphRAG 能够捕捉结构化关联，支持多跳推理和全局语义理解。

### 1.1 传统RAG核心问题
传统RAG通过向量相似度检索文档片段，但存在两个核心问题：
- **无法理解逻辑关联**：能找到语义相似的内容，但无法理解内容之间的因果、迭代等关系
- **信息孤岛**：无法区分同名不同义的概念（如"苹果公司"和"苹果水果"）

### 1.2 知识图谱

**知识图谱**（Knowledge Graph）是以图结构形式表示现实世界实体、概念及其相互关系的知识库，基本组成单位是（**实体，关系，实体**）三元组，通过节点和边构建语义网络。

### 1.3 技术架构对比

| 架构类型 | 流程 | 特点 |
| --- | --- | --- |
| **传统 RAG** | 文档 → 文本块 → 向量化 → 相似性检索 → LLM 生成 | 语义匹配，无法表达知识关联 |
| **GraphRAG** | 文档 → 实体关系提取 → 知识图谱 → 图查询/推理 → 结构化检索 → LLM 生成 | 关系感知，支持多跳推理 |

### 1.4 工作流程

**GraphRAG 的核心流程：**
1. **知识抽取**：将文档信息转化为"实体-关系-实体"三元组
2. **图谱构建**：存储到图数据库，形成可遍历的知识网络
3. **图结构检索**：用户提问时，沿图谱边遍历获取多跳关系
4. **子图序列化**：将检索到的子图转换成文本格式
5. **增强生成**：结合结构化信息和原始文本生成答案


## 二、GraphRAG 核心架构

### 2.1 三层架构设计

| 层级 | 名称 | 功能 |
| --- | --- | --- |
| 第一层 | 知识图谱构建层 | 将原始非结构化文档（文本、PDF、网页等）转化为结构化知识图谱 |
| 第二层 | 图存储与索引层 | 提供高效、可扩展的图数据存储和多种索引机制 |
| 第三层 | 检索推理与生成层 | 基于知识图谱进行复杂推理，并生成准确、连贯的回答 |

```text
输入文档 → 知识图谱构建层 → 图存储层 → 检索推理层 → LLM 生成层
```

### 2.2 知识抽取与图谱构建

GraphRAG的第一步是**知识抽取**，也就是把非结构化的文本转换成结构化的三元组。

假设有一段文本："iPhone 15采用钛合金中框提升散热效率，相比iPhone 14的铝合金中框有更好的散热表现。"

通过知识抽取，系统会提取出以下三元组：

```text
# 实体-关系-实体
(iPhone 15, 采用, 钛合金中框)
(钛合金中框, 提升, 散热效率)
(iPhone 15, 对比, iPhone 14)
(iPhone 14, 采用, 铝合金中框)

# 实体-属性-值
(钛合金中框, 散热性能, 优秀)
(铝合金中框, 散热性能, 一般)
```

这些三元组会被存储到图数据库（如Neo4j）中，形成一张知识网络。每个实体是一个节点，每个关系是一条边。

### 2.3 图结构检索的优势

| 检索方式 | 特点 | 适用场景 |
| --- | --- | --- |
| **向量检索** | 做"相似度匹配"——把所有文本压缩成数字向量，通过计算向量间的距离判断相关性 | 模糊查询、语义泛化 |
| **图结构检索** | 做"路径查找"——当检索到某个节点后，沿着图谱中的边遍历，找到更多相关信息 | 精准关系推理、多跳查询 |

**对比示例**：

用户问："苹果公司的主要竞争对手有哪些？"

- **传统RAG**：会找到包含"苹果公司"和"竞争对手"关键词的文档片段，可能返回"苹果公司面临激烈竞争"这样的泛泛之谈，或者把华为、三星、小米等竞争对手的信息分散在不同的段落中。

- **GraphRAG**：先找到"苹果公司"这个节点，然后沿着"竞争对手"这条边直接遍历，一次性找到所有相关的竞争对手节点。更重要的是，系统还能继续沿着这些竞争对手节点的"市场份额"、"产品线"等边扩展，获得更丰富的上下文信息。

### 2.4 多跳推理能力

多跳推理是GraphRAG最强大的能力之一。

**医疗场景示例**：

用户问："糖尿病患者能否服用布洛芬？"

传统RAG可能检索到糖尿病的症状说明和布洛芬的药品说明书，但很难建立两者的关联。

GraphRAG会这样工作：

```text
第1跳：从【糖尿病】节点出发
 → 沿着【常见并发症】边找到【肾功能不全】节点

第2跳：从【布洛芬】节点出发
 → 沿着【禁忌症】边找到【肾功能损伤】节点

第3跳：发现两条路径在"肾脏相关风险"概念上产生交集
 → 推理得出结论：糖尿病患者服用布洛芬需要谨慎
```

这就是多跳推理——系统不是直接检索答案，而是沿着知识图谱走了"糖尿病→并发症→肾脏→禁忌症→布洛芬"这样一条推理路径，模拟了人类的思考过程。

### 2.5 消歧能力

当检索到"苹果"这个词时，传统向量检索可能会把水果和科技公司的内容混在一起，因为它们在语义向量空间中的距离可能很近。

但在知识图谱中：
- **【苹果公司】** 节点连接着【科技】、【股票】、【产品】这些边
- **【苹果水果】** 节点连接着【食品】、【营养成分】、【种植】这些边

当用户问"苹果公司的最新财报"时，系统可以根据查询上下文中的"财报"这个关键词，选择连接着【股票】边的【苹果公司】节点，而不会误入【苹果水果】的子图。

这种消歧能力让检索结果更加精准和可靠。


## 三、实战：构建一个 GraphRAG 系统

### 3.1 环境准备

```bash
# 基础库
pip install neo4j py2neo networkx
pip install sentence-transformers spacy
pip install openai langchain
# 图数据库（可选）
# 下载并安装 Neo4j Desktop 或使用云服务
```

### 3.2 完整实现代码

```python
import spacy
from typing import List, Dict, Tuple
import networkx as nx
from sentence_transformers import SentenceTransformer
import openai

class SimpleGraphRAG:
    def __init__(self, llm_api_key):
        self.nlp = spacy.load("en_core_web_sm")
        self.graph = nx.Graph()
        self.embedder = SentenceTransformer('all-MiniLM-L6-v2')
        self.llm_client = openai.OpenAI(api_key=llm_api_key)
        
    def extract_entities_relations(self, text: str) -> Tuple[List[str], List[Tuple]]:
        """使用 spacy 进行基础的实体关系抽取"""
        doc = self.nlp(text)
        
        entities = []
        for ent in doc.ents:
            entities.append({
                'text': ent.text,
                'label': ent.label_,
                'start': ent.start_char,
                'end': ent.end_char
            })
        
        # 简化的关系抽取：基于依存句法
        relations = []
        for token in doc:
            if token.dep_ in ['nsubj', 'dobj', 'attr']:
                relations.append((
                    token.head.text,
                    token.dep_,
                    token.text
                ))
        
        return entities, relations
    
    def build_graph_from_docs(self, documents: List[str]):
        """从文档构建知识图谱"""
        for doc_id, text in enumerate(documents):
            entities, relations = self.extract_entities_relations(text)
            
            # 添加实体节点
            for entity in entities:
                node_id = f"{entity['text']}_{entity['label']}"
                if not self.graph.has_node(node_id):
                    self.graph.add_node(node_id, 
                                      text=entity['text'],
                                      type=entity['label'],
                                      embeddings=self.embedder.encode(entity['text']))
            
            # 添加关系边
            for rel in relations:
                source = f"{rel[0]}_ENTITY"
                target = f"{rel[2]}_ENTITY"
                if self.graph.has_node(source) and self.graph.has_node(target):
                    self.graph.add_edge(source, target, 
                                      relation=rel[1],
                                      doc_id=doc_id)
    
    def graph_retrieval(self, query: str, top_k: int = 3):
        """基于图的检索"""
        # 1. 查询中的实体识别
        query_doc = self.nlp(query)
        query_entities = [ent.text for ent in query_doc.ents]
        
        relevant_nodes = []
        
        # 2. 实体为中心的检索
        for entity in query_entities:
            entity_node = f"{entity}_ENTITY"
            if entity_node in self.graph:
                # 获取一度邻居
                neighbors = list(self.graph.neighbors(entity_node))
                relevant_nodes.extend(neighbors[:top_k])
                
                # 获取关系路径
                for neighbor in neighbors[:2]:
                    if self.graph.has_edge(entity_node, neighbor):
                        edge_data = self.graph.get_edge_data(entity_node, neighbor)
                        relevant_nodes.append({
                            'source': entity_node,
                            'target': neighbor,
                            'relation': edge_data['relation']
                        })
        
        # 3. 向量检索回退
        if not relevant_nodes:
            all_texts = [self.graph.nodes[n]['text'] 
                        for n in self.graph.nodes]
            query_embedding = self.embedder.encode(query)
            # 简化的相似性计算（实际应使用更高效的向量索引）
            
        return relevant_nodes
    
    def generate_answer(self, query: str, context: List):
        """使用 LLM 生成答案"""
        context_str = "\n".join([str(c) for c in context])
        
        prompt = f"""基于以下知识图谱信息回答问题：
        
        相关知识：
        {context_str}
        
        问题：{query}
        
        答案："""
        
        response = self.llm_client.chat.completions.create(
            model="gpt-3.5-turbo",
            messages=[
                {"role": "system", "content": "你是一个基于知识图谱的智能助手。"},
                {"role": "user", "content": prompt}
            ]
        )
        
        return response.choices[0].message.content

# 使用示例
if __name__ == "__main__":
    # 初始化
    graph_rag = SimpleGraphRAG("your-openai-api-key")
    
    # 文档示例
    documents = [
        "苹果公司由史蒂夫·乔布斯创立于1976年。",
        "苹果公司发布了iPhone和MacBook等产品。",
        "史蒂夫·乔布斯是苹果公司的前CEO。"
    ]
    
    # 构建图谱
    graph_rag.build_graph_from_docs(documents)
    
    # 查询
    query = "谁创立了苹果公司？"
    context = graph_rag.graph_retrieval(query)
    answer = graph_rag.generate_answer(query, context)
    
    print(f"问题：{query}")
    print(f"答案：{answer}")
    print(f"检索到的上下文：{context}")
```

### 3.3 数据流示例

回答"苹果公司的创始人还创立了哪些其他公司？"

```bash
第一层（知识图谱构建层）：
输入: "苹果公司由史蒂夫·乔布斯创立。乔布斯还创立了NeXT和皮克斯。"
输出: 知识图谱节点: [Person:史蒂夫·乔布斯, Company:苹果, Company:NeXT, Company:皮克斯]
      关系: [founded(乔布斯, 苹果), founded(乔布斯, NeXT), founded(乔布斯, 皮克斯)]

第二层（图存储与索引层）：
存储: 将图谱存入 Neo4j，构建向量索引和属性索引
索引: 创建"founded"关系索引，公司名称全文索引

第三层（检索推理与生成层）：
查询分析: 识别实体["苹果公司", "创始人"]，关系"founded"，查询类型"多跳推理"
图检索: 从"苹果公司"找到创始人"乔布斯"，从乔布斯找到所有 founded 关系
推理: 排除苹果公司本身，获取其他公司
LLM 生成: "史蒂夫·乔布斯除了创立苹果公司，还创立了 NeXT 公司和皮克斯动画工作室。"
```

## 四、进阶技巧与优化策略

### 4.1 提升图谱质量

- **多模型融合**：结合多个 NER 和关系抽取模型
- **LLM 增强**：使用大模型进行实体消歧和关系验证
- **增量更新**：实现图谱的实时更新机制

### 4.2 智能检索策略

```python
# 多策略融合检索
class AdvancedGraphRetriever:
    def __init__(self):
        self.strategies = {
            'entity_expansion': self.entity_centric_retrieval,
            'path_finding': self.path_based_retrieval,
            'community_detection': self.community_aware_retrieval,
            'embedding_similarity': self.graph_embedding_search
        }
    
    def hybrid_retrieval(self, query, graph):
        results = []
        
        # 并行执行多种检索策略
        for strategy_name, strategy_func in self.strategies.items():
            strategy_results = strategy_func(query, graph)
            results.extend(strategy_results)
        
        # 结果融合与重排序
        fused_results = self.fuse_and_rerank(results)
        
        return fused_results
```

### 4.3 处理复杂查询

- **多跳推理**：处理"苹果公司的创始人创办了哪些其他公司？"
- **时序推理**：处理"苹果公司近年来的产品发布趋势"
- **对比查询**：处理"苹果与微软在创新方面的差异"

### 4.4 最佳实践建议

```yaml
GraphRAG 实施路线图:
  阶段1: 验证阶段
    - 选择核心文档子集
    - 构建最小可行图谱
    - 测试基本查询
  
  阶段2: 扩展阶段
    - 完善实体关系模型
    - 优化图构建流水线
    - 建立混合检索系统
  
  阶段3: 生产阶段
    - 实现增量更新
    - 添加缓存机制
    - 监控和评估
```


## 五、生产级考虑

### 5.1 性能优化

- **图数据库选择**：Neo4j、TigerGraph、NebulaGraph 对比
- **索引策略**：向量索引 + 图索引混合
- **缓存机制**：常见查询路径缓存

### 5.2 可扩展性设计

```python
# 分布式 GraphRAG 架构草图
class DistributedGraphRAG:
    def __init__(self):
        self.subgraphs = {}  # 分片存储子图
        self.master_graph = None  # 元数据图
        
    def query_distributed(self, query):
        # 1. 元数据路由
        relevant_shards = self.route_query(query)
        
        # 2. 并行子图查询
        shard_results = parallel_query_shards(query, relevant_shards)
        
        # 3. 结果聚合
        final_result = aggregate_results(shard_results)
        
        return final_result
```

### 5.3 工具生态

```yaml
图数据库:
  - Neo4j (最流行)
  - NebulaGraph (高性能)
  - TigerGraph (企业级)
  - JanusGraph (开源)

图嵌入算法:
  - Node2Vec
  - GraphSAGE
  - GAT (图注意力网络)
  - TransE (知识图谱嵌入)

开发框架:
  - LangChain Graph integrations
  - LlamaIndex GraphIndex
  - 自定义 pipeline
```

## 六、应用场景与案例

### 6.1 GraphRAG 的优缺点对比

| 优势 | 劣势 |
| --- | --- |
| **关系感知能力强**：能够理解实体之间的具体关系类型（因果、包含、对立等），而不仅仅是相关性 | **构建成本高**：知识抽取和图谱构建需要大量人力和算法支持，从零开始建图谱的工作量很大 |
| **支持多跳推理**：能够沿着关系路径进行多步推理，解决需要关联多个知识点的复杂问题 | **维护复杂度高**：现实世界的信息在不断变化，图谱的实时更新和一致性维护是持续的挑战 |
| **消歧能力强**：通过关系边能明确区分同名但不同义的实体，提高检索精度 | **技术门槛高**：需要团队掌握图算法、知识工程和图数据库的运维经验 |
| **推理可解释性强**：可以返回系统在图谱上走过的推理路径，让生成结果不再是黑盒 | **存储成本较高**：相比简单的向量索引，图数据库占用更多存储空间 |
| **知识一致性好**：结构化的图谱避免了向量检索可能带来的矛盾信息 | **适用场景有限**：如果大部分问题都能通过一次向量检索解决，引入图谱的收益可能不明显 |
| **查询效率高**：图遍历比多表JOIN快几个数量级，适合复杂关联查询 | **数据质量依赖性强**：知识抽取的准确性直接影响整体效果 |

### 6.2 典型应用场景

#### 6.2.1 金融风控场景

在金融风控中，识别企业的隐藏关联风险是一个典型需求。

假设要评估"某某科技公司"的贷款风险，传统RAG可能只能检索到这家公司的公开财务信息。但GraphRAG可以：

```text
第1跳：从【某某科技公司】出发
 → 沿着【法人代表】边找到【张三】
 → 沿着【股东】边找到【某某投资公司】

第2跳：从【张三】出发
 → 沿着【担任法人】边找到【某某贸易公司】（有逾期记录）
 从【某某投资公司】出发
 → 沿着【控股】边找到【某某地产公司】（被列为失信被执行人）

第3跳：通过关系传播计算风险评分
 → 虽然某某科技公司本身没有不良记录
 → 但通过关联路径发现其法人和股东涉及高风险实体
 → 系统自动提升风险评级
```

这种"顺藤摸瓜"的分析逻辑，正是图结构擅长表达的。

#### 6.2.2 医疗智能问答

在医疗领域，GraphRAG可以构建疾病-症状-药物的知识网络：

**应用场景**："阿司匹林适用于哪些心血管疾病？"

```text
检索路径：
1. 找到【阿司匹林】节点
2. 沿着【适应症】边找到【心肌梗死】、【心绞痛】、【脑卒中】等疾病节点
3. 从这些疾病节点出发，沿着【症状】、【预防措施】等边扩展
4. 返回完整的适应症列表和相关医学知识
```

相比传统RAG可能返回零散的药品说明书片段，GraphRAG能够提供更有组织性和完整性的医学知识。

#### 6.2.3 电商商品推荐

电商场景中，GraphRAG能沿着商品图谱找到更精准的关联推荐：

用户问："买了这台相机还需要配什么？"

```text
检索路径：
1. 找到【相机A】节点
2. 沿着【兼容】边找到【镜头型号B】、【镜头型号C】
3. 沿着【常用配件】边找到【存储卡】、【三脚架】、【相机包】
4. 沿着【适用场景】边找到【夜景拍摄】、【人像摄影】
5. 从【夜景拍摄】出发，沿着【推荐设备】边找到【闪光灯】
```

这种基于关系的推荐比单纯的"购买相机的用户还买了"这种协同过滤更有解释性。

#### 6.2.4 企业知识库

在企业内部知识库中，GraphRAG可以帮助员工快速找到相关信息：

员工问："我们公司的请假流程是什么？"

```text
检索路径：
1. 找到【请假流程】节点
2. 沿着【适用人群】边找到【全职员工】、【实习生】
3. 沿着【审批流程】边找到【部门经理审批】→【人事部备案】
4. 沿着【相关规定】边找到【年假政策】、【病假政策】
5. 从【年假政策】出发，找到具体的休假天数和申请条件
```

系统不仅回答了流程问题，还能主动提供相关的政策细节。


## 七、传统 RAG 与 GraphRAG 选择建议

GraphRAG的核心价值在于**让RAG系统从"检索相似文本"进化到"理解知识关联"**。通过引入知识图谱，系统不仅能够找到相关内容，还能理解这些内容之间的逻辑关系，支持多跳推理、消歧和可解释的决策。

### 7.1 决策判断标准

在选择是否使用GraphRAG时，关键的判断标准是：

1. **业务问题是否需要多跳推理？** 如果大部分问题都能通过一次检索解决，引入图谱的收益可能有限
2. **知识结构是否稳定？** 如果业务规则频繁变化，维护图谱的成本会很高
3. **团队是否有相关技术储备？** 图算法和知识工程需要专门的技能

### 7.2 选择场景

| 场景类型 | 传统 RAG | GraphRAG |
| --- | --- | --- |
| **简单问答查询** | ✅ 适合 | ❌ 不适合 |
| **文档内信息检索** | ✅ 适合 | ❌ 不适合 |
| **快速原型开发** | ✅ 适合 | ❌ 不适合 |
| **资源受限环境** | ✅ 适合 | ❌ 不适合 |
| **复杂关系推理** | ❌ 不适合 | ✅ 适合 |
| **多跳推理** | ❌ 不适合 | ✅ 适合 |
| **知识发现和模式识别** | ❌ 不适合 | ✅ 适合 |
| **高可解释性要求** | ❌ 不适合 | ✅ 适合 |
| **领域知识密集应用** | ❌ 不适合 | ✅ 适合 |

### 7.3 混合方案：Graph-enhanced RAG

这种混合方案结合了两者的优势，在实际应用中表现良好。

```bash
许多实际场景采用混合方案：

文档 → 并行处理 → 
    ├→ 文本切分 → 向量化 → 向量存储
    └→ 实体关系提取 → 知识图谱 → 图存储
    
查询 → 并行检索 →
    ├→ 向量相似性检索 → 文本结果
    └→ 图查询 → 关系结果
    
结果融合 → 重排序 → LLM 生成 → 最终答案
```

## 八、发展与演进
### 8.1 混合架构成为主流
在实际工程中，GraphRAG通常不会完全替代向量检索，而是采用**混合架构**：

第一阶段：**向量检索做语义召回**
- 处理模糊查询和语义泛化，比如"性价比高的拍照手机"
- 快速找到候选范围，过滤掉明显不相关的内容

第二阶段：**图谱检索做关系扩展**
- 以向量检索找到的实体为起点
- 通过图遍历获取关系上下文
- 支持精准的关系推理

第三阶段：**融合生成**
- 把向量检索的文本片段和图谱的结构化知识一起送给大模型
- 让LLM综合两种信息源生成最终答案

这种混合架构既保留了向量检索的灵活性，又获得了图谱检索的精确性。

### 8.2 技术实现的关键决策

**1. 知识抽取策略**：
- **基于规则的方法**：适合领域知识结构稳定的场景，准确率高但覆盖度有限
- **基于模型的方法**：泛化能力强，但需要大量标注数据
- **实际项目中通常会混用**：先用规则抽取高置信度的核心关系，再用模型补充长尾部分

**2. 图数据库选型**：
- **Neo4j**：社区成熟，适合中小规模图谱（百万级节点）
- **JanusGraph/ArangoDB**：分布式架构，适合大规模图谱（千万级节点以上）

**3. 检索策略设计**：
- **跳数限制**：通常设置2-3跳，避免无限扩展
- **节点数上限**：比如限制50个节点，防止子图过大
- **边的优先级**：因果关系的边权重高于一般关联关系

### 8.3 未来发展趋势

**动态图谱构建**：
当前的GraphRAG主要处理静态知识，未来会向实时更新的动态图谱发展。比如新闻事件发生后，系统能够自动抽取关键信息并更新图谱。

**多模态知识图谱**：
将文本、图像、音频等多模态信息融入知识图谱。比如"蒙娜丽莎-是-油画-创作者-达芬奇-收藏于-卢浮宫"，其中"蒙娜丽莎"可以关联到图像数据。

**图神经网络融合**：
用GNN（图神经网络）对知识图谱进行嵌入表示，让图谱信息能够和向量检索更好地融合。

**可解释的AI决策**：
知识图谱为AI决策提供可追溯的推理路径，让黑盒模型变得透明。未来，GraphRAG可能会成为可解释AI的重要组成部分，特别是在医疗、金融等高风险领域。


## 资源推荐

- [Neo4j GraphRAG 官方示例](https://github.com/neo4j/NaLLM)
- [LangChain Graph QA 实现](https://python.langchain.com/docs/use_cases/graph/)
