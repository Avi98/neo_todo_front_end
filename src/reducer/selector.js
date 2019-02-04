import { createSelector } from "redux-orm";
import orm, { schema } from "./Model/todoModel";

const dbStateSelector = state => state.orm;
export const todoSelector = createSelector(
  orm,
  state => state.orm,
  session => {
    console.log(
      "session.TodoModel.all().toModelArray()",
      session.TodoModel.all().toModelArray()
    );
    console.log(
      "session.DateModel.all().toModelArray()",
      session.DateModel.all().toModelArray()
    );
    //   const datekey = session.TodoModel.all()
    //     .toModelArray()
    //     .map();
  }
);
