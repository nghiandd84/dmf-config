import { Epic } from 'redux-observable';
import { tap } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { isActionOf } from 'typesafe-actions';
import { actions } from 'dmf_user/todos';
import { doNothing } from '../features/todos/actions';

export const configUserSaveTodosEpic: Epic<any, any, any, any> = (
  action$,
  state$,
  service$
) => {
  return action$.pipe(
    filter(isActionOf(actions.saveTodosAsync.success)),
    tap(() => {
      console.log(action$, state$.value, service$);
      console.log('Do something here');
    }),
    map(() => doNothing())
  );
};
