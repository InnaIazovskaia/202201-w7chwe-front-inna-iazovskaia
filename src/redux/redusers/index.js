import { combineReducers } from "redux";
import usersReducer from "./usersReducer";

const rootReduser = combineReducers({ users: usersReducer });

export default rootReduser;
