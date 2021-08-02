import { combineReducers } from "redux";
import domainSuggestionsReducer from "./reducers/domainSuggestionsReducer";

export default combineReducers({
  //all reducers go here
  suggestions: domainSuggestionsReducer
})
