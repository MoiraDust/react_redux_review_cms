import React from "react";
import FunctionReview from "./FunctionReview.jsx";
import ClassReview from "./ClassReview.jsx";

export default function App() {
  return (
    <div>
      <h1>Funtion</h1>
      <FunctionReview></FunctionReview>
      <hr />
      <h1>Class</h1>
      <ClassReview></ClassReview>
    </div>
  );
}
