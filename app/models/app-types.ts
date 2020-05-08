import { Capsule } from './spx-capsules-api-types';

export type RootStackParamList = {
  Home: undefined;
  Capsules: undefined;
  Capsule: {
    capsule: Capsule;
  };
};
