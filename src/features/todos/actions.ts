import { createAction, createAsyncAction } from 'typesafe-actions';
import { Todo } from './model/Todo';
export const addTodo = createAction('CONFIG_ADD_TODO', (title: string) => ({
  id: Math.ceil(Math.random() * 999999).toString(),
  title,
}))<Todo>();

export const removeTodo = createAction('CONFIG_REMOVE_TODO')<string>();

export const loadTodosAsync = createAsyncAction(
  'CONFIG_LOAD_TODOS_REQUEST',
  'CONFIG_LOAD_TODOS_SUCCESS',
  'CONFIG_LOAD_TODOS_FAILURE'
)<undefined, Todo[], string>();

export const saveTodosAsync = createAsyncAction(
  'CONFIG_SAVE_TODOS_REQUEST',
  'CONFIG_SAVE_TODOS_SUCCESS',
  'CONFIG_SAVE_TODOS_FAILURE'
)<undefined, undefined, string>();

export const doNothing = createAction('DO_NO_THING')();

