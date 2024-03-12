import {BOARD_DETAIL,BOARD_LIST,BOARD_PAGE,BOARD_INSERT,
    BOARD_DELETE,BOARD_UPDATE,BOARD_UPDATE_DATA} from "./types";
import axios from "axios";

// 기능 구현
// dispatch => reducer
export const fetchBoardList=(page)=>dispatch=>{
    axios.get('http://localhost/board/list_react',{
        params:{
            page:page
        }
    }).then(response=>{
        const action={
            type:BOARD_LIST,
            payload:response.data
        }
        dispatch(action) // reducer에 있는 함수 호출
    })
}
export const fetchBoardTotalPage=()=>dispatch=>{
    axios.get('http://localhost/board/total_react')
        .then(response=>dispatch({
            type:BOARD_PAGE,
            payload: response.data
        }))
}
export const fetchBoardDetail=(no)=>dispatch=>{
    axios.get('http://localhost/board/detail_react',{
        params:{
            no:no
        }
    }).then(response=>{
        const action={
            type: BOARD_DETAIL,
            payload: response.data
        }
        dispatch(action) // reduce안에 있는 함수 호출 => 결과값을 전송 => store

    })
}

export const boardInsert=(insertData)=>dispatch=>{
    axios.post('http://localhost/board/insert_react',null,{
        params:insertData
    }).then(response=>{
        const action={
            type:BOARD_INSERT,
            payload:response.data
        }
        dispatch(action)
    })
}

export const boardDelete=(no,pwd)=>dispatch=>{
    axios.post('http://localhost/board/delete_react',null,{
        params:{
            no:no,
            pwd:pwd
        }
    }).then(response=>{
        const action={
            type:BOARD_DELETE,
            payload:response.data
        }
        dispatch(action)
    })
}
// 수정 하기
export const boardUpdateData=(no)=>dispatch=>{
    axios.get('http://localhost/board/update_react',{
        params:{
            no:no
        }
    }).then(response=>{
        const action={
            type:BOARD_UPDATE_DATA,
            payload:response.data
        }
        dispatch(action)
    })
}

export const boardUpdateOk=(updateData)=>dispatch=>{
    axios.post('http://localhost/board/update_ok_react',null,{
        params:updateData
    }).then(response=>{
        const action={
            type:BOARD_UPDATE,
            payload:response.data
        }
        // reducer로 전송
        dispatch(action)
    })
}