import React from 'react';
import { Text, Button } from 'react-native';

export const HomeScreen: React.FC<{}> = ({ navigation, route }) => (
  <>
    <Button
      title="Go to Capsules"
      onPress={() => navigation.navigate('Capsules')}
    />
  </>
);
