import * as todosActions from '../features/todos/actions';
import { routerActions } from 'connected-react-router';
import { ActionType } from 'typesafe-actions';

export const configAction = {
  router: routerActions,
  config: {
    todo: todosActions,
  },
};

export type AppAction = ActionType<typeof configAction>;
