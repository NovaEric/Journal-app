import { types } from "../types/types"

const initialState = {
    loading: false,
    msgError: null
}

export const uiReducer = (mystate = initialState, action) => {

  
    switch (action.type) {
        case types.uiSetError:
            return {
                ...mystate,
                msgError: action.payload
            }
        case types.uiRemoveError:
            return {
                ...mystate,
                msgError: null
            }    
        case types.uiStartLoading:
            return{
                ...mystate,
                loading: true
            }   
        case types.uiFinishLoading:
            return {
                ...mystate,
                loading: false
            }     
        default:
            return mystate;
    }
}
