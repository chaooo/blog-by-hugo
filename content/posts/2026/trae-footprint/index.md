---
title: 「工程实践」用 AI 编辑器(TRAE SOLO)  快速构建 3D 地球旅行足迹记录
date: 2026-04-28 15:30:12
tags: [AI大模型, 学习笔记]
categories: [AI大模型]
series: AI大模型
toc: true
math: true
---

## 📝 摘要

使用 TRAE SOLO 在短时间内完成了一个基于 Vue 3 + Three.js 的交互式 3D 地球旅行足迹记录网页。实现了全球 50+ 著名地标的标记展示、点击交互、平滑飞行动画等功能，打造了一个沉浸式的旅行足迹浏览体验。

---

## 🎯 背景

我是一名Web开发者，平时经常需要开发各类数据可视化项目。最近突发奇想，需要创建一个展示全球旅行足迹的 3D 地球相册。传统开发方式需要从零开始配置项目、编写大量 Three.js 代码，耗时较长。这次尝试使用 TRAE SOLO 来加速开发过程。

---

## 🚀 实践过程

### 任务拆解

1. **项目初始化**：创建 Vue 3 + TypeScript 项目，配置 Vite 构建工具
2. **3D 地球渲染**：使用 Three.js 创建地球模型，添加纹理和大气层效果
3. **标记点系统**：实现全球地标标记，包括位置计算、3D 模型创建
4. **交互功能**：实现点击标记点显示详情、平滑飞行到标记点位置
5. **响应式设计**：适配 PC 端和移动端的显示

### SOLO 能力应用

1. **代码生成**：SOLO 帮助生成了 Three.js 初始化代码、地球渲染逻辑、标记点创建等核心代码
2. **问题排查**：在遇到标记点位置偏移、旋转方向错误等问题时，SOLO 帮助分析并提供解决方案
3. **样式优化**：根据我的需求，SOLO 提供了响应式设计方案和美观的 UI 样式
4. **代码审查**：对生成的代码进行审查，确保类型安全和代码质量

### 关键过程

**1. 项目初始化**

```bash
npm create vite@6.5.0 . -- --template vue-ts
npm install three @types/three tailwindcss@3 lucide-vue-next
```

**2. 地球渲染**

```typescript
// 创建地球几何体和材质
const geometry = new THREE.SphereGeometry(1, 128, 128);
const material = new THREE.MeshStandardMaterial({
  map: earthTexture,
  bumpMap: heightmap,
  bumpScale: 0.05
});
const earth = new THREE.Mesh(geometry, material);
```

**3. 标记点创建**

```typescript
// 经纬度转三维坐标
function latLngToVector3(lat: number, lng: number, radius: number) {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lng + 180) * (Math.PI / 180);
  return new THREE.Vector3(
    -radius * Math.sin(phi) * Math.cos(theta),
    radius * Math.cos(phi),
    radius * Math.sin(phi) * Math.sin(theta)
  );
}
```

### 踩坑经历

1. **标记点位置偏移**：最初标记点位置计算错误，导致标记点偏离正确位置，通过调整经纬度转换公式解决
2. **标记点不随地球旋转**：发现标记点被添加到了 scene 而不是地球组中，修改后解决
3. **图片加载失败**：尝试使用 Wikimedia 和 Pixabay 的图片链接，由于网络问题最终清空，准备后续接入图床
   ![](20260428145318.jpg)

---

## 📸 成果展示

### 功能特性

- ✅ **沉浸式 3D 地球**：高精度地球模型，支持旋转、缩放
- ✅ **50+ 地标标记**：全球著名风景名胜古迹标记
- ✅ **智能排序**：以北京为起点向西环绕地球排序
- ✅ **交互体验**：点击标记点查看详情，平滑飞行动画
- ✅ **响应式设计**：PC/移动端自适应

### 项目结构

``` bash
src/
├── components/
│   ├── Earth3D.vue        # 3D 地球主组件
│   ├── FootprintList.vue  # 足迹列表组件
│   └── FootprintPop.vue   # 详情弹窗组件
├── utils/
│   ├── globeMarker.ts     # 标记点工具类
│   ├── travelLocation.ts  # 50+ 地标数据
│   └── mapTexture.ts      # 地图纹理工具
└── assets/
    ├── img/               # 地球纹理图片
    └── json/              # 边界数据
```

### 运行方式

```bash
# 安装依赖
npm install

# 开发模式
npm run dev

# 构建生产版本
npm run build
```

---

## 💡 效果与总结

### 提效成果

- **传统开发**：预计需要 2-3 天
- **SOLO 辅助**：实际用时约 4 小时
- **提效率**：约 **85%**

### SOLO 的价值

1. **代码生成**：快速生成基础代码框架，节省重复劳动
2. **问题排查**：遇到问题时提供快速解决方案
3. **方案设计**：提供架构设计建议和最佳实践
4. **学习辅助**：帮助理解 Three.js 复杂概念

### 可复用方法

1. **3D 场景初始化模板**：可以复用在其他 Three.js 项目中
2. **经纬度转三维坐标**：通用的地理坐标转换函数
3. **响应式布局方案**：PC/移动端适配的通用模式

---

## 🔗 项目链接

- **Gitee 仓库**：[https://gitee.com/chaoo/trae-footprint](https://gitee.com/chaoo/trae-footprint)
- **在线演示**：[https://www.itdn.top/demo/TraeFootprint/](https://www.itdn.top/demo/TraeFootprint/)

---

> 🎉 感谢 TRAE × 脉脉「AI 无限职场」SOLO 挑战赛提供展示机会！
