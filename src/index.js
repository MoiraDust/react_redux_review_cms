import React from "react";
import ReactDOM from "react-dom/client";
// 4.这里因为App组件已经被routes里面的组件包进去了，所以改一下路径
import App from "./Routes";
// import antd
import "./assets/base.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
