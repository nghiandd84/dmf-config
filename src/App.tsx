import React from 'react';

import './index.scss';
import NotAuthLayout from 'dmf_layout/layout/NotAuthLayout';
import Header from 'dmf_layout/Header';
import Footer from 'dmf_layout/Footer';
import H1 from 'dmf_ui/typography/H1';
import { TodosView as UserTodosView } from 'dmf_user/todos';
import TodoList from './features/todos/components/TodoList';
import DynamicForm, { FormInput } from 'dmf_ui/dynamicForm';
import DataTable, {
  Icolumn,
  Irow,
  ItableStyle,
  renderFunction,
} from 'dmf_ui/DataTable';

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
          <div tw="m-2">
            <DemoTable />
          </div>
        </div>
      </NotAuthLayout>
    </>
  );
};

const DemoTable = () => {
  const columns: Icolumn[] = [
    {
      field: 'created_at',
      use: 'Action',
      // use_in_search:false
    },
    {
      field: 'front_end_position.name',
      use: 'Position',
      useInSearch: true,
    },
    {
      // use_in_display: false,
      field: 'name',
      use: 'Name',
    },

    {
      field: 'country_id',
      use: 'Country',

      //Will not be displayed in the table
      useInDisplay: false,
    },
    {
      field: 'club_id',
      use: 'Club Details',
      //would not be exported as a CSV column
      useInDisplay: true,
    },
  ];

  const rowA: Irow[] = [
    {
      id: 1,
      name: 'Sadio Mane',
      country_id: 3,
      club_id: 2,
      position_id: 1,
      shirt_number: '10',
      created_by: 2,
      deleted_at: null,
      created_at: '12/12/12 15:00:00',
      updated_at: '12/12/12 15:00:00',
      is_defender: false,
      is_midfielder: false,
      is_forward: true,
      is_goalkeeper: false,
      front_end_position: {
        name: 'attach',
        id: 2,
      },
    },
    {
      id: 2,
      name: 'Mohammed Sala',
      country_id: 3,
      club_id: 2,
      position_id: 1,
      shirt_number: '11',
      created_by: 2,
      deleted_at: null,
      created_at: '12/12/12 15:00:00',
      updated_at: '12/12/12 15:00:00',
      is_defender: false,
      is_midfielder: false,
      is_forward: true,
      is_goalkeeper: false,
      front_end_position: {
        name: 'Forward',
        id: 4,
      },
    },
    {
      id: 3,
      name: 'Robertor Fermino',
      country_id: 3,
      club_id: 2,
      position_id: 1,
      shirt_number: '8',
      created_by: 2,
      deleted_at: null,
      created_at: '12/12/12 15:00:00',
      updated_at: '12/12/12 15:00:00',
      is_defender: false,
      is_midfielder: false,
      is_forward: true,
      is_goalkeeper: false,
      front_end_position: {
        name: 'Defence',
        id: 9,
      },
    },
  ];

  const rows = rowA.concat(rowA).concat(rowA);

  const rowRender: renderFunction = (
    row: Irow,
    column: Icolumn,
    display_value: any
  ) => {
    if (column.field === 'created_at') {
      return <button className="border p-2">See button</button>;
    }

    if (column.field === 'name') {
      return <b>{display_value}</b>;
    }

    return display_value;
  };
  const style: ItableStyle = {
    baseBgColor: 'primary',
    top: {
      elements: {
        search: {
          text: 'Search In Table',
          placeHolder: 'Mane ...',
        },
        bulkSelect: {
          button: 'Bulk Select',
          main: 'bulk-select',
        },
      },
    },
  };
  return (
    <>
      <DataTable
        columns={columns}
        rows={rows}
        perPage={2}
        tableHeader="Test Table"
        rowRender={rowRender}
        styling={style}
        bulkSelectOptions={['Delete']}
      />
    </>
  );
};
