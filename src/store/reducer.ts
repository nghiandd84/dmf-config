import { combineReducers } from 'redux';
import todosReducer from '../features/todos/reducer';
import { StateType } from 'typesafe-actions';
import { RouterState } from 'connected-react-router';

const configReducer = combineReducers({
  todoModule: todosReducer,
});

export type ConfigState = StateType<typeof configReducer>;

export type AppState = {
  [key: string]: any;
  router: RouterState<any>;
  config: ConfigState;
};

export { configReducer };
