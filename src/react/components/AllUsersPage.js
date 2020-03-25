import React, { Component } from "react";
import UserList from "./UserList";
import "./AllUsersPage.css";
import { UserMenu } from ".";

class AllUsers extends Component {
  render() {
    return (
      <div>
        <UserMenu />

        <div className="all-users-page">
          <UserList />
        </div>
      </div>
    );
  }
}

export default AllUsers;
