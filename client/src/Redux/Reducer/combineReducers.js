import { combineReducers } from "redux";
import { reducerUsers } from "./reducerUsers";
import { reducerRequest } from "./reducerRequest";
import { reducerRepositories } from "./reducerRepositories";
export default combineReducers({
  Users: reducerUsers,
  Request: reducerRequest,
  Repositories: reducerRepositories,
});
