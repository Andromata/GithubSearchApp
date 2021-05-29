import * as TYPES from '../Types/index';

const initialState = {
    results:[],
    backup: {}
}

export const reducerRepositories = (state = initialState, action) => {
    switch (action.type) {

        case TYPES.SEARCH_REPOSITORIES_RESULTS:
            return {
                ...state,
                results: [...Object.values(action.payload)[0]],
                backup: {...state.backup, 
                    ...action.payload}
            };
        case TYPES.CLEAN_REPOSITORIES_RESULTS:
            return {
                ...state,
                results: []
            }
        default:
            return state;
    }
}
