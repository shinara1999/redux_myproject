import {Fragment, useState, useEffect, useRef} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {useSelector,useDispatch} from "react-redux";
import {boardUpdateData,boardUpdateOk} from "../../actions/boardActions";

function BoardUpdate(){
    const {no}=useParams()
    const nav=useNavigate()
    const [name, setName]=useState('')
    const [subject, setSubject]=useState('')
    const [content, setContent]=useState('')
    const [pwd, setPwd]=useState('')

    const nameRef=useRef(null)
    const subjectRef=useRef(null)
    const contentRef=useRef(null)
    const pwdRef=useRef(null)
    const dispatch=useDispatch()

    useEffect(() => {
        dispatch(boardUpdateData(no))
    }, []);

    const update_date=useSelector((state)=>state.boards.update_data)
    useEffect(()=>{
        setName(update_date.name)
        setContent(update_date.content)
        setSubject(update_date.subject)
    },[update_date])
    useEffect(() => {
        dispatch(boardUpdateOk({
            name:name,
            subject:subject,
            content:content,
            pwd:pwd,
            no:no
        }))
    }, [pwd]);
    const up_result=useSelector((state)=>state.boards.up_result)
    const nameChange=(e)=>{
        setName(e.target.value)
    }
    const subjectChange=(e)=>{
        setSubject(e.target.value)
    }
    const contentChange=(e)=>{
        setContent(e.target.value)
    }
    const pwdChange=(e)=>{
        setPwd(e.target.value)
    }

    const update=()=>{
        if(name.trim()==="")
        {
            nameRef.current.focus()
            return
        }
        if(content.trim()==="")
        {
            contentRef.current.focus()
            return
        }
        if(subject.trim()==="")
        {
            subjectRef.current.focus()
            return
        }
        if(pwd.trim()==="")
        {
            pwdRef.current.focus()
            return
        }

        if(up_result==="yes")
        {
            window.location.href="/board/detail/"+no
        }
        else if(up_result==="no")
        {
            alert("비밀번호를 다시 입력하세요.")
            pwdRef.current.value=''
            pwdRef.current.focus()

        }
    }

    return (
        <Fragment>
            <div className={"row justify-content-center"} style={{"padding": "2%"}}>
                <h2>수정하기</h2>
            </div>
        <div className={"row"} style={{"width":"65%","margin":"0px auto"}}>
        
            <table className={"table"}>
                <tbody>
                    `<tr>
                        <td width={"15%"} className={"text-center"}>이름</td>
                        <td width={"85%"}>
                            <input type={"text"} size={"15"} className={"input-sm"} onChange={nameChange} value={name} ref={nameRef} style={{"borderRadius":"20px"}}/>
                        </td>
                    </tr>
                    <tr>
                        <td width={"15%"} className={"text-center"}>제목</td>
                        <td width={"85%"}>
                            <input type={"text"} size={"50"} className={"input-sm"} onChange={subjectChange} value={subject} ref={subjectRef} style={{"borderRadius":"20px"}}/>
                        </td>
                    </tr>
                    <tr>
                        <td width={"15%"} className={"text-center"}>내용</td>
                        <td width={"85%"}>
                            <textarea rows={"10"} cols={"53"} onChange={contentChange} ref={contentRef} value={content} style={{"borderRadius":"20px"}}></textarea>
                        </td>
                    </tr>
                    <tr>
                        <td width={"15%"} className={"text-center"}>비밀번호</td>
                        <td width={"85%"}>
                            <input type={"password"} size={"15"} className={"input-sm"} onChange={pwdChange} ref={pwdRef} value={pwd} style={{"borderRadius":"20px"}}/>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={"2"} className={"text-center"}>
                            <input type={"button"} className={"btn btn-sm btn-info"} value={"수정"} onClick={update} id={"allBtn"}/>
                            <input type={"button"} className={"btn btn-sm btn-warning"} value={"취소"} onClick={()=>nav(-1)} id={"allBtn"}/>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        </Fragment>
    )
}
export default BoardUpdate