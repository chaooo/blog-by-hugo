---
title: 「工程实践」LangChain Agent 深度解析与实战
date: 2026-03-12 18:30:15
tags: [AI大模型, LangChain, Agent, 工程实践]
categories: [AI大模型]
series: AI大模型
toc: true
math: true
---

Agent 是 LangChain 最核心的概念，它能让 AI 自动判断何时需要调用工具，并在获取工具结果后继续思考，直到完成任务。

## 一、什么是 Agent

普通的模型调用是一问一答：你发消息，模型回消息，结束。

Agent 则不同，它进入一个 **思考-行动-观察** 循环：

> 模型判断需要调用某个工具 → 执行工具并拿到结果 → 模型根据结果继续思考 → 可能再调用工具 → 直到得出最终答案

举个例子，如果你问"今天杭州天气怎么样？"，普通模型只能回答训练数据中的天气（可能是几个月前的）。而 Agent 会主动调用天气查询工具获取实时数据，然后基于真实数据回答你。


## 二、创建第一个 Agent
整个过程只需要三步：①定义工具；②创建 Agent；③运行。
1. 用 `@tool` 装饰器把 Python 函数变成工具
2. 用 `create_agent()` 创建能自动调用工具的 Agent
3. 用 `agent.invoke()` 运行 Agent 并获得结果
### 2.1 环境准备

```powershell
pip install langchain langchain-openai python-dotenv
```

创建 `.env` 文件：
```text
OPENAI_API_KEY=your-api-key
OPENAI_BASE_URL=https://dashscope.aliyuncs.com/compatible-mode/v1
```

### 2.2 定义工具函数
使用 `@tool` 装饰器，把普通 Python 函数变成 Agent 可以调用的工具：
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

> **重要提示**：文档字符串（函数的 `"""..."""` 部分）非常重要。模型会读取工具的描述来决定是否调用这个工具以及传什么参数。描述越清晰，模型就越不容易用错。

### 2.3 创建 Agent
```python
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
| model | 使用的语言模型 | 是 |
| tools | 工具列表，Agent 可以调用这些工具 | 否（不传则 Agent 无法调用工具） |
| system_prompt | 系统提示词，定义 Agent 的角色和行为 | 否 |

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
上面这个例子的完整执行过程如下：
1. 用户发送消息："杭州今天天气怎么样？"
2. 模型收到消息后判断：需要查询天气 → 返回一个 `tool_call`（调用 `get_weather`，参数 `city="杭州"`）
3. Agent 执行 `get_weather` 工具 → 返回 "晴，25°C，湿度 60%"
4. 模型收到工具结果 → 判断任务完成 → 生成最终回复

这就是 Agent 的 **思考-行动-观察** 循环。

## 三、让 Agent 调用多个工具
Agent 的真正威力在于能自动组合多个工具：
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

Agent 自动执行了三步：
1. 模型收到问题，判断需要调用 get_weather 和 get_time 两个工具，返回两个 tool_call
2. 执行两个工具，获取天气和时间结果
3. 模型收到工具结果，判断信息足够，生成最终回复


## 四、多 Agent 协作
当一个任务太复杂，单个 Agent 难以胜任时；你可以创建多个，每个 Agent 专注于一个领域，通过协作完成复杂任务。
### 方式 1：子 Agent 作为工具
将 Agent 编译成 CompiledStateGraph，然后作为一个工具注册给父 Agent：
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
    name="weather_expert",  # 名字用于标识和日志
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
# 将子 Agent 作为工具注册
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

### 方式 2：用 name 参数区分 Agent
当你将子 Agent 作为工具嵌入时，设置 name 参数有助于追踪消息来源：
```python
# name 参数的作用：
# 1. 编译后的图中使用该名称
# 2. 作为子图节点嵌入父图时使用该名称
# 3. 所有 AI 消息被标记为该名称

agent = create_agent(
    model=model,
    tools=[...],
    name="customer_service",  # 给 Agent 命名
)
```

### 方式 3：Middleware 实现 Agent 路由
更复杂的多 Agent 场景可以通过 Middleware 实现动态路由：
```python
from langchain.agents.middleware import before_model

# 定义不同专家使用的工具集
general_tools = [tool_a, tool_b]
admin_tools = [tool_c, tool_d]

@before_model
def route_by_user_role(state, runtime):
    """根据用户角色动态切换可用工具"""
    context = runtime.context
    if context is None:
        return None

    user_role = context.get("user_role", "user")

    # 不同角色看到不同的工具
    if user_role == "admin":
        available_tools = general_tools + admin_tools
    else:
        available_tools = general_tools

    # 注意：before_model 不能直接修改 tools，
    # 需要配合 wrap_model_call 或 request.override 来实现
    return None
```

> 多 Agent 系统增加了复杂度和 Token 消耗。不要为了"多 Agent"而多 Agent——先用单个 Agent + 良好设计的 system_prompt 和 Middleware 解决问题。只有当确实需要领域隔离或独立上下文时，才引入多 Agent。


## 五、Agent其他特性
### 5.1 异步运行
Agent 支持异步模式，适合在 Web 服务等异步环境中使用：
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
结合 Memory 模块，Agent 可以记住对话历史：
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
你可以根据特定场景创建自定义 Agent：
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
结合知识库和工具调用，构建智能客服系统：
```python
@tool
def query_knowledge_base(question: str) -> str:
    """查询知识库"""
    return "知识库中关于该问题的答案..."
```

### 6.2 数据分析助手
让 Agent 能够查询数据库并分析数据：
```python
@tool
def query_database(sql: str) -> str:
    """执行SQL查询"""
    return "查询结果：..."
```

### 6.3 代码生成助手
让 Agent 能够编写和执行代码：
```python
@tool
def execute_code(code: str) -> str:
    """执行Python代码"""
    exec(code)
    return "代码执行成功"
```

### 6.4 最佳实践
1. 工具定义技巧
   - **清晰的描述**：工具描述要准确，帮助 Agent 判断是否使用
   - **参数规范**：明确参数类型和格式要求
   - **错误处理**：工具应返回友好的错误信息
2. 性能优化
   - **缓存机制**：对相同查询进行缓存
   - **并行调用**：支持同时调用多个工具
   - **超时控制**：设置合理的工具调用超时时间
3. 安全性考虑
   - **输入验证**：对用户输入进行安全检查
   - **权限控制**：限制工具的使用范围
   - **日志记录**：记录所有工具调用和执行过程
