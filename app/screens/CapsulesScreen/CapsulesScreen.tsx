import React from 'react';
import { Text, Button } from 'react-native';

export const CapsulesScreen = ({ route, navigation }) => (
  <>
    <Text>CapsulesScreen</Text>
    <Text>{route.params.parameter}</Text>
    <Button title="Go to home" onPress={() => navigation.push('Capsules', {parameter: parseInt(route.params.parameter, 10) * 4})} />
    <Button title="Go back" onPress={() => navigation.goBack()} />
    <Button
      title="Go back to first screen in stack"
      onPress={() => navigation.popToTop()}
    />
    <Button title="Home" onPress={() => navigation.navigate("Home")} />
  </>
);
