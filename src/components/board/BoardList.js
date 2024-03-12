import {Fragment, useState, useEffect} from "react";
import {Link} from "react-router-dom";
import {fetchBoardList, fetchBoardTotalPage} from "../../actions/boardActions";
import {useSelector, useDispatch} from "react-redux";

function BoardList(){
    const [curpage, setCurpage]=useState(1)
    const dispatch=useDispatch()

    useEffect(()=>{
        dispatch(fetchBoardList(curpage)) // action => reducer
        dispatch(fetchBoardTotalPage())
    }, [curpage])

    // store에 저장된 데이터 읽기
    const board_list=useSelector((state)=>state.boards.board_list)
    const totalpage=useSelector((state)=>state.boards.total)
    // 출력
    let html=board_list.map((vo)=>
        <tr>
            <td className={"text-center"} width={"10%"}>{vo.no}</td>
            <td width={"40%"}>
                <Link to={"/board/detail/"+vo.no}>
                    {vo.subject}
                </Link>
            </td>
            <td className={"text-center"} width={"15%"}>{vo.name}</td>
            <td className={"text-center"} width={"20%"}>{vo.regdate.substring(0, vo.regdate.indexOf(" "))}</td>
            <td className={"text-center"} width={"15%"}>{vo.hit}</td>
        </tr>
    )
    const prevHandler=()=>{
        setCurpage(curpage>1?curpage-1:curpage)
    }
    const nextHandler=()=>{
        setCurpage(curpage<totalpage?curpage+1:curpage)
    }
    return (
        <Fragment>
            <div className={"row justify-content-center"} style={{"padding": "2%"}}>
                <h2>게시판</h2>
            </div>
            <div className={"row"} style={{"width":"65%","margin":"0px auto"}}>
                
                <table className={"table"} width={"65%"}>
                    <tbody>
                    <tr>
                        <td>
                            <Link to={"/board/insert"} className={"btn btn-sm btn-success"} id={"allBtn"}>새 글</Link>
                        </td>
                    </tr>
                    </tbody>
                </table>
                <table className={"table"}>
                    <thead>
                    <tr className={"success"}>
                        <th className={"text-center"} width={"10%"}>번호</th>
                        <th className={"text-center"} width={"40%"}>제목</th>
                        <th className={"text-center"} width={"15%"}>이름</th>
                        <th className={"text-center"} width={"20%"}>작성일</th>
                        <th className={"text-center"} width={"15%"}>조회수</th>
                    </tr>
                    </thead>
                    <tbody>
                    {html}
                    </tbody>
                    <tfoot>
                    <tr>
                        <td colSpan={"5"} className={"text-center"}>
                            <input type={"button"} className={"btn-sm btn-danger"} value={"이전"} id={"allBtn"} onClick={prevHandler} />
                            &nbsp;{curpage} page / {totalpage} pages&nbsp;
                            <input type={"button"} className={"btn-sm btn-danger"} value={"다음"} id={"allBtn"} onClick={nextHandler} />
                        </td>
                    </tr>
                    </tfoot>
                </table>
            </div>
        </Fragment>
    )
}

export default BoardList