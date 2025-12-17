---
title: 「学习笔记」Web图形库 Three.js 入门
date: 2025-12-09T13:58:27+08:00
tags: [TypeScript, Web游戏, ThreeJs, 学习笔记]
categories: [Web游戏]
series: Web游戏
toc: true
draft: false
---

`Three.js`是一个基于`WebGL`的`3D`图形库，由“Ricardo Cabello”于2010年4月在`GitHub`首次发布。
- `Three.js`支持`CDN`和`npm`引入，推荐`npm`加`TypeScript`代码提示。
  - 官方文档: https://threejs.org/docs/
  - 官方示例: https://threejs.org/examples/
  - GitHub: https://github.com/mrdoob/three.js/

## 1.三大核心组件
- **场景(Scene)**: 所有对象的容器，相当于舞台
```javascript
import * as THREE from 'three';
const scene = new THREE.Scene(); // 创建场景
```

- **相机(Camera)**: 观察场景的视角
```javascript
// 透视相机(最常用)
const perspectiveCamera = new THREE.PerspectiveCamera(
    45, // FOV 视野角度 45°
    window.innerWidth / window.innerHeight, // 宽高比
    0.1, // 近裁剪面
    1000 // 远裁剪面
);
// 正交相机
const orthographicCamera = new THREE.OrthographicCamera(
    window.innerWidth / -2, // 左
    window.innerWidth / 2,  // 右
    window.innerHeight / 2, // 上
    window.innerHeight / -2, // 下
    0.1, // 近
    1000 // 远
);
```

- **渲染器(Renderer)**: 将场景和相机渲染到画布上
```javascript
const renderer = new THREE.WebGLRenderer(); // 创建渲染器
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
```

## 2.几何体、材质与网格
- **几何体(Geometry)**：定义形状（如立方体BoxGeometry、球体SphereGeometry）。
```javascript
// 基础几何体
const box = new THREE.BoxGeometry(1, 1, 1); //长方体
const sphere = new THREE.SphereGeometry(1, 32, 16); //球体
const cylinder = new THREE.CylinderGeometry(0.5, 0.5, 2, 32);//圆柱体
const cone = new THREE.ConeGeometry(0.5, 2, 32);//圆锥
const plane = new THREE.PlaneGeometry(5, 5);//矩形平面
const circle = new THREE.CircleGeometry(1, 32);//圆形平面
const ring = new THREE.RingGeometry(0.5, 1, 32);
// 复杂几何体
const torus = new THREE.TorusGeometry(1, 0.4, 16, 100);
const torusKnot = new THREE.TorusKnotGeometry(1, 0.3, 100, 16);
```

- **材质(Material)**：控制外观（如MeshBasicMaterial不受光照影响）。
```javascript
// 基础材质
const basicMaterial = new THREE.MeshBasicMaterial({
  color: 0xff0000,
  wireframe: false,
  transparent: true,
  opacity: 0.5
});
// 标准材质(支持光照)
const standardMaterial = new THREE.MeshStandardMaterial({
  color: 0x00ff00,
  roughness: 0.5,
  metalness: 0.5
});
// 物理材质
const physicalMaterial = new THREE.MeshPhysicalMaterial({
  color: 0x00ff00,
  clearcoat: 1.0,
  clearcoatRoughness: 0.1
});
// 线材质
const lineMaterial = new THREE.LineBasicMaterial({ color: 0x0000ff });
```

- **网格模型(Mesh)**：组合几何体和材质，即物体，添加到场景。
```javascript
// 两个参数分别为几何体geometry、材质material
const mesh = new THREE.Mesh(geometry, material); //网格模型对象Mesh
// 设置网格模型在三维空间中的位置坐标，默认是坐标原点
mesh.position.set(0,10,0);
```

## 3.纹理贴图（Texture）
```javascript
// 加载纹理
const textureLoader = new THREE.TextureLoader();
const texture = textureLoader.load('texture.jpg');
// 应用纹理
const material = new THREE.MeshStandardMaterial({
  map: texture, // 漫反射贴图
  normalMap: normalTexture, // 法线贴图
  roughnessMap: roughnessTexture, // 粗糙度贴图
  metalnessMap: metalnessTexture, // 金属度贴图
  aoMap: aoTexture // 环境光遮蔽贴图
});
// 立方体贴图
const cubeTextureLoader = new THREE.CubeTextureLoader();
const skyboxTexture = cubeTextureLoader.load([
  'px.jpg', 'nx.jpg',
  'py.jpg', 'ny.jpg',
  'pz.jpg', 'nz.jpg'
]);
scene.background = skyboxTexture;
```

## 4.光源(Light)
```javascript
// 环境光(均匀照亮所有物体)
const ambientLight = new THREE.AmbientLight(0x404040, 0.5);
scene.add(ambientLight);
// 平行光(类似太阳光)
const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(5, 10, 7);
scene.add(directionalLight);
// 点光源(类似灯泡)
const pointLight = new THREE.PointLight(0xffffff, 1, 100);
pointLight.position.set(10, 10, 10);
scene.add(pointLight);
// 聚光灯
const spotLight = new THREE.SpotLight(0xffffff, 1, 100, Math.PI / 4);
spotLight.position.set(10, 20, 10);
scene.add(spotLight);

// 半球光(模拟天空光)
const hemisphereLight = new THREE.HemisphereLight(0xffffbb, 0x080820, 1);
scene.add(hemisphereLight);
```

## 5.交互与动态效果
### 5.1 动画循环
```javascript
// 使用 requestAnimationFrame
function animate() {
  requestAnimationFrame(animate);
  // 更新逻辑
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  // 渲染
  renderer.render(scene, camera);
}

// 使用 Clock 管理时间
const clock = new THREE.Clock();
function animate() {
  const delta = clock.getDelta();
  const elapsedTime = clock.getElapsedTime();
  cube.rotation.y = elapsedTime * Math.PI;
  renderer.render(scene, camera);
  requestAnimationFrame(animate);
}
```

### 5.2 相机控制：
```javascript
// 通过`OrbitControls`(轨道控制器)实现鼠标控制视角
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true; // 启用阻尼，使相机运动更平滑
controls.dampingFactor = 0.05; // 设置阻尼系数
controls.autoRotate = false; // 禁止自动旋转
controls.enableZoom = true;  // 启用缩放

// 在动画循环中更新
function animate() {
  controls.update();
  renderer.render(scene, camera);
}
```


## 6.性能优化
```javascript
// 1. 合并几何体
const geometries = [];
for (let i = 0; i < 100; i++) {
  const geometry = new THREE.BoxGeometry(1, 1, 1);
  geometries.push(geometry);
}
const mergedGeometry = BufferGeometryUtils.mergeBufferGeometries(geometries);

// 2. 使用 InstancedMesh 绘制大量相同物体
const instancedMesh = new THREE.InstancedMesh(geometry, material, 1000);
const dummy = new THREE.Object3D();
for (let i = 0; i < 1000; i++) {
  dummy.position.set(Math.random() * 100, Math.random() * 100, Math.random() * 100);
  dummy.updateMatrix();
  instancedMesh.setMatrixAt(i, dummy.matrix);
}

// 3. 使用 LOD(细节层次)
const lod = new THREE.LOD();
const highDetail = new THREE.Mesh(highDetailGeometry, material);
const lowDetail = new THREE.Mesh(lowDetailGeometry, material);

lod.addLevel(highDetail, 0);
lod.addLevel(lowDetail, 50);
```

## 7.加载器和后期处理
### 7.1 模型加载
```javascript
// GLTF/GLB 加载 (3D模型)
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
const loader = new GLTFLoader();
loader.load('model.glb', (gltf) => {
  const model = gltf.scene;
  scene.add(model);
});

// OBJ 加载
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader.js';
const mtlLoader = new MTLLoader();
mtlLoader.load('model.mtl', (materials) => {
  materials.preload();
  const objLoader = new OBJLoader();
  objLoader.setMaterials(materials);
  objLoader.load('model.obj', (object) => {
    scene.add(object);
  });
});
```

### 7.2 后期处理
```javascript
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';

// 创建后期处理器
const composer = new EffectComposer(renderer);
// 添加渲染通道
const renderPass = new RenderPass(scene, camera);
composer.addPass(renderPass);
// 添加辉光效果
const bloomPass = new UnrealBloomPass(
  new THREE.Vector2(window.innerWidth, window.innerHeight),
  1.5, // 强度
  0.4, // 半径
  0.85 // 阈值
);
composer.addPass(bloomPass);
// 在动画循环中使用
function animate() {
  composer.render();
  requestAnimationFrame(animate);
}
```

## 8.实用工具和技巧
### 8.1 辅助工具
```javascript
// 坐标轴辅助
const axesHelper = new THREE.AxesHelper(5);
scene.add(axesHelper);
// 网格辅助
const gridHelper = new THREE.GridHelper(10, 10);
scene.add(gridHelper);
// 光源辅助
const lightHelper = new THREE.DirectionalLightHelper(directionalLight, 5);
scene.add(lightHelper);
// 相机辅助
const cameraHelper = new THREE.CameraHelper(camera);
scene.add(cameraHelper);
```

### 8.2 射线检测(鼠标交互)
```javascript
const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();

function onMouseClick(event) {
  // 计算标准化设备坐标
  mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
  // 更新射线
  raycaster.setFromCamera(mouse, camera);
  // 计算物体与射线的交点
  const intersects = raycaster.intersectObjects(scene.children);
  if (intersects.length > 0) {
    const clickedObject = intersects[0].object;
    // 处理点击事件
  }
}
window.addEventListener('click', onMouseClick);
```

### 8.3 响应式设计
```javascript
function onWindowResize() {
  // 更新相机
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  // 更新渲染器
  renderer.setSize(window.innerWidth, window.innerHeight);
}

window.addEventListener('resize', onWindowResize);
```

### 8.4 调试工具
- 使用 Three.js Developer Tools 浏览器插件
- console.log(scene.children) 查看场景结构
- 使用 dat.GUI 创建控制面板
