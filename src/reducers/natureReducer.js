import {FETCH_NATURE_PAGE, FETCH_NATURE_DETAIL, FETCH_NATURE_LIST} from "../actions/types";

const natureState={
    nature_list:[],
    nature_detail:{},
    total:0
}

export default function (state=natureState, action){
    switch (action.type)
    {
        case FETCH_NATURE_LIST:
            return {
                ...state,
                nature_list:action.payload
            }
        case FETCH_NATURE_DETAIL:
            return {
                ...state,
                nature_detail:action.payload
            }
        case FETCH_NATURE_PAGE:
            return {
                ...state,
                total: action.payload
            }
        default:
            return state
    }
}