import {useState, Fragment, useEffect} from "react";
import {useParams, useNavigate, Link} from "react-router-dom";
import {useRef} from "react";
import {useSelector,useDispatch} from "react-redux";
import {boardDelete} from "../../actions/boardActions";


function BoardDelete(){
    const {no}=useParams()
    const nav=useNavigate()
    const [pwd, setPwd]=useState('')
    const pwdRef=useRef(null)
    const dispatch=useDispatch()

    useEffect(()=>{
        dispatch(boardDelete(no,pwd))
    },[pwd])

    const result=useSelector((state)=>state.boards.del_result)

    const boarddel=()=>{
        if(pwd.trim()==="")
        {
            pwdRef.current.focus()
            return
        }

        if(result==="yes" && result!=="")
        {
            window.location.href="/board/list"
        }
        else if(result==="no" && result!=="")
        {
            alert("비밀번호가 틀립니다")
            pwdRef.current.value=''
            pwdRef.current.focus()
        }
    }
    return (
        <Fragment>
            <div className={"row justify-content-center"} style={{"padding": "2%"}}>
                <h2>삭제하기</h2>
            </div>
        <div className={"row row1"} style={{"width":"65%","margin":"0px auto"}}>
            <table className={"table"}>
                <tbody>
                    <tr>
                        <td>
                            비밀번호:&nbsp;<input type={"password"} className={"input-sm"} ref={pwdRef} value={pwd} onChange={(e)=>setPwd(e.target.value)} style={{"borderRadius":"30px"}}/>
                        </td>
                    </tr>
                    <tr>
                        <td className={"text-center"}>
                            <input type={"button"} value={"삭제"} className={"btn-sm btn-danger"} onClick={boarddel} id={"allBtn"}/>
                            <button className={"btn btn-sm btn-danger"} onClick={()=>nav(-1)} id={"allBtn"}>취소</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        </Fragment>
    )
}
export default BoardDelete