import counter from "./counter";
import { combineReducers } from "redux";
import todos from "./todo";

const rootReducer = combineReducers({ counter, todos });
export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
