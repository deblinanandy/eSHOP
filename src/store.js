import { createStore } from "redux";
import rootReducer from "./reducer/redux";
const store =createStore(rootReducer);
export default store;