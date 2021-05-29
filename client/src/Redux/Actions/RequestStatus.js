import * as TYPES from '../Types/index'

export const loading = (payload) => {
    return{
        type: TYPES.LOADING,
        payload:payload
    }
}

export const setActive = (payload) => {
    return{
        type: TYPES.ACTIVEMODE,
        payload: payload
    }
}