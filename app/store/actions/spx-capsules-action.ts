import { ActionCreator } from 'redux';

import { GET_CAPSULES_SUCCESS } from '../constants';
import { Capsule } from '../../models/spx-capsules-api-types';
import { GetCapsulesSuccess } from './models/spx-capsules-acions-types';

export const getCapsulesSuccess: ActionCreator<GetCapsulesSuccess> = (
  c: Capsule[]
) => ({
  type: GET_CAPSULES_SUCCESS,
  capsules: c
});
