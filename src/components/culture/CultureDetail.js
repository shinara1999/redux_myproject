import {Fragment, useState, useEffect} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import {fetchCultureDetail} from "../../actions/cultureActions";

function CultureDetail(){
    const {cno}=useParams()
    const nav=useNavigate()
    const dispatch=useDispatch()

    useEffect(()=>{
        dispatch(fetchCultureDetail(cno))
    },[]);
    const cultureVO=useSelector((state)=>state.cultures.culture_detail)
    return (
        <Fragment>
            <div className={"row justify-content-center"} style={{"padding": "2%"}}>
                <h2>역사 속 문화</h2>
            </div>
            <hr style={{"width": "65%"}}/>
            <div className={"row justify-content-center"} style={{"paddingBottom": "3%"}}>
                <table className={"table"} style={{"borderCollapse": "collapse", "border": "none", "width": "70%"}}>
                    <tbody>
                    <tr>
                        <td width={"40%"} className={"text-center"} rowSpan={"7"} style={{"borderTop": "none"}}>
                            <img src={cultureVO.poster}
                                 style={{"width": "500px", "height": "300px", "borderRadius": "25px"}}/>
                        </td>
                        <td colSpan={"2"} style={{"borderTop": "none"}}>
                            <h5><span style={{"color":"#fe5c24"}}>#&nbsp;{cultureVO.tag}&nbsp;&nbsp;# 역사 속 문화</span></h5>
                        </td>
                    </tr>
                    <tr>
                        <h3 style={{
                            "fontSize": "27px",
                            "fontWeight": "bold",
                            "color": "#0c3e72",
                            "padding": "0.5%",
                            "width": "200px"
                        }}>{cultureVO.name}</h3>
                    </tr>
                    <tr>
                        <th width={"15%"} style={{"borderTop": "none"}}>소재지</th>
                        <td width={"55%"} style={{"borderTop": "none"}}>{cultureVO.address}</td>
                    </tr>
                    <tr>
                        <th width={"15%"} style={{"borderTop": "none"}}>문의처</th>
                        <td width={"55%"} style={{"borderTop": "none"}}>{cultureVO.phone}</td>
                    </tr>
                    <tr>
                        <th width={"15%"} style={{"borderTop": "none"}}>홈페이지</th>
                        <td width={"55%"} style={{"borderTop": "none"}}>{cultureVO.homepage}</td>
                    </tr>
                    <tr>
                        <th width={"15%"} style={{"borderTop": "none"}}>소개</th>
                        <td width={"55%"} style={{"borderTop": "none"}}>{cultureVO.content}</td>
                    </tr>
                    </tbody>
                </table>
                <hr style={{"width": "65%"}}/>
            </div>
            <div className={"row justify-content-center"} style={{"paddingBottom": "5%"}}>
                <button className={"btn btn-sm btn-primary"} id={"allBtn"}
                        onClick={() => nav(-1)}>&nbsp;목 록&nbsp;
                </button>
            </div>
        </Fragment>
    )
}
export default CultureDetail