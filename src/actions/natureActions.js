import {FETCH_NATURE_PAGE, FETCH_NATURE_LIST, FETCH_NATURE_DETAIL} from "./types";
import axios from "axios";

export const fetchNatureList=(page)=>dispatch=>{
    axios.get('http://localhost/nature/list_react',{
        params:{
            page:page
        }
    }).then(response=>dispatch({
        type:FETCH_NATURE_LIST,
        payload:response.data
    }))
}
export const fetchNaturePage=()=>dispatch=>{
    axios.get('http://localhost/nature/nature_totalpage_react')
        .then((response)=>dispatch({
            type:FETCH_NATURE_PAGE,
            payload:response.data
        }))
}
export const fetchNatureDetail=(nno)=>dispatch=>{
    axios.get('http://localhost/nature/detail_react',{
        params:{
            nno:nno
        }
    }).then(response=>dispatch({
        type:FETCH_NATURE_DETAIL,
        payload:response.data
    }))
}