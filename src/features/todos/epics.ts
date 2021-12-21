import { Epic } from 'redux-observable';
import { from, of } from 'rxjs';
import { filter, switchMap, map, catchError } from 'rxjs/operators';
import { isActionOf } from 'typesafe-actions';
import { loadTodosAsync, saveTodosAsync } from './actions';
import { getTodos } from './selectors';
import { AppState } from '../../store/reducer';
import { AppAction } from '../../store/action';
import { AppRootService } from '../../services';

export const configLoadTodosEpic: Epic<
  AppAction,
  AppAction,
  AppState,
  AppRootService
> = (action$, state$, { config }) =>
  action$.pipe(
    filter(isActionOf(loadTodosAsync.request)),
    switchMap(() =>
      from(config.api.todos.loadSnapshot()).pipe(
        map(loadTodosAsync.success),
        catchError((message: string) => of(loadTodosAsync.failure(message)))
      )
    )
  );

export const configSaveTodosEpic: Epic<
  AppAction,
  AppAction,
  AppState,
  AppRootService
> = (action$, state$, { config }) =>
  action$.pipe(
    filter(isActionOf(saveTodosAsync.request)),
    switchMap(() => {
      console.log(state$.value, config);
      config.logger.default.log(state$);
      return from(
        config.api.todos.saveSnapshot(getTodos(state$.value.user.todo))
      ).pipe(
        map(saveTodosAsync.success),
        catchError((message: string) => of(saveTodosAsync.failure(message)))
      );
    })
  );

