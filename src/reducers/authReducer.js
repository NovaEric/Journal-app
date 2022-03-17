import { types } from "../types/types";


export const authReducer = (mystate = {}, action ) => {

    switch (action.type) {
        case types.login:
            return {
                uid: action.payload.uid,
                name: action.payload.displayName
            }    
        case types.logout:
            return {};
        default:
            return mystate;
    }
}