import {FETCH_CULTURE_PAGE, FETCH_CULTURE_LIST, FETCH_CULTURE_DETAIL} from "./types";
import axios from "axios";

export const fetchCULTUREList=(page)=>dispatch=>{
    axios.get('http://localhost/culture/list_react',{
        params:{
            page:page
        }
    }).then(response=>dispatch({
        type:FETCH_CULTURE_LIST,
        payload:response.data
    }))
}
export const fetchCulturePage=()=>dispatch=>{
    axios.get('http://localhost/culture/culture_totalpage_react')
        .then((response)=>dispatch({
            type:FETCH_CULTURE_PAGE,
            payload:response.data
        }))
}
export const fetchCultureDetail=(cno)=>dispatch=>{
    axios.get('http://localhost/culture/detail_react',{
        params:{
            cno:cno
        }
    }).then(response=>dispatch({
        type:FETCH_CULTURE_DETAIL,
        payload:response.data
    }))
}