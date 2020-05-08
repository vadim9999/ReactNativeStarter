import React from 'react';
import { Provider } from 'react-redux';
// import { Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import store from './store/store';
import { HomeScreen } from './screens/HomeScreen/HomeScreen';
import { CapsulesScreen } from './screens/CapsulesScreen/CapsulesScreen';
import CapsuleScreen from './screens/CapsuleScreen';
import { RootStackParamList } from './models/app-types';
import { Capsule } from './models/spx-capsules-api-types';

const Stack = createStackNavigator<RootStackParamList>();

const initialCapsule: Capsule = {
  id: '333',
  capsule_serial: 'C000',
  capsule_id: 'dragon1',
  status: 'retired',
  original_launch: '2010-12-08T15:43:00.000Z',
  original_launch_unix: 1291822980,
  missions: [
    {
      name: 'COTS 1',
      flight: 7
    }
  ],
  landings: 0,
  type: 'Dragon 1.0',
  details: 'Reentered after three weeks in orbit',
  reuse_count: 0
};

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
        <Stack.Screen
          name="Capsule"
          initialParams={{ capsule: initialCapsule }}
          component={CapsuleScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  </Provider>
);
