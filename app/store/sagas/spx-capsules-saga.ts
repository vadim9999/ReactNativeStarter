import { put, all, takeEvery } from 'redux-saga/effects';

import { getCapsulesSuccess } from '../actions';
import { capsulesData } from '../api/spx-capsules-api';
import { GET_CAPSULES } from '../constants';

function* getCapsulesSaga() {
  yield console.log("I am here");
  
  try {
    const data = yield [...capsulesData];
    yield put(getCapsulesSuccess(data));
  } catch (e) {
    console.log('error');
  }
}

export default function* rootSaga() {
  yield all([takeEvery(GET_CAPSULES, getCapsulesSaga)]);
}
