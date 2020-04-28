import { createStore, Store } from 'redux';

import { spxCapsulesReducer } from './reducers';
import Reactotron from '../../ReactotronConfig';

import { SPXCapsulesState } from './reducers/models/spx-capsules-reducer-types';

const store: Store<SPXCapsulesState> = createStore(
  spxCapsulesReducer,
  Reactotron.createEnhancer()
);

export default store;
