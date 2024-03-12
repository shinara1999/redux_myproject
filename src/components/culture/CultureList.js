import {Fragment, useState, useEffect} from "react";
import {Link, useParams} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import {fetchCULTUREList, fetchCulturePage} from "../../actions/cultureActions";

function CultureList(){
    const [curpage, setCurpage]=useState(1);
    const dispatch=useDispatch()
    useEffect(() => {
        dispatch(fetchCULTUREList(curpage))
        dispatch(fetchCulturePage())
    }, [curpage]);

    // store에서 데이터 얻기
    const culture_list=useSelector((state)=>state.cultures.culture_list)
    const totalpage=useSelector((state)=>state.cultures.total)

    // 자연관광 1개에 대한 정보
    let html=culture_list.map((vo)=>


        <div className="col-md-4" style={{"width":"300px"}}>
            <div className="single_place" style={{"paddingBottom":"10%","width":"300px"}}>
                <Link to={"/culture/detail/" + vo.cno}>
                    <img src={vo.poster} style={{"width": "300px", "height": "200px", "borderRadius":"25px"}}/>
                    <p style={{"fontSize":"13px","color":"#fe5c24","paddingTop":"0.5%"}}>#&nbsp;{vo.tag}&nbsp;&nbsp;#&nbsp;역사와 문화</p>
                    <p style={{"fontSize":"20px","fontWeight":"bold","color":"#0c3e72","padding":"0.5%"}}>{vo.name}</p>
                </Link>
            </div>
        </div>


    )
    // 이벤트 (이전/다음 버튼 클릭)
    const prevHandler=()=>{
        setCurpage(curpage>1?curpage-1:curpage)
    }
    const nextHandler=()=>{
        setCurpage(curpage<totalpage?curpage+1:curpage)
    }
    return (
        <Fragment>
            <div className={"row justify-content-center"} style={{"padding": "2%"}}>
                <h2>역사와 문화</h2>
            </div>
            <div className={"row justify-content-center"} style={{"marginLeft":"11%"}}>
                {html}
            </div>
            <div className={"row justify-content-center"} style={{"padding": "3%"}}>
                <div className={"text-center"} style={{"width":"900px"}}>
                    <input type={"button"} value={" 이 전 "} className={"btn-sm btn-danger"} onClick={prevHandler} id={"allBtn"}/>
                    &nbsp;{curpage} page / {totalpage} pages&nbsp;
                    <input type={"button"} value={" 다 음 "} className={"btn-sm btn-danger"} onClick={nextHandler} id={"allBtn"}/>
                </div>
            </div>
        </Fragment>
    )
}
export default CultureList