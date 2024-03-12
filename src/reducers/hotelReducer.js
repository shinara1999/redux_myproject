import {FETCH_HOTEL_PAGE, FETCH_HOTEL_DETAIL, FETCH_HOTEL_LIST, FETCH_FIND_PAGE, FETCH_FIND_LIST} from "../actions/types";

const hotelState={
    hotel_list:[],
    hotel_detail:{},
    total:0,
    find_list:[],
    find_page:0
}

export default function (state=hotelState, action){
    switch (action.type)
    {
        case FETCH_HOTEL_LIST:
            return {
                ...state,
                hotel_list:action.payload
            }
        case FETCH_HOTEL_DETAIL:
            return {
                ...state,
                hotel_detail:action.payload
            }
        case FETCH_HOTEL_PAGE:
            return {
                ...state,
                total: action.payload
            }
        case FETCH_FIND_LIST:
            return {
                ...state,
                find_list: action.payload
            }
        case FETCH_FIND_PAGE:
            return {
                ...state,
                find_page: action.payload
            }
        default:
            return state
    }
}