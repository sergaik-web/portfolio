const initialState = {
  menu: [],
};

const reducer = (state = initialState, actions) => {
  switch (actions.type) {
    case "DEC":
      return state;
    default:
      return state;
  }
};

export default reducer;
