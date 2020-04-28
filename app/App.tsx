import React from 'react';
import { Provider } from 'react-redux';
// import { Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import store from './store/store';
import { HomeScreen } from './screens/HomeScreen/HomeScreen';
import { CapsulesScreen } from './screens/CapsulesScreen/CapsulesScreen';

const Stack = createStackNavigator();

export const App: React.FC<{}> = () => (
  <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Home' }}
        />
        <Stack.Screen name="Capsules" component={CapsulesScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  </Provider>
);
