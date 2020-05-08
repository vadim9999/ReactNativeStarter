import React from 'react';
import { Text, Button, View } from 'react-native';

import CapsuleList from '../../components/CapsuleList';

export const CapsulesScreen: React.FC<{}> = ({ route, navigation }) => (
  <View style={{ backgroundColor: '#e0fffd'}}>
    <CapsuleList />
  </View>
);
