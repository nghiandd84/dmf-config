import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import { History, createBrowserHistory } from 'history';
import { reducer } from '../store';
import { StateType } from 'typesafe-actions';
import * as userStore from 'dmf_user/store';
console.log(userStore);

const rootReducer = (history: History) =>
  combineReducers({
    router: connectRouter(history),
    user: userStore.reducer.userReducer,
    config: reducer.configReducer
  });

const rootReducerType = combineReducers({
  router: connectRouter(createBrowserHistory()),
  user: userStore.reducer.userReducer,
  config: reducer.configReducer
});

export type RootState = StateType<typeof rootReducerType>;

export default rootReducer;
