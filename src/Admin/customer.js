import React from "react";
import {
  List,
  Datagrid,
  TextField,
  EmailField,
  Create,
  SimpleForm,
  ReferenceInput,
  SelectInput,
  TextInput,
  Edit,
  DateInput,
} from "react-admin";

export const Customer = (props) => (
  <List {...props} title="Your Customers">
    <Datagrid>
      <TextField source="id" />
      <TextField source="title" />
      <TextField source="body" />
      <EmailField source="email" />
    </Datagrid>
  </List>
);

export const CustomerCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="name" />

      <TextInput source="Description" />
      <TextInput source="email" />
      <DateInput
        label="Publication date"
        source="published_at"
        defaultValue={new Date()}
      />
    </SimpleForm>
  </Create>
);

export const CustomerEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput disabled source="id" />
      <ReferenceInput source="userId" reference="users">
        <SelectInput optionText="name" />
      </ReferenceInput>

      <TextInput source="title" />

      <TextInput multiline source="body" />
    </SimpleForm>
  </Edit>
);
