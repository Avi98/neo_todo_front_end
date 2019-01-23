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
