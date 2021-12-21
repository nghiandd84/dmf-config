import { routerActions } from 'connected-react-router';
import { ActionType } from 'typesafe-actions';
import { actions } from '../store';

import { userAction } from 'dmf_user/store/action';

const rootAction = {
  router: routerActions,
  config: actions.configAction,
  user: userAction
};

console.log(rootAction);

type RootAction = ActionType<typeof rootAction>;
export default RootAction;
