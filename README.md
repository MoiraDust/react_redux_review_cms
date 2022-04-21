### 步骤一：路由设计 Router design, encapsulate the router

ps:用的别人的后台，没有管理员权限

- Pages:
  - List:文章列表
  - Edit:修改资料
  - Material:资料
  - Login:登陆
  - Register:注册
- 路由结构：
  - App > List + Edit + Material
  - Login
  - Register
- 路由实现的两种形式
  - history 模式 -- BrowserRouter
  - hash 模式 -- HashRouter
  - 所以在引用 router 的时候使用`BrowserRouter as Router`是因为如果要切换路由模式的话只需要更改 import 的时候的那段代码就行，不需要更改标签

### Outlet 组件， router v6

- 类似于一个占位符，用于子路由的显示.

### 配置 less

- 因为是直接用脚手架搭建的项目，所以不能直接配置 webpack，需要先 eject
- 在`config-〉webpack -〉webpack.config.js`里面找到sassModuleRegex
