---
title: 「学习笔记」Cocos Creator 3.8 基础入门
date: 2024-03-16 18:25:30 +0800
tags: [TypeScript, Cocos游戏, 学习笔记]
categories: [Cocos游戏]
series: Cocos游戏
toc: true
---


`Cocos Creator` 是一款功能强大的游戏开发引擎，支持 2D 和 3D 游戏的跨平台开发，TypeScript 作为主要脚本语言、拥有强大的编辑器工具链、活跃的社区。

`Cocos Dashboard` 做为各引擎统一的下载器和启动入口，集成了统一的项目管理及创建面板，方便同时使用不同版本的引擎开发项目。

## 1. 项目结构
初次创建并打开一个项目后，文件夹的结构如下：
- assets：资源目录
- build：构建目录（在构建后会生成该目录）
- library：导入的资源目录
- local：日志文件目录
- profiles：编辑器配置
- settings：项目设置
- temp：临时文件目录
- package.json：项目配置

### 1.1 项目标志性文件
- `project.json`：项目配置文件，记录项目元信息。
- `assets`** 文件夹**：存放所有资源（脚本、图片、场景、预制体等）。
- ✅ 只有同时包含 `project.json` 和 `assets` 的文件夹才能被 Cocos Creator 正确识别为有效项目。

### 1.2 构建发布（Build）
- 点击编辑器顶部的 **项目 -> 构建**。
- 选择目标平台（如 Web Mobile, Android, iOS, 微信小游戏等）。
- 配置构建参数（如包名、起始场景、分辨率策略等）。
- 点击 **构建**（默认构建输出路径为项目根目录下的 `build` 文件夹）。


## 2. 编辑器基础
### 2.1 编辑器界面概览
- **场景（Scene）**：游戏内容的载体，所有节点（Node）的集合。你在这里搭建游戏画面。
- **层级管理器（Hierarchy）**：以树状结构显示当前场景中的所有节点。这是你组织游戏对象的地方。
- **资源管理器（Assets）**：管理项目中的所有资源，如脚本、图片、音效、预制体等。
- **场景编辑器（Scene）**：可视化地编辑和布置场景中的节点。
- **属性检查器（Inspector）**：显示和编辑当前选中节点或组件的属性。
- **控制台（Console）**：显示日志、警告和错误信息，是调试的重要工具。

### 2.2 场景组成
- 一个项目可包含多个 **Scene（场景）**，脚本中通过`director.loadScene("name")`切换场景。
- 场景由 **Node（节点）** 构成，节点是场景的基本单位。
- 节点通过挂载 **Component（组件）** 实现功能（如渲染、物理、脚本逻辑等）。

### 2.3 节点（Node）与组件（Component）
- **节点（Node）**：场景中的基本单位，可以理解为空的容器。它拥有位置（Position）、旋转（Rotation）、缩放（Scale）等变换属性。
- **组件（Component）**：每个组件依附于一个节点，为节点赋予功能和特性。**节点本身什么都不是，是组件让它变得有意义。**
- **常用内置组件**：
  - `Transform`：控制节点的变换（位置、旋转、缩放），每个节点都有。
  - `UITransform`：UI 节点的变换，包含尺寸和锚点信息。
  - `Sprite`：渲染精灵（图片）。
  - `Label`：渲染文本。
  - `Button`：按钮交互组件。
  - `Canvas`：UI 画布，是所有 UI 节点的根容器。
  - `Camera`：摄像机，决定了玩家能看到什么。

### 2.4 坐标系
- **世界坐标系（World Space）**：整个场景的绝对坐标系。
- **本地坐标系（Local Space）**：相对于父节点的坐标系。
- **UI 坐标系**：以屏幕或 Canvas 为基准，原点在左上角。

### 2.5 预制体（Prefab）
可重复使用的节点模板。当你需要在多个地方使用同一个复杂的节点结构时，就把它做成预制体。
- **作用**：提高开发效率、保证实例的一致性、便于批量修改。
- **操作**：从资源管理器拖拽节点到资源管理器即可创建预制体。将预制体资源拖入场景即可实例化。


## 3. 脚本编程（TypeScript）
- 在资源管理器右键 -> 创建 -> TypeScript。
- 将脚本资源拖拽到层级管理器的节点上，或在属性检查器中点击“添加组件”来挂载。
- 脚本本质上也是一种组件（`Component` 的子类）。

### 3.1 脚本基本结构
``` typescript
import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

// 使用装饰器来定义组件的元数据
@ccclass('Player') // 指定组件在编辑器中的名称
export class Player extends Component {
   // 使用装饰器声明可在编辑器中被序列化和编辑的属性
   @property(Node)
   private target: Node | null = null; // 声明一个 Node 类型的属性
   @property
   private speed: number = 100; // 声明一个 number 类型的属性
   private _curPos: Vec3 = new Vec3(); //节点当前的位置
   
   // 组件首次激活时调用，通常用于初始化
   start() {
       // 例如：查找子节点
       let childNode = this.node.getChildByName("Child");
       // 例如：获取节点上的组件
       const labelComp = this.node.getComponent(Label);
       labelComp.string = "Hello World!";
       // 例如：预制体实例化 - 根据子弹Prefab创建实例
       const bullet = instantiate(this.bulletPrefab);
       this.node.addChild(bullet);
       // 设置初始位置（x, y）
       bullet.setPosition(300, 0);
   }

   // 每一帧都调用，deltaTime 是上一帧到当前帧的时间间隔
   update(deltaTime: number) {
       // 例如：移动逻辑
       if (this.target) {
           this.target.getPosition(this._curPos);
           this._curPos.x += this.speed * deltaTime;
           this.target.setPosition(this._curPos); // 每帧向右移动 100 单位（speed=100）
           this.target.angle += 1; // 每帧旋转1度
       }
   }
}
```

### 3.2 生命周期回调
- `onLoad()`：脚本初始化时调用，早于 `start`。常用于获取组件引用。
- `start()`：在组件第一次激活前，也就是第一次执行 `update` 之前触发。
- `update(deltaTime: number)`：每一帧渲染前调用，`deltaTime` 是距离上一帧的间隔时间（秒）。
- `lateUpdate(deltaTime: number)`：在所有 `update` 执行完后调用，常用于跟随相机等逻辑。
- `onEnable()`：当组件被启用时调用（例如 `this.enabled = true` 或节点激活时）。
- `onDisable()`：当组件被禁用时调用。
- `onDestroy()`：当组件被销毁时调用。

### 3.3 常用 API
- **访问节点**：
  - `this.node`：获取当前脚本所在的节点。
  - `this.node.parent`：获取父节点。
  - `this.node.children`：获取所有子节点。
  - `this.node.getChildByName("name")`：通过名字获取子节点。
- **操作变换**：
  - `this.node.position`：位置 (Vec3)。
  - `this.node.rotation`：旋转 (Quat, 四元数)。
  - `this.node.eulerAngles`：欧拉角 (Vec3)，更直观。
  - `this.node.angle`：欧拉角 (number，z轴)。
  - `this.node.scale`：缩放 (Vec3)。
  - `this.node.setPosition(x, y, z)`：设置位置。
- **访问其他组件**：
  - `this.getComponent(Sprite)`：获取当前节点上的 Sprite 组件。
  - `this.node.getComponentInChildren(Label)`：获取子节点中的 Label 组件。
  - `this.getComponent(Sprite).color = Color.RED`：修改组件属性。


## 4. 输入与事件处理
### 4.1 触摸事件（Touch）
- `onTouchStart`：触摸开始
- `onTouchMove`：触摸移动
- `onTouchEnd`：触摸结束

``` typescript
this.node.on(Node.EventType.TOUCH_START, this.onTouchStart, this);
onTouchStart(event: EventTouch) {
   console.log('Touch started at:', event.getLocation());
}
```

### 4.2 键盘事件（Keyboard）
- `EventKeyboard` 提供键盘输入支持。
- 常用方法：
    - `onKeyDown` / `onKeyUp`：按键按下/释放
    - `isPressed()`：判断某键是否持续按下

``` typescript
 input.on(Input.EventType.KEY_DOWN, this.onKeyDown, this);
 onKeyDown(event: EventKeyboard) {
     if (event.keyCode === KeyCode.SPACE) {
         this.jump();
     }
 }
```


## 5. 资源管理
### 5.1 资源类型
- **图片（PNG, JPG）**：导入后成为 `SpriteFrame`。
- **图集（Atlas）**：将多张小图打包成一张大图，减少 Draw Call。
- **预制体（Prefab）**：可复用的节点模板。
- **音效（MP3, WAV）**：通过 `AudioSource` 组件播放。
- **字体（TTF）**：用于 `Label` 组件。
- **场景（Scene）**：独立的场景文件。

### 5.2 动态加载资源
- 使用 `resources.load`（适用于放在 `resources` 目录下的资源）。
```typescript
import { resources, SpriteFrame } from 'cc';
// 加载 SpriteFrame
resources.load("ui/icon", SpriteFrame, (err, spriteFrame) => {
   if (err) {
       console.error(err);
       return;
   }
   this.getComponent(Sprite).spriteFrame = spriteFrame;
});
```


## 6. UI 系统
### 6.1 Canvas（画布）
- UI 的根容器，所有 UI 节点都必须是它的子节点。
- **渲染模式**：
  - `Canvas`：适用于纯 2D UI。
  - `Camera`：UI 由指定摄像机渲染。
- **分辨率策略（Design Resolution）**：设置游戏的设计分辨率，并选择适配策略（如 Fit Height, Fit Width 等）。

### 6.2 Widget（对齐挂件）
- 用于自动将 UI 元素对齐到父节点或屏幕的特定位置（如左上角、居中、底部等）。
- 是实现多屏幕适配的**核心组件**。

### 6.3 常用 UI 组件
- **Sprite**：显示图片。注意 `SpriteFrame` 的设置。
- **Label**：显示文本。注意字体、字号、颜色和对齐方式。
- **Button**：
  - `Target`：指定需要变化颜色的节点（通常是背景图）。
  - `Click Events`：绑定点击后触发的函数。
- **EditBox**：输入框。
- **Layout**：自动布局组件，用于水平、垂直排列子节点。


## 7. Tween 缓动系统
`Tween` 提供了一个简单灵活的方法来缓动目标，`to`表示绝对值计算，`by`表示使用相对值计算；Tween 比手动 update 更高效，但也要避免同时运行数百个 Tween。
``` typescript
const tween = new Tween(this.node)
    .to(1.0, { x: 100, y: 100 })  // 1秒内移动到目标位置
    .by(0.5, { scale: 1.2 })      // 0.5秒内放大1.2倍
    .delay(0.2)                   // 延迟0.2秒
    .start();
```


## 8. 动画编辑器
**动画编辑器**是制作复杂动画的视觉化工具，特别适合非程序员或需要精细控制动画序列的情况。

### 8.1 动画剪辑
1. 创建动画剪辑文件
   1. 在 **资源管理器** 中右键
   2. 选择 **创建 -> 动画剪辑**
   3. 命名为 `Name.anim`
2. 为节点添加动画组件
   1. 选中需要制作动画的节点
   2. 在 **属性检查器** 中点击 **添加组件**
   3. 选择 **Animation -> Animation**
   4. 将刚才创建的 `.anim` 文件拖拽到 **Clips** 属性中
3. 打开动画编辑器
   - 选中带有 Animation 组件的节点
   - 点击编辑器右上角的 **动画面板** 按钮（或 **面板 -> 动画**）

### 8.2 工作流程
+ 步骤 1：添加动画属性
  1. 点击属性列表中的 **+** 按钮
  2. 选择 **Node -> transform -> position**（常用属性：`position`, `rotation`, `scale`, `angle`, `color`, `opacity` 等）
  3. 轨道上会显示已有的关键帧
+ 步骤 2：创建关键帧
  1. 将时间指针移动到目标时间（如 1.0s）
  2. 在 **场景编辑器** 或 **属性检查器** 中修改属性值
  3. 系统会自动在当前位置创建关键帧
  4. 此外，还可以手动添加关键帧：方法①选中时间点按`K`键；方法②在属性轨道上右键->添加关键帧。
+ 步骤 3：编辑关键帧
  - **移动关键帧**：拖动关键帧点
  - **删除关键帧**：选中关键帧按 `Delete` 键
  - **复制粘贴**：`Ctrl+C`, `Ctrl+V`
+ 步骤 4：预览动画
  - 点击 **播放按钮** ▶️ 在编辑器内预览


### 8.3 脚本控制动画
```typescript
import { Animation } from 'cc';
// 获取 Animation 组件
const animation = this.node.getComponent(Animation);
// 播放指定剪辑
animation.play('BallBounce');
// 交叉淡入淡出
animation.crossFade('BallBounce', 0.3);
// 停止动画
animation.stop();

// 监听动画事件
// 方法 1：通过 Animation 组件监听
animation.on(Animation.EventType.PLAY, () => {
  console.log('动画开始播放');
});
animation.on(Animation.EventType.STOP, () => {
  console.log('动画停止');
});
// 方法 2：监听特定剪辑的事件
animation.on(Animation.EventType.FINISHED, (type, state) => {
  if (state.name === 'BallBounce') {
    console.log('弹跳动画播放完毕');
  }
});

// 获取动画状态信息
// 获取特定剪辑的状态
const state = animation.getState('BallBounce');
// 检查是否正在播放
if (state.isPlaying) {
    console.log('动画正在播放');
}
// 获取播放速度
const speed = state.speed;
// 设置播放速度（慢动作/快进）
state.speed = 0.5; // 半速播放
```

> 更多参考：[Cocos Creator 3.8 官方文档](https://docs.cocos.com/creator/3.8/manual/zh/)

