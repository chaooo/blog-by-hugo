---
title: 「工程实践」LangChain Agent 深度解析与实战
date: 2026-04-12 18:30:15
tags: [AI大模型, LangChain, Agent, 工程实践]
categories: [AI大模型]
series: AI大模型
toc: true
math: true
---

Agent 是 LangChain 最核心的概念，它赋予 AI 自主决策能力——自动判断何时需要调用工具，并在获取工具结果后继续推理，直至完成任务。这一机制使 AI 能够突破静态知识限制，动态获取实时信息并解决复杂问题。

## 一、什么是 Agent

传统的模型调用遵循简单的一问一答模式：用户发送请求，模型返回响应，交互结束。

Agent 则完全不同，它引入了一个 **思考-行动-观察**（Think-Act-Observe）的闭环机制：

> 模型分析问题 → 判断需要调用工具 → 执行工具获取结果 → 基于结果继续推理 → 如需更多信息则再次调用工具 → 循环直至生成最终答案

例如，当用户询问"今天杭州天气怎么样？"时，普通模型只能依赖训练数据中的历史信息（可能已过时数月）。而 Agent 会主动调用天气查询工具获取实时数据，再基于真实信息给出准确回答。这正是 Agent 的核心价值所在——将大模型的推理能力与外部工具的执行能力有机结合。


## 二、创建第一个 Agent

创建一个具备工具调用能力的 Agent 只需三个步骤：

| 步骤 | 操作 | 说明 |
| --- | --- | --- |
| ① | 定义工具 | 使用 `@tool` 装饰器将 Python 函数转换为工具 |
| ② | 创建 Agent | 通过 `create_agent()` 构建工具调用能力 |
| ③ | 运行 Agent | 使用 `agent.invoke()` 执行并获取结果 |

### 2.1 环境准备

首先安装依赖包：

```powershell
pip install langchain langchain-openai python-dotenv
```

创建 `.env` 文件配置 API 密钥：
```text
OPENAI_API_KEY=your-api-key
OPENAI_BASE_URL=https://dashscope.aliyuncs.com/compatible-mode/v1
```

### 2.2 定义工具函数

使用 `@tool` 装饰器将普通 Python 函数转换为 Agent 可调用的工具：

```python
from dotenv import load_dotenv
from langchain_core.tools import tool

load_dotenv()

@tool
def get_weather(city: str) -> str:
    """查询指定城市的天气情况。
    
    Args:
        city: 城市名称，如 "杭州"、"北京"
    """
    weather_data = {
        "杭州": "晴，25°C，湿度 60%",
        "北京": "多云，18°C，湿度 45%",
        "上海": "小雨，22°C，湿度 80%",
    }
    return weather_data.get(city, f"未找到 {city} 的天气数据")
```

> **关键要点**：工具的文档字符串（Docstring，函数的 `"""..."""` 部分）至关重要。大模型通过解析这段描述来判断是否需要调用该工具以及如何传递参数。描述越精确、参数定义越清晰，模型调用工具的准确性就越高。

### 2.3 创建 Agent

```python
import os
from langchain.agents import create_agent
from langchain.chat_models import init_chat_model

model = init_chat_model(
    "deepseek-v4-flash",
    model_provider="openai",
    openai_api_key=os.getenv("OPENAI_API_KEY"),
    openai_api_base=os.getenv("OPENAI_BASE_URL"),
)

agent = create_agent(
    model=model,
    tools=[get_weather],
    system_prompt="你是一个乐于助人的助手，会使用工具来回答问题。",
)
```

| 参数 | 说明 | 是否必填 |
| --- | --- | --- |
| model | 底层语言模型实例 | 是 |
| tools | Agent 可调用的工具列表 | 否（不传则无工具调用能力） |
| system_prompt | 系统提示词，定义 Agent 角色与行为准则 | 否 |

### 2.4 运行 Agent

```python
from langchain.messages import HumanMessage

inputs = {"messages": [HumanMessage(content="杭州今天天气怎么样？")]}
result = agent.invoke(inputs)

print("=== 完整消息历史 ===")
for msg in result["messages"]:
    print(f"[{msg.type}] {msg.content[:100]}")

print("\n=== 最终回复 ===")
print(result["messages"][-1].content)
```

**运行结果**：
```text
=== 完整消息历史 ===
[human] 杭州今天天气怎么样？
[ai] 好的，我来帮你查一下杭州今天的天气情况
[tool] 晴，25°C，湿度 60%
[ai] 今天杭州的天气是晴天，气温25°C，湿度60%。非常适合出门活动！

=== 最终回复 ===
今天杭州的天气是晴天，气温25°C，湿度60%。非常适合出门活动！
```

### 2.5 Agent 执行流程解析

上述示例的完整执行流程如下：

1. **用户输入**：发送消息 "杭州今天天气怎么样？"
2. **模型推理**：模型分析问题后判断需要调用工具，返回 `tool_call`（调用 `get_weather`，参数 `city="杭州"`）
3. **工具执行**：Agent 执行 `get_weather` 工具，返回结果 "晴，25°C，湿度 60%"
4. **结果汇总**：模型收到工具执行结果，判断信息充足，生成最终自然语言回复

这正是 Agent **思考-行动-观察** 循环的完整体现。

## 三、让 Agent 调用多个工具

Agent 的真正威力在于能够根据问题自动组合调用多个工具。当用户提出复合问题时，Agent 会智能分析需要调用哪些工具，并行或串行执行，最后整合结果给出完整回答。

```python
@tool
def get_time(city: str) -> str:
    """查询指定城市的当前时间。
    
    Args:
        city: 城市名称，如 "杭州"、"北京"
    """
    time_data = {
        "杭州": "14:30",
        "北京": "14:30",
        "纽约": "02:30",
    }
    return time_data.get(city, f"未找到 {city} 的时间数据")
    
agent = create_agent(
    model=model,
    tools=[get_weather, get_time],
    system_prompt="你是一个乐于助人的助手，会使用工具来回答问题。",
)
    
inputs = {"messages": [HumanMessage(
    content="杭州现在天气怎么样？几点了？"
)]}

result = agent.invoke(inputs)

print("=== 完整消息历史 ===")
for msg in result["messages"]:
    if msg.type == "tool":
        print(f"[tool {msg.name}] {msg.content}")
    else:
        print(f"[{msg.type}] {msg.content[:120]}")

print("\n=== 最终回复 ===")
print(result["messages"][-1].content)
```

**运行结果**：
```text
=== 完整消息历史 ===
[human] 杭州现在天气怎么样？几点了？
[ai] 好的，我帮你查一下杭州现在的天气和时间！
[tool get_weather] 晴，25°C，湿度 60%
[tool get_time] 14:30
[ai] 杭州现在天气晴朗，气温25°C，当前时间是14:30。

=== 最终回复 ===
杭州现在天气晴朗，气温25°C，当前时间是14:30。
```

在此示例中，Agent 自动完成以下流程：

1. **需求分析**：模型解析用户问题，识别出需要同时获取天气和时间信息
2. **工具调用**：并行调用 `get_weather` 和 `get_time` 两个工具
3. **结果整合**：收到所有工具返回结果后，判断信息充足，生成最终回复

这种多工具协作能力使 Agent 能够处理复杂的多步骤任务，而无需人工干预。


## 四、多 Agent 协作

当任务复杂度超出单个 Agent 的处理能力时，可以构建多 Agent 系统。每个 Agent 专注于特定领域，通过协作完成复杂任务。这种架构类似于企业中的专家团队，各有所长、分工协作。

### 方式 1：子 Agent 作为工具

将专业化的子 Agent 封装为工具，由父 Agent（协调者）根据问题类型选择调用：

```python
import os
import sys
from dotenv import load_dotenv
from langchain_core.tools import tool
from langchain.agents import create_agent
from langchain.chat_models import init_chat_model
from langchain.messages import HumanMessage

load_dotenv()
sys.stdout.reconfigure(encoding='utf-8')

model = init_chat_model(
    "deepseek-v4-flash",
    model_provider="openai",
    openai_api_key=os.getenv("OPENAI_API_KEY"),
    openai_api_base=os.getenv("OPENAI_BASE_URL"),
)

# 子 Agent 1：天气专家
@tool
def get_weather(city: str) -> str:
    """查询天气"""
    data = {"杭州": "晴，25°C", "北京": "多云，18°C"}
    return data.get(city, f"{city}: 数据暂缺")

weather_agent = create_agent(
    model=model,
    tools=[get_weather],
    name="weather_expert",
    system_prompt="你是天气专家，专门回答天气相关问题。回答要简洁。",
)

# 子 Agent 2：计算专家
@tool
def calculate(expression: str) -> str:
    """计算数学表达式"""
    result = eval(expression, {"__builtins__": {}}, {})
    return f"{expression} = {result}"

math_agent = create_agent(
    model=model,
    tools=[calculate],
    name="math_expert",
    system_prompt="你是数学专家，专门进行数学计算。回答要简洁。",
)

# 父 Agent：协调者
@tool
def ask_weather_expert(question: str) -> str:
    """向天气专家咨询天气相关问题。
    
    Args:
        question: 关于天气的问题
    """
    result = weather_agent.invoke(
        {"messages": [HumanMessage(content=question)]}
    )
    return result["messages"][-1].content

@tool
def ask_math_expert(question: str) -> str:
    """向数学专家咨询数学计算问题。
    
    Args:
        question: 数学计算问题
    """
    result = math_agent.invoke(
        {"messages": [HumanMessage(content=question)]}
    )
    return result["messages"][-1].content

coordinator = create_agent(
    model=model,
    tools=[ask_weather_expert, ask_math_expert],
    system_prompt="""你是协调助手。根据用户问题选择合适的专家：
    - 天气相关问题 → 使用 ask_weather_expert
    - 数学计算问题 → 使用 ask_math_expert
    - 如果同时涉及多个领域，依次咨询各个专家""",
)

# 测试复合问题
result = coordinator.invoke({
    "messages": [HumanMessage(
        content="杭州今天天气怎么样？如果温度是 25 度，换算成华氏度是多少？"
        "（公式：华氏度 = 摄氏度 × 9/5 + 32）"
    )]
})
print(result["messages"][-1].content)
```

**运行结果**：
```text
好的，以下是综合两个专家的回答：

### 🌤️ 天气方面
杭州今天**天气晴朗**，气温 **25°C**，非常适合外出活动哦！☀️

### 🔢 温度换算
25 摄氏度换算成华氏度：
> **华氏度 = 25 × 9/5 + 32 = 77°F**

所以，杭州今天的气温是 **25°C**，相当于 **77°F**，天气不错，出门走走会很舒服！😊
```

### 方式 2：使用 name 参数区分 Agent

为 Agent 设置 `name` 参数有助于在多 Agent 场景中追踪消息来源和调试：

```python
# name 参数的作用：
# 1. 在编译后的状态图中作为节点标识
# 2. 当作为子图嵌入父图时使用该名称
# 3. 所有 AI 消息都会被标记为该名称

agent = create_agent(
    model=model,
    tools=[...],
    name="customer_service",  # 为 Agent 命名
)
```

### 方式 3：Middleware 实现动态路由

对于更复杂的多 Agent 场景，可以通过 Middleware 实现基于上下文的动态路由：

```python
from langchain.agents.middleware import before_model

# 定义不同角色可用的工具集
general_tools = [tool_a, tool_b]
admin_tools = [tool_c, tool_d]

@before_model
def route_by_user_role(state, runtime):
    """根据用户角色动态切换可用工具"""
    context = runtime.context
    if context is None:
        return None

    user_role = context.get("user_role", "user")

    # 不同角色拥有不同的工具权限
    if user_role == "admin":
        available_tools = general_tools + admin_tools
    else:
        available_tools = general_tools

    # 注意：before_model 不能直接修改 tools，
    # 需要配合 wrap_model_call 或 request.override 来实现
    return None
```

> **架构建议**：多 Agent 系统会显著增加复杂度和 Token 消耗。建议遵循"简单优先"原则——先用单个 Agent 配合精心设计的 system_prompt 和 Middleware 解决问题。只有在确实需要领域隔离、独立上下文或专业化分工时，才考虑引入多 Agent 架构。


## 五、Agent 其他特性

### 5.1 异步运行

Agent 原生支持异步模式，非常适合在 Web 服务等异步环境中使用：

```python
import asyncio
from langchain.messages import HumanMessage

async def main():
    inputs = {"messages": [HumanMessage(content="杭州天气怎么样？")]}
    result = await agent.ainvoke(inputs)
    print(result["messages"][-1].content)

asyncio.run(main())
```

### 5.2 记忆功能

通过结合 Memory 模块，Agent 可以记住对话历史，实现上下文感知：

```python
from langchain_core.chat_history import InMemoryChatMessageHistory
from langchain_core.runnables.history import RunnableWithMessageHistory

history = InMemoryChatMessageHistory()

agent_with_history = RunnableWithMessageHistory(
    agent,
    lambda session_id: history,
    input_messages_key="input",
    history_messages_key="history",
)
```

### 5.3 自定义 Agent

对于特殊场景，可以通过继承基类创建高度定制化的 Agent：

```python
from langchain.agents import Agent

class MyCustomAgent(Agent):
    def _plan(self, inputs):
        if "天气" in inputs["input"]:
            return self._tool_call("get_weather", {"city": "北京"})
        return self._direct_answer("我来回答你的问题...")
```

## 六、应用场景

### 6.1 智能客服

结合知识库检索与工具调用，构建具备领域专业知识的智能客服系统：

```python
@tool
def query_knowledge_base(question: str) -> str:
    """查询产品知识库，获取产品相关信息"""
    return "知识库中关于该问题的答案..."
```

### 6.2 数据分析助手

让 Agent 能够连接数据库、执行查询并进行数据分析：

```python
@tool
def query_database(sql: str) -> str:
    """执行SQL查询，返回结构化数据"""
    return "查询结果：..."
```

### 6.3 代码生成助手

赋予 Agent 编写和执行代码的能力，实现自动化编程：

```python
@tool
def execute_code(code: str) -> str:
    """执行Python代码并返回结果"""
    exec(code)
    return "代码执行成功"
```

### 6.4 最佳实践

#### 工具定义技巧
- **清晰描述**：工具描述需准确完整，帮助 Agent 正确判断是否调用及如何传参
- **参数规范**：明确参数类型、格式要求和取值范围
- **错误处理**：工具应返回友好的错误信息，便于调试和用户理解

#### 性能优化策略
- **缓存机制**：对重复查询进行缓存，减少不必要的工具调用
- **并行调用**：支持同时调用多个独立工具，提升响应效率
- **超时控制**：为每个工具设置合理的超时时间，避免长时间阻塞

#### 安全性考虑
- **输入验证**：对用户输入进行严格的安全检查，防止注入攻击
- **权限控制**：根据用户角色限制工具的使用范围
- **日志记录**：记录所有工具调用和执行过程，便于审计和追踪
