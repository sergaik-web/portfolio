const initialState = {
  menu: [],
  text: "",
};

const reducer = (state = initialState, actions) => {
  switch (actions.type) {
    case "PRINT_TEXT":
      return {
        ...state,
        text: actions.text,
      };
    default:
      return state;
  }
};

export default reducer;
