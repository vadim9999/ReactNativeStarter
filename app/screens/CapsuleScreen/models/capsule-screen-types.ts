import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';

import { RootStackParamList } from '../../../models/app-types';

type CapsuleScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Capsule'
>;

type CapsuleScreenRouteProp = RouteProp<RootStackParamList, 'Capsule'>;

export type Props = {
  navigation: CapsuleScreenNavigationProp;
  route: CapsuleScreenRouteProp;
};
