import { spxCapsulesReducer } from './spx-capsules-reducer';
import { Capsule } from '../../models/spx-capsules-api-types';

export interface ApplicationState {
  capsules: Capsule[];
}

export { spxCapsulesReducer };
