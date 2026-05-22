---
title: 「学习笔记」Python进阶编程（下）
date: 2025-06-03 18:22:17
tags: [Python编程, 学习笔记, 并发编程, 设计模式]
categories: [Python编程]
series: Python编程
toc: true
---

## 1、设计模式
**设计模式** 是解决软件设计中常见问题的通用解决方案。设计模式提供了一套经过验证的最佳实践，帮助开发者编写可维护、可扩展和可复用的代码。

### 1.1 工厂模式
封装对象创建逻辑，通过统一接口创建不同类型的对象。
```python
from abc import ABC, abstractmethod

# 抽象产品接口
class LLMProvider(ABC):
    """LLM提供者抽象基类"""
    
    @abstractmethod
    def generate(self, prompt: str) -> str:
        """生成文本响应"""
        pass

# 具体产品：OpenAI
class OpenAIProvider(LLMProvider):
    """OpenAI LLM提供者"""
    
    def generate(self, prompt: str) -> str:
        return f"OpenAI: {prompt}"

# 具体产品：Anthropic
class AnthropicProvider(LLMProvider):
    """Anthropic LLM提供者"""
    
    def generate(self, prompt: str) -> str:
        return f"Anthropic: {prompt}"

# 工厂类
class LLMFactory:
    """ LLM提供者工厂类：根据类型创建对应的LLM提供者实例"""
    # 注册的提供者映射
    _providers = {
        "openai": OpenAIProvider,
        "anthropic": AnthropicProvider
    }
    
    @classmethod
    def create(cls, provider_type: str) -> LLMProvider:
        """ 创建LLM提供者实例
                Args:
                    provider_type: 提供者类型（"openai"或"anthropic"）
                Returns:
                    LLMProvider实例
                Raises:
                    ValueError: 未知的提供者类型
        """
        provider_class = cls._providers.get(provider_type)
        if not provider_class:
            raise ValueError(f"Unknown provider: {provider_type}")
        return provider_class()

# 使用示例
llm = LLMFactory.create("openai")  # 创建OpenAI提供者
# llm = LLMFactory.create("anthropic")  # 创建Anthropic提供者
```


### 1.2 策略模式
定义一系列算法，封装每个算法，并使它们可以互换。
```python
# 策略接口
class RAGStrategy(ABC):
    """RAG检索策略抽象基类"""
    @abstractmethod
    def retrieve(self, query: str, top_k: int):
        """ 检索相关文档
                Args:
                    query: 查询文本
                    top_k: 返回的文档数量
                Returns:
                    检索到的文档列表
        """
        pass

# 具体策略1：向量搜索
class VectorSearchStrategy(RAGStrategy):
    """向量搜索策略"""
    def __init__(self, vector_store):
        """初始化向量搜索策略"""
        self.vector_store = vector_store  # 向量数据库
    
    def retrieve(self, query: str, top_k: int):
        """使用向量数据库进行语义搜索"""
        return self.vector_store.search(query, top_k)

# 具体策略2：混合搜索（可选扩展）
# class HybridSearchStrategy(RAGStrategy):
#     def retrieve(self, query: str, top_k: int):
#         # 结合关键词搜索和向量搜索
#         pass

# 上下文类：使用策略
class RAGPipeline:
    """RAG管道：使用策略模式动态切换检索策略"""
    def __init__(self, strategy: RAGStrategy):
        """初始化RAG管道"""
        self.strategy = strategy  # 注入策略
    
    def set_strategy(self, strategy: RAGStrategy):
        """动态切换策略"""
        self.strategy = strategy
    
    def query(self, question: str):
        """执行RAG查询"""
        # 使用当前策略检索文档
        docs = self.strategy.retrieve(question, top_k=5)
        # 生成最终回答
        return self.generate_answer(question, docs)
    
    def generate_answer(self, question: str, docs: list):
        """根据检索到的文档生成回答"""
        return f"Answer based on {len(docs)} documents"
```


### 1.3 观察者模式
定义对象间的一对多依赖，当一个对象状态改变时，所有依赖者都会收到通知。
```python
from typing import List, Callable

class EventEmitter:
    """ 事件发射器：实现观察者模式的核心类
            职责：
            1. 维护事件与监听器的映射
            2. 提供注册/取消注册监听器的接口
            3. 触发事件并通知所有监听器
    """
    def __init__(self):
        """初始化事件发射器"""
        # 事件注册表：事件名 -> 回调函数列表
        self._listeners: dict = {}
    
    def on(self, event: str, callback: Callable):
        """ 注册事件监听器
            Args:
                event: 事件名称
                callback: 事件触发时调用的回调函数
        """
        if event not in self._listeners:
            self._listeners[event] = []
        self._listeners[event].append(callback)
    
    def off(self, event: str, callback: Callable):
        """ 移除事件监听器
            Args:
                event: 事件名称
                callback: 要移除的回调函数
        """
        if event in self._listeners:
            self._listeners[event].remove(callback)
    
    def emit(self, event: str, *args, **kwargs):
        """ 触发事件，通知所有监听器
            Args:
                event: 事件名称
                *args: 传递给回调的位置参数
                **kwargs: 传递给回调的关键字参数
        """
        if event in self._listeners:
            # 遍历所有监听器并调用
            for callback in self._listeners[event]:
                callback(*args, **kwargs)

# 使用示例
emitter = EventEmitter()

def on_message(message):
    """消息事件处理器"""
    print(f"收到消息: {message}")

# 注册监听器
emitter.on("message", on_message)

# 触发事件
emitter.emit("message", "Hello, World!")  # 输出: 收到消息: Hello, World!

# 应用场景：
# 1. GUI事件处理
# 2. 消息队列/事件总线
# 3. 实时数据更新通知
# 4. 插件系统的钩子机制
```


## 2、元编程
**元编程** 是指编写能够操作代码的代码。在Python中，元编程允许我们在运行时动态创建、修改或检查类和函数。

### 2.1 元类基础
元类是创建类的类，type是Python中所有类的元类。
```python
class SingletonMeta(type):
    """单例元类：控制类的实例创建，确保类只有一个实例"""
    # 类变量：存储所有单例实例
    _instances = {}
    
    def __call__(cls, *args, **kwargs):
        """当类被调用时（如 Database()），此方法被执行
                Args:
                    cls: 被实例化的类
                    args/kwargs: 传递给__init__的参数
        """
        # 检查该类是否已有实例
        if cls not in cls._instances:
            # 使用父类type的__call__创建实例
            cls._instances[cls] = super().__call__(*args, **kwargs)
        # 返回已存在的实例
        return cls._instances[cls]

# 使用单例元类创建单例类
class Database(metaclass=SingletonMeta):
    """数据库连接类（单例）"""
    def __init__(self):
        self.connection = "connected"

# 获取实例
db1 = Database()
db2 = Database()
print(db1 is db2)  # True，两个变量指向同一个实例
```

### 2.2 动态类生成
使用 `type()` 动态创建类，无需先定义类的代码。
- type() 的三个参数：
    1. class_name: 类名
    2. bases: 父类元组
    3. attributes: 类属性字典（方法和属性）
```python
def create_class(class_name: str, attributes: dict):
    return type(class_name, (object,), attributes)

# 创建一个动态类
Person = create_class("Person", {
    # __init__ 方法：初始化对象
    "__init__": lambda self, name: setattr(self, "name", name),
    # greet 方法：返回问候语
    "greet": lambda self: f"Hello, {self.name}"
})

# 使用动态创建的类
person = Person("Alice")
print(person.greet())  # 输出: Hello, Alice
```

### 2.3 类装饰器进阶
类装饰器可以动态为类添加方法，无需修改类的定义；参数为类对象，返回修改后的类对象（添加了新方法）。
```python
def add_method(cls):
    # 定义要添加的方法
    def new_method(self):
        return f"Added method for {self.__class__.__name__}"
    
    # 将方法添加到类中
    cls.new_method = new_method
    return cls

# 使用类装饰器
@add_method
class MyClass:
    """原始类（没有new_method方法）"""
    pass

# 创建实例并调用新增的方法
obj = MyClass()
print(obj.new_method())  # 输出: Added method for MyClass
```

## 3、并发编程
在基础篇中我们学习了多线程编程，**并发编程** 是指同时处理多个任务的编程方式。在Python中，并发可以通过多种方式实现：
- **多线程**：在单个进程中运行多个线程
- **多进程**：运行多个独立进程
- **协程**：在单个线程内实现任务切换

### 3.1 线程池

```python
import threading

"""简单线程池实现：管理多个工作线程处理任务"""
class ThreadPool:
    def __init__(self, num_threads: int = 4):
        """初始化线程池"""
        self.num_threads = num_threads    # 线程数量
        self._threads = []                # 存储线程对象
        self._lock = threading.Lock()     # 互斥锁：保护任务队列
        self._tasks = []                  # 任务队列
    
    def add_task(self, func, *args, **kwargs):
        """添加任务到队列"""
        with self._lock:  # 获取锁，确保线程安全
            self._tasks.append((func, args, kwargs))
    
    def _worker(self):
        """工作线程：循环从队列中获取并执行任务"""
        while True:
            with self._lock:
                # 队列为空则退出
                if not self._tasks:
                    break
                # 从队列头部取出任务
                func, args, kwargs = self._tasks.pop(0)
            
            # 在锁外执行任务（避免长时间持有锁）
            try:
                func(*args, **kwargs)
            except Exception as e:
                print(f"Task failed: {e}")
    
    def start(self):
        """启动所有工作线程"""
        for _ in range(self.num_threads):
            thread = threading.Thread(target=self._worker)
            thread.start()
            self._threads.append(thread)
    
    def join(self):
        """等待所有线程完成"""
        for thread in self._threads:
            thread.join()

# 使用示例
def process_item(item):
    """处理单个项目"""
    print(f"Processing {item}")

# 创建线程池（3个工作线程）
pool = ThreadPool(num_threads=3)

# 添加10个任务
for i in range(10):
    pool.add_task(process_item, i)

# 启动线程池并等待完成
pool.start()
pool.join()
```

### 3.2 多进程
```python
import multiprocessing
from typing import List

def parallel_compute(data: List[int]) -> int:
    """并行计算：计算数据平方和"""
    return sum(x * x for x in data)

def chunk_data(data: List[int], num_chunks: int) -> List[List[int]]:
    """ 将数据分割成多个块
            Args:
                data: 原始数据
                num_chunks: 分割数量
            Returns:
                分割后的数据块列表
    """
    chunk_size = len(data) // num_chunks
    chunks = []
    for i in range(num_chunks):
        start = i * chunk_size
        # 最后一块包含剩余所有数据
        end = start + chunk_size if i < num_chunks - 1 else len(data)
        chunks.append(data[start:end])
    return chunks

if __name__ == "__main__":
    # 注意：多进程代码必须放在 if __name__ == "__main__" 块中
    
    # 大数据集（1000万个整数）
    data = list(range(10_000_000))
    
    # 获取CPU核心数作为进程数
    num_processes = multiprocessing.cpu_count()
    print(f"Using {num_processes} processes")
    
    # 将数据分割成对应数量的块
    chunks = chunk_data(data, num_processes)
    
    # 创建进程池并执行
    with multiprocessing.Pool(num_processes) as pool:
        # pool.map: 将任务分配给各进程并行执行
        results = pool.map(parallel_compute, chunks)
    
    # 汇总各进程结果
    total = sum(results)
    print(f"Total: {total}")
```

### 3.3 线程安全数据结构
```python
import threading

class ThreadSafeQueue:
    """ 线程安全队列：使用锁和条件变量实现线程安全的生产者-消费者模式
            特点：
            - 使用 Lock 保护队列访问
            - 使用 Condition 实现阻塞等待（队列为空时get阻塞）
    """
    def __init__(self):
        self._queue = []                          # 底层队列
        self._lock = threading.Lock()             # 互斥锁
        self._not_empty = threading.Condition(self._lock)  # 条件变量
    
    def put(self, item):
        """添加元素到队列（线程安全）"""
        with self._lock:
            self._queue.append(item)
            # 通知等待的线程：队列不再为空
            self._not_empty.notify()
    
    def get(self):
        """获取元素（阻塞等待直到队列非空）"""
        with self._lock:
            # 循环检查：防止虚假唤醒
            while not self._queue:
                self._not_empty.wait()  # 释放锁并等待通知
            return self._queue.pop(0)   # 取出队首元素
    
    def empty(self):
        """检查队列是否为空（线程安全）"""
        with self._lock:
            return len(self._queue) == 0

# 使用示例（生产者-消费者模式）：
# queue = ThreadSafeQueue()
# 
# def producer():
#     for i in range(10):
#         queue.put(i)
# 
# def consumer():
#     while True:
#         item = queue.get()
#         print(f"Consumed: {item}")
```


## 4、内存管理
**内存管理** 是程序运行时对内存资源的分配和释放进行管理的过程。Python使用自动内存管理机制，主要包括：
- **引用计数**：跟踪对象的引用数量
- **垃圾回收**：处理循环引用等复杂情况
- **内存池**：优化小对象的分配

### 4.1 引用计数
```python
import sys

class MyObject:
    """自定义对象，包含__del__方法观察销毁时机"""
    def __del__(self):
        """对象被销毁时调用（引用计数归零时）"""
        print("Object destroyed")

# 创建对象，引用计数为1
obj = MyObject()

# getrefcount() 会临时增加引用计数，所以显示为2
print(sys.getrefcount(obj))  # 输出: 2 (变量obj + getrefcount参数)

# 创建新引用，引用计数变为2
obj2 = obj
print(sys.getrefcount(obj))  # 输出: 3

# 删除引用，引用计数变为1
del obj2
print(sys.getrefcount(obj))  # 输出: 2

# 当obj超出作用域或被del删除时，引用计数归0，对象被销毁
```

### 4.2 弱引用
```python
import weakref

class Data:
    """示例数据类"""
    def __init__(self, value):
        self.value = value

# 创建对象
data = Data(42)

# 创建弱引用：不增加引用计数
ref = weakref.ref(data)

# 通过弱引用访问对象
print(ref())  # 输出: <__main__.Data object at ...>

# 删除强引用
del data

# 对象已被垃圾回收，弱引用返回None
print(ref())  # 输出: None

# 弱引用的用途：
# 1. 缓存场景：不阻止对象被回收
# 2. 避免循环引用
# 3. 观察者模式中避免内存泄漏
```

### 4.3 垃圾回收
```python
import gc

# ========== 垃圾回收调试模式 ==========
# gc.DEBUG_LEAK 启用泄漏检测（会打印详细信息）
gc.set_debug(gc.DEBUG_LEAK)

# ========== 创建循环引用 ==========
# 循环引用无法通过引用计数回收，需要垃圾回收器处理
class Node:
    def __init__(self):
        self.next = None

a = Node()
b = Node()
a.next = b  # a引用b
b.next = a  # b引用a（形成循环）

# 删除变量引用
del a
del b

# 此时a和b的引用计数都是1（互相引用），无法通过引用计数回收
# 需要垃圾回收器检测并清理循环引用

# ========== 手动触发垃圾回收 ==========
gc.collect()  # 检测并回收循环引用对象

# ========== 关闭调试模式 ==========
gc.set_debug(0)  # 关闭调试输出

# 垃圾回收器的主要作用：
# 1. 检测和回收循环引用
# 2. 处理容器对象（list, dict, class等）的循环引用
# 3. 定期自动运行（可通过 gc.set_threshold() 配置）
```

## 5、性能优化
**性能优化** 是改进程序执行效率和资源使用的过程。在Python中，性能优化通常包括：
- **算法优化**：选择更高效的算法和数据结构
- **代码优化**：优化代码结构和执行流程
- **工具辅助**：使用性能分析工具定位瓶颈
- **并行计算**：利用多线程、多进程或协程

### 5.1 性能分析
```python
import cProfile
import pstats

def slow_function():
    """慢函数：计算100万个数的平方和"""
    result = 0
    for i in range(1_000_000):
        result += i * i
    return result

# ========== 使用cProfile进行性能分析 ==========
# 创建性能分析器
profiler = cProfile.Profile()

# 启用性能分析
profiler.enable()

# 执行待分析的代码
slow_function()

# 禁用性能分析
profiler.disable()

# 分析结果
# sort_stats('cumulative') - 按累计时间排序
stats = pstats.Stats(profiler).sort_stats('cumulative')

# 打印前10个耗时最多的函数
stats.print_stats(10)

# cProfile输出字段说明：
# ncalls - 调用次数
# tottime - 函数内部耗时（不包括子函数）
# percall - 每次调用耗时（tottime / ncalls）
# cumtime - 累计耗时（包括子函数）
# percall - 每次调用累计耗时（cumtime / ncalls）
# filename:lineno(function) - 函数位置
```

### 5.2 优化技巧
```python
# ========== 优化技巧1：使用生成器替代列表 ==========
# 生成器按需生成值，节省内存
def generate_numbers(n):
    for i in range(n):
        yield i  # 每次调用返回一个值，而不是一次性生成所有值

# 对比：列表会一次性生成所有值，占用更多内存
# def generate_numbers_list(n):
#     return list(range(n))

# ========== 优化技巧2：使用内置函数 ==========
# 内置函数用C实现，比Python循环快得多
import math
result = sum(math.sqrt(i) for i in range(1_000_000))

# ========== 优化技巧3：使用lru_cache缓存 ==========
from functools import lru_cache

@lru_cache(maxsize=128)  # 缓存最近128个调用结果
def fibonacci(n):
    """计算斐波那契数（递归方式）"""
    if n <= 1:
        return n
    return fibonacci(n-1) + fibonacci(n-2)

# 调用示例
fibonacci(100)  # 第一次计算较慢
fibonacci(100)  # 第二次直接返回缓存结果，非常快

# 其他优化技巧：
# 1. 使用局部变量（访问速度更快）
# 2. 避免在循环中进行重复计算
# 3. 使用合适的数据结构（如set用于快速查找）
# 4. 对于CPU密集型任务，使用多进程或C扩展
```


## 6、单元测试
**单元测试** 是软件开发中的关键实践，用于验证代码的正确性和可靠性。单元测试关注代码的最小可测试单元（通常是函数或方法），确保其在各种情况下都能正确工作。

Python中常用的测试框架包括`pytest`和`unittest`，其中`pytest`以其简洁的语法和强大的功能而广受欢迎。

### 6.1 pytest基础
```python
import pytest

# 待测试的函数
def add(a: int, b: int) -> int:
    """简单的加法函数"""
    return a + b

# ========== 基本测试 ==========
# pytest自动发现以 test_ 开头的函数
def test_add_basic():
    """测试基本加法"""
    assert add(1, 2) == 3  # assert断言：验证结果是否符合预期

def test_add_negative():
    """测试负数加法"""
    assert add(-1, -1) == -2

# ========== 参数化测试 ==========
# @pytest.mark.parametrize 装饰器：用多组参数运行同一测试
@pytest.mark.parametrize("a, b, expected", [  # 参数名列表
    (1, 2, 3),    # 测试用例1
    (0, 0, 0),    # 测试用例2
    (-1, 1, 0),   # 测试用例3
])
def test_add_parametrized(a, b, expected):
    """参数化测试：多组输入验证"""
    assert add(a, b) == expected

# ========== 异常测试 ==========
def test_divide_by_zero():
    """测试异常抛出"""
    # pytest.raises 上下文管理器：验证是否抛出指定异常
    with pytest.raises(ZeroDivisionError):
        1 / 0  # 此操作应抛出 ZeroDivisionError
```


### 6.2 Fixtures
```python
import pytest

# ========== Fixture：测试夹具 ==========
# @pytest.fixture 装饰器定义可复用的测试资源
@pytest.fixture
def sample_data():
    """提供测试数据的fixture"""
    return {
        "users": [
            {"id": 1, "name": "Alice"},
            {"id": 2, "name": "Bob"}
        ]
    }

@pytest.fixture
def db_connection():
    """数据库连接fixture（带清理逻辑）"""
    # 在 yield 之前的代码：setup阶段
    conn = create_test_db()  # 创建测试数据库连接
    
    # yield 返回值给测试函数
    yield conn
    
    # 在 yield 之后的代码：teardown阶段（无论测试成功或失败都会执行）
    conn.cleanup()  # 清理资源

# ========== 使用Fixtures ==========
# 测试函数通过参数名自动获取fixture实例
def test_users(db_connection, sample_data):
    """测试数据库查询（使用两个fixtures）"""
    users = db_connection.query("SELECT * FROM users")
    assert len(users) == 2

def test_data_structure(sample_data):
    """测试数据结构"""
    assert len(sample_data["users"]) == 2
```


### 6.3 异步测试
```python
import pytest
import asyncio

# ========== 异步测试 ==========
# @pytest.mark.asyncio 装饰器：标记异步测试函数
@pytest.mark.asyncio
async def test_async_function():
    """测试异步函数"""
    # await 调用异步操作
    result = await asyncio.sleep(0.1, result=42)
    assert result == 42  # 验证异步操作结果

# ========== 自定义事件循环 ==========
@pytest.fixture
def event_loop():
    """自定义事件循环fixture"""
    loop = asyncio.new_event_loop()  # 创建新的事件循环
    yield loop                       # 提供给测试使用
    loop.close()                     # 清理：关闭事件循环
```
