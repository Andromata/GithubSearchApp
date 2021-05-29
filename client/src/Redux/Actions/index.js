import * as TYPES from "../Types/index";
import { loading } from "./RequestStatus";
import axios from "axios";

export const searchData = (search) => async (dispatch) => {
  try {
    dispatch(loading(true));
    const { data } = await axios.post(
      `${process.env.REACT_APP_URL_BACK}/api/search`,
      { search }
    );

    if (search.type === "users") {
      dispatch({
        type: TYPES.SEARCH_USERS_RESULTS,
        payload: {
          [search.text]: data,
        },
      });
      dispatch(loading(false));
    } else {
      dispatch({
        type: TYPES.SEARCH_REPOSITORIES_RESULTS,
        payload: {
          [search.text]: data,
        },
      });
      dispatch(loading(false));
    }
  } catch (error) {
    console.error(error);
  }
};

export const cleanResults = (payload) => async (dispatch) => {
  try {    
    if (payload.type === "users") {
      dispatch({
        type: TYPES.CLEAN_USERS_RESULTS,
       });
      dispatch(loading(false));
    } else {
      dispatch({
        type: TYPES.CLEAN_REPOSITORIES_RESULTS,
      });
      dispatch(loading(false));
    }
  } catch (error) {
    console.error(error);
  }
};
