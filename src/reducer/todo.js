const intialState = {
  isloading: false,
  data: []
};
export function todoReducer(state = intialState, action) {
  switch (action.type) {
    case "startLoading":
      return { ...state, isloading: true };
    case "getStore":
      return { ...state, data: action.data };
    case "stopLoading":
      return {
        ...state,
        isloading: false
      };
    default:
      return state;
  }
}
