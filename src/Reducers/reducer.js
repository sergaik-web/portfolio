const initialState = {
  text: "",
};

const reducer = (state = initialState, actions) => {
  switch (actions.type) {
    case "NEW_TEXT":
      return {
        text: actions.text,
      };

    default:
      return {
        ...state,
      };
  }
};

export default reducer;
