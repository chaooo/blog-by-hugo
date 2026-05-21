---
title: 「学习笔记」Python进阶编程（AI应用）
date: 2025-06-02 18:22:17
tags: [Python编程, 学习笔记, 异步编程, 装饰器]
categories: [Python编程]
series: Python编程
toc: true
---

## 一、异步编程（Asyncio）
异步编程的核心优势在于**非阻塞IO**，当一个任务等待IO操作时，可以切换到其他任务执行，从而提高整体吞吐量。

在AI应用中，特别适用于以下场景：
- **WebSocket实时通信**：语音助手的双向数据流
- **流式处理**：ASR/TTS的实时音频流
- **并发API调用**：同时调用多个LLM服务
- **IO密集型任务**：数据库查询、网络请求

### 1.1 协程
**协程（Coroutine）** 是一种轻量级的并发编程方式，允许在单个线程内实现多个任务的切换执行。与线程不同，协程的调度由程序员控制，不需要操作系统介入，因此开销更小、效率更高。

Python中使用 `async def` 定义协程函数，使用 `await` 关键字挂起协程执行。协程本质上是可暂停的函数，可以在暂停点保存状态，并在恢复时继续执行。
```python
import asyncio

# 定义协程函数
async def task1():
    await asyncio.sleep(1)
    return "Task 1 done"
async def task2():
    await asyncio.sleep(2)
    return "Task 2 done"

async def concurrent_demo():
    # 并发执行多个协程
    results = await asyncio.gather(
        task1(),
        task2(),
        return_exceptions=True  # 捕获异常
    )
    print(results)

asyncio.run(concurrent_demo())
```

### 1.2 异步上下文管理器
**异步上下文管理器** 是上下文管理器的异步版本，允许在异步环境中安全地管理资源。它使用 `async with` 语句，在进入和退出上下文时执行异步操作。

在AI应用中，常用于： ①异步数据库连接的自动管理； ②异步文件操作； ③异步锁的获取和释放；

异步上下文管理器需要实现两个特殊方法：
- `__aenter__()`：进入上下文时调用，返回上下文对象
- `__aexit__()`：退出上下文时调用，处理资源清理

```python
class AsyncDatabaseConnection:
    """异步数据库连接"""
    
    async def __aenter__(self):
        # 异步初始化
        await self.connect()
        return self
    
    async def __aexit__(self, exc_type, exc_val, exc_tb):
        # 异步清理
        await self.close()
    
    async def connect(self):
        print("Connecting...")
        await asyncio.sleep(0.5)
        self.connected = True
    
    async def close(self):
        print("Closing...")
        self.connected = False

async def use_connection():
    async with AsyncDatabaseConnection() as conn:
        print(f"Connected: {conn.connected}")
        # 执行数据库操作

asyncio.run(use_connection())
```

### 1.3 异步迭代器与生成器
**异步迭代器** 允许在异步环境中进行迭代操作，是处理流式数据的重要工具。

在AI应用中，常用于： ①处理流式API返回的数据；②处理实时音频/视频流；③处理大数据集的分批加载；

异步迭代器需要实现两个特殊方法：
- `__aiter__()`：返回迭代器对象本身
- `__anext__()`：返回下一个元素的协程，当迭代结束时抛出 `StopAsyncIteration`

```python
class AsyncDataStream:
    """异步数据流"""
    
    def __init__(self, max_items=10):
        self.items = list(range(max_items))
        self.index = 0
    
    def __aiter__(self):
        return self
    
    async def __anext__(self):
        if self.index >= len(self.items):
            raise StopAsyncIteration
        
        item = self.items[self.index]
        self.index += 1
        await asyncio.sleep(0.1)  # 模拟处理延迟
        return item

async def consume_stream():
    async for item in AsyncDataStream(5):
        print(f"Received: {item}")

asyncio.run(consume_stream())
```

**异步生成器** 是一种简化的异步迭代器实现方式，使用 `async def` 和 `yield` 语句创建。

## 二、装饰器（Decorator）
**装饰器** 是Python中一种强大的元编程工具，允许在不修改函数或类源代码的情况下，动态地增强其功能。
装饰器的核心优势在于**代码复用**和**关注点分离**，将横切关注点（如日志、缓存）与业务逻辑解耦。
装饰器本质上是一个接受函数作为参数并返回新函数的函数。

在AI应用中，装饰器常用于：
- **缓存**：缓存函数返回值，避免重复计算
- **日志记录**：自动记录函数调用信息
- **性能监控**：统计函数执行时间
- **权限验证**：检查用户权限
- **重试机制**：自动重试失败的操作


### 2.1 基础装饰器
**基础装饰器** 是最简单的装饰器形式，直接接受一个函数作为参数，并返回一个包装函数。包装函数会在原函数执行前后添加额外逻辑。

使用 `@functools.wraps` 装饰器可以保留原函数的元信息（如函数名、文档字符串），这对于调试和自省非常重要。
```python
import functools
import time

def timer(func):
    """计时装饰器"""
    @functools.wraps(func)
    def wrapper(*args, **kwargs):
        start = time.time()
        result = func(*args, **kwargs)
        elapsed = time.time() - start
        print(f"{func.__name__} took {elapsed:.2f}s")
        return result
    return wrapper

@timer
def slow_function():
    time.sleep(1)
    return "Done"

slow_function()
```

### 2.2 带参数的装饰器
**带参数的装饰器** 允许在装饰时传入额外的配置参数，使装饰器更加灵活。带参数的装饰器实际上是一个**装饰器工厂函数**，它接受参数并返回一个装饰器。

在AI应用中，带参数的装饰器常用于：
- 配置缓存过期时间
- 配置重试次数和延迟
- 配置日志级别

```python
def retry(max_attempts=3, delay=1):
    """重试装饰器"""
    def decorator(func):
        @functools.wraps(func)
        def wrapper(*args, **kwargs):
            for attempt in range(max_attempts):
                try:
                    return func(*args, **kwargs)
                except Exception as e:
                    if attempt == max_attempts - 1:
                        raise
                    print(f"Attempt {attempt + 1} failed: {e}")
                    time.sleep(delay)
        return wrapper
    return decorator

@retry(max_attempts=3, delay=2)
def unreliable_api_call():
    import random
    if random.random() < 0.7:
        raise ConnectionError("Network error")
    return "Success"
```

### 2.3 类装饰器
**类装饰器** 是使用类实现的装饰器，核心是通过实现 `__call__` 方法使其可调用，该方法接受被装饰的类或函数作为参数并返回修改后的对象。类装饰器比函数装饰器更灵活，可以维护状态信息。

在AI应用中，类装饰器常用于：
- **单例模式**：确保类只有一个实例
- **状态管理**：在多次装饰调用间保持状态
- **复杂装饰逻辑**：需要更复杂的初始化和清理逻辑

```python
class Singleton:
    """单例装饰器"""
    _instances = {}
    
    def __call__(self, cls):
        if cls not in self._instances:
            self._instances[cls] = cls()
        return self._instances[cls]

@Singleton()
class Database:
    pass

db1 = Database()
db2 = Database()
print(db1 is db2)  # True
```

### 2.4 装饰器常见的应用场景
**缓存装饰器**：对于计算密集型操作（如向量计算、模型推理），缓存可以显著提高性能。

```python
def cached(func):
    """缓存装饰器"""
    cache = {}
    
    @functools.wraps(func)
    def wrapper(*args, **kwargs):
        key = str(args) + str(kwargs)
        if key not in cache:
            cache[key] = func(*args, **kwargs)
        return cache[key]
    
    wrapper.cache = cache
    wrapper.clear_cache = lambda: cache.clear()
    return wrapper

@cached
def compute_embedding(text: str) -> list:
    """计算文本向量（模拟）"""
    return [hash(text) % 100 for _ in range(10)]
```


## 三、上下文管理器
**上下文管理器** 是Python中用于资源管理的重要机制，通过 `with` 语句实现资源的自动获取和释放。上下文管理器确保资源在使用完毕后被正确清理，即使发生异常也能保证资源释放。上下文管理器的核心优势在于**资源安全**和**代码简洁**，避免了手动管理资源可能导致的错误。

在AI应用中，上下文管理器常用于：
- **数据库连接**：自动打开和关闭连接
- **文件操作**：自动打开和关闭文件
- **锁管理**：自动获取和释放锁
- **事务管理**：自动提交或回滚事务

### 3.1 类形式上下文管理器
**类形式上下文管理器** 通过实现两个特殊方法来工作：
- `__enter__()`：进入上下文时调用，返回上下文对象
- `__exit__()`：退出上下文时调用，处理资源清理和异常

```python
class DatabaseTransaction:
    """数据库事务管理器"""
    
    def __init__(self, connection):
        self.conn = connection
    
    def __enter__(self):
        self.conn.begin()
        return self
    
    def __exit__(self, exc_type, exc_val, exc_tb):
        if exc_type is None:
            self.conn.commit()
        else:
            self.conn.rollback()
        return False  # 不吞没异常

with DatabaseTransaction(db) as tx:
    tx.conn.execute("INSERT ...")
    tx.conn.execute("UPDATE ...")
```

### 3.2 生成器形式
```python
from contextlib import contextmanager

@contextmanager
def managed_resource(name):
    """资源管理器"""
    print(f"Acquiring {name}")
    resource = f"Resource:{name}"
    try:
        yield resource
    finally:
        print(f"Releasing {name}")

with managed_resource("GPU") as res:
    print(f"Using {res}")
```

### 3.3 嵌套上下文管理器
```python
from contextlib import ExitStack

def process_files(filenames):
    """处理多个文件"""
    with ExitStack() as stack:
        files = [
            stack.enter_context(open(fname, 'r'))
            for fname in filenames
        ]
        # 所有文件在离开with块时自动关闭
        for f in files:
            print(f.read())
```


## 四、日志系统
Python的`logging`模块提供了灵活的日志配置能力，支持多种日志级别、格式和输出目标。

### 4.1 基础配置
```python
import logging
import logging.config

logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s',
    handlers=[
        logging.FileHandler('app.log'),
        logging.StreamHandler()
    ]
)

logger = logging.getLogger(__name__)
logger.info("Application started")
```

### 4.2 高级配置
```python
import logging
from logging.handlers import RotatingFileHandler

# 创建日志配置
LOGGING_CONFIG = {
    'version': 1,
    'disable_existing_loggers': False,
    'formatters': {
        'detailed': {
            'format': '%(asctime)s - %(name)s - %(levelname)s - %(funcName)s:%(lineno)d - %(message)s'
        },
        'simple': {
            'format': '%(levelname)s - %(message)s'
        }
    },
    'handlers': {
        'console': {
            'class': 'logging.StreamHandler',
            'level': 'INFO',
            'formatter': 'simple'
        },
        'file': {
            'class': 'logging.handlers.RotatingFileHandler',
            'filename': 'app.log',
            'maxBytes': 1024 * 1024 * 10,  # 10MB
            'backupCount': 5,
            'formatter': 'detailed'
        }
    },
    'loggers': {
        'ai': {
            'level': 'DEBUG',
            'handlers': ['console', 'file'],
            'propagate': False
        }
    }
}

logging.config.dictConfig(LOGGING_CONFIG)
ai_logger = logging.getLogger('ai.model')
ai_logger.debug("Model loaded")
```


## 五、类型注解
**类型注解** 是Python 3.5+引入的特性，允许为变量、函数参数和返回值添加类型提示。虽然Python是动态类型语言，但类型注解提供了以下好处：
- **代码可读性**：明确说明变量和函数的预期类型
- **IDE支持**：提供更好的代码补全和错误提示
- **类型检查**：可以使用mypy等工具进行静态类型检查
- **文档生成**：自动生成API文档

### 5.1 基本类型
``` Python
# 没有类型注解的代码
name = "Alice"
age = 30
is_student = False
scores = [95, 88, 91]
def greet(name):
    return f"Hello, {name}"

# 有类型注解的代码
name: str = "Alice"         # 注解为字符串 (str)
age: int = 30               # 注解为整数 (int)
is_student: bool = False    # 注解为布尔值 (bool)
scores: list = [95, 88, 91] # 注解为列表 (list)
def greet(name: str) -> str: # 有类型注解的函数,参数和返回值都是字符串
    return f"Hello, {name}"
```

### 5.2 typing 模块
基本的 str, int, bool, list 很好用，复杂类型注解需要`typing`模块提供。
``` Python
from typing import List, Dict, Tuple, Set, Optional, Union

# List[int] 表示这是一个只包含整数的列表
numbers: List[int] = [1, 2, 3, 4, 5]
# Dict[str, int] 表示这是一个键为字符串、值为整数的字典
student_scores: Dict[str, int] = {"Alice": 95, "Bob": 88}
# Tuple[int, str, bool] 表示这是一个包含整数、字符串、布尔值的元组
person_info: Tuple[int, str, bool] = (25, "Alice", True)
# Set[str] 表示这是一个只包含字符串的集合
unique_names: Set[str] = {"Alice", "Bob", "Charlie"}
# 可选类型 Optional[str] 等价于 Union[str, None] 字符串或None
name: Optional[str] = "Alice"
# 联合类型 Union 当值可能是多种类型之一时使用 
def process_input(data: Union[str, int, List[int]]) -> None:
    """处理可能是字符串、整数或整数列表的输入"""
    if isinstance(data, str):
        print(f"字符串: {data}")
    elif isinstance(data, int):
        print(f"整数: {data}")
    elif isinstance(data, list):
        print(f"列表: {data}")
process_input("hello")    # 输出：字符串: hello
process_input(42)         # 输出：整数: 42  
process_input([1, 2, 3])  # 输出：列表: [1, 2, 3]
```

### 5.3 泛型
```python
from typing import TypeVar, Generic, List, Dict, Union

T = TypeVar('T')
K = TypeVar('K')
V = TypeVar('V')

class Cache(Generic[T]):
    """泛型缓存类"""
    
    def __init__(self):
        self._cache: Dict[str, T] = {}
    
    def get(self, key: str) -> T:
        return self._cache.get(key)
    
    def set(self, key: str, value: T) -> None:
        self._cache[key] = value

# 使用泛型
int_cache: Cache[int] = Cache()
int_cache.set("count", 42)
```

### 5.4 Protocol（结构子类型）
```python
from typing import Protocol, runtime_checkable

@runtime_checkable
class Vectorizer(Protocol):
    """向量器协议"""
    
    def vectorize(self, text: str) -> List[float]:
        ...
    
    def batch_vectorize(self, texts: List[str]) -> List[List[float]]:
        ...

class TFIDFVectorizer:
    def vectorize(self, text: str) -> List[float]:
        return [0.1, 0.2, 0.3]
    
    def batch_vectorize(self, texts: List[str]) -> List[List[float]]:
        return [[0.1, 0.2, 0.3] for _ in texts]

def process_documents(vectorizer: Vectorizer, docs: List[str]):
    """处理文档，接受任何实现Vectorizer协议的类型"""
    return vectorizer.batch_vectorize(docs)
```

### 5.5 NewType与类型别名
```python
from typing import NewType, Callable, Awaitable

# 创建新类型
UserId = NewType('UserId', int)
AgentId = NewType('AgentId', str)

def get_user(user_id: UserId) -> dict:
    return {"id": user_id}

# 类型别名
Embedding = List[float]
EmbeddingMatrix = List[List[float]]
SimilarityFunc = Callable[[Embedding, Embedding], float]

# 异步类型
AsyncGenerator = Awaitable[List[float]]
```


## 六、单元测试
**单元测试** 是软件开发中的关键实践，用于验证代码的正确性和可靠性。单元测试关注代码的最小可测试单元（通常是函数或方法），确保其在各种情况下都能正确工作。

Python中常用的测试框架包括`pytest`和`unittest`，其中`pytest`以其简洁的语法和强大的功能而广受欢迎。

### 6.1 pytest基础
```python
import pytest
from typing import List

# 测试函数命名: test_开头的函数
def add(a: int, b: int) -> int:
    return a + b

def test_add_basic():
    assert add(1, 2) == 3

def test_add_negative():
    assert add(-1, -1) == -2

# 参数化测试
@pytest.mark.parametrize("input,expected", [
    (1, 2, 3),
    (0, 0, 0),
    (-1, 1, 0),
])
def test_add_parametrized(a, b, expected):
    assert add(a, b) == expected

# 异常测试
def test_divide_by_zero():
    with pytest.raises(ZeroDivisionError):
        1 / 0
```

### 6.2 Fixtures
```python
import pytest

@pytest.fixture
def sample_data():
    """提供测试数据"""
    return {
        "users": [
            {"id": 1, "name": "Alice"},
            {"id": 2, "name": "Bob"}
        ]
    }

@pytest.fixture
def db_connection():
    """数据库连接fixture"""
    conn = create_test_db()
    yield conn
    conn.cleanup()

def test_users(db_connection, sample_data):
    """使用fixtures"""
    users = db_connection.query("SELECT * FROM users")
    assert len(users) == 2

def test_data_structure(sample_data):
    assert len(sample_data["users"]) == 2
```

### 6.3 异步测试
```python
import pytest
import asyncio

@pytest.mark.asyncio
async def test_async_function():
    result = await asyncio.sleep(0.1, result=42)
    assert result == 42

@pytest.fixture
def event_loop():
    """自定义事件循环"""
    loop = asyncio.new_event_loop()
    yield loop
    loop.close()
```


## 七、并发编程
**并发编程** 是指同时处理多个任务的编程方式。在Python中，并发可以通过多种方式实现：
- **多线程**：在单个进程中运行多个线程
- **多进程**：运行多个独立进程
- **协程**：在单个线程内实现任务切换

并发编程在AI应用中的应用场景：
- **CPU密集型任务**：使用多进程充分利用多核CPU
- **IO密集型任务**：使用多线程或协程处理大量IO操作
- **实时数据流**：处理音频、视频等实时数据

### 7.1 多线程
```python
import threading
from typing import List

class ThreadPool:
    """简单线程池实现"""
    
    def __init__(self, num_threads: int = 4):
        self.num_threads = num_threads
        self._threads = []
        self._lock = threading.Lock()
        self._tasks = []
    
    def add_task(self, func, *args, **kwargs):
        """添加任务"""
        with self._lock:
            self._tasks.append((func, args, kwargs))
    
    def _worker(self):
        """工作线程"""
        while True:
            with self._lock:
                if not self._tasks:
                    break
                func, args, kwargs = self._tasks.pop(0)
            
            try:
                func(*args, **kwargs)
            except Exception as e:
                print(f"Task failed: {e}")
    
    def start(self):
        """启动线程池"""
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
    print(f"Processing {item}")

pool = ThreadPool(num_threads=3)
for i in range(10):
    pool.add_task(process_item, i)
pool.start()
pool.join()
```

### 7.2 多进程
```python
import multiprocessing
from typing import List

def parallel_compute(data: List[int]) -> int:
    """并行计算"""
    return sum(x * x for x in data)

def chunk_data(data: List[int], num_chunks: int) -> List[List[int]]:
    """分割数据"""
    chunk_size = len(data) // num_chunks
    chunks = []
    for i in range(num_chunks):
        start = i * chunk_size
        end = start + chunk_size if i < num_chunks - 1 else len(data)
        chunks.append(data[start:end])
    return chunks

if __name__ == "__main__":
    # 大数据集
    data = list(range(10_000_000))
    
    # 使用多进程
    num_processes = multiprocessing.cpu_count()
    chunks = chunk_data(data, num_processes)
    
    with multiprocessing.Pool(num_processes) as pool:
        results = pool.map(parallel_compute, chunks)
    
    total = sum(results)
    print(f"Total: {total}")
```

### 7.3 线程安全数据结构
```python
import threading

class ThreadSafeQueue:
    """线程安全队列"""
    
    def __init__(self):
        self._queue = []
        self._lock = threading.Lock()
        self._not_empty = threading.Condition(self._lock)
    
    def put(self, item):
        """添加元素"""
        with self._lock:
            self._queue.append(item)
            self._not_empty.notify()
    
    def get(self):
        """获取元素（阻塞）"""
        with self._lock:
            while not self._queue:
                self._not_empty.wait()
            return self._queue.pop(0)
    
    def empty(self):
        """检查是否为空"""
        with self._lock:
            return len(self._queue) == 0
```


## 八、元编程
**元编程** 是指编写能够操作代码的代码。在Python中，元编程允许我们在运行时动态创建、修改或检查类和函数。

元编程的核心概念包括：
- **元类**：创建类的类
- **装饰器**：修改函数或类行为的函数
- **反射**：在运行时检查和修改对象

在AI框架中，元编程被广泛用于：
- **框架设计**：创建灵活的API
- **代码生成**：自动生成重复代码
- **依赖注入**：管理组件之间的依赖关系

### 8.1 元类基础
```python
class SingletonMeta(type):
    """单例元类"""
    _instances = {}
    
    def __call__(cls, *args, **kwargs):
        if cls not in cls._instances:
            cls._instances[cls] = super().__call__(*args, **kwargs)
        return cls._instances[cls]

class Database(metaclass=SingletonMeta):
    def __init__(self):
        self.connection = "connected"

db1 = Database()
db2 = Database()
print(db1 is db2)  # True
```

### 8.2 动态类生成
```python
def create_class(class_name: str, attributes: dict):
    """动态创建类"""
    return type(class_name, (object,), attributes)

# 创建一个动态类
Person = create_class("Person", {
    "__init__": lambda self, name: setattr(self, "name", name),
    "greet": lambda self: f"Hello, {self.name}"
})

person = Person("Alice")
print(person.greet())  # Hello, Alice
```

### 8.3 类装饰器进阶
```python
def add_method(cls):
    """为类添加方法"""
    def new_method(self):
        return f"Added method for {self.__class__.__name__}"
    
    cls.new_method = new_method
    return cls

@add_method
class MyClass:
    pass

obj = MyClass()
print(obj.new_method())  # Added method for MyClass
```


## 九、内存管理
**内存管理** 是程序运行时对内存资源的分配和释放进行管理的过程。Python使用自动内存管理机制，主要包括：
- **引用计数**：跟踪对象的引用数量
- **垃圾回收**：处理循环引用等复杂情况
- **内存池**：优化小对象的分配

### 9.1 引用计数
```python
import sys

class MyObject:
    def __del__(self):
        print("Object destroyed")

obj = MyObject()
print(sys.getrefcount(obj))  # 2 (obj + getrefcount)

obj2 = obj
print(sys.getrefcount(obj))  # 3

del obj2
print(sys.getrefcount(obj))  # 2
```

### 9.2 弱引用
```python
import weakref

class Data:
    def __init__(self, value):
        self.value = value

data = Data(42)
ref = weakref.ref(data)

print(ref())  # <__main__.Data object at ...>

del data
print(ref())  # None (对象已被回收)
```

### 9.3 垃圾回收
```python
import gc

# 启用垃圾回收调试
gc.set_debug(gc.DEBUG_LEAK)

# 创建循环引用
class Node:
    def __init__(self):
        self.next = None

a = Node()
b = Node()
a.next = b
b.next = a

# 删除引用
del a
del b

# 手动触发垃圾回收
gc.collect()

# 关闭调试
gc.set_debug(0)
```


## 十、文件与I/O
**文件与I/O** 是程序与外部设备进行数据交换的基础操作。Python提供了丰富的文件处理功能，包括：
- **文件读写**：读取和写入文本和二进制文件
- **路径处理**：管理文件和目录路径
- **临时文件**：创建临时文件和目录

### 10.1 路径处理
```python
from pathlib import Path

# 创建路径对象
base_dir = Path("/home/user/projects")
project_dir = base_dir / "myproject"
data_file = project_dir / "data" / "config.json"

# 路径操作
print(data_file.exists())       # 检查是否存在
print(data_file.parent)         # 获取父目录
print(data_file.stem)           # 文件名（不含扩展名）
print(data_file.suffix)         # 文件扩展名

# 创建目录
(project_dir / "output").mkdir(parents=True, exist_ok=True)

# 遍历目录
for file in project_dir.glob("**/*.py"):
    print(file)
```

### 10.2 文件读写进阶
```python
import json
from contextlib import contextmanager

@contextmanager
def open_file(filepath, mode='r'):
    """安全文件打开"""
    file = None
    try:
        file = open(filepath, mode, encoding='utf-8')
        yield file
    finally:
        if file:
            file.close()

# 使用示例
with open_file("data.json", 'w') as f:
    json.dump({"key": "value"}, f, indent=2)

with open_file("data.json") as f:
    data = json.load(f)
    print(data)
```

### 10.3 临时文件
```python
import tempfile

# 创建临时文件
with tempfile.NamedTemporaryFile(mode='w', delete=False) as f:
    f.write("Temporary data")
    temp_path = f.name

# 使用临时文件
with open(temp_path) as f:
    print(f.read())

# 手动删除
import os
os.unlink(temp_path)
```

## 十一、正则表达式
**正则表达式** 是一种用于匹配字符串模式的强大工具。它提供了一种灵活的方式来搜索、替换和验证文本。
正则表达式的核心概念包括：
- **元字符**：具有特殊含义的字符（如`.`、`*`、`+`）
- **量词**：指定重复次数（如`{n}`、`{n,m}`）
- **分组**：将多个字符组合成一个单元
- **锚点**：匹配字符串的开始或结束

在AI应用中，正则表达式常用于：
- **文本清洗**：去除或替换不需要的字符
- **数据提取**：从文本中提取特定信息
- **格式验证**：验证邮箱、电话等格式
- **日志分析**：解析日志文件

### 11.1 高级匹配
```python
import re

# 匹配邮箱
email_pattern = r'^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$'
print(re.match(email_pattern, 'test@example.com'))  # 匹配成功

# 匹配URL
url_pattern = r'https?://[\w.-]+(?:/[\w./-]*)?'
print(re.match(url_pattern, 'https://example.com/path'))

# 捕获组
pattern = r'(\d{4})-(\d{2})-(\d{2})'
match = re.match(pattern, '2024-01-15')
if match:
    print(f"Year: {match.group(1)}, Month: {match.group(2)}, Day: {match.group(3)}")
```

### 11.2 替换与分割
```python
import re

# 替换
text = "Hello World! Hello Python!"
result = re.sub(r'Hello', 'Hi', text)
print(result)  # Hi World! Hi Python!

# 分割
text = "apple, banana; cherry orange"
result = re.split(r'[,; ]+', text)
print(result)  # ['apple', 'banana', 'cherry', 'orange']
```


## 十二、异常处理
**异常处理** 是程序运行时处理错误情况的机制。Python使用`try-except`语句来捕获和处理异常，使程序能够优雅地处理错误而不是直接崩溃。
异常处理的核心概念包括：
- **异常类型**：不同类型的错误对应不同的异常类
- **异常捕获**：使用`try-except`捕获特定类型的异常
- **异常传播**：异常会向上层调用栈传播
- **自定义异常**：创建自定义的异常类

### 12.1 自定义异常
```python
class APIError(Exception):
    """API异常"""
    def __init__(self, code: int, message: str):
        self.code = code
        self.message = message
        super().__init__(f"Error {code}: {message}")

class ValidationError(APIError):
    """验证异常"""
    def __init__(self, field: str, message: str):
        super().__init__(400, f"Validation failed for {field}: {message}")

# 使用自定义异常
def validate_email(email: str):
    if '@' not in email:
        raise ValidationError('email', 'Invalid email format')
    return email

try:
    validate_email('invalid-email')
except ValidationError as e:
    print(f"Validation error: {e.message}")
```

### 12.2 上下文异常处理
```python
class SafeOperation:
    """安全操作上下文"""
    
    def __enter__(self):
        return self
    
    def __exit__(self, exc_type, exc_val, exc_tb):
        if exc_type:
            print(f"Caught {exc_type.__name__}: {exc_val}")
            return True  # 吞没异常
        return False

with SafeOperation():
    raise ValueError("Something went wrong")
# 输出: Caught ValueError: Something went wrong
```


## 十三、模块与包
**模块** 是Python中组织代码的基本单元，一个`.py`文件就是一个模块。**包** 是包含多个模块的目录，通过`__init__.py`文件标识。

模块与包的核心概念包括：
- **模块导入**：使用`import`语句导入模块
- **相对导入**：在包内部使用相对路径导入
- **动态导入**：在运行时动态导入模块
- **包初始化**：在`__init__.py`中执行初始化代码

### 13.1 导入机制
```python
# 相对导入
from .utils import helper_function
from ..config import settings

# 动态导入
module = __import__('math')
print(module.sqrt(16))  # 4.0

# 使用importlib
import importlib
utils = importlib.import_module('.utils', package='mypackage')
```

### 13.2 包初始化
```python
# __init__.py

# 导出公共API
from .core import LLMClient, RAGPipeline
from .utils import logger, config

# 包级别变量
__version__ = "1.0.0"
__author__ = "AI Team"

# 包初始化逻辑
def initialize():
    """初始化包"""
    logger.info(f"Initializing {__name__} v{__version__}")
```


## 十四、性能优化
**性能优化** 是改进程序执行效率和资源使用的过程。在Python中，性能优化通常包括：
- **算法优化**：选择更高效的算法和数据结构
- **代码优化**：优化代码结构和执行流程
- **工具辅助**：使用性能分析工具定位瓶颈
- **并行计算**：利用多线程、多进程或协程

在AI应用中，性能优化尤为重要，因为：
- **模型训练**：加速训练过程
- **推理速度**：提高模型推理的响应速度
- **内存使用**：优化内存占用
- **资源利用率**：充分利用硬件资源

### 14.1 性能分析
```python
import cProfile
import pstats

def slow_function():
    """慢函数"""
    result = 0
    for i in range(1_000_000):
        result += i * i
    return result

# 使用cProfile
profiler = cProfile.Profile()
profiler.enable()

slow_function()

profiler.disable()
stats = pstats.Stats(profiler).sort_stats('cumulative')
stats.print_stats(10)  # 打印前10个耗时函数
```

### 14.2 优化技巧
```python
# 使用生成器替代列表
def generate_numbers(n):
    for i in range(n):
        yield i

# 使用内置函数
import math
result = sum(math.sqrt(i) for i in range(1_000_000))

# 使用lru_cache
from functools import lru_cache

@lru_cache(maxsize=128)
def fibonacci(n):
    if n <= 1:
        return n
    return fibonacci(n-1) + fibonacci(n-2)
```

## 十五、设计模式
**设计模式** 是解决软件设计中常见问题的通用解决方案。设计模式提供了一套经过验证的最佳实践，帮助开发者编写可维护、可扩展和可复用的代码。

常见的设计模式包括：
- **创建型模式**：处理对象创建机制（如工厂模式、单例模式）
- **结构型模式**：处理对象组合和结构（如适配器模式、装饰器模式）
- **行为型模式**：处理对象之间的通信和职责分配（如策略模式、观察者模式）

在AI框架中，设计模式被广泛应用于：
- **框架架构**：设计灵活的框架结构
- **组件设计**：设计可复用的组件
- **代码解耦**：降低组件之间的耦合度
- **可扩展性**：支持功能的灵活扩展

### 15.1 工厂模式
```python
from abc import ABC, abstractmethod

class LLMProvider(ABC):
    @abstractmethod
    def generate(self, prompt: str) -> str:
        pass

class OpenAIProvider(LLMProvider):
    def generate(self, prompt: str) -> str:
        return f"OpenAI: {prompt}"

class AnthropicProvider(LLMProvider):
    def generate(self, prompt: str) -> str:
        return f"Anthropic: {prompt}"

class LLMFactory:
    _providers = {
        "openai": OpenAIProvider,
        "anthropic": AnthropicProvider
    }
    
    @classmethod
    def create(cls, provider_type: str) -> LLMProvider:
        provider_class = cls._providers.get(provider_type)
        if not provider_class:
            raise ValueError(f"Unknown provider: {provider_type}")
        return provider_class()

# 使用工厂
llm = LLMFactory.create("openai")
```

### 15.2 策略模式
```python
from typing import Callable

class RAGStrategy(ABC):
    @abstractmethod
    def retrieve(self, query: str, top_k: int) -> List[str]:
        pass

class VectorSearchStrategy(RAGStrategy):
    def __init__(self, vector_store):
        self.vector_store = vector_store
    
    def retrieve(self, query: str, top_k: int) -> List[str]:
        return self.vector_store.search(query, top_k)

class HybridSearchStrategy(RAGStrategy):
    def __init__(self, vector_store, keyword_store):
        self.vector_store = vector_store
        self.keyword_store = keyword_store
    
    def retrieve(self, query: str, top_k: int) -> List[str]:
        vector_results = self.vector_store.search(query, top_k)
        keyword_results = self.keyword_store.search(query, top_k)
        return merge_results(vector_results, keyword_results)

class RAGPipeline:
    def __init__(self, strategy: RAGStrategy):
        self.strategy = strategy
    
    def set_strategy(self, strategy: RAGStrategy):
        self.strategy = strategy
    
    def query(self, question: str) -> str:
        docs = self.strategy.retrieve(question, top_k=5)
        return self.generate_answer(question, docs)
```

### 15.3 观察者模式
```python
from typing import List, Callable

class EventEmitter:
    """事件发射器"""
    
    def __init__(self):
        self._listeners: dict = {}
    
    def on(self, event: str, callback: Callable):
        """注册事件监听器"""
        if event not in self._listeners:
            self._listeners[event] = []
        self._listeners[event].append(callback)
    
    def off(self, event: str, callback: Callable):
        """移除事件监听器"""
        if event in self._listeners:
            self._listeners[event].remove(callback)
    
    def emit(self, event: str, *args, **kwargs):
        """触发事件"""
        if event in self._listeners:
            for callback in self._listeners[event]:
                callback(*args, **kwargs)

# 使用示例
emitter = EventEmitter()

def on_message(message):
    print(f"收到消息: {message}")

emitter.on("message", on_message)
emitter.emit("message", "Hello, World!")
```

## 参考项目
本文档中的代码示例基于AI开发中的最佳实践：
- **[xiaozhi-esp32-server](https://github.com/Chenguang-Zhao/xiaozhi-esp32-server)** - 小智AI语音助手服务端核心模块：异步通信、流式处理、事件驱动架构
