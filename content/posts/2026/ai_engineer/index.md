---
title: 「学习笔记」基于Python的AI应用工程基础
date: 2026-03-02 10:30:15
tags: [AI大模型, 学习笔记]
categories: [AI大模型]
series: AI大模型
toc: true
math: true
draft: true
---

## 一、项目结构

良好的目录结构是工程化的地基。强烈建议采用 **src 布局（Src Layout）**。这种结构将源代码放入 `src/<package_name>/` 目录下，能有效避免本地未安装包时出现的路径"泄漏"问题，确保包解析逻辑与生产环境完全一致。

一个标准的现代 Python 工程目录通常如下：

```text
my_project/
├── src/                # 核心业务代码
│   └── my_package/
│       ├── __init__.py
│       ├── api/        # 接口层（REST/gRPC）
│       ├── service/    # 业务逻辑层
│       ├── models/     # 数据模型定义（Pydantic）
│       ├── utils/      # 通用工具函数
│       └── config.py   # 配置管理
├── tests/              # 测试代码（保持与 src 对称的结构）
│   ├── __init__.py
│   └── test_api/
├── docs/               # 项目文档（Sphinx/MkDocs）
├── scripts/            # 运维或自动化脚本
├── notebooks/          # Jupyter 笔记本（实验记录）
├── pyproject.toml      # 统一的项目元数据与构建配置（PEP 621）
├── poetry.lock         # Poetry 依赖锁定文件（可选）
├── README.md           # 项目说明与快速上手指南
└── .gitignore          # 版本控制忽略规则
```

通过分层设计（如 API、Service、Domain），明确模块间的依赖方向，可以大幅降低代码耦合度，让后续的扩展和重构变得从容不迫。



## 二、环境与包管理

"环境隔离"是 Python 工程的第一铁律。推荐使用 Miniconda 或原生的 `venv` 为每个项目创建独立的虚拟环境，这是防止不同项目间包冲突的最有效手段。

### 2.1 虚拟环境创建

- **conda**（Anaconda/Miniconda）：
  ```bash
  conda create -n aiapp python=3.12
  conda activate aiapp
  ```

- **venv**（Python 3.3+ 内置）：
  ```bash
  python -m venv .venv
  source .venv/bin/activate   # Linux/Mac
  .venv\Scripts\activate      # Windows PowerShell
  ```

- **uv**（现代替代方案，更快）：
  ```bash
  uv venv
  source .venv/bin/activate
  ```

### 2.2 依赖管理

在依赖管理方面，社区正全面向 **PEP 517/518/621** 标准靠拢，推荐使用 `pyproject.toml` 作为统一的项目配置入口，取代过去分散的 `setup.py` 和 `requirements.txt`。

**`pyproject.toml` 示例结构：**

```toml
[build-system]
requires = ["setuptools>=61.0", "wheel"]
build-backend = "setuptools.build_meta"

[project]
name = "my_project"
version = "0.1.0"
description = "AI Application Engineering Project"
requires-python = ">=3.10"
dependencies = [
    "pydantic-settings>=2.0",
    "fastapi>=0.100",
    "torch>=2.0",
]

[tool.pytest.ini_options]
testpaths = ["tests"]
pythonpath = ["src"]
```

**依赖管理策略：**
- **应用级项目**：必须使用锁文件（如 `poetry.lock`、`pdm.lock` 或 `uv.lock`）来固定所有间接依赖的版本，确保 CI/CD 流水线与本地开发环境的绝对一致。
- **库级项目**：应提供宽泛的兼容范围，避免过度锁定导致下游消费者产生依赖冲突。

**Python 3.10+ 工具链推荐：**

| 工具 | 用途 | 特点 |
|------|------|------|
| **uv** | 快速依赖管理 | Rust 编写，比 pip 快 10-100 倍 |
| **Ruff** | 代码检查器 | 替代 flake8/pylint，极快 |
| **pyright** | 类型检查器 | VS Code 默认类型检查工具 |
| **pre-commit** | 提交前钩子 | 自动化代码检查和格式化 |



## 三、工程化要点

### 3.1 参数配置化

不要把文件路径、超参数写在代码里。使用 `.env` 或 YAML 文件，通过 `pydantic-settings` 管理配置。

**Python 3.10+ 配置示例：**

```python
from pydantic_settings import BaseSettings, SettingsConfigDict
from pathlib import Path

class Settings(BaseSettings):
    api_key: str
    model_path: Path
    max_tokens: int = 1024
    temperature: float = 0.7
    
    model_config = SettingsConfigDict(
        env_file=".env",
        env_file_encoding="utf-8",
        extra="forbid"  # 禁止未知字段
    )

settings = Settings()
```

**`.env` 文件示例：**

```env
API_KEY=your-secret-key
MODEL_PATH=./models/llama-3
MAX_TOKENS=2048
```

### 3.2 日志记录

用 Python 的 `logging` 模块记录关键步骤和错误，方便排查问题。

**Python 3.10+ 日志配置：**

```python
import logging
from logging.handlers import RotatingFileHandler

logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s - %(name)s - %(levelname)s - %(message)s",
    handlers=[
        RotatingFileHandler("app.log", maxBytes=10*1024*1024, backupCount=5),
        logging.StreamHandler()
    ]
)

logger = logging.getLogger(__name__)
```

### 3.3 异常处理

对数据加载、推理过程进行 try-except，返回友好错误信息。

**Python 3.10+ 模式匹配异常处理：**

```python
from typing import Any

def safe_inference(model: Any, input_data: str) -> str:
    try:
        return model.generate(input_data)
    except ValueError as e:
        match str(e):
            case s if "token limit" in s.lower():
                logger.error(f"输入超过 token 限制: {e}")
                return "输入文本过长，请缩短后重试"
            case s if "model not loaded" in s.lower():
                logger.error(f"模型未加载: {e}")
                return "服务初始化中，请稍后重试"
            case _:
                logger.error(f"推理错误: {e}")
                return "服务暂时不可用，请稍后重试"
```

### 3.4 类型标注

Python 3.10+ 增强了类型系统，推荐全面使用类型标注：

```python
from typing import Optional, List, Dict, Union
from typing_extensions import Self  # Python 3.11+ 内置

class ModelConfig:
    def __init__(self, name: str, params: Dict[str, Union[int, float]]):
        self.name = name
        self.params = params
    
    def with_params(self, **kwargs) -> Self:
        new_params = {**self.params, **kwargs}
        return ModelConfig(self.name, new_params)
```

**Python 3.10+ 新增类型特性：**
- **`match` 语句**：模式匹配（PEP 634）
- **`TypeAlias`**：类型别名（PEP 613）
- **`Self` 类型**：返回自身类型（Python 3.11+）
- **`typing.Protocol`**：结构类型化（PEP 544）

### 3.5 版本控制

使用 Git 管理代码，但注意不要把大文件（数据集、模型权重）提交到仓库。可使用：
- **Git LFS**：大文件存储
- **DVC**：数据版本控制（推荐用于 ML 项目）
- **单独存储**：云存储（S3、OSS）

### 3.6 实验管理

- **简单方案**：手动记录实验参数和结果到文本文件或 Excel
- **进阶方案**：
  - **MLflow**：开源实验追踪
  - **Weights & Biases**：云端实验管理平台
  - **Neptune**：企业级 ML 元数据管理



## 四、部署与交付

当代码通过了本地验证，需要对外提供持续服务时，就需要部署到生产环境。

### 4.1 持续集成/持续部署 (CI/CD)

将代码的 Lint、Test、Build 流程写入自动化流水线（如 GitHub Actions）。每次合并代码都自动触发，实现变更的快速反馈。

**GitHub Actions 示例（`.github/workflows/ci.yml`）：**

```yaml
name: CI/CD

on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-python@v5
        with:
          python-version: "3.12"
      - run: pip install uv
      - run: uv sync
      - run: uv run pytest tests/ -v
      - run: uv run ruff check src/
      - run: uv run pyright src/
```

### 4.2 容器化 (Docker)

编写 Dockerfile，将 Python 解释器、系统依赖和业务代码打包成 Docker 镜像。

**Dockerfile 最佳实践：**

```dockerfile
FROM python:3.12-slim AS builder

WORKDIR /app

RUN pip install --upgrade pip uv

COPY pyproject.toml .
RUN uv sync --no-dev

COPY src/ ./src/

FROM python:3.12-slim AS runtime

WORKDIR /app

COPY --from=builder /app/.venv /app/.venv
COPY src/ ./src/

ENV PATH="/app/.venv/bin:$PATH"

EXPOSE 8000

CMD ["uvicorn", "src.my_package.api.main:app", "--host", "0.0.0.0", "--port", "8000"]
```

### 4.3 云平台一键部署
许多平台支持直接上传代码或镜像，自动完成部署并提供公网访问：

| 平台 | 特点 | 适合场景 |
|------|------|----------|
| **Render** | 简单易用，支持 Docker | 中小型应用 |
| **Railway** | 自动 SSL，支持多种语言 | 快速原型 |
| **Heroku** | PaaS 先驱，生态成熟 | 传统 Web 应用 |
| **AWS Lambda** | 无服务器架构 | 事件驱动场景 |
| **阿里云函数计算** | 国内云厂商 | 国内部署 |


### 4.4 手动部署到服务器
虽然自动化部署是现代工程的主流，但了解传统手动部署流程仍有必要，尤其适用于小规模项目或临时测试环境。

**部署步骤：**

1. **服务器准备**：
   ```bash
   # 安装 Python 3.10+
   sudo apt update && sudo apt install python3.12 python3.12-venv python3.12-dev
   
   # 创建项目目录
   mkdir -p /opt/my_ai_project
   cd /opt/my_ai_project
   ```

2. **虚拟环境配置**：
   ```bash
   python3.12 -m venv .venv
   source .venv/bin/activate
   ```

3. **代码部署**：
   ```bash
   # 通过 Git 克隆代码
   git clone https://github.com/your/repo.git .
   
   # 安装依赖
   pip install --upgrade pip
   pip install -e .
   ```

4. **配置环境变量**：
   ```bash
   # 创建 .env 文件
   cat > .env << EOF
   API_KEY=your-secret-key
   MODEL_PATH=/opt/models/llama-3
   MAX_TOKENS=2048
   EOF
   ```

5. **启动服务**：
   ```bash
   # 直接运行（开发模式）
   uvicorn src.my_package.api.main:app --host 0.0.0.0 --port 8000
   
   # 或使用 systemd 管理（生产模式）
   cat > /etc/systemd/system/my_ai_service.service << EOF
   [Unit]
   Description=AI Service
   After=network.target
   
   [Service]
   User=www-data
   WorkingDirectory=/opt/my_ai_project
   Environment="PATH=/opt/my_ai_project/.venv/bin"
   ExecStart=/opt/my_ai_project/.venv/bin/uvicorn src.my_package.api.main:app --host 0.0.0.0 --port 8000
   Restart=always
   
   [Install]
   WantedBy=multi-user.target
   EOF
   
   # 启动服务
   sudo systemctl daemon-reload
   sudo systemctl enable my_ai_service
   sudo systemctl start my_ai_service
   ```

6. **配置反向代理（Nginx）**：
   ```bash
   cat > /etc/nginx/sites-available/my_ai_project << EOF
   server {
       listen 80;
       server_name your-domain.com;
       
       location / {
           proxy_pass http://127.0.0.1:8000;
           proxy_set_header Host \$host;
           proxy_set_header X-Real-IP \$remote_addr;
       }
   }
   EOF
   
   sudo ln -s /etc/nginx/sites-available/my_ai_project /etc/nginx/sites-enabled/
   sudo nginx -t && sudo systemctl reload nginx
   ```

### 4.5 性能优化建议

**Python 3.10+ 性能提升技巧：**

1. **使用 `__slots__`**：减少内存占用，提升属性访问速度
   ```python
   class ModelOutput:
       __slots__ = ["text", "tokens", "time"]
       def __init__(self, text: str, tokens: int, time: float):
           self.text = text
           self.tokens = tokens
           self.time = time
   ```

2. **使用 `functools.cache`**：缓存函数结果（Python 3.9+）
   ```python
   from functools import cache

   @cache
   def expensive_computation(x: int) -> int:
       # ... 复杂计算
       return result
   ```

3. **使用 `typing.NamedTuple` 或 `dataclasses`**：比普通类更快
   ```python
   from dataclasses import dataclass

   @dataclass(slots=True)  # Python 3.10+
   class InferenceRequest:
       prompt: str
       max_tokens: int = 1024
       temperature: float = 0.7
   ```


## 五、代码质量保障

### 5.1 静态检查工具链

```bash
# 安装检查工具
uv add --dev ruff pyright pytest pytest-cov pre-commit

# 初始化 pre-commit
pre-commit install

# pre-commit 配置（.pre-commit-config.yaml）
repos:
  - repo: https://github.com/astral-sh/ruff-pre-commit
    rev: v0.1.14
    hooks:
      - id: ruff
        args: ["--fix"]
  - repo: https://github.com/RobertCraigie/pyright-python
    rev: v1.1.356
    hooks:
      - id: pyright
```

### 5.2 测试覆盖率

```bash
# 运行测试并生成覆盖率报告
uv run pytest tests/ --cov=src --cov-report=html
```
