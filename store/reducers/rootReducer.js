import { combineReducers } from "redux";
import contact from "./contact";

const rootReducer = combineReducers({
    contacts: contact 
})

export default rootReducer;