import { ActionCreator } from 'redux';

import { GET_CAPSULES_SUCCESS, GET_CAPSULES } from '../constants';
import { Capsule } from '../../models/spx-capsules-api-types';
import {
  GetCapsulesSuccess,
  GetCapsules
} from './models/spx-capsules-acions-types';

export const getCapsules: ActionCreator<GetCapsules> = () => ({
  type: GET_CAPSULES
});

export const getCapsulesSuccess: ActionCreator<GetCapsulesSuccess> = (
  c: Capsule[]
) => ({
  type: GET_CAPSULES_SUCCESS,
  capsules: c
});
