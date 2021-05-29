import * as TYPES from '../Types/index'

const initialState = {
    loading: false,
    active: "default"
}

export const reducerRequest = (state = initialState, action) => {
    switch (action.type) {

        case TYPES.LOADING:
            return {
                ...state,
                loading: action.payload,
            };
        case TYPES.ACTIVEMODE:{
                return {
                    ...state,
                    active: action.payload
                }
            }
        default:
            return state;
    }
}
