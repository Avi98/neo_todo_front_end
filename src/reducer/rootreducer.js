import { combineReducers } from "redux";
import { createReducer } from "redux-orm";

import { todoReducer } from "./todo";
import { schema } from "../reducer/Model/todoModel";

const reducer = createReducer(schema);
const rootReducer = combineReducers({
  todo: todoReducer,
  orm: reducer
});

export default rootReducer;
