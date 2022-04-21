import React from "react";
import { Outlet } from "react-router-dom";

export default function App() {
  return (
    <>
      app
      {/* 3.4 这里写Outlet占位，意思就是App里面嵌套的所有子路由 */}
      <Outlet />
    </>
  );
}
