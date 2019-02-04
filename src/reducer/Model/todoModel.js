import { attr, fk, Model, many, ORM } from "redux-orm";
import moment from "moment";

import { unique } from "../../utils";

export class TodoModel extends Model {
  static reducer(action, TodoModel) {
    switch (action.type) {
      case "getStore":
        action.data.data.response.map(item => {
          const todo = { ...item, date: moment(item.date).format("MMM Do YY") };
          TodoModel.create(todo);
        });
    }
  }
}
TodoModel.modelName = "TodoModel";
TodoModel.fields = {
  _id: attr(),
  completed: attr(),
  date: fk("DateModel")
};

export class DateModel extends Model {
  static reducer(action, DateModel) {
    switch (action.type) {
      case "getStore":
        const dateArr = action.data.data.response.map(item => item.date);
        unique(dateArr).forEach(date => {
          DateModel.create({ date: moment(date).format("MMM Do YY") });
        });
    }
  }
}
DateModel.modelName = "DateModel";
DateModel.fields = {
  date: fk("TodoModel")
};
export const schema = new ORM();
schema.register(TodoModel, DateModel);

export default schema;
