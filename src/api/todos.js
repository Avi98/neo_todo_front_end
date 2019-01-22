import { fetch } from "./server";

const getTodos = () => (dispatch, getStore) => {
  dispatch({ type: "startLoading" });
  fetch
    .get("todo")
    .then(res => {
      dispatch({ type: "getStore", data: res });
      dispatch({ type: "stopLoading" });
    })
    .catch(err => {
      dispatch({ type: "stopLoading" });
      dispatch({ type: "showError", err });
    });
};
