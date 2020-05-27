import React from "react";
import { useMediaQuery } from "@material-ui/core";
import {
  List,
  Datagrid,
  TextField,
  ReferenceField,
  EditButton,
  SimpleForm,
  TextInput,
  SelectInput,
  Edit,
  Create,
  ReferenceInput,
  SimpleList,
  Show,
  TabbedShowLayout,
  Tab,
  RichTextField,
  DateField,
  NumberField,
  BooleanField,
  DateInput,
  TabbedForm,
  FormTab,
  required,
  BooleanInput,
  ReferenceManyField,
} from "react-admin";

export const PostList = (props) => {
  const isSmall = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  return (
    <List {...props}>
      {isSmall ? (
        <SimpleList
          primaryText={(record) => record.title}
          secondaryText={(record) => `${record.views} views`}
          tertiaryText={(record) =>
            new Date(record.published_at).toLocaleDateString()
          }
        />
      ) : (
        <Datagrid>
          <TextField source="id" />
          <ReferenceField label="User" source="userId" reference="users">
            <TextField source="name" />
          </ReferenceField>
          <TextField source="title" />
          <TextField source="body" />
          <DateField label="Publication date" source="published_at" />
          <EditButton />
        </Datagrid>
      )}
    </List>
  );
};

export const PostEdit = (props) => (
  <Edit {...props}>
    <TabbedForm>
      <FormTab label="summary">
        <TextInput source="title" validate={required()} />
        <TextInput source="teaser" validate={required()} />
      </FormTab>
      <FormTab label="body">
        <TextInput source="body" validate={required()} addLabel={false} />
      </FormTab>
      <FormTab label="Miscellaneous">
        <TextInput
          label="Password (if protected post)"
          source="password"
          type="password"
        />
        <DateInput label="Publication date" source="published_at" />

        <BooleanInput
          label="Allow comments?"
          source="commentable"
          defaultValue
        />
      </FormTab>
      <FormTab label="comments">
        <ReferenceManyField
          reference="comments"
          target="post_id"
          addLabel={false}
        >
          <Datagrid>
            <TextField source="body" />
            <DateField source="created_at" />
            <EditButton />
          </Datagrid>
        </ReferenceManyField>
      </FormTab>
    </TabbedForm>
  </Edit>
);

export const PostCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <ReferenceInput source="userId" reference="users">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <TextInput source="title" />
      <TextInput multiline source="body" />
      <DateInput
        label="Publication date"
        source="published_at"
        defaultValue={new Date()}
      />
    </SimpleForm>
  </Create>
);

export const PostShow = (props) => (
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
