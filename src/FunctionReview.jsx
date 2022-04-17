import React, { useState, createContext } from "react";
// redux_step 11.用连接器connect拿数据
import { connect } from "react-redux";
// redux_step 15.不要忘记把props当作参数传过来
function FunctionReview(props) {
  const [arr, setArr] = useState(["Alice", "Bob", "Catty"]);
  const [num, setNum] = useState(1);

  // 参数传递
  const NameContext = createContext();
  function Sub() {
    return (
      <NameContext.Consumer>{(num) => <h2>{num}</h2>}</NameContext.Consumer>
    );
  }
  function Father() {
    return <Sub></Sub>;
  }

  const addNum = () => {
    // 拿新值覆盖初始值
    setNum(num + 1);
    // 拿新值覆盖旧值
    // setNum((num)=>{num+1});
  };
  return (
    <>
      <ul>
        {arr.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
      <h2>累加</h2>
      The initial number:{num}
      <button onClick={addNum}>Add</button>
      <h2>父子间参数传递</h2>
      <NameContext.Provider value={num}>
        <Father></Father>
      </NameContext.Provider>
      <h3>Redux中拿数据</h3>
      {/* redux_step 14.取出转存在props中store数据的值 */}
      <h1>{props.msg}</h1>
      {/* redux_step_alter 1.想要修改msg */}
      <button onClick={props.changeMsg}>修改msg</button>
    </>
  );
}
// redux_step 13.把store中的state拿出来，赋值给新的对象
const mapStateToProps = (state) => {
  return {
    msg: state.msg,
  };
};
// redux_step_alter 2.增加一个dispatch方法来更改数据
const mapDispatchToProps = (dispatch) => {
  return {
    // redux_step_alter 4.定义一个方法
    changeMsg() {
      // redux_step_alter 4.1 这里定义一个action对象，需要有type，用于下一步来校验事件名称, 也可以写一写参数用于下面函数的编写
      const action = { type: "changeMsgFn", value: "Voxanne my wife" };
      // edux_step_alter 4.2 调用dispatch，转发action对象
      dispatch(action);
    },
  };
};
// redux_step 12.改变一下export写法
// redux_step_alter 3.导出dispatch方法
export default connect(mapStateToProps, mapDispatchToProps)(FunctionReview);
