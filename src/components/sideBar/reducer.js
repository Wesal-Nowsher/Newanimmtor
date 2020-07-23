

const initialState = {
    openstate:false

};

export default (state = initialState, action) => {
  const newState = { ...state };
  switch (action.type) {
    case "close":
        newState.openstate = action.payLoad;
      break;
    case "open":
        newState.openstate = action.payLoad;
      break;
    default:
      break;

  }
  return newState;
};
