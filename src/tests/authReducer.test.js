import { authReducer } from "../reducers/authReducer";
import { types } from "../types/types";

describe('Pruebas en authReducer', () => { 

    test('should return login', () => {

        const initialState = {};

        const action = {
            type: types.login,
            payload: {
                uid: '23',
                displayName: 'Eric'
            }
        };

        const state = authReducer( initialState, action);

        expect(state).toEqual(
            {
                uid: '23',
                name: 'Eric'
            }
        );

    })

    test('should return logout', () => {

        const initialState = {
            uid: '23',
            name: 'Eric'
        };

        const action = {
            type: types.logout
        };

        const state = authReducer( initialState, action);

        expect(state).toEqual({});
    })

    test('should return state', () => {

        const initialState = {
            uid: '23',
            name: 'Eric'
        };

        const action = {
            type: 'asdsqw'
        };

        const state = authReducer( initialState, action);

        expect(state).toEqual(initialState);
    })
 })