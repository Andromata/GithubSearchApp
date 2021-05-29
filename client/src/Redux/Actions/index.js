import * as TYPES from '../Types/index'
import axios from 'axios'

export const searchUsers = (str) => async (dispatch) =>{
  try {
    const { data } = await axios.get(`${process.env.REACT_APP_URL_BACK}/api/users?text=${str}`)
    dispatch({type: TYPES.SEARCH_USERS_RESULTS, payload:{
        [str]: data.items
    }})
  } catch (error) {
      console.error(error)
  }
 }

 export const searchRepositories = (str) => async (dispatch) =>{
    try {
      const { data } = await axios.get(`${process.env.REACT_APP_URL_BACK}/api/repositories?text=${str}`)
      dispatch({type: TYPES.SEARCH_REPOSITORIES_RESULTS, payload:{
          [str]: data.items
      }})
    } catch (error) {
        console.error(error)
    }
   }
  