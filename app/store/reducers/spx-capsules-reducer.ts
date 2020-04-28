import { Reducer } from 'redux';

import { GET_CAPSULES_SUCCESS } from '../constants';

import { SPXCapsulesState } from './models/spx-capsules-reducer-types';

const initialState: SPXCapsulesState = {
  capsules: []
};

export const spxCapsulesReducer: Reducer<SPXCapsulesState> = (
  state: SPXCapsulesState = initialState,
  action
) => {
  switch (action.type) {
    case GET_CAPSULES_SUCCESS:
      return {
        ...state,
        capsules: [...action.capsules]
      };
    default:
      return { ...state };
  }
};
