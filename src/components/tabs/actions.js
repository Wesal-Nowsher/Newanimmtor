

export const closetabs = (tabs) => async (dispatch) => {

    console.log("wesal is called")
    dispatch({
        type: "closeTabs",
        payload:tabs
    })
};
export const updatetabs = (tabs) => async (dispatch) => {

    console.log("wesal is called")
    dispatch({
        type: "addTabs",
        payload:tabs
    })
};

export const addTabs = (tabs) => async (dispatch) => {

    console.log("wesal is called")
    dispatch({
        type: "addTabs",
        payload:tabs
    })
};
export const changeiconsize = (size) => async (dispatch) => {

    console.log("wesal is called")
    dispatch({
        type: "iconsize",
        payload:size
    })
};
export const changecolor = (color) => async (dispatch) => {

    console.log("wesal is called")
    dispatch({
        type: "changecolor",
        payload:color
    })
};
export const changefontcolor = (color) => async (dispatch) => {

    console.log("wesal is called")
    dispatch({
        type: "fontsize",
        payload:color
    })
};
export const backchanger = (color) => async (dispatch) => {

    console.log("wesal is called")
    dispatch({
        type: "backchange",
        payload:color
    })
};
export const variahcnge = (number) => async (dispatch) => {

    console.log("wesal is called")
    dispatch({
        type: "vari",
        payload:number
    })
};