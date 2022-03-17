import { finishLoading, removeError, setError, startLoading } from "../actions/ui";
import { types } from "../types/types";

describe('Pruebas en UI action', () => { 
    
    test('should return all actions', () => { 
        
        expect(setError('Eric')).toEqual({type: types.uiSetError, payload: 'Eric'});
        expect(removeError()).toEqual({type: types.uiRemoveError});
        expect(startLoading()).toEqual({type: types.uiStartLoading});
        expect(finishLoading()).toEqual({type: types.uiFinishLoading});
     })
 })