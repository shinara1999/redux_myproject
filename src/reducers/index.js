import {combineReducers} from "redux";

import boardReducer from "./boardReducer";
import cultureReducer from "./cultureReducer";
import hotelReducer from "./hotelReducer";
import natureReducer from "./natureReducer";

export default combineReducers({
    boards:boardReducer,
    cultures:cultureReducer,
    hotels:hotelReducer,
    natures:natureReducer
})