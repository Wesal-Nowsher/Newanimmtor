

const initialState = {
    tabs:[],
    iconsize:1,
    color:"black",
    fontsize:"black",
    backactive:"lightgrey",
    variation:1
};

export default (state = initialState, action) => {
const newState = { ...state };
switch (action.type) {
    case "closeTabs":
        newState.tabs = action.payload;
        break;
    case "addTabs":
        newState.tabs = action.payload;
        break;
    case "iconsize":
        newState.iconsize = action.payload;
        break;
    case "changecolor":
        newState.color = action.payload;
        break;
    case "fontsize":
        newState.fontsize = action.payload;
        break;
    case "backchange":
        newState.backactive = action.payload;
        break;
    case "vari":
        newState.variation= action.payload;
        break;
    default:
    break;
}
return newState;
};
