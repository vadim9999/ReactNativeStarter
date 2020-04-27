import React from 'react';
// import { Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { HomeScreen } from './screens/HomeScreen/HomeScreen';
import { CapsulesScreen } from './screens/CapsulesScreen/CapsulesScreen';

const Stack = createStackNavigator();

export const App: React.FC<{}> = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: 'Overview' }}
        initialParams={{ itemId: 42 }}
      />
      <Stack.Screen
        name="Capsules"
        component={CapsulesScreen}
        initialParams={{ parameter: 110 }}
      />
    </Stack.Navigator>
  </NavigationContainer>
);
