import {Fragment, useState, useEffect} from "react";
import {Link, useParams} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import {fetchBoardDetail} from "../../actions/boardActions";

function BoardDetail(){
    const {no}=useParams()
    const dispatch=useDispatch()

    useEffect(() => {
        dispatch(fetchBoardDetail(no))
    }, []);
    const detail=useSelector((state)=>state.boards.board_detail)
    return (
        <Fragment>
            <div className={"row justify-content-center"} style={{"padding": "2%"}}>
                <h2>내용 보기</h2>
            </div>
        <div className={"row"} style={{"width":"65%","margin":"0px auto"}}>

            <table className={"table"}>
                <tbody>
                <tr>
                    <td className={"text-center success"} width={"20%"}>번호</td>
                    <td className={"text-center"} width={"30%"}>{detail.no}</td>
                    <td className={"text-center success"} width={"20%"}>작성일</td>
                    <td className={"text-center"} width={"30%"}>{detail.regdate}</td>
                </tr>
                <tr>
                    <td className={"text-center success"} width={"20%"}>이름</td>
                    <td className={"text-center"} width={"30%"}>{detail.name}</td>
                    <td className={"text-center success"} width={"20%"}>조회수</td>
                    <td className={"text-center"} width={"30%"}>{detail.hit}</td>
                </tr>
                <tr>
                    <td className={"text-center success"} width={"20%"}>제목</td>
                    <td colSpan={"3"}>{detail.subject}</td>
                </tr>
                <tr>
                    <td className={"text-left"} height={"200"} colSpan={"4"} valign={"top"}>
                        <pre style={{"whiteSpace":"pre-wrap", "backgroundColor":"white", "border":"none"}}>{detail.content}</pre>
                    </td>
                </tr>
                <tr>
                    <td className={"text-right"} colSpan={"4"}>
                        <Link to={"/board/update/"+no} className={"btn-info btn-sm"} id={"allBtn"}>수정</Link>&nbsp;
                        <Link to={"/board/delete/"+no} className={"btn-info btn-sm"} id={"allBtn"}>삭제</Link>&nbsp;
                        <Link to={"/board/list"} className={"btn-info btn-sm"} id={"allBtn"}>목록</Link>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
        </Fragment>
    )
}

export default BoardDetail