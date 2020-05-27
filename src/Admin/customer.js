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
  Show,
  TabbedShowLayout,
  Tab,
  RichTextField,
  DateField,
  NumberField,
  BooleanField,
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

export const CustomerShow = (props) => (
  <Show {...props}>
    <TabbedShowLayout>
      <Tab label="summary">
        <TextField label="Id" source="id" />
        <TextField source="title" />
        <TextField source="teaser" />
      </Tab>
      <Tab label="body" path="body">
        <RichTextField source="body" addLabel={false} />
      </Tab>
      <Tab label="Miscellaneous" path="miscellaneous">
        <TextField
          label="Password (if protected post)"
          source="password"
          type="password"
        />
        <DateField label="Publication date" source="published_at" />
        <NumberField source="average_note" />
        <BooleanField
          label="Allow comments?"
          source="commentable"
          defaultValue
        />
        <TextField label="Nb views" source="views" />
      </Tab>
    </TabbedShowLayout>
  </Show>
);
