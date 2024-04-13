import React from "react";
import {
  Divider,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";

import "./styles.css";
import models from "../../modelData/models";
import { Link } from "react-router-dom";
/**
 * Define UserList, a React component of Project 4.
 */
function UserList() {
  const users = models.userListModel();

  return (
    <div className="user-list">
      <h2>Users</h2>
      <List component="nav">
        {users.map((user) => (
          <ListItem key={user._id}>
            <Link to={`/users/${user._id}`}>
              <ListItemText primary={`${user.first_name} ${user.last_name}`} />
            </Link>
            <Divider />
          </ListItem>
        ))}
      </List>
    </div>
  );
}


export default UserList;
