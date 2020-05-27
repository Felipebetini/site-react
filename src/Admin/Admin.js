import React from "react";
import { Admin, Resource } from "react-admin";
import { PostList, PostEdit, PostCreate, PostShow } from "./posts";
import { UserList } from "./users";
import PostIcon from "@material-ui/icons/Book";
import UserIcon from "@material-ui/icons/Group";
import jsonServerProvider from "ra-data-json-server";
import Dashboard from "./Dashboard";
import authProvider from "./authProvider";
import {
  Customer,
  CustomerCreate,
  CustomerEdit,
  CustomerShow,
} from "./customer";
//import theme from "./theme";

const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com");

const App = () => (
  <Admin
    //theme={theme}
    dashboard={Dashboard}
    authProvider={authProvider}
    dataProvider={dataProvider}
  >
    <Resource
      name="posts"
      show={PostShow}
      list={PostList}
      edit={PostEdit}
      create={PostCreate}
      icon={PostIcon}
    />

    <Resource name="users" list={UserList} icon={UserIcon} />
    <Resource
      name="Customers"
      list={Customer}
      show={CustomerShow}
      edit={CustomerEdit}
      create={CustomerCreate}
    />
  </Admin>
);
export default App;
