import App from "../App";
import List from "../pages/List.jsx";
import Edit from "../pages/Edit.jsx";
import Login from "../pages/Login.jsx";
import Material from "../pages/Material.jsx";
import Register from "../pages/Register.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const BaseRouter = () => (
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
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
