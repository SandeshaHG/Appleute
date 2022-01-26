/*
    ----- This is a reducer function for the Context -----
*/

const reducer = (state, action) => {
  switch (action.type) {
    case "SCREEN_TYPE":
      return {
        ...state,
        screen: action.payload,
      };
    case "COMPLETED":
      return {
        ...state,
        completed: action.payload,
      };
    case "SET_DATA":
      return {
        ...state,
        data: action.payload,
      };
    case "SET_RESULT":
      return {
        ...state,
        result: action.payload,
      };
    case "SET_ANSWERED":
      return {
        ...state,
        answered: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
