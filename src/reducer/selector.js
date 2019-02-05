import { createSelector } from "redux-orm";
import orm, { schema } from "./Model/todoModel";

const dbStateSelector = state => state.orm;
export const todoSelector = createSelector(
  orm,
  state => state.orm,
  session => {
    // console.log(
    //   "session.TodoModel.all().toModelArray()",
    //   session.TodoModel.all().toModelArray()
    // );
    // console.log(
    //   "session.DateModel.all().toModelArray()",
    //   session.DateModel.all().toModelArray()
    // );
    const todoData = session.TodoModel.all()
      .toModelArray()
      .map((item, i) => {
        const todoObj = {
          ...item.ref
        };

        return todoObj;
      });
    return todoData;
    // rename selectors, create a object of obj with date a key of todos like: { "15 jan 19": {id: "...". complete: true } }
  }
);
