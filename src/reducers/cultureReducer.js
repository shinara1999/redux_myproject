import {FETCH_CULTURE_PAGE, FETCH_CULTURE_DETAIL, FETCH_CULTURE_LIST} from "../actions/types";

const cultureState={
    culture_list:[],
    culture_detail:{},
    total:0
}

export default function (state=cultureState, action){
    switch (action.type)
    {
        case FETCH_CULTURE_LIST:
            return {
                ...state,
                culture_list:action.payload
            }
        case FETCH_CULTURE_DETAIL:
            return {
                ...state,
                culture_detail:action.payload
            }
        case FETCH_CULTURE_PAGE:
            return {
                ...state,
                total: action.payload
            }
        default:
            return state
    }
}