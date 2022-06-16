
import * as React from 'react';
import { connect } from 'react-redux';

import * as selectors from '../selectors';
import * as actions from '../actions';

import TodoListItem from './TodoListItem';
import { Todo } from '../model/Todo';
import { AppState } from '../../../store/reducer';
import { UserState } from 'dmf_user/store/reducer';

const mapStateToProps = (state: AppState & {user: UserState}) => ({
  isLoading: state.config.todoModule.isConfigLoading,
  todos: selectors.getTodos(state.config.todoModule),
  userTodos: state.user.todo.todos
});
const dispatchProps = {
  removeTodo: actions.removeTodo,
};

type Props = ReturnType<typeof mapStateToProps> & typeof dispatchProps;

function TodoList({ isLoading, todos = [], userTodos, removeTodo }: Props) {
  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <>
    <h4>TodoList from Config Module</h4>
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <TodoListItem
            title={todo.title}
            onRemoveClick={() => removeTodo(todo.id)}
          />
        </li>
      ))}
    </ul>
    <h4>Todo from User Microfront End App</h4>
    <ul>
      {userTodos.map((todo) => (
        <li key={todo.id}>
          <TodoListItem
            title={todo.title}
            onRemoveClick={() => removeTodo(todo.id)}
          />
        </li>
      ))}
    </ul>
    </>
  );
}

export default connect(mapStateToProps, dispatchProps)(TodoList);
