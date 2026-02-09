---
title: 「学习笔记」Golang -- GoFrame + Casbin 实现企业级 RBAC 权限管理
date: 2023-09-24 18:56:06
tags: [Golang编程, 学习笔记]
categories: [Golang编程]
series: Golang编程
toc: true
---

在企业级应用开发中，权限管理是保障系统安全的核心功能之一。一个健壮的权限管理系统能够确保用户只能访问其被授权的资源，防止未授权操作和数据泄露。RBAC（基于角色的访问控制）模型因其灵活性和可扩展性，成为了企业级应用权限管理的首选方案。本文将详细介绍如何在 GoFrame 框架中集成 Casbin 实现 RBAC 权限管理，并与前端 Vue 3 项目无缝集成，构建前后端一体化的权限管理系统。

## 一、Casbin 与 RBAC 权限模型解析

### 1.1 Casbin 核心特性

Casbin 是一个功能强大、灵活的开源访问控制框架，其核心优势在于：
- **模型与策略分离**：通过配置文件定义权限模型，策略存储与业务逻辑解耦
- **多模型支持**：内置支持 RBAC、ABAC、ACL 等多种权限模型
- **多存储后端**：支持文件、数据库、Redis 等多种策略存储方式
- **语言无关**：提供多种编程语言的实现，便于跨语言项目使用
- **集群支持**：通过 Watcher 机制支持权限规则的集群同步

### 1.2 RBAC 权限模型原理

RBAC 模型通过将权限与角色关联，用户通过分配角色获得相应的权限，大大简化了权限管理的复杂性。其核心概念包括：
- **用户（User）**：系统中的操作者
- **角色（Role）**：权限的集合，如管理员、普通用户等
- **权限（Permission）**：对资源的操作许可
- **资源（Resource）**：系统中受保护的对象，如菜单、API 等
- **操作（Action）**：对资源的操作类型，如读取、写入、删除等

RBAC 模型的优势在于：
- **权限管理集中化**：通过角色管理权限，避免了对每个用户单独授权的繁琐
- **权限变更简单**：权限变更只需修改角色的权限，所有拥有该角色的用户自动获得更新
- **权限审计容易**：通过角色可以清晰地了解用户的权限范围


## 二、后端 Casbin 集成与实现

### 2.1 项目结构设计

在后端项目中，Casbin 相关的代码和配置文件采用了清晰的分层结构：

```
project/
├── internal/
│   └── app/
│       └── common/
│           ├── dao/            # 数据访问层
│           ├── model/          # 数据模型
│           └── service/        # 业务逻辑层
│               ├── casbin.go          # Casbin 核心实现
│               └── casbin_watcher.go  # 集群同步实现
├── manifest/
│   └── config/
│       └── config.yaml        # 配置文件
└── resource/
    └── casbin/
        ├── rbac_model.conf    # 权限模型配置
        └── rbac_policy.csv    # 策略文件
```

### 2.2 权限模型配置

项目使用 `rbac_model.conf` 文件定义了 RBAC 权限模型，配置如下：

```ini
[request_definition]
r = sub, obj, act

[policy_definition]
p = sub, obj, act

[role_definition]
g = _, _

[policy_effect]
e = some(where (p.eft == allow))

[matchers]
m = g(r.sub, p.sub) && r.obj == p.obj && r.act == p.act
```

该配置定义了：
- **请求结构**：`r = sub, obj, act`（主体、对象、操作）
- **策略结构**：`p = sub, obj, act`（主体、对象、操作）
- **角色关系**：`g = _, _`（用户与角色的关系）
- **策略效果**：只要存在一条允许的策略，就允许访问
- **匹配规则**：用户拥有角色，且请求的对象和操作与策略匹配

### 2.3 数据库设计与存储

项目使用 MySQL 存储 Casbin 策略规则，数据库表结构设计如下：

```sql
/* ptype:规则类型, v1-v5:规则值*/
insert  into `casbin_rule`(`ptype`,`v0`,`v1`,`v2`,`v3`,`v4`,`v5`) 
values ('g','u_1','1','','','',''),
       ('g','u_2','2','','','',''),
       ('p','1','3','All','','',''),
       ('p','1','4','All','','',''),
       ('p','1','5','All','','',''),
       ('p','1','7','All','','',''),
       ('p','1','8','All','','',''),
       ('p','1','9','All','','',''),
       ...
```
这种设计充分利用了 Casbin 的灵活性，能够适应各种复杂的权限规则存储需求。


### 2.4 Casbin 核心实现

#### 2.4.1 单例模式初始化 Enforcer

为了提高性能和一致性，项目使用单例模式初始化 Casbin Enforcer：

```go
// CasbinEnforcer 获取单例对象
func CasbinEnforcer() (*casbin.SyncedEnforcer, error) {
    // once.Do 保证内部逻辑只执行一次，无论调用多少次
    once.Do(func() {
        enforcer, enforcerErr = initEnforcerSingleton()
    })
    return enforcer, enforcerErr
}

// initEnforcerSingleton 真正执行初始化的逻辑
func initEnforcerSingleton() (*casbin.SyncedEnforcer, error) {
    // 初始化 Adapter
    adapterCtx := gctx.GetInitCtx()
    a := &adapterCasbin{
        ctx: adapterCtx,
    }

    // 初始化 Enforcer
    modelFile := g.Cfg().MustGet(a.ctx, "casbin.modelFile").String()
    e, err := casbin.NewSyncedEnforcer(modelFile, a)
    if err != nil {
        return nil, err
    }
    
    // 配置集群同步（可选）
    if g.Cfg().MustGet(a.ctx, "casbin.cluster").Bool() {
        // 初始化 Watcher
        w, err := NewGfWatcher("casbin_policy_channel")
        if err != nil {
            g.Log().Error(a.ctx, "Casbin Watcher 初始化失败，集群同步功能不可用:", err)
        } else {
            // 设置 Watcher
            _ = e.SetWatcher(w)

            // 设置回调：收到消息重新加载
            _ = w.SetUpdateCallback(func(msg string) {
                g.Log().Info(a.ctx, "Casbin 规则变更，正在重新加载策略...")
                if err := e.LoadPolicy(); err != nil {
                    g.Log().Error(a.ctx, "Casbin 重载失败:", err)
                } else {
                    g.Log().Info(a.ctx, "Casbin 重载成功")
                }
            })
        }
    }
    return e, nil
}
```

#### 2.4.2 自定义数据库 Adapter

项目实现了自定义的 Casbin Adapter，用于从 MySQL 数据库加载和保存策略：

```go
// SavePolicy saves policy to database.
func (a *adapterCasbin) SavePolicy(model model.Model) (err error) {
    // 插入 P 规则
    for ptype, ast := range model["p"] {
        for _, rule := range ast.Policy {
            line := savePolicyLine(ptype, rule)
            _, err := dao.CasbinRule.Ctx(a.ctx).Data(line).Insert()
            if err != nil {
                return err
            }
        }
    }
    // 插入 G 规则
    for ptype, ast := range model["g"] {
        for _, rule := range ast.Policy {
            line := savePolicyLine(ptype, rule)
            _, err := dao.CasbinRule.Ctx(a.ctx).Data(line).Insert()
            if err != nil {
                return err
            }
        }
    }
    return
}

// LoadPolicy loads policy from database.
func (a *adapterCasbin) LoadPolicy(model model.Model) error {
    var lines []*entity.CasbinRule
    if err := dao.CasbinRule.Ctx(a.ctx).Scan(&lines); err != nil {
        return err
    }
    for _, line := range lines {
        loadPolicyLine(line, model)
    }
    return nil
}
```

#### 2.4.3 权限验证中间件

项目实现了基于 Casbin 的权限验证中间件，用于保护 API 接口：

```go
// 权限验证中间件
func AuthMiddleware(r *ghttp.Request) {
    // 获取用户 ID
    adminId := service.SysUser().GetUserId(r)
    if adminId == 0 {
        libResponse.FailJson(true, r, "请先登录")
        return
    }

    // 获取当前请求的菜单信息
    menu := service.SysMenu().GetCurrentMenu(r)
    if menu == nil {
        libResponse.FailJson(true, r, "菜单不存在")
        return
    }

    // 跳过无需验证的菜单
    if gstr.Equal(menu.Condition, "nocheck") {
        r.Middleware.Next()
        return
    }

    // 验证权限
    menuId := menu.Id
    if menuId != 0 {
        enforcer, err := commonService.CasbinEnforcer()
        if err != nil {
            g.Log().Error(r.Context(), err)
            libResponse.FailJson(true, r, "获取权限失败")
            return
        }

        // 构建用户标识，验证权限
        userKey := fmt.Sprintf("%s%d", service.SysUser().GetCasBinUserPrefix(), adminId)
        hasAccess, err := enforcer.Enforce(userKey, gconv.String(menuId), "All")
        if err != nil {
            g.Log().Error(r.Context(), err)
            libResponse.FailJson(true, r, "权限验证失败")
            return
        }

        if !hasAccess {
            libResponse.FailJson(true, r, "无权限访问")
            return
        }
    }

    r.Middleware.Next()
}
```

## 三、前端 Vue 3 权限管理实现

### 3.1 前端权限管理架构

前端项目使用 Vue 3 + Element Plus 实现了完整的权限管理功能，与后端 Casbin 权限系统无缝集成。前端权限管理主要包括以下几个方面：
- **路由权限**：基于用户权限动态生成路由
- **菜单权限**：根据用户权限显示对应的菜单
- **按钮权限**：控制页面按钮的显示与隐藏
- **权限信息管理**：存储和管理用户权限信息

### 3.2 路由守卫与动态路由生成

前端使用 Vue Router 的路由守卫实现路由权限控制，并根据用户权限生成动态路由：

```typescript
// 路由守卫
router.beforeEach(async (to, from, next) => {
  NProgress.start();
  const hasToken = sessionStorage.getItem("accessToken");
  
  if (hasToken) {
    if (to.path === "/login") {
      // 已登录用户跳转首页
      next({ path: "/" });
      NProgress.done();
    } else {
      const userStore = useUserStore();
      const routeStatus = userStore.user.routeStatus;
      
      if (routeStatus) {
        // 路由已生成，直接跳转
        if (to.matched.length === 0) {
          from.name ? next({ name: from.name }) : next("/404");
        } else {
          next();
        }
      } else {
        // 生成动态路由
        const permissionStore = usePermissionStore();
        try {
          const accessRoutes = await permissionStore.generateRoutes();
          accessRoutes.forEach((route: RouteRecordRaw) => {
            router.addRoute(route);
          });
          // 设置路由生成状态
          userStore.setRouteStatus(true);
          // 重新跳转，确保路由已注册
          next({ ...to, replace: true });
        } catch (error) {
          // 权限获取失败，跳转到登录页
          await userStore.resetToken();
          next(`/login?redirect=${to.path}`);
          NProgress.done();
        }
      }
    }
  } else {
    // 未登录用户只能访问白名单路由
    if (whiteList.indexOf(to.path) !== -1) {
      next();
    } else {
      next(`/login?redirect=${to.path}`);
      NProgress.done();
    }
  }
});
```

动态路由生成实现：

```typescript
// 生成动态路由
function generateRoutes() {
  return new Promise<RouteRecordRaw[]>((resolve, reject) => {
    try {
      // 从本地存储获取菜单数据
      const menuRouteStr = localStorage.getItem("userMenu");
      const menuRoutes = JSON.parse(menuRouteStr ?? "");
      // 过滤有权限的路由
      const accessedRoutes = filterAsyncRoutes(menuRoutes);
      setRoutes(accessedRoutes);
      resolve(accessedRoutes);
    } catch (error) {
      reject(error);
    }
  });
}
```

### 3.3 按钮权限控制指令

前端使用 Vue 的自定义指令实现按钮权限控制，根据用户权限动态显示或隐藏按钮：

```typescript
// 按钮权限指令
export const hasPerm: Directive = {
  mounted(el: HTMLElement, binding: DirectiveBinding) {
    const { permissions } = useUserStoreHook().user;
    // 超级管理员拥有所有权限
    if (permissions.includes("*/*/*")) {
      return;
    }
    // 验证按钮权限
    const { value } = binding;
    if (value) {
      const requiredPerms = value; // DOM 绑定需要的按钮权限标识
      
      const hasPerm = permissions?.some((perm: string) => {
        return requiredPerms.includes(perm);
      });
      
      if (!hasPerm) {
        // 无权限时移除按钮
        el.parentNode && el.parentNode.removeChild(el);
      }
    } else {
      throw new Error(
        "需要指定权限标识！例如: v-has-perm=\"['sys:user:add','sys:user:edit']\""
      );
    }
  },
};
```

### 3.4 用户权限管理

前端使用 Pinia 存储和管理用户权限信息，实现权限的持久化和动态更新：

```typescript
// 用户状态管理
export const useUserStore = defineStore("user", () => {
  const user = ref<any>({
    id: 0,
    userName: "",
    userNickname: "",
    permissions: [],
    routeStatus: false, // 路由是否已生成
  });

  // 登录
  function login(loginData: any) {
    return new Promise<void>((resolve, reject) => {
      loginApi(loginData)
        .then((res) => {
          const userInfo = res.data.userInfo;
          // 存储 token
          sessionStorage.setItem("accessToken", "Bearer " + res.data.token);
          // 存储用户信息
          localStorage.setItem("userInfo", JSON.stringify(userInfo));
          // 存储菜单权限
          localStorage.setItem("userMenu", JSON.stringify(res.data.menuList));
          // 存储按钮权限
          localStorage.setItem("permissions", JSON.stringify(res.data.permissions));
          // 更新用户信息
          setUserInfo();
          resolve();
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  // 设置用户信息
  function setUserInfo() {
    const userInfo = JSON.parse(localStorage.getItem("userInfo") ?? "{}");
    Object.assign(user.value, { ...userInfo });
    user.value.permissions = JSON.parse(
      localStorage.getItem("permissions") ?? "[]"
    );
  }

  // 刷新权限
  function setPermissions() {
    user.value.permissions = JSON.parse(
      localStorage.getItem("permissions") ?? "[]"
    );
  }

  return {
    user,
    login,
    setUserInfo,
    setPermissions,
    // 其他方法...
  };
});
```

## 四、前后端一体化权限管理集成

### 4.1 整体架构设计

前后端一体化的 RBAC 权限管理方案采用了分层架构，确保权限控制的全面性和一致性：

1. **数据层**：MySQL 存储用户、角色、菜单和权限规则数据
2. **后端服务层**：GoFrame + Casbin 实现权限验证和管理逻辑
3. **前端应用层**：Vue 3 + Element Plus 实现权限控制和用户界面
4. **通信层**：RESTful API 实现前后端数据交互

### 4.2 权限数据流转

完整的权限数据流转过程如下：

1. **登录阶段**：
   - 前端发送登录请求
   - 后端验证用户身份，查询用户权限
   - 后端返回 token 和权限信息（菜单权限、按钮权限）
   - 前端存储权限信息并生成动态路由

2. **访问控制阶段**：
   - 前端路由守卫验证路由权限
   - 前端按钮权限指令验证按钮权限
   - 前端发送 API 请求时携带 token
   - 后端中间件验证 API 权限

3. **权限管理阶段**：
   - 前端提供权限管理界面（角色管理、菜单管理、用户管理）
   - 后端提供权限管理 API 接口
   - 权限变更时，前端更新本地存储并刷新路由

### 4.3 代码示例：完整权限验证流程

#### 4.3.1 后端 API 权限验证

```go
// 权限验证中间件
func AuthMiddleware(r *ghttp.Request) {
    // 获取用户 ID
    adminId := service.SysUser().GetUserId(r)
    if adminId == 0 {
        libResponse.FailJson(true, r, "请先登录")
        return
    }

    // 获取当前菜单
    menu := service.SysMenu().GetCurrentMenu(r)
    if menu == nil {
        libResponse.FailJson(true, r, "菜单不存在")
        return
    }

    // 跳过无需验证的菜单
    if gstr.Equal(menu.Condition, "nocheck") {
        r.Middleware.Next()
        return
    }

    // 验证权限
    menuId := menu.Id
    if menuId != 0 {
        enforcer, err := commonService.CasbinEnforcer()
        if err != nil {
            g.Log().Error(r.Context(), err)
            libResponse.FailJson(true, r, "获取权限失败")
            return
        }

        // 构建用户标识并验证权限
        userKey := fmt.Sprintf("%s%d", service.SysUser().GetCasBinUserPrefix(), adminId)
        hasAccess, err := enforcer.Enforce(userKey, gconv.String(menuId), "All")
        if err != nil {
            g.Log().Error(r.Context(), err)
            libResponse.FailJson(true, r, "权限验证失败")
            return
        }

        if !hasAccess {
            libResponse.FailJson(true, r, "无权限访问")
            return
        }
    }

    r.Middleware.Next()
}
```

#### 4.3.2 前端按钮权限控制

```vue
<template>
  <div class="table-header">
    <el-button
      v-hasPerm="['sys:user:add']"
      type="primary"
      size="default"
      @click="onOpenAddUser"
    >
      <i-ep-plus />新增用户
    </el-button>
    <el-button
      v-hasPerm="['sys:user:import']"
      type="success"
      size="default"
      @click="onImportUser"
    >
      <i-ep-upload />导入用户
    </el-button>
  </div>
  
  <el-table>
    <!-- 表格内容 -->
    <el-table-column label="操作" width="240">
      <template #default="scope">
        <el-button
          v-hasPerm="['sys:user:edit']"
          type="primary"
          link
          size="small"
          @click="onOpenEditUser(scope.row)"
        >
          <i-ep-edit />修改
        </el-button>
        <el-button
          v-hasPerm="['sys:user:delete']"
          type="danger"
          link
          size="small"
          @click="onRowDel(scope.row)"
        >
          <i-ep-delete />删除
        </el-button>
      </template>
    </el-table-column>
  </el-table>
</template>
```

## 五、性能优化与最佳实践

### 5.1 性能优化策略

在实现 RBAC 权限管理时，性能是一个重要的考虑因素。以下是一些性能优化策略：

1. **使用单例模式**：Casbin Enforcer 是线程安全的，使用单例模式可以减少资源消耗
2. **缓存权限规则**：对于频繁访问的权限规则，使用缓存减少数据库查询
3. **批量操作**：使用批量添加/删除策略的方法，减少数据库操作次数
4. **合理设计模型**：根据业务需求设计合理的权限模型，避免过于复杂的规则
5. **异步加载**：前端动态路由生成可以采用异步加载，提高首屏渲染速度
6. **权限预加载**：登录时一次性获取所有权限信息，减少后续请求

### 5.2 最佳实践

1. **最小权限原则**：遵循最小权限原则，只授予用户完成任务所需的最小权限
2. **权限分级**：根据业务需求，实现不同级别的权限控制（菜单权限、按钮权限、数据权限）
3. **权限审计**：记录权限变更和访问日志，便于审计和排查问题
4. **定期权限审查**：定期审查用户权限，确保权限分配的合理性
5. **前后端双重验证**：前端进行权限控制提升用户体验，后端进行权限验证确保系统安全
6. **权限缓存更新**：当权限发生变更时，及时更新缓存和本地存储
7. **错误处理**：对权限验证失败的情况，提供清晰的错误提示
8. **文档化**：对权限模型和权限规则进行详细的文档说明，便于维护和扩展

## 结语

权限管理是企业级应用开发中不可或缺的核心功能。通过本文介绍的基于 GoFrame + Casbin + Vue 3 的 RBAC 权限管理方案，我们可以构建一个安全、灵活、高效的企业级权限管理系统。

---

**参考文档**：
- [Casbin 官方文档](https://casbin.org/docs/zh-CN/)
- [GoFrame 官方文档](https://goframe.org/docs/)
- [Vue 3 官方文档](https://vuejs.org/)
- [Vue Router 官方文档](https://router.vuejs.org/)
- [Element Plus 官方文档](https://element-plus.org/)
