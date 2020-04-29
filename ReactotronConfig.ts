import Reactotron, { ReactotronReactNative } from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';
import sagaPlugin from 'reactotron-redux-saga';

// import { AsyncStorage } from 'react-native';

Reactotron.configure({
  name: 'React Native Demo'
});

Reactotron.use(reactotronRedux());
Reactotron.use(sagaPlugin());

if (__DEV__) {
  Reactotron.connect();
  Reactotron.clear();
}

export default Reactotron;
/* Reactotron.log({
  numbers: [1, 2, 3],
  boolean: false,
  nested: { here: 'we go' },
});
Reactotron.warn('glares');
Reactotron.error("Now error");
Reactotron.display({
  name: 'KNOCK KNOCK',
  preview: 'Who\'s there?',
  value: 'Orange.'
}); */

// Reactotron.setAsyncStorageHandler(AsyncStorage)
//   .configure()
//   .useReactNative()
//   .connect();
