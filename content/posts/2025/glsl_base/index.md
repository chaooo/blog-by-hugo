---
title: 「学习笔记」WebGL 与 Shader 着色器渲染实践
date: 2025-03-23 18:25:30 +0800
tags: [TypeScript, Web游戏, WebGL, Shader, 学习笔记]
categories: [Web游戏]
series: Web游戏
toc: true
---


## 1. WebGL基础
WebGL（Web Graphics Library, Web图形库）是 Web 上新的**3D图形标准/规范**，它是为渲染2D图形和交互式3D图形而设计的JavaScript API。源自 OpenGL（Open Graphics Library, 开放图形库）的**ES2.0**库。OpenGL是用于渲染2D、3D矢量图形的跨语言、跨平台的应用程序编程接口（API）。

WebGL 提供了与 ES2.0（嵌入式系统）类似的API，WebGL代码是在HTML`<canvas>`标签中使用，它是允许浏览器使用计算机上的图形处理单元 (GPU) 的一种规范。

事实上 WebGL 是一个光栅化引擎，它可以根据你的代码绘制出**点**、**线**和**三角形**，任何复杂的场景可以通过组合使用点、线、三角形来实现。

WebGL在计算机的GPU中运行，GPU上运行的代码是GLSL（OpenGL Shading Language）编写的成对的方法，即**顶点着色器**和**片段着色器**，每一对组合起来称作一个 program（着色程序）。
- **顶点着色器**的作用是计算顶点的位置。根据计算出的一系列顶点位置，WebGL可以对点， 线和三角形在内的一些图元进行光栅化处理。
- **片段着色器**的作用是计算出当前绘制图元中每个像素的颜色值。

WebGL 使用右手坐标系统 — `x`轴向右，`y`轴向上 `z`轴指向屏幕外，坐标范围归一化到`[-1, 1]`的立方体内。**顶点**是在3D坐标系中拥有坐标位置等信息的一个点，使用顶点建立不同类型的物体。
- **顶点**包含的属性：位置、颜色、法线(描述顶点朝向)、纹理(顶点用来装饰模型表面的一张2D图片)。

## 2. 渲染流程
渲染流程是将准备好的模型输出到屏幕的过程。3D 渲染流程会接受使用顶点描述 3D 物体的原始数据（点、线、三角形）作为输入用于处理，并计算其片段 (fragment), 然后渲染为像素 (pixels) 输出到屏幕。
![3d-rendering-pipeline.jpg](3d-rendering-pipeline.jpg)

**管线**：从顶点数据到最终渲染图像的一系列处理步骤。
- **顶点处理**：将独立的顶点信息组合成原始数据并设置其在 3D 空间中的坐标，方便显示器识别。
- **栅格化**：将原始数据 (从顶点信息转换过来的) 转换为一系列的片段。
- **片段处理**：基于给定参数计算最终的颜色，关注的是纹理和光照。
- **输出合成**：所有来自3D空间的原始数据的片段会被转换到2D像素网格中，然后打印到屏幕像素上。

## 3. GLSL语言基础
### 3.1 GLSL 宏
**宏**（macros）是一种预处理器指令，主要用于条件编译或定义常量等场景。
- `GLSL`提供的常见预处理指令：
  + 和C语言用法相同的指令：`#define`，`#undef`，`#if`，`#ifdef`，`#ifndef`，`#else`，`#elif`，`#endif`，`#pragma`，`#error`。注意GLSL没有提供`#include`指令。
  + 不同于C语言的指令：`#extension`，`#version`，`#line`（用法：`#line 3 40	//3是下一行的行号，40是当前shader文件的编号`）。
- 常见宏常量：
  + `__LINE__`：当前行号，行号的起始号可以通过#line定义。
  + `__FILE__`：不是当前shader的文件名，而是十进制整数，是shader程序内对该文件的编号。
  + `__VERSION__`：GLSL版本，整数类型。如果版本是3.30，值就是330。

### 3.2 GLSL 数据类型与变量声明
- **标量**：`float`, `int`, `bool`
- **向量**：`vec2`, `vec3`, `vec4`（浮点数向量）
- **矩阵**：`mat2`, `mat3`, `mat4`（浮点数矩阵）
- **采样器**：`sampler2D`（2D纹理）, `samplerCube`（立方体纹理）

```glsl
// 标量
float a = 1.0;
int b = 2;
bool c = true;
// 向量
vec2 v2 = vec2(1.0, 2.0);
vec3 v3 = vec3(1.0, 2.0, 3.0);
vec4 v4 = vec4(1.0, 2.0, 3.0, 4.0);
// 矩阵
mat2 m2 = mat2(1.0, 0.0, 0.0, 1.0); // 2*2
mat3 m3 = mat3(1.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 1.0); // 3*3
mat4 m4 = mat4(1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0); // 4*4
// 采样器
uniform sampler2D textureSampler;
// 结构体
struct myStruct {
  vec4 position;
  vec4 color;
  vec2 uv;
};
myStruct structVar = myStruct(vec4(0.0, 0.0,0.0,0.0), vec4(1.0, 1.0, 1.0, 1.0), vec2(0.5, 0.5));
// 数组
float array[4];
for(int i =0; i < 4; i ++) { array[i] = 0.0; }
```

### 3.3 控制流程
GLSL支持标准的`C/C++`控制流程，包括：`if-else/switch-case`,`for/while/do-while`,`break/continue/return`。
没有goto，若要跳出可使用`discard`。该语句仅在片元着色器下有效，需要注意的是使用该语句会导致管线放弃当前片元，不会写入帧缓存。

### 3.4 函数
函数定义和使用方法和C语言类似，但有两大区别：**GLSL函数不支持递归**；参数限定符是`in`，`out`，`inout`，`const in`。
- 参数限定符: 
  + `in`：缺省时的默认限定符，指明参数通过值传递。
  + `inout`：指明参数通过引用传递，可读性。
  + `out`：指明参数的值不可读，但在函数返回时可以写。
  + `const in`：指明参数通过值传递，且传入的值不可修改，给编译器提供更多优化空间。
- 函数返回值：返回函数计算的数据；若无返回值，需要使用`void`代替。
  + 使用`out`参数返回数据
    ```glsl
    void computeData(out vec3 result) {
        result = someValue;// 计算数据，可以传入多个out参数计算并返回
    }
    void main() {
        vec3 outputData;
        computeData(outputData); // 在outputData中包含了computeData函数计算的数据
    }
    ```
  + 返回值返回数据
    ```glsl
    vec3 computeData() {
        return someValue;// 计算数据，只能返回一个数据
    }
    void main() {
        vec3 outputData = computeData(); // 返回函数计算的数据
    }
    ```
- 常见的GLSL内置函数：
  + 三角函数：sin、cos、tan、asin、acos、atan；
  + 指数函数：pow、exp、log、exp2、log2；
  + 平方根和立方根函数：sqrt、inversesqrt；
  + 绝对值函数：abs；
  + 取整函数：floor、ceil、round；
  + 分段函数：step、smoothstep；
  + 矢量运算函数：length、distance、dot、cross、normalize；
  + 向量构造函数：vec2、vec3、vec4；
  + 矩阵构造函数：mat2、mat3、mat4；
  + 条件函数：mix、clamp；
  + 几何函数：reflect、refract；
- 子程序（`Subroutine`）是一种机制，允许在运行时通过变量值动态选择函数调用，而无需切换着色器或使用条件判断。主要优势是提高性能，避免条件判断或频繁切换着色器。
例如：使用Subroutines选择着色器功能
```glsl
// 定义subroutine类型
subroutine vec3 shadeModelType(vec4 position, vec3 normal);
// 定义一个上述类型的uniform变量shadeModel：
subroutine uniform shadeModelType shadeModel;
// 定义两个函数，作为subroutine的一部分
subroutine(shadeModelType)  
vec3 phongModel(vec4 position, vec3 normal) {
  // 数据计算1
}
subroutine(shadeModelType)  
vec3 diffuseOnly(vec4 position, vec3 normal) {
  // 数据计算2
}
```
在着色器的`main`函数中，通过子程序`uniform`变量`shadeModel`调用具体的函数：
```glsl
LightIntensity = shadeModel(position, normal);
```
`subroutine`变量的赋值在`C++`代码内进行:
```cpp
// 使用glGetSubroutineIndex函数查询每个subroutine函数的索引
GLuint adsIndex = glGetSubroutineIndex(programHandle, GL_VERTEX_SHADER,"phongModel" );
GLuint diffuseIndex = glGetSubroutineIndex(programHandle, GL_VERTEX_SHADER, "diffuseOnly");
// 选择合适的subroutine函数
glUniformSubroutinesuiv(GL_VERTEX_SHADER, 1, &idx1);
```


### 3.5 限定符
- 参数限定符：用于修饰函数的参数，定义参数是如何被传递的。它们仅用于函数参数。

| 限定符        | 描述 |
|:-----------| :--- |
| **in**    | **默认**。表示参数按值传递，函数内部对参数的修改**不会**影响调用者的原始变量。 |
| **out**   | 表示参数按引用传递，函数内部会写入该参数，并且修改结果会传回给调用者。传入的变量不需要初始化。 |
| **inout** | 表示参数按引用传递，函数既读取其初始值，又写入新值。修改结果会传回给调用者。 |

- 精度限定符：主要用于移动端（OpenGL ES）开发，它指定了浮点数、整数和采样器变量的计算精度和范围。选择合适的精度可以优化性能和功耗。

| 限定符          | 描述 | 适用类型 |
|:-------------| :--- | :--- |
| **highp**   | 高精度。提供最大的范围和精度，但速度最慢。适用于顶点着色器中的位置计算。 | `float`, `int`, `sampler` |
| **mediump** | 中精度。范围和精度介于两者之间。是片元着色器中浮点数的**常用选择**。 | `float`, `int`, `sampler` |
| **lowp**    | 低精度。范围和精度最小，但速度最快。适用于颜色等不需要高精度的计算。 | `float`, `int`, `sampler` |

- 存储限定符：用于定义变量的存储位置、生命周期以及如何在着色器阶段之间传递数据。

| 限定符            | 作用域 | 描述 | 常见用途 |
|:---------------| :--- | :--- | :--- |
| **const**     | 全局/局部 | 声明编译时常量。必须在声明时初始化，且之后不能修改。 | `const float PI = 3.14159;` |
| **attribute** | 顶点着色器 | **（已废弃，用于旧版 GLSL/WebGL 1.0）** 从顶点缓冲区接收每个顶点的数据。 | 顶点坐标、法线、颜色、纹理坐标。 |
| **uniform**   | 全局 | 声明在着色器程序执行期间保持不变的全局变量。由 CPU 应用程序（如 Cocos 引擎）设置。 | 变换矩阵、光源位置、颜色、时间。 |
| **varying**   | 全局 | **（已废弃，用于旧版 GLSL/WebGL 1.0）** 用于从顶点着色器向片元着色器传递插值后的数据。 | 在 Cocos 中，已被 `in`/`out` 取代。 |
| **in**        | 全局/局部 | 用于着色器的**输入**。 | - **顶点着色器**：接收顶点属性（替代 `attribute`）。<br>- **片元着色器**：接收来自顶点着色器的插值数据（替代 `varying`）。 |
| **out**       | 全局/局部 | 用于着色器的**输出**。 | - **顶点着色器**：输出数据到片元着色器（替代 `varying`）。<br>- **片元着色器**：输出最终颜色（如 `gl_FragColor` 或自定义多渲染目标）。 |
| **buffer**    | 全局 | 用于声明着色器存储缓冲对象，支持读写操作。 | 计算着色器或复杂数据处理。 |
| **shared**    | 全局 | 用于计算着色器中，声明在本地工作组内共享的变量。 | 工作组内的线程间通信。 |

- 使用注意事项：
  + Cocos Creator使用宏系统来处理跨平台兼容性。可能会在代码中看到 `attribute` 和 `varying`，但它们会被预处理器在编译时转换为 `in` 和 `out`。**最佳实践是遵循 Cocos 官方示例和头文件，使用现代风格（`in`/`out` 结构体）**。
  + **分清 `in/out` 的双重角色**：它们既是存储限定符（用于阶段间传递），也是参数限定符（用于函数参数）。根据上下文判断其含义。
  + **精度选择**：在移动端项目中，养成关注精度的习惯。对于颜色和简单的计算，优先使用 `mediump` 或 `lowp` 以提升性能。
  + **`const` 与 `uniform`**：`const` 是编译时常量，在着色器内部定义；`uniform` 是运行时常量，由外部应用程序设置。
  + **`out` 与 `inout`**：函数参数中，如果不关心传入值，只用它来输出结果，用 `out`；如果既要读入又要修改后写出，用 `inout`。


## 4. 输入输出
- GLSL 核心概念
  - **属性（Attributes）**：顶点着色器的输入数据，每个顶点都有自己的一组属性值（位置，纹理坐标，法线等）。
  - **全局变量（Uniforms）**：在顶点着色器和片段着色器之间共享的数据，通常用于传递常量或只读数据（如变换矩阵、光照参数、材质属性等）。
  - **纹理（Textures）**：存储在 GPU 上的图像数据，通常用于为物体表面添加细节。通过 `sampler2D` 类型的全局变量进行访问，并使用 `texture2D` 函数进行采样。
  - **可变量（Varyings）**：在顶点着色器和片段着色器之间传递的数据（纹理坐标、法线、颜色等），顶点着色器计算出的值会通过插值传递给片段着色器。

WebGL每次绘制只关心两件事：裁剪空间中的坐标值（顶点着色器提供）和颜色值（片段着色器提供）。每一个着色器都是一个方法，一个顶点着色器和一个片段着色器的组合就是一个着色程序，一个典型的WebGL应用会有多个着色程序。
- **顶点着色器**：
    - 输入：`attribute`（顶点属性）
    - 输出：`varying`（传递给片段着色器的变量）
- **片段着色器**：
    - 输入：`varying`（从顶点着色器传递来的变量）
    - 输出：`gl_FragColor`（片段颜色）

```glsl
// 顶点着色器
attribute vec3 a_position; // 顶点位置属性，每个顶点都有一个三维位置
attribute vec2 a_texCoord; // 纹理坐标属性，每个顶点都有一个二维纹理坐标
varying vec2 v_texCoord;   // 可变量，用于将纹理坐标从顶点着色器传递到片段着色器
void main() {
    // 将顶点位置(属性a_position) 转换为 裁剪空间坐标(内置变量gl_Position)
    gl_Position = vec4(a_position, 1.0); //gl_Position 是内置变量，表示裁剪空间坐标（四维）
    // 将纹理坐标从顶点着色器传递到片段着色器
    v_texCoord = a_texCoord; // v_texCoord 会在片段着色器中通过插值计算出每个片段的纹理坐标
}

// 片段着色器
precision mediump float;    // 片段着色器没有默认精度，需要设置一个精度，mediump 表示中等精度
varying vec2 v_texCoord;    // 可变量，从顶点着色器传递来的二维纹理坐标
uniform sampler2D u_texture;// 纹理采样器(全局变量)，用于从纹理中采样颜色
void main() {
    // 从纹理中采样颜色：从纹理u_texture中根据纹理坐标v_texCoord采样颜色
    gl_FragColor = texture2D(u_texture, v_texCoord); // gl_FragColor 是内置变量，表示当前片段的颜色
}
```

## 5. 实践：绘制三角形和矩形
```html
<!doctype html>
<html>
<head>
    <meta charset="utf-8" />
    <title>WebGL Demo</title>
</head>
<body>
<!-- 顶点着色器 -->
<script id="vertexShader" type="notjs">
    attribute vec4 a_position;
    void main() {
      gl_Position = a_position;
    }
</script>
<!-- 片段着色器 -->
<script id="fragmentShader" type="notjs">
    precision mediump float;
    uniform vec4 u_color;
    void main() {
      gl_FragColor = u_color;
    }
</script>
<!-- 我们需要编译着色器对然后提交到GPU， 可以创建GLSL字符串 或者 放在非JavaScript类型的标签中 -->
<script>
    "use strict";
    main();// 运行main
    // 定义main
    function main() {
        // 创建一个HTML<canvas>标签
        const canvas = document.createElement('canvas');
        document.getElementsByTagName('body')[0].appendChild(canvas);
        canvas.width = 400;
        canvas.height = 300;
        // 创建一个WebGL渲染上下文
        const gl = canvas.getContext('webgl');
        if (!gl) {
            console.log('不支持WebGL');
            return;
        }

        // 创建 顶点着色器
        const vertexShaderSource = document.querySelector("#vertexShader").text;
        const vertexShader = createShader(gl, gl.VERTEX_SHADER, vertexShaderSource);
        // 创建 片段着色器
        const fragmentShaderSource = document.querySelector("#fragmentShader").text;
        const fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, fragmentShaderSource);
        // 将 顶点着色器和片段着色器 link（链接）到一个 program（着色程序）
        const program = createProgram(gl, vertexShader, fragmentShader);

        // 从着色程序中 找到输入属性值(顶点位置a_position)所在的位置
        const positionAttributeLocation = gl.getAttribLocation(program, "a_position");
        // uniform locations 二维纹理坐标
        const colorUniformLocation = gl.getUniformLocation(program, "u_color");

        // 属性值从缓冲中获取数据，先创建一个缓冲
        const positionBuffer = gl.createBuffer();
        // 绑定位置信息缓冲 到 绑定点(ARRAY_BUFFER)
        gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);

        // 把提供的gl_Position裁剪空间坐标 对应到 画布像素坐标(屏幕空间)
        gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
        // 清空画布
        gl.clearColor(0, 0, 0, 0); // r, g, b, alpha
        gl.clear(gl.COLOR_BUFFER_BIT);

        // 使用着色程序（一个着色器对）
        gl.useProgram(program);
        // 启用对应属性（缓冲中获取数据给着色器中的属性）
        gl.enableVertexAttribArray(positionAttributeLocation);

        // vertexAttribPointer 告诉属性怎么从positionBuffer中读取数据 (ARRAY_BUFFER)
        const size = 2;          // 每次迭代运行提取两个单位数据
        const type = gl.FLOAT;   // 每个单位的数据类型是32位浮点型
        const normalize = false; // 不需要归一化数据
        const stride = 0;        // 0 = 移动单位数量 * 每个单位占用内存（sizeof(type)）每次迭代运行运动多少内存到下一个数据开始点
        const offset = 0;        // 从缓冲起始位置开始读取
        gl.vertexAttribPointer(positionAttributeLocation, size, type, normalize, stride, offset);
        // 绘制一个三角形
        drawTriangle(gl, colorUniformLocation);
        //  绘制10个矩形
        drawRectangle(gl, colorUniformLocation);
    }

    // 定义 创建着色器 方法，输入参数：渲染上下文，着色器类型，数据源
    function createShader(gl, type, source) {
        const shader = gl.createShader(type); // 创建着色器对象
        gl.shaderSource(shader, source); // 提供数据源
        gl.compileShader(shader); // 编译 -> 生成着色器
        const success = gl.getShaderParameter(shader, gl.COMPILE_STATUS);
        if (success) {
            return shader; //成功返回，否则打印信息，然后删除当前着色器
        }
        console.log(gl.getShaderInfoLog(shader));
        gl.deleteShader(shader);
    }

    // 定义 创建着色程序 方法，将两个着色器 link（链接）到一个 program（着色程序）
    function createProgram(gl, vertexShader, fragmentShader) {
        const program = gl.createProgram();
        gl.attachShader(program, vertexShader);
        gl.attachShader(program, fragmentShader);
        gl.linkProgram(program);
        const success = gl.getProgramParameter(program, gl.LINK_STATUS);
        if (success) {
            return program;//成功返回，否则打印信息，然后删除当前着色程序
        }
        console.log(gl.getProgramInfoLog(program));
        gl.deleteProgram(program);
    }

    // 绘制一个三角形
    function drawTriangle(gl, colorUniformLocation){
        // 通过绑定点向缓冲中存放数据(三个二维点坐标, 坐标范围[-1, 1])
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([ // WebGL需要强类型数据，创建32位浮点型数据序列
            -1, -1,
            1,-1,
            0, 1,
        ]), gl.STATIC_DRAW); // STATIC_DRAW表示不会经常改变的数据
        // 随机颜色 gl.uniform4f(location, x, y, z, w);
        gl.uniform4f(colorUniformLocation, Math.random(), Math.random(), Math.random(), 1);
        // 执行绘制命令
        const primitiveType = gl.TRIANGLES; // 图元类型 为 gl.TRIANGLES（三角形）
        const offset = 0;
        const count = 3; //顶点着色器将运行三次
        gl.drawArrays(primitiveType, offset, count); //根据三个gl_Position值绘制一个三角形,在裁剪空间中每个方向的坐标范围都是 -1 到 1 。
    }

    // 绘制10个矩形
    function drawRectangle(gl, colorUniformLocation){
        // 绘制 10 个随机颜色的随机矩形
        for (let i = 0; i < 10; ++i) {
            // 随机矩形，坐标范围[-1, 1]
            const x = Math.random()*2-1;
            const y = Math.random()*2-1;
            const w = Math.random()*2-1; // 宽
            const h = Math.random()*2-1; // 高
            // 通过绑定点向缓冲中存放数据（六个二维点坐标）
            gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([
                x, y,
                x, (y + h),
                (x + w), y,
                x, (y + h),
                (x + w), y,
                (x + w), (y + h),
            ]), gl.STATIC_DRAW);
            // 随机颜色
            gl.uniform4f(colorUniformLocation, Math.random(), Math.random(), Math.random(), 1);
            // 执行绘制命令
            const primitiveType = gl.TRIANGLES;
            const offset = 0;
            const count = 6; //顶点着色器将运行六次(一个矩形相当于两个三角形)
            gl.drawArrays(primitiveType, offset, count);
        }
    }
</script>
</body>
</html>
```
`<script type="notjs">`：浏览器会忽略`script`标签的内容。
- `<script>`标签内默认放置的是`JavaScript`代码。 只能定义`type="javascript"`、`type="text/javascript"`或者不定义 ，浏览器才会将内容翻译成`JavaScript`。 
- 编辑着色器也可以使用串联字符串或者多行模板字符串：
```javascript
var shaderSource =
    "void main() {\n" +
    "  gl_FragColor = vec4(1,0,0,1);\n" +
    "}"; // 使用串联字符串
var shaderSource = `
    void main() {
      gl_FragColor = vec4(1,0,0,1);
    }`; // 多行模板字符串
```

## 6. 基于WebGL的开源图形库
**Cocos Creator**提供了内置的支持，可以直接在编辑器中编写和调试 GLSL 着色器。
如果在浏览器中使用 WebGL，可以通过 `THREE.js` 等库来简化开发。下面是一些流行的基于 WebGL 的图形库：

| 库名 | 描述 | 主要特点 | 适用场景 |
|------|------|----------|----------|
| Three.js | 功能强大的 WebGL 库 | 易于上手，文档丰富，支持多种渲染器 | 3D 游戏开发，3D 可视化，3D 模型展示，数据可视化 |
| Babylon.js | 微软开发的 WebGL 库 | 高性能，支持物理引擎，PBR 材质 | 3D 游戏开发，3D 可视化，3D 场景编辑，VR/AR 应用 |
| A-Frame | 基于 HTML 的 VR 框架 | 基于 HTML 标记语言，支持 VR 设备 | VR 应用开发，3D 网页内容，交互式 3D 场景 |
| PlayCanvas | 基于 WebGL 的游戏引擎 | 在线编辑器，多人协作，内置物理引擎 | 3D 游戏开发，3D 互动应用，实时 3D 场景编辑 |
| PixiJS | 高性能的 2D WebGL 渲染引擎 | 易于上手，高性能 2D 渲染，支持纹理打包 | 2D 游戏开发，2D 可视化，2D 动画，2D UI 组件 |
| Regl | 轻量级的 WebGL 封装库 | 高性能，低开销，灵活的渲染管道 | 数据可视化，科学计算，需要高性能和低开销的应用 |
| Cannon.js | JavaScript 物理引擎 | 高性能物理模拟，支持多种碰撞检测算法 | 3D 游戏开发中的物理模拟，3D 仿真，3D 交互应用 |

