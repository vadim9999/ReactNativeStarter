import { createStore, applyMiddleware, Store, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
// import Reactotron from 'reactotron-react-native';
import Reactotron from '../../ReactotronConfig';
import { spxCapsulesReducer } from './reducers';
// import Reactotron from '../../ReactotronConfig';
import { SPXCapsulesState } from './reducers/models/spx-capsules-reducer-types';
import rootSaga from './sagas/spx-capsules-saga';

let sagaMiddleware;

if (__DEV__) {
  const sagaMonitor = Reactotron.createSagaMonitor();
  sagaMiddleware = createSagaMiddleware({ sagaMonitor });
} else {
  sagaMiddleware = createSagaMiddleware();
}
// const sagaMiddleware = createSagaMiddleware({
//   sagaMonitor: Reactotron.createSagaMonitor()
// });

const middleware = applyMiddleware(sagaMiddleware);

const store: Store<SPXCapsulesState> = createStore(
  spxCapsulesReducer,
  compose(middleware, Reactotron.createEnhancer())
);

sagaMiddleware.run(rootSaga);

export default store;
