import { put, all, takeEvery, call } from 'redux-saga/effects';
import { REACT_APP_BACKEND_SPACEX_CAPSULES } from 'react-native-dotenv';
import { v1 as uuidv1 } from 'uuid';

import { getCapsulesSuccess } from '../actions';
import { capsulesData } from '../api/spx-capsules-api';
import { GET_CAPSULES } from '../constants';
import { Capsule } from '../../models/spx-capsules-api-types';
import { CapsuleResponse } from './models/spx-capsules-saga-types';

const getCapsules = async (): Promise<CapsuleResponse[]> => {
  try {
    const response: Response = await fetch(
      `${REACT_APP_BACKEND_SPACEX_CAPSULES}`
    );
    const json: CapsuleResponse[] = await response.json();
    return json;
  } catch (error) {
    console.log('error', error);
  }

  return [];
};

function* getCapsulesSaga() {
  yield console.log('I am here');

  try {
    const capsules: Capsule[] = yield [...capsulesData].map((capsule) => ({
      ...capsule,
      id: uuidv1()
    }));
    // const capsules: Capsule[] = yield call(getCapsules);

    yield put(getCapsulesSuccess(capsules));
  } catch (e) {
    console.log('error', e);
  }
}

export default function* rootSaga() {
  yield all([takeEvery(GET_CAPSULES, getCapsulesSaga)]);
}
