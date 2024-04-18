import cakeReducer from "./cake/cakeReducer";
import {combineReducers} from "redux";
import customerReducer from "./customers/customerReducer";
const rootReducer = combineReducers({
    // cake: cakeReducer
    customer:customerReducer
})

export default rootReducer