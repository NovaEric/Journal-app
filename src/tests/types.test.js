import { types } from "../types/types"

describe('Pruebas en Types', () => { 
    test('should return expected types', () => { 
        
        expect(types).toEqual({
            login: '[Auth] Login',
            logout: '[Auth] Logout',

            uiSetError: '[UI] Set Error',
            uiRemoveError: '[UI] Remove Error',

            uiStartLoading: '[UI] Start loading',
            uiFinishLoading: '[UI] Finish loading',

            notesAddNew: '[Notes] New note',
            notesActive: '[Notes] Set active note',
            notesLoad: '[Notes] Load notes',
            notesUpdated: '[Notes] Updated note',
            notesFileURL: '[Notes] Updated image note',
            notesDeleted: '[Notes] Deleted note',
            notesLogoutCleaning: '[Notes] Logout cleaning',
        })
     })
 })