import React from 'react';

import './index.scss';
import NotAuthLayout from 'dmf_layout/layout/NotAuthLayout';
import Header from 'dmf_layout/Header';
import Footer from 'dmf_layout/Footer';
import H1 from 'dmf_ui/typography/H1';
import { TodosView as UserTodosView } from 'dmf_user/todos';
import TodoList from './features/todos/components/TodoList';
import DynamicForm, { FormInput } from 'dmf_ui/dynamicForm';

export const App = () => {
  const formData: (FormInput | FormInput[])[] = [
    {
      name: 'name',
      label: 'User name',
      placeholder: 'nghiandd',
      validationRules: [
        {
          rule: 'required',
          message: 'Please enter an user name',
        },
      ],
    },

    {
      name: 'email',
      label: 'Email',
      placeholder: 'With error message',
      validationRules: [
        {
          rule: 'required',
          message: 'Please enter an email',
        },
        {
          rule: 'email',
          message: 'Please enter a valid email',
        },
      ],
    },
    [
      {
        name: 'password',
        type: 'password',
        label: 'Password',
        placeholder: 'pass@word1',
        inputClass: 'md:w-1/2',
        validationRules: [
          {
            rule: 'required',
            message: 'Please enter a password',
          },
        ],
      },
      {
        name: 'confirmation_password',
        type: 'password',
        label: 'Confirm Password',
        placeholder: 'pass@word1',
        inputClass: 'md:w-1/2',
        validationRules: [
          {
            rule: 'required',
            message: 'Please enter a confirm password',
          },
          {
            rule: (_, value, formValue) => {
              return value === formValue.password;
            },
            message: 'Confirm password must match password',
          },
        ],
      },
    ],

    {
      name: 'gender',
      type: 'radio',
      label: 'Gender',
      placeholder: '0123456789',
      options: [
        {
          name: 'male',
          value: 'm',
          label: 'Male',
        },
        {
          name: 'female',
          value: 'f',
          label: 'Female',
        },
      ],
    },

    {
      name: 'number-demo',
      label: 'number only',
      type: 'number',
      placeholder: '0123456789',
      filter: 'numeric',
    },

    [
      {
        name: 'a',
        label: 'A-value',
        type: 'number',
        placeholder: '0123456789',
        validationRules: [
          {
            rule: 'required',
            message: 'Please enter a A-value',
          },
        ],
        inputClass: 'md:w-1/2',
      },
      {
        name: 'b',
        label: 'B',
        type: 'text',
        inputClass: 'md:w-1/2',
      },
    ],

    {
      name: 'select_type',
      type: 'select',
      label: 'Select Type',
      inputClass: 'select-type md:w-1/2 pt-2',
      selectClass: 'w-full',
      options: [
        {
          name: 'male',
          value: 'm',
          label: 'Male',
        },
        {
          name: 'female',
          value: 'f',
          label: 'Female',
        },
      ],
      validationRules: [
        {
          rule: 'required',
          message: 'Please select type',
        },
      ],
    },
    [
      {
        name: 'date',
        label: 'date',
        type: 'date',
        inputClass: 'md:w-1/4',
      },
      {
        name: 'time',
        label: 'Time',
        type: 'time',
        inputClass: 'md:w-1/4',
      },
    ],

    [
      {
        name: 'disabled',
        label: 'Disabled',
        type: 'checkbox',
        inputClass: 'md:w-1/4',
      },
      {
        name: 'disabled_date',
        label: 'Disabled Date',
        type: 'date',
        inputClass: 'md:w-1/4',
        onHide: (data: any) => {
          return !data.disabled;
        },
      },
    ],
  ];
  const defaultValue = {
    'number-demo': 999,
    gender: 'm',
    a: 12,
    b: 'Test B',
    select_type: null,
  };
  return (
    <>
      <NotAuthLayout header={<Header />} footer={<Footer />} className="u-demo">
        <div>
          <H1>Config App</H1>
          <UserTodosView />
          <hr />
          <TodoList />
          <h1>Demo Dynamic Form</h1>
          <div tw="m-2">
            <DynamicForm
              inputs={formData}
              submitButton={{
                text: 'Save',
                className: 'submit',
              }}
              onSubmit={(form) => {
                console.log(form);
              }}
              defaultValues={defaultValue}
            />
          </div>
        </div>
      </NotAuthLayout>
    </>
  );
};
