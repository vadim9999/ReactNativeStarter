import React from 'react';
import { Text, Button } from 'react-native';

import CapsuleList from '../../components/CapsuleList';

export const CapsulesScreen: React.FC<{}> = ({ route, navigation }) => (
  <>
    <Text>Capsules</Text>
    <CapsuleList />
  </>
);
