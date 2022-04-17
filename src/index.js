import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// redux_step 7.引入Provider文件
import { Provider } from "react-redux";
// redux_step 9.注入数据
import store from "./store";

const root = ReactDOM.createRoot(document.getElementById("root"));
// redux_step 8.用Provider包裹App
root.render(
  // redux_step 10.传入store参数的值,然后在app中的任何位置都可以使用store中的数据
  <Provider store={store}>
    <App />
  </Provider>
);
