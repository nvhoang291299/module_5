// import { all, call, put, takeLatest } from 'redux-saga/effects';
// import findAll from '../services/UserService';
// import {getListUser} from './action';

// function* getListUsers(action) {
// try {
// const data = yield call(findAll);
// yield put(getListUser(data));
// } catch (error) {
//     console.error(error);
// }
// }

// function* usersSaga() {
// yield takeLatest('GET_USER', getListUsers);
// }

// function* todo() {
//     yield all([call(getListUsers)]);
// }

// export {usersSaga, todo} ;

import axios from "axios";
import { put, takeLatest } from "redux-saga/effects";
import {
  FETCH_USER,
  FETCH_USER_SUCCESS
} from "./action";

const BaseURL = "https://jsonplaceholder.typicode.com/users";

function* getUser(action) {
    try {
      const response = yield axios.get(BaseURL);
      // Sau khi lấy được dữ liệu từ fake API
      // Dispatch một action tới reducer kèm theo dữ liệu mà API trả về
      yield put({ type: FETCH_USER_SUCCESS, payload: response.data });
    } catch (error) {
      console.log("error - getUser : ", error);
    }
  }

  export default function* rootSaga() {
    yield takeLatest(FETCH_USER, getUser);
  }