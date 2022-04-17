// redux_step 1.定义一个默认状态
const defaultState = {
  msg: "hello world",
};
// redux_step 2.导出state
// redux_step_alter 5.新增参数action用来接收前一个步骤新增的方法
// eslint-disable-next-line
export default (state = defaultState, action) => {
  // redux_step_alter 6.使用switch来匹配action中的值
  // redux_step_alter 6.1由于state没办法直接修改，所以可以进行深拷贝再修改
  let newState = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case "changeMsgFn":
      newState.msg = action.value;
      break;
    default:
      break;
  }
  return newState;
};
