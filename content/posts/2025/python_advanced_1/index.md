---
title: 「学习笔记」Python进阶编程（上）
date: 2025-06-02 18:22:17
tags: [Python编程, 学习笔记, 异步编程, 装饰器]
categories: [Python编程]
series: Python编程
toc: true
---

## 1、类型注解
在基础篇中我们学习了Python的动态类型特性，**类型注解** 是Python 3.5+引入的特性，允许为变量、函数参数和返回值添加类型提示。

类型注解提供了以下好处：
- **代码可读性**：明确说明变量和函数的预期类型
- **IDE支持**：提供更好的代码补全和错误提示
- **类型检查**：可以使用mypy等工具进行静态类型检查
- **文档生成**：自动生成API文档

### 1.1 基本类型

```python
# ========== 基本类型注解 ==========
# 变量类型注解：变量名: 类型 = 值
name: str = "Alice"       # 字符串类型
age: int = 30             # 整数类型
is_student: bool = False  # 布尔类型
scores: list = [95, 88, 91]  # 列表类型

# 函数类型注解：参数: 类型, 返回值 -> 类型
def greet(name: str) -> str:
    """向用户打招呼"""
    return f"Hello, {name}"

# 注意：
# - 类型注解只是提示，Python解释器不会强制检查
# - 需要使用第三方工具（如mypy）进行类型检查
# - 类型注解可以提高代码质量，但不会影响运行时行为
```

### 1.2 typing模块
使用 `typing` 模块可以定义更复杂的类型。

```python
# ========== typing模块常用类型 ==========
from typing import List, Dict, Tuple, Set, Optional, Union

# ========== 泛型容器类型 ==========
numbers: List[int] = [1, 2, 3, 4, 5]              # 整数列表
student_scores: Dict[str, int] = {"Alice": 95, "Bob": 88}  # 字符串到整数的字典
person_info: Tuple[int, str, bool] = (25, "Alice", True)  # 元组（整数、字符串、布尔）
unique_names: Set[str] = {"Alice", "Bob", "Charlie"}       # 字符串集合

# ========== 特殊类型 ==========
# Optional[T]: 表示值可以是 T 类型或 None
name: Optional[str] = "Alice"  # name 可以是 str 或 None

# Union[T1, T2, ...]: 表示值可以是多种类型之一
def process_input(data: Union[str, int, List[int]]) -> None:
    """处理多种类型的输入"""
    if isinstance(data, str):
        print(f"字符串: {data}")
    elif isinstance(data, int):
        print(f"整数: {data}")
    elif isinstance(data, list):
        print(f"列表: {data}")

# ========== typing模块常用类型说明 ==========
# List[T]: 泛型列表，T是元素类型
# Dict[K, V]: 泛型字典，K是键类型，V是值类型
# Tuple[T1, T2, ...]: 元组，每个位置有指定类型
# Set[T]: 泛型集合
# Optional[T]: T | None (Python 3.10+ 可以用 | 语法)
# Union[T1, T2]: T1 | T2 (Python 3.10+ 可以用 | 语法)
# Any: 任意类型
# NoReturn: 函数永不返回
# Callable: 可调用对象（函数、方法等）

# Python 3.10+ 简化语法：
# old: Union[str, int]
# new: str | int
# old: Optional[str]
# new: str | None
```

### 1.3 泛型
泛型允许我们创建可重用的组件，同时保持类型安全。定义类型变量`T`用于表示任意类型，在使用时指定具体类型。
```python
# ========== 泛型 ==========
from typing import TypeVar, Generic

# 定义类型变量 T
# TypeVar 用于定义泛型类型参数
T = TypeVar('T')  # T 可以是任意类型

""" 创建泛型缓存类 """
class Cache(Generic[T]):
    def __init__(self):
        # 使用 T 作为值的类型
        self._cache: Dict[str, T] = {}
    
    def get(self, key: str) -> T:
        """获取缓存值"""
        return self._cache.get(key)
    
    def set(self, key: str, value: T) -> None:
        """设置缓存值"""
        self._cache[key] = value

# 使用泛型类（指定具体类型）
int_cache: Cache[int] = Cache()  # 整数类型的缓存
int_cache.set("count", 42)

str_cache: Cache[str] = Cache()  # 字符串类型的缓存
str_cache.set("name", "Alice")

# 泛型的好处：
# 1. 类型安全：编译器可以检查类型兼容性
# 2. 代码复用：同一个类可以处理不同类型
# 3. 文档清晰：明确说明类/函数支持的类型

# 多个类型参数示例：
# K = TypeVar('K')
# V = TypeVar('V')
# class Map(Generic[K, V]):
#     def __setitem__(self, key: K, value: V) -> None:
#         pass
```

### 1.4 结构子类型（Protocol）
基础篇中的鸭子类型（Duck Typing）就是一种动态类型的概念（只要具备约定的行为，就可以归为同一类型）。
`Protocol` 是结构子类型（鸭子类型）的类型安全实现。 任何类只要实现了协议中定义的方法，就被认为是该协议的实现。结构化（structural）类型系统的原生支持——只要满足协议，无需任何继承关系。

```python
# ========== Protocol（结构子类型）==========
from typing import Protocol, runtime_checkable

""" 向量器协议（定义接口契约） """
# @runtime_checkable 装饰器：使协议可以用于 isinstance 检查
@runtime_checkable
class Vectorizer(Protocol):

    def vectorize(self, text: str) -> List[float]:
        """将单篇文本向量化"""
        ...  # 省略号表示抽象方法（不需要实现）
    
    def batch_vectorize(self, texts: List[str]) -> List[List[float]]:
        """将多篇文本批量向量化"""
        ...

# 实现协议的类（不需要显式继承）
class TFIDFVectorizer:
    """TF-IDF向量器"""
    
    def vectorize(self, text: str) -> List[float]:
        """将单篇文本向量化"""
        return [0.1, 0.2, 0.3]  # 模拟向量
    
    def batch_vectorize(self, texts: List[str]) -> List[List[float]]:
        """将多篇文本批量向量化"""
        return [[0.1, 0.2, 0.3] for _ in texts]

# 使用协议作为类型注解
def process_documents(vectorizer: Vectorizer, docs: List[str]):
    """处理文档（接受任何实现 Vectorizer 协议的对象）"""
    return vectorizer.batch_vectorize(docs)

# 验证协议匹配
tfidf = TFIDFVectorizer()
print(isinstance(tfidf, Vectorizer))  # True（因为 @runtime_checkable）

# 调用函数
result = process_documents(tfidf, ["document1", "document2"])

# Protocol vs 抽象基类：
# - Protocol：结构子类型（鸭子类型的类型安全版本）
# - ABC（抽象基类）：名义子类型（需要显式继承）
# - Protocol 更灵活，适合解耦接口定义和实现
```

## 2、上下文管理器
在基础篇中我们学习了文件操作时使用 `with` 语句，上下文管理器是Python中用于资源管理的重要机制，通过 `with` 语句实现资源的自动获取和释放。上下文管理器确保资源在使用完毕后被正确清理，即使发生异常也能保证资源释放。

在AI应用中，上下文管理器常用于：
- **数据库连接**：自动打开和关闭连接
- **文件操作**：自动打开和关闭文件
- **锁管理**：自动获取和释放锁
- **事务管理**：自动提交或回滚事务

### 2.1 类形式上下文管理器
**类形式上下文管理器** 通过实现两个特殊方法来工作：
- `__enter__()`：进入上下文时调用，返回上下文对象
- `__exit__()`：退出上下文时调用，处理资源清理和异常

```python
# ========== 类形式上下文管理器 ==========
"""数据库事务管理器"""
class DatabaseTransaction:
    def __init__(self, connection):
        """初始化事务管理器"""
        self.conn = connection  # 数据库连接
    
    def __enter__(self):
        """进入上下文：开始事务"""
        self.conn.begin()  # 开始数据库事务
        return self        # 返回上下文对象供 with 语句使用
    
    def __exit__(self, exc_type, exc_val, exc_tb):
        """ 退出上下文：提交或回滚事务
                Args:
                    exc_type: 异常类型（None表示没有异常）
                    exc_val: 异常值
                    exc_tb: 异常追踪信息
                Returns:
                    True: 异常已处理，不再向上传播
                    False: 异常未处理，继续向上传播
        """
        if exc_type is None:
            # 无异常，提交事务
            self.conn.commit()
            print("Transaction committed")
        else:
            # 有异常，回滚事务
            self.conn.rollback()
            print(f"Transaction rolled back: {exc_val}")

        return False  # 让异常继续传播（如果有）

# 使用示例
# with DatabaseTransaction(db) as tx:
#     tx.conn.execute("INSERT INTO users ...")
#     tx.conn.execute("UPDATE orders ...")
# 执行流程：
# 1. with 语句调用 __enter__，开始事务
# 2. 执行 with 块内的代码
# 3. 如果正常结束，__exit__ 提交事务
# 4. 如果发生异常，__exit__ 回滚事务

# 使用场景：
#    - 数据库事务管理（自动提交或回滚）
#    - 文件操作（自动关闭）
#    - 锁管理（自动释放）
```

### 2.2 生成器形式
使用 `@contextmanager` 装饰器可以更简洁地创建上下文管理器。

```python
# ========== 生成器形式上下文管理器 ==========
from contextlib import contextmanager

""" 资源管理器（生成器形式）
        使用 @contextmanager 装饰器将生成器转换为上下文管理器：
        - yield 之前的代码：进入上下文时执行（相当于 __enter__）
        - yield 语句：返回值给 with 语句
        - yield 之后的代码：退出上下文时执行（相当于 __exit__，无论是否发生异常）
"""
@contextmanager
def managed_resource(name):
    # ========== 进入上下文（__enter__ 部分）==========
    print(f"Acquiring {name}")
    resource = f"Resource:{name}"
    
    try:
        # 返回资源给 with 语句
        yield resource
    finally:
        # ========== 退出上下文（__exit__ 部分）==========
        # 无论是否发生异常，都会执行这里
        print(f"Releasing {name}")

# 使用示例
with managed_resource("GPU") as res:
    print(f"Using {res}")

# 输出：
# Acquiring GPU
# Using Resource:GPU
# Releasing GPU

# 执行流程：
# 1. with 语句调用生成器
# 2. 执行到 yield 之前的代码（获取资源）
# 3. yield 返回资源，赋值给 res
# 4. 执行 with 块内的代码
# 5. 执行 finally 块（释放资源）
```

### 2.3 嵌套上下文管理器
使用 `ExitStack` 可以管理多个上下文管理器。

```python
# ========== 嵌套上下文管理器 ==========
from contextlib import ExitStack

def process_files(filenames):
    """ 处理多个文件（使用 ExitStack 管理多个上下文）
            ExitStack 的作用：
            - 管理多个上下文管理器
            - 自动调用所有上下文的 __exit__ 方法
            - 即使某个操作失败，也能保证所有已获取的资源被正确释放
    """
    # 创建 ExitStack
    with ExitStack() as stack:
        # 使用 enter_context 注册多个上下文管理器
        # 所有文件会在 with 块结束时自动关闭
        files = [
            stack.enter_context(open(fname, 'r'))
            for fname in filenames
        ]
        # 处理所有文件
        for f in files:
            print(f.read())
    # 退出 with 块后，所有文件已自动关闭

# 使用示例
# process_files(['file1.txt', 'file2.txt', 'file3.txt'])

# ExitStack 工作原理：
# 1. 创建 ExitStack 对象
# 2. 调用 enter_context 时，记录上下文管理器
# 3. 退出 with 块时，按相反顺序调用所有上下文的 __exit__
# 4. 如果某个 __exit__ 失败，会继续处理其他资源的清理

# 使用场景：
#    - 动态数量的资源管理
#    - 不确定需要打开多少个文件/连接
#    - 需要同时管理多个资源
#    - 临时文件管理、据库连接池、网络连接管理
```


## 3、装饰器（Decorator）
装饰器是Python中一种强大的元编程工具，允许在不修改函数或类源代码的情况下，动态地增强其功能。装饰器的核心优势在于**代码复用**和**关注点分离**，将横切关注点（如日志、缓存）与业务逻辑解耦。

在AI应用中，装饰器常用于：
- **缓存**：缓存函数返回值，避免重复计算
- **日志记录**：自动记录函数调用信息
- **性能监控**：统计函数执行时间
- **权限验证**：检查用户权限
- **重试机制**：自动重试失败的操作

### 3.1 基础装饰器
**基础装饰器** 是最简单的装饰器形式，直接接受一个函数作为参数，并返回一个包装函数。包装函数会在原函数执行前后添加额外逻辑。

使用 `@functools.wraps` 装饰器可以保留原函数的元信息（如函数名、文档字符串），这对于调试和自省非常重要。

```python
import functools
import time

# ========== 基础装饰器 ==========
""" 计时装饰器：记录函数执行时间
        Args: 被装饰的函数
        Returns: 包装后的函数
"""
def timer(func):
    # @functools.wraps(func) 保留原函数的元信息（函数名、文档字符串等）
    @functools.wraps(func)
    def wrapper(*args, **kwargs):
        """包装函数：在原函数执行前后添加计时逻辑"""
        start = time.time()              # 记录开始时间
        result = func(*args, **kwargs)   # 调用原函数，保存返回值
        elapsed = time.time() - start    # 计算耗时
        print(f"{func.__name__} took {elapsed:.2f}s")  # 输出耗时信息
        return result                   # 返回原函数的结果
    return wrapper

# 使用装饰器
@timer
def slow_function():
    """示例慢函数"""
    time.sleep(1)  # 模拟耗时操作
    return "Done"

# 调用被装饰后的函数
slow_function()
# 输出: slow_function took 1.00s

# 装饰器工作原理：
# 1. @timer 等价于 slow_function = timer(slow_function)
# 2. timer 返回 wrapper 函数
# 3. 调用 slow_function() 实际调用的是 wrapper()
```

### 3.2 带参数的装饰器
**带参数的装饰器** 允许在装饰时传入额外的配置参数，使装饰器更加灵活。带参数的装饰器实际上是一个**装饰器工厂函数**，它接受参数并返回一个装饰器。

```python
# ========== 带参数的装饰器 ==========
""" 重试装饰器工厂函数
        Args: 最大重试次数（默认3次），重试间隔（默认1秒）
        Returns: 装饰器函数
"""
def retry(max_attempts=3, delay=1):
    def decorator(func):
        """装饰器：接受被装饰的函数"""
        @functools.wraps(func)
        def wrapper(*args, **kwargs):
            """包装函数：实现重试逻辑"""
            for attempt in range(max_attempts):
                try:
                    # 尝试调用原函数
                    return func(*args, **kwargs)
                except Exception as e:
                    # 检查是否是最后一次尝试
                    if attempt == max_attempts - 1:
                        # 最后一次失败，抛出异常
                        raise
                    # 打印失败信息并等待
                    print(f"Attempt {attempt + 1} failed: {e}")
                    time.sleep(delay)
        return wrapper
    return decorator

# 使用带参数的装饰器
@retry(max_attempts=3, delay=2)
def unreliable_api_call():
    """模拟不稳定的API调用"""
    import random
    # 70%概率抛出异常
    if random.random() < 0.7:
        raise ConnectionError("Network error")
    return "Success"

# 调用被装饰后的函数
unreliable_api_call()
# 输出: Attempt 1 failed: Network error
# 输出: Attempt 2 failed: Network error
# 输出: Attempt 3 failed: Network error
# 输出: Success

# 带参数装饰器的工作流程：
# 1. @retry(max_attempts=3, delay=2) 调用 retry(3, 2)
# 2. retry 返回 decorator 函数
# 3. decorator(unreliable_api_call) 返回 wrapper
# 4. unreliable_api_call = wrapper
```

### 3.3 类装饰器
**类装饰器** 是使用类实现的装饰器，核心是通过实现 `__call__` 方法使其可调用，该方法接受被装饰的类或函数作为参数并返回修改后的对象。

```python
# ========== 类装饰器 ==========
""" 类装饰器：实现单例模式
        1. 实现 __call__ 方法使类实例可调用
        2. 在 __call__ 中检查类是否已有实例
        3. 如果没有则创建并缓存，否则返回缓存的实例
"""
class Singleton:
    # 类变量：存储所有单例实例
    _instances = {}
    def __call__(self, cls):
        """ 当装饰器被应用时调用
                Args:
                    cls: 被装饰的类
                Returns:
                    该类的唯一实例
        """
        # 检查该类是否已有实例
        if cls not in self._instances:
            # 创建实例并缓存
            self._instances[cls] = cls()
        # 返回已存在的实例
        return self._instances[cls]

# 使用类装饰器（注意需要调用 Singleton()）
@Singleton()
class Database:
    """数据库连接类（单例）"""
    def __init__(self):
        self.connection = "connected"

# 创建实例
db1 = Database()
db2 = Database()

# 验证单例：两个变量指向同一个实例
print(db1 is db2)  # 输出: True

# 类装饰器与函数装饰器的区别：
# 1. 类装饰器使用类实现，函数装饰器使用函数实现
# 2. 类装饰器可以维护状态（通过实例变量）
# 3. 类装饰器更适合需要复杂逻辑或状态管理的场景
```

### 3.4 缓存装饰器
对于计算密集型操作（如向量计算、模型推理），缓存可以显著提高性能。

```python
# ========== 缓存装饰器 ==========
""" 缓存装饰器：缓存函数返回值，避免重复计算 """
def cached(func):
    # 缓存字典：key -> 函数返回值
    cache = {}
    
    @functools.wraps(func)
    def wrapper(*args, **kwargs):
        """包装函数：实现缓存逻辑"""
        # 生成缓存键（基于参数）
        key = str(args) + str(kwargs)
        # 检查缓存是否命中
        if key not in cache:
            # 缓存未命中，调用原函数并缓存结果
            cache[key] = func(*args, **kwargs)
        # 返回缓存的值
        return cache[key]
    
    # 为包装函数添加额外属性
    wrapper.cache = cache                     # 暴露缓存字典（查看缓存内容）
    wrapper.clear_cache = lambda: cache.clear()  # 清空缓存的方法
    
    return wrapper

# 使用缓存装饰器
@cached
def compute_embedding(text: str) -> list:
    """计算文本向量（模拟）"""
    # 模拟耗时计算
    return [hash(text) % 100 for _ in range(10)]

# 使用示例
result1 = compute_embedding("Hello")  # 第一次调用，计算并缓存
result2 = compute_embedding("Hello")  # 第二次调用，直接返回缓存

# 缓存大小（如果有多个不同输入）
# print(len(compute_embedding.cache))
# 清空缓存
# compute_embedding.clear_cache()

# 适用场景：
# - 计算密集型操作（如向量计算、模型推理）
# - 函数返回值只依赖于输入参数
# - 函数没有副作用（不会修改外部状态）
```


## 4、异步编程（Asyncio）
在基础篇中我们学习了多线程编程，异步编程是另一种并发编程方式，更适合IO密集型任务。异步编程的核心优势在于**非阻塞IO**，当一个任务等待IO操作时，可以切换到其他任务执行，从而提高整体吞吐量。

在AI应用中，特别适用于以下场景：
- **WebSocket实时通信**：语音助手的双向数据流
- **流式处理**：ASR/TTS的实时音频流
- **并发API调用**：同时调用多个LLM服务
- **IO密集型任务**：数据库查询、网络请求

### 4.1 协程
**协程（Coroutine）** 是一种轻量级的并发编程方式，允许在单个线程内实现多个任务的切换执行。与线程不同，协程的调度由程序员控制，不需要操作系统介入，因此开销更小、效率更高。

Python中使用 `async def` 定义协程函数，使用 `await` 关键字挂起协程执行。协程本质上是可暂停的函数，可以在暂停点保存状态，并在恢复时继续执行。

```python
import asyncio

# ========== 协程定义 ==========
# 使用 async def 定义协程函数
async def task1():
    # await 关键字：挂起当前协程，执行其他任务
    await asyncio.sleep(1)  # 模拟1秒IO操作（非阻塞）
    return "Task 1 done"    # 返回结果

async def task2():
    await asyncio.sleep(2)  # 模拟2秒IO操作
    return "Task 2 done"

# ========== 并发执行 ==========
async def concurrent_demo():
    # asyncio.gather()：并发执行多个协程，等待所有完成后收集结果
    results = await asyncio.gather(
        task1(),           # 启动协程1
        task2(),           # 启动协程2（与task1并发执行）
        return_exceptions=True  # 异常不中断其他任务，异常作为结果返回
    )
    print(results)  # 输出: ['Task 1 done', 'Task 2 done']

# ========== 程序入口 ==========
# asyncio.run()：运行主协程，管理事件循环
asyncio.run(concurrent_demo())

# 执行流程说明：
# 1. asyncio.run() 创建事件循环并运行 concurrent_demo
# 2. concurrent_demo 调用 asyncio.gather(task1(), task2())
# 3. task1 和 task2 并发执行（不是真正并行，而是在IO等待时切换）
# 4. task1 先完成（1秒），task2 后完成（2秒）
# 5. gather 收集结果并返回
```

### 4.2 异步上下文管理器
**异步上下文管理器** 是上下文管理器的异步版本，允许在异步环境中安全地管理资源。它使用 `async with` 语句，在进入和退出上下文时执行异步操作。

异步上下文管理器需要实现两个特殊方法：
- `__aenter__()`：进入上下文时调用，返回上下文对象
- `__aexit__()`：退出上下文时调用，处理资源清理（无论是否发生异常）

```python
"""实现异步上下文管理器 - 异步数据库连接"""
class AsyncDatabaseConnection:
    
    async def __aenter__(self):
        """ 进入异步上下文时调用：建立数据库连接 """
        await self.connect()  # 异步连接数据库
        return self           # 返回上下文对象供 async with 语句使用
    
    async def __aexit__(self, exc_type, exc_val, exc_tb): # exc_type: 异常类型（如果有），exc_val: 异常值（如果有），exc_tb: 异常追踪信息（如果有）
        """ 退出异步上下文时调用：关闭数据库连接 """
        await self.close()    # 异步关闭连接（确保资源释放）
    
    async def connect(self):
        """建立数据库连接（模拟）"""
        print("Connecting...")
        await asyncio.sleep(0.5)  # 模拟网络延迟
        self.connected = True     # 标记连接状态
    
    async def close(self):
        """关闭数据库连接（模拟）"""
        print("Closing...")
        self.connected = False    # 标记连接已关闭

"""使用异步数据库连接"""
async def use_connection():
    # async with 自动调用 __aenter__ 和 __aexit__
    async with AsyncDatabaseConnection() as conn:
        print(f"Connected: {conn.connected}")
        # 执行数据库操作（在 async with 块内）
    
    # 退出 async with 块后，__aexit__ 自动被调用，连接已关闭
asyncio.run(use_connection())

# 输出：
# Connecting...
# Connected: True
# Closing...

# 应用场景：
# 1. 异步数据库连接的自动管理
# 2. 异步文件操作
# 3. 异步锁的获取和释放
```

### 4.3 异步迭代器
**异步迭代器** 允许在异步环境中进行迭代操作，是处理流式数据的重要工具。

异步迭代器需要实现两个特殊方法：
- `__aiter__()`：返回迭代器对象本身
- `__anext__()`：返回下一个元素的协程，当迭代结束时抛出 `StopAsyncIteration`

```python
"""实现异步迭代器 - 异步数据流"""
class AsyncDataStream:

    def __init__(self, max_items=10):
        """初始化数据流"""
        self.items = list(range(max_items))  # 生成模拟数据
        self.index = 0                       # 当前迭代位置
    
    def __aiter__(self):
        """返回迭代器对象本身"""
        return self
    
    async def __anext__(self):
        """异步返回下一个元素"""
        # 检查是否到达末尾
        if self.index >= len(self.items):
            raise StopAsyncIteration  # 抛出异常表示迭代结束
        
        # 获取当前元素
        item = self.items[self.index]
        self.index += 1
        
        # 模拟异步数据获取延迟（如网络请求）
        await asyncio.sleep(0.1)
        
        return item

"""消费异步数据流"""
async def consume_stream():
    # async for: 异步迭代，每次迭代时等待 __anext__ 完成
    async for item in AsyncDataStream(5):
        print(f"Received: {item}")

asyncio.run(consume_stream())

# 输出（每隔0.1秒输出一行）：
# Received: 0
# Received: 1
# Received: 2
# Received: 3
# Received: 4

# 应用场景：
# 1. 处理流式API返回的数据
# 2. 处理实时音频/视频流
# 3. 处理大数据集的分批加载
```


## 5、日志系统
Python的`logging`模块提供了灵活的日志配置能力，支持多种日志级别、格式和输出目标。

### 5.1 基础配置

```python
# ========== 日志系统基础配置 ==========
import logging

# 配置日志系统
logging.basicConfig(
    level=logging.INFO,  # 设置日志级别（DEBUG < INFO < WARNING < ERROR < CRITICAL）
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s',  # 日志格式
    handlers=[
        logging.FileHandler('app.log'),  # 输出到文件
        logging.StreamHandler()          # 输出到控制台
    ]
)

# 获取日志记录器（使用模块名作为日志器名称）
logger = logging.getLogger(__name__)

# 使用日志记录器
logger.debug("This is a debug message")   # 低于 INFO 级别，不会输出
logger.info("Application started")        # 输出到文件和控制台
logger.warning("This is a warning")       # 警告级别
logger.error("This is an error")         # 错误级别

# 日志级别说明：
# - DEBUG: 详细的调试信息
# - INFO: 程序正常运行的信息
# - WARNING: 警告信息（可能的问题）
# - ERROR: 错误信息（功能无法正常执行）
# - CRITICAL: 严重错误（程序可能无法继续运行）

# 日志格式说明：
# - %(asctime)s: 时间戳
# - %(name)s: 日志器名称
# - %(levelname)s: 日志级别
# - %(message)s: 日志消息
# - %(funcName)s: 函数名
# - %(lineno)d: 行号
```

### 5.2 高级配置

```python
# ========== 日志系统高级配置 ==========
import logging
from logging.handlers import RotatingFileHandler
import logging.config

# 字典形式的日志配置
LOGGING_CONFIG = {
    'version': 1,  # 配置版本（必须为1）
    'disable_existing_loggers': False,  # 是否禁用已存在的日志器
    
    # ========== 格式器（Formatters）==========
    # 定义日志输出格式
    'formatters': {
        'detailed': {
            # 详细格式：包含时间、日志器名、级别、函数名、行号、消息
            'format': '%(asctime)s - %(name)s - %(levelname)s - %(funcName)s:%(lineno)d - %(message)s'
        },
        'simple': {
            # 简单格式：只包含级别和消息
            'format': '%(levelname)s - %(message)s'
        }
    },
    
    # ========== 处理器（Handlers）==========
    # 定义日志输出目标
    'handlers': {
        'console': {
            'class': 'logging.StreamHandler',  # 控制台输出
            'level': 'INFO',                   # 只处理 INFO 及以上级别
            'formatter': 'simple'              # 使用简单格式
        },
        'file': {
            'class': 'logging.handlers.RotatingFileHandler',  # 轮转文件处理器
            'filename': 'app.log',                           # 日志文件名
            'maxBytes': 1024 * 1024 * 10,                   # 单个文件最大10MB
            'backupCount': 5,                               # 保留5个备份文件
            'formatter': 'detailed'                          # 使用详细格式
        }
    },
    
    # ========== 日志器（Loggers）==========
    # 定义具体的日志记录器
    'loggers': {
        'ai': {
            'level': 'DEBUG',             # 日志级别设为 DEBUG
            'handlers': ['console', 'file'],  # 输出到控制台和文件
            'propagate': False            # 不向上传播日志
        }
    }
}

# 应用配置
logging.config.dictConfig(LOGGING_CONFIG)

# 获取特定名称的日志器
ai_logger = logging.getLogger('ai.model')  # 属于 'ai' 日志器的子日志器

# 使用日志器
ai_logger.debug("Model loaded")    # DEBUG 级别，会输出到文件和控制台
ai_logger.info("Processing request")
ai_logger.warning("Deprecated API")

# RotatingFileHandler 特点：
# - 当文件达到 maxBytes 时，自动创建新文件
# - 保留 backupCount 个备份文件
# - 文件命名格式：app.log.1, app.log.2, ..., app.log.5
```
