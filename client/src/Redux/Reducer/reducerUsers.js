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
                results: action.payload,
                backup: {...state.backup, 
                    ...action.payload}
            };
        default:
            return state;
    }
}
