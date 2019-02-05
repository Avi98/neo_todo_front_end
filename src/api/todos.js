import { fetchData } from "./server";

export const getTodos = () => (dispatch, getStore) => {
  dispatch({ type: "startLoading" });
  fetchData
    .get("/todo")
    .then(res => {
      dispatch({ type: "getStore", data: res });
      dispatch({ type: "stopLoading" });
    })
    .catch(err => {
      dispatch({ type: "stopLoading" });
      dispatch({ type: "showError", err });
    });
};
export const updateTodoAction = (id, todo_id, payload) => (
  dispatch,
  getStore
) => {
  const [key] = Object.keys(payload);
  console.log("`updateTodo_${key}`", `updateTodo_${key}`);
  fetchData
    .put(`/todo/${todo_id}`, payload)
    .then(res => {
      dispatch({ type: `updateTodo_${key}`, payload, id });
      dispatch({ type: "stopLoading" });
    })
    .catch(err => {
      dispatch({ type: "stopLoading" });
      dispatch({ type: "showError", err });
    });
  dispatch({ type: "startLoading" });
};
