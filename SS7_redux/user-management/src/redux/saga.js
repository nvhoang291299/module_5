import { all, call, put, takeLatest } from 'redux-saga/effects';
import findAll from '../services/UserService';
import {getListUser} from './action';

function* getListUsers(action) {
try {
const data = yield call(findAll);
yield put(getListUser(data));
} catch (error) {
    console.error(error);
}
}

function* usersSaga() {
yield takeLatest('GET_USER', getListUsers);
}

function* todo() {
    yield all([call(getListUsers)]);
}

export {usersSaga, todo} ;