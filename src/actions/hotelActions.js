import {FETCH_HOTEL_PAGE, FETCH_HOTEL_LIST, FETCH_HOTEL_DETAIL, FETCH_FIND_LIST, FETCH_FIND_PAGE} from "./types";
import axios from "axios";

export const fetchHOTELList=(page)=>dispatch=>{
    axios.get('http://localhost/hotel/list_react',{
        params:{
            page:page
        }
    }).then(response=>dispatch({
        type:FETCH_HOTEL_LIST,
        payload:response.data
    }))
}
export const fetchHotelPage=()=>dispatch=>{
    axios.get('http://localhost/hotel/hotel_totalpage_react')
        .then((response)=>dispatch({
            type:FETCH_HOTEL_PAGE,
            payload:response.data
        }))
}
export const fetchHotelDetail=(hno)=>dispatch=>{
    axios.get('http://localhost/hotel/detail_react',{
        params:{
            hno:hno
        }
    }).then(response=>dispatch({
        type:FETCH_HOTEL_DETAIL,
        payload:response.data
    }))
}

// 호텔찾기
export const fetchFindList=(page, fd)=>dispatch=>{
    axios.get('http://localhost/hotel/find_react',{
        params:{
            page:page,
            address:fd
        }
    }).then(response=>dispatch({
        type:FETCH_FIND_LIST,
        payload:response.data
    }))
}
export const fetchFindPage=(fd)=>dispatch=> {
    axios.get('http://localhost/hotel/find_totalpage_react',{
        params:{
            address:fd
        }
    }).then(response=>{
        const action={
            type: FETCH_FIND_PAGE,
            payload:response.data
        }
        dispatch(action)
    })

}