import { combineReducers } from "redux";
import userReducer from "./userReduser";
import usersReducer from "./usersReducer";

const rootReduser = combineReducers({
  users: usersReducer,
  user: userReducer,
});

export default rootReduser;
