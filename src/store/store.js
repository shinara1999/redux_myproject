import {configureStore} from "@reduxjs/toolkit";
import thunk from 'redux-thunk' // 미들웨어 / 비동기방식
import rootReducer from '../reducers'
import {createLogger} from "redux-logger/src"

const logger=createLogger()
const middleware=[thunk, logger]
const store=configureStore({
    reducer:rootReducer, // Reducer에서 가져온 값을 저장
    devTools:window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
})
export default store