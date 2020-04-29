import { put, all, takeEvery, call } from 'redux-saga/effects';
import { REACT_APP_BACKEND_SPACEX_CAPSULES } from 'react-native-dotenv';

import { getCapsulesSuccess } from '../actions';
import { capsulesData } from '../api/spx-capsules-api';
import { GET_CAPSULES } from '../constants';
import { Capsule } from '../../models/spx-capsules-api-types';

const getCapsules = async (): Promise<Capsule[]> => {
  try {
    const response: Response = await fetch(
      `${REACT_APP_BACKEND_SPACEX_CAPSULES}`
    );
    const json: Capsule[] = await response.json();
    return json;
  } catch (error) {
    console.log('error', error);
  }

  return [];
};

function* getCapsulesSaga() {
  yield console.log('I am here');

  try {
    // const data = yield [...capsulesData];
    const capsules: Capsule[] = yield call(getCapsules);

    yield put(getCapsulesSuccess(capsules));
  } catch (e) {
    console.log('error', e);
  }
}

export default function* rootSaga() {
  yield all([takeEvery(GET_CAPSULES, getCapsulesSaga)]);
}
