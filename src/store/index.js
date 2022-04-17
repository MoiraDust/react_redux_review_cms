// redux_step 3.redux的入口文件
import reducer from "./reducer";
// redux_step 4.从redux中引入创建仓库的组件
import { createStore } from "redux";
// redux_step 5.创建一个仓库,把reducer丢进来
const store = createStore(reducer);
// redux_step 6.导出仓库
export default store;
