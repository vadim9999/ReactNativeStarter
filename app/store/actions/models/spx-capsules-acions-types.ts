import { Capsule } from '../../../models/spx-capsules-api-types';

export interface GetCapsulesSuccess {
  type: string;
  capsules: Capsule[];
}

export interface GetCapsules {
  type: string;
}
