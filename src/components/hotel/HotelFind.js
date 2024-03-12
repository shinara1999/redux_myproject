import {Fragment, useState, useEffect} from "react";
import {useParams, useNavigate, Link} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import {fetchFindPage, fetchFindList} from "../../actions/hotelActions";
import Pagination from "react-js-pagination";
function HotelFind(){
    const [curpage, setCurpage]=useState(1);
    const [fd, setFd]=useState('양화로');
    const dispatch=useDispatch()

    useEffect(()=>{
        dispatch(fetchFindList(curpage, fd))
        dispatch(fetchFindPage(fd))
    }, [fd, curpage])

    const hotelList=useSelector((state)=>state.hotels.find_list)
    const totalpage=useSelector((state)=>state.hotels.find_page)

    const handlePageChange=(page)=>{
        setCurpage(page)
    }
    const findChange=(e)=>{
        setFd(e.target.value)
    }
    const findHandler=()=>{
        setCurpage(1)
    }

    const html=hotelList.map((vo) =>
        <div className="col-md-4" style={{"width": "300px"}}>
            <div className="single_place" style={{"paddingBottom": "10%", "width": "300px"}}>
                <Link to={"/hotel/detail/" + vo.hno}>
                <img src={vo.poster} style={{"width": "300px", "height": "200px", "borderRadius": "25px"}}
                     />
                </Link>
                <p style={{
                    "fontSize": "13px",
                    "color": "#fe5c24",
                    "paddingTop": "0.5%"
                }}>#&nbsp;{vo.tag}&nbsp;&nbsp;#&nbsp;호텔&nbsp;&nbsp;#&nbsp;숙박</p>
                <p style={{
                    "fontSize": "20px",
                    "fontWeight": "bold",
                    "color": "#0c3e72",
                    "padding": "0.5%"
                }}>{vo.name}</p>

            </div>
        </div>
    )

    return (
        <Fragment>

            <div className={"row justify-content-center"} style={{"padding": "2%"}}>
                <h2>호텔 검색 결과</h2>
            </div>
            <div className={"row justify-content-center"} style={{"paddingBottom":"2%"}}>
                <input type={"text"} size={"20"} className={"input-sm"} placeholder={"도로명주소 입력"}
                       value={fd}
                       onChange={findChange} style={{"borderRadius": "25px"}}
                />
                <input type={"button"} className={"btn btn-sm btn-success"} value={" 검 색 "}
                       onClick={findHandler} id={"allBtn"}
                />
            </div>
            <div style={{"height": "10px"}}></div>
            <div className={"row justify-content-center"} style={{"marginLeft": "11%"}}>
                {html}
            </div>
            <div className={"row justify-content-center"} style={{"paddingBottom":"3%"}}>
                <div className={"text-center"}>
                    <ul className={"pagination"} >
                        <Pagination
                            activePage={curpage}
                            itemsCountPerPage={9}
                            totalItemsCount={totalpage}
                            pageRangeDisplayed={3}
                            prevPageText={"<"}
                            nextPageText={">"}
                            onChange={handlePageChange}
                        />
                    </ul>
                </div>
            </div>
        </Fragment>
    )
}

export default HotelFind