---
title: 「学习笔记」Cocos Creator 3.8 物理系统
date: 2024-03-21 18:25:30 +0800
tags: [TypeScript, Web游戏, 学习笔记]
categories: [Web游戏]
series: Web游戏
toc: true
---

Cocos Creator 的**物理系统**提供了强大的物理模拟功能，如重力、碰撞、摩擦等。Cocos Creator 提供了丰富的组件和 API 实现碰撞检测、刚体运动、关节等。
- **2D 物理**：适用于 2D 游戏，使用 Box2D 引擎。
- **3D 物理**：适用于 3D 游戏，使用 Bullet Physics 引擎。

## 1. 2D物理系统
在 Cocos Creator 中，2D 物理世界是通过 `PhysicsSystem2D` 管理的。通常不需要手动创建，因为 Cocos Creator 会自动管理。
物理系统默认是开启的，代码如下：`PhysicsSystem2D.instance.enable = true;`。

### 1.1 2D刚体（RigidBody2D） 与 2D碰撞体（Collider2D）
- **RigidBody2D（2D刚体组件）**：赋予节点物理属性（质量、重力、速度等）。
- **Collider2D（2D碰撞组件）**：定义节点的碰撞形状（矩形、圆形、多边形等）。
    - **BoxCollider2D**：盒碰撞组件。
    - **CircleCollider2D**：圆形碰撞组件。
    - **PolygonCollider2D**：多边形碰撞组件。

**示例：创建一个 2D 刚体**
```typescript
import { _decorator, Component, Node, RigidBody2D, Collider2D, BoxCollider2D } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('My2DPhysics')
export class My2DPhysics extends Component {
    @property(RigidBody2D)
    rigidBody: RigidBody2D | null = null; //刚体组件

    @property(BoxCollider2D)
    boxCollider: BoxCollider2D | null = null; //碰撞器组件

    start() {
        if (!this.rigidBody) {
            this.rigidBody = this.node.addComponent(RigidBody2D);
        }
        if (!this.boxCollider) {
            this.boxCollider = this.node.addComponent(BoxCollider2D);
        }

        // 设置刚体属性
        this.rigidBody.type = EPhysics2D.RigidBodyType.Dynamic; // 动态刚体
        this.rigidBody.gravityScale = 1.0; // 重力缩放
        this.rigidBody.linearDamping = 0.1; // 线性阻尼
        this.rigidBody.angularDamping = 0.1; // 角度阻尼

        // 设置矩形碰撞器的属性
        this.boxCollider.size = new Vec2(50, 50); // 碰撞盒大小
        this.boxCollider.offset = new Vec2(0, 0); // 碰撞盒偏移

        // // 在节点上添加圆形碰撞器
        // let circleCollider = this.node.addComponent(CircleCollider2D);
        // circleCollider.radius = 20; // 圆形半径
        // circleCollider.offset = new Vec2(0, 0); // 偏移
    }
}
```

### 1.2 2D关节组件（Joint2D）
关节组件可以用来模拟真实世界物体间的交互，比如铰链，活塞、绳子、轮子、滑轮、机动车、链条等。
- **Joint2D**：连接两个刚体，提供各种类型的关节（如铰链、滑动、弹簧等）。
  - `DistanceJoint2D`（距离关节），会将关节两端的刚体约束在一个最大范围内。超出该范围时，刚体的运动会互相影响。
  - `FixedJoint2D`（固定关节），根据两个物体的初始角度将两个物体上的两个点固定在一起。
  - `HingeJoint2D`（铰链关节），可以看做一个铰链或者钉，刚体会围绕一个共同点来旋转。
  - `RelativeJoint2D`（相对关节），控制两个刚体间的相对运动。
  - `SliderJoint2D`（滑动关节），两个刚体位置间的角度是固定的，它们只能在一个指定的轴上滑动。
  - `SpringJoint2D`（弹簧关节），将关节两端物体像弹簧一样连接在一起。
  - `WheelJoint2D`（轮子关节），用于模拟机动车车轮。

**示例：创建一个铰链关节**
```typescript
import { RevoluteJoint2D } from 'cc';
@ccclass('My2DPhysics')
export class My2DPhysics extends Component {
    @property(Node)
    otherNode: Node | null = null;
    start() {
        if (this.otherNode) {
            let joint = this.node.addComponent(RevoluteJoint2D);
            joint.connectedBody = this.otherNode.getComponent(RigidBody2D);
            joint.anchor = new Vec2(0, 0); // 锚点
        }
    }
}
```

### 1.3 2D碰撞回调
Box2D 物理模块需要先在`Rigidbody`中**开启碰撞监听**，才会有相应的回调产生。即在 `Rigidbody2D` 的 属性检查器 勾选 `EnabledContactListener` 属性。
```typescript
@ccclass('TestContactCallBack')
export class TestContactCallBack extends Component {
  start () {
    // 注册单个碰撞体的回调函数
    let collider = this.getComponent(Collider2D);
    if (collider) {
      collider.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
      collider.on(Contact2DType.END_CONTACT, this.onEndContact, this);
    }
  }
  onBeginContact (selfCollider: Collider2D, otherCollider: Collider2D, contact: IPhysics2DContact | null) {
    // 只在两个碰撞体开始接触时被调用一次
    console.log('onBeginContact');
  }
  onEndContact (selfCollider: Collider2D, otherCollider: Collider2D, contact: IPhysics2DContact | null) {
    // 只在两个碰撞体结束接触时被调用一次
    console.log('onEndContact');
  }
}
```
回调的参数包含了所有的碰撞接触信息，每个回调函数都提供了三个参数：
- `selfCollider`：指的是回调脚本的节点上的碰撞体；
- `otherCollider`：指的是发生碰撞的另一个碰撞体；
- `contact`：碰撞最主要的信息。其中比较常用的信息就是碰撞的位置和法向量。



## 2. 3D物理系统
在 Cocos Creator 中，3D 物理世界是通过 `PhysicsSystem` 管理的。通常不需要手动创建，因为 Cocos Creator 会自动管理。
可以通过直接访问 PhysicsSystem.instance 对物理系统进行程序化配置：
```typescript
import { _decorator, Component, Node, Vec3, PhysicsSystem } from 'cc';
const { ccclass, property } = _decorator;
@ccclass('Example')
export class Example extends Component {
  start () {
    PhysicsSystem.instance.enable = true;                //开启物理系统，默认开启
    PhysicsSystem.instance.gravity = new Vec3(0, -10, 0);//重力矢量，默认值 { x: 0, y: -10, z: 0 }
    PhysicsSystem.instance.allowSleep = false;           //是否允许系统进入休眠状态，默认值 true
    PhysicsSystem.instance.friction = 0.5;               //摩擦系数，默认值 0.5
  }
}
```

### 2.1 刚体（RigidBody） 与 碰撞体（Collider）
- **RigidBody**：赋予节点物理属性（质量、重力、速度等）。
- **Collider**：定义节点的碰撞形状（盒子、球体、胶囊体等）。
    - **BoxCollider**：盒子碰撞组件。
    - **SphereCollider**：球体碰撞组件。
    - **CapsuleCollider**：胶囊体碰撞组件。
    - **MeshCollider**：网格碰撞组件。

**示例：创建一个 3D 刚体**
```typescript
import { _decorator, Component, Node, RigidBody, Collider, BoxCollider } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('My3DPhysics')
export class My3DPhysics extends Component {
    @property(RigidBody)
    rigidBody: RigidBody | null = null;
    @property(BoxCollider)
    boxCollider: BoxCollider | null = null;

    start() {
        if (!this.rigidBody) {
            this.rigidBody = this.node.addComponent(RigidBody);
        }
        if (!this.boxCollider) {
            this.boxCollider = this.node.addComponent(BoxCollider);
        }
        // 设置刚体属性
        this.rigidBody.type = ERigidBodyType.DYNAMIC; // 动态刚体
        this.rigidBody.gravityScale = 1.0; // 重力缩放
        this.rigidBody.linearDamping = 0.1; // 线性阻尼
        this.rigidBody.angularDamping = 0.1; // 角度阻尼
        // 设置碰撞器属性
        this.boxCollider.size = new Vec3(1, 1, 1); // 碰撞盒大小
        this.boxCollider.center = new Vec3(0, 0, 0); // 碰撞盒中心
        // 在节点上添加球体碰撞器
        // let sphereCollider = this.node.addComponent(SphereCollider);
        // sphereCollider.radius = 1.0; // 球体半径
        // sphereCollider.center = new Vec3(0, 0, 0); // 球体中心
    }
}
```
### 2.2 约束 Constraint
在物理引擎中，**Constraint（约束）**用于模拟物体间的连接情况，如连杆、绳子、弹簧或者布娃娃等。
- `HingeConstraint`（铰链约束），将连接物体的运动约束在某一个轴上，这种约束在模拟门的合页或电机转动等情形下非常有用。
- `PointToPointConstraint`（点对点约束）一种简单的复合约束，可以将两个对象，或者一个对象与坐标系中一点连接。连接的对象可以在共用一个连接点的情况下，相对对方自由旋转。
- `FixedConstraint`（固定约束）一种最简单的约束，它锁定了两个刚体之间的相对位置和旋转。连接的对象不允许相对于彼此移动。
- `ConfigurableConstraint`（可配置约束）通过配置，对6个自由度分别进行控制，并通过设置不同方向上的约束参数实现几乎所有物理引擎中常用的特殊约束。不同自由度可以有不同的约束模式，如free(不做任何约束)、limited(限制刚体的运动范围和过程) 和 locked(限制连接的刚体必须相对静止)。
- `LinearLimitSettings`（线性限制）
- `AngularLimitSettings`（角度限制） 
- `LinearDriverSettings`（线性马达）
- `AngularDriverSettings`（角度马达）

### 2.3 物理事件
触发器与碰撞器：碰撞组件属性`IsTrigger`(默认false)设置为`true`时，组件为触发器。触发器只用于碰撞检测和触发事件，不会产生碰撞效果。
- 两者的区别如下：
  + 触发器不会与其它触发器或者碰撞器做更精细的检测。
  + 碰撞器与碰撞器会做更精细的检测，并会产生碰撞数据，如碰撞点、法线等。

- 触发事件
  - **onTriggerEnter**：触发开始时调用。
  - **onTriggerStay**：触发持续时调用。
  - **onTriggerExit**：触发结束时调用。
- 碰撞事件
  - **onCollisionEnter**：碰撞开始时调用。
  - **onCollisionStay**：碰撞持续时调用。
  - **onCollisionExit**：碰撞结束时调用。

> 接收事件的前提是两者至少有一个物体带有的是非静态刚体（只有碰撞组件没有刚体组件的对象，视为持有静态刚体的对象）。

**示例：处理碰撞事件**
```typescript
import { IPhysicsContact, CollisionEvent, RigidBody, Collider } from 'cc';
@ccclass('My3DPhysics')
export class My3DPhysics extends Component {
    onCollisionEnter(event: CollisionEvent) {
        console.log('Collision Enter');
        // 获取碰撞对象
        let otherNode = event.otherCollider.node;
        let otherRigidbody = otherNode.getComponent(RigidBody);
        // 可以在这里添加碰撞逻辑
        if (otherRigidbody) {
            otherRigidbody.applyForce(new Vec3(10, 0, 0), new Vec3(0, 0, 0)); // 施加力
        }
    }
    onCollisionStay(event: CollisionEvent) {
        console.log('Collision Stay');
    }
    onCollisionExit(event: CollisionEvent) {
        console.log('Collision Exit');
    }
}
```

### 2.4 射线和线段检测
射线检测是对一条射线和另一个形状进行**相交性判断**。
```typescript
import { geometry } from 'cc';

// 构造一条从（0，-1，0）出发，指向 Y 轴的射线 （前三个参数是起点，后三个参数是方向）
const worldRay = new geometry.Ray(0, -1, 0, 0, 1, 0); // 或通过静态方法 geometry.Ray.create(0, -1, 0, 0, 1, 0);
// 以下参数可选
const mask = 0xffffffff;// 用于过滤的 掩码，可以传入需要检测的分组，默认为 0xffffffff
const maxDistance = 10000000;// 最大检测距离，默认为 10000000
const queryTrigger = true; // 是否检测触发器

const bResult = PhysicsSystem.instance.raycast(worldRay, mask, maxDistance, queryTrigger);
if(bResult){
  const results = PhysicsSystem.instance.raycastResults;
  for (let i = 0; i < results.length; i++) {
    const result = results[i];
    const collider = result.collider;// 击中的碰撞器
    const distance = result.distance;// 击中点与射线起点的距离
    const hitPoint = result.hitPoint;// 击中点（世界坐标系中）
    const hitNormal = result.hitNormal;// 击中点所处面的法线（世界坐标系中）
  }
}
```

射线检测接口：
- `raycast` : 检测所有的碰撞体，并记录所有被检测到的结果，通过 `PhysicsSystem.instance.raycastResults` 获取。接口返回布尔值，返回 true 表示射线是否和碰撞体相交。
- `raycastClosest` ：检测所有的碰撞体，并记录与射线距离最短的检测结果，通过 `PhysicsSystem.instance.raycastClosestResult` 获取。同样返回布尔值，表示是否和碰撞体相交。

线段检测接口：两个方法 `lineStripCast` 以及 `lineStripCastClosest`，内部由 `raycast` 实现，通过定义 `samplePointsWorldSpace` 参数可以很方便的检测曲线是否有击中其他碰撞体。
```typescript
lineStripCast (samplePointsWorldSpace: Array<Vec3>, mask = 0xffffffff, maxDistance = 10000000, queryTrigger = true): boolean;
lineStripCastClosest (samplePointsWorldSpace: Array<Vec3>, mask = 0xffffffff, maxDistance = 10000000, queryTrigger = true): boolean;
```
参数说明:
- `samplePointsWorldSpace`：世界空间下的采样点/直线段
- `mask`：用于过滤的 掩码，可以传入需要检测的分组，默认为 0xffffffff
- `maxDistance`：最大检测距离，默认为 10000000，目前请勿传入 Infinity 或 Number.MAX_VALUE
- `queryTrigger`：是否检测触发器

返回结果说明：返回 `true` 时，表示曲线和碰撞体相交。结果存储在 `PhysicsSystem.Instance.lineStripCastResults`
- `id`：发生相交时线段的索引
- `collider`：击中的碰撞器
- `distance`：击中点与射线起点的距离
- `hitPoint`：击中点（世界坐标系中）
- `hitNormal`：击中点所处面的法线（世界坐标系中）


> 更多参考：[Cocos Creator 官方文档](https://docs.cocos.com/creator/3.8/manual/zh/)
