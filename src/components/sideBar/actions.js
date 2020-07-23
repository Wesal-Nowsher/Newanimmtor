export const closesidevar = () => async (dispatch) => {


    dispatch({
        type: "close",
        payload:false
    })
};
export const opensidevar = () => async (dispatch) => {

    dispatch({
        type: "open",
        payload:true
    })
};