import { combineReducers } from "redux";
import domainReducer from "./reducers/domainReducer";

export default combineReducers({
  //all reducers go here
  domain: domainReducer
})
