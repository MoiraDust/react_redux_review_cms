// 1.引入所有的pages
import App from "../App";
import List from "../pages/List.jsx";
import Edit from "../pages/Edit.jsx";
import Login from "../pages/Login.jsx";
import Material from "../pages/Material.jsx";
import Register from "../pages/Register.jsx";
// 2.引入BrowserRouter, Routes, Route
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// 3.定义路由组件.这里用=>()因为要写标签
const BaseRouter = () => (
  <Router>
    <Routes>
      {/* 3.1 这里注意格式 
          3.2 和App同级的组件也都写上
      */}
      <Route path="/" element={<App />}>
        {/* 3.3 再把App中包含的pages也嵌套进去 */}
        <Route path="/list" element={<List />}></Route>
        <Route path="/edit" element={<Edit />}></Route>
        <Route path="/material" element={<Material />}></Route>
      </Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/register" element={<Register />}></Route>
    </Routes>
  </Router>
);
export default BaseRouter;
