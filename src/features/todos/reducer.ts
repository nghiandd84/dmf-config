import { combineReducers } from 'redux';
import { createReducer } from 'typesafe-actions';

import { loadTodosAsync, addTodo, removeTodo } from './actions';
import { Todo } from './model/Todo';

export const isConfigLoading = createReducer<boolean>(false as boolean)
  .handleAction([loadTodosAsync.request], (state, action) => true)
  .handleAction(
    [loadTodosAsync.success, loadTodosAsync.failure],
    (state, action) => false
  );

export const configTodos = createReducer<Todo[]>([
  {
    id: '0',
    title: 'You can add new todos using the form or load saved snapshot...',
  },
])
  .handleAction(loadTodosAsync.success, (state, action) => action.payload)
  .handleAction(addTodo, (state, action) => [...state, action.payload])
  .handleAction(removeTodo, (state, action) =>
    state.filter((i) => i.id !== action.payload)
  );

const todosReducer = combineReducers<{
  isConfigLoading: boolean,
  configTodos: Todo[]
}>({
  isConfigLoading: isConfigLoading,
  configTodos: configTodos,
});

export default todosReducer;
export type TodosState = ReturnType<typeof todosReducer>;
