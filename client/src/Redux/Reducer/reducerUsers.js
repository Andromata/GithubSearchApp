import * as TYPES from '../Types/index';

const initialState = {
    results:[],
    backup: {}
}

export const reducerUsers = (state = initialState, action) => {
    switch (action.type) {

        case TYPES.SEARCH_USERS_RESULTS:
        
            return {
                ...state,
                results: [...Object.values(action.payload)[0]],
                backup: {...state.backup, 
                    ...action.payload}
            };
        case TYPES.CLEAN_USERS_RESULTS:
            return {
                ...state,
                results: []
            }
        default:
            return state;
    }
}
