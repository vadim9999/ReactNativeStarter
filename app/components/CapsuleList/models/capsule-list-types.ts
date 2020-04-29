import { Capsule } from '../../../models/spx-capsules-api-types';

export interface MapDispatchToProps {
  getCapsules: Function;
}

export interface MapStateToProps {
  capsules: Capsule[];
}
