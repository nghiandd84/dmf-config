import React from 'react';

import './index.scss';
import NotAuthLayout from 'dmf_layout/layout/NotAuthLayout';
import Header from 'dmf_layout/Header';
import Footer from 'dmf_layout/Footer';
import H1 from 'dmf_ui/typography/H1';
import { TodosView as UserTodosView } from 'dmf_user/todos';
import TodoList  from './features/todos/components/TodoList';

export const App = () => (<>
  <NotAuthLayout header={<Header />} footer={<Footer />} className="u-demo">
      <div>
        <H1>Config App</H1>
        <UserTodosView />
        <hr/>
        <TodoList />
      </div>
    </NotAuthLayout>
    </>
);
