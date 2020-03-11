import React from "react";
import { Menu } from "./components";
import { userIsAuthenticated } from "./HOCs";
import { UserInfo } from "../react/components";

class Profile extends React.Component {
  render() {
    return (
      <>
        <Menu isAuthenticated={this.props.isAuthenticated} />
        <h2>Profile</h2>
        <UserInfo username={this.props.match.params.username} />
      </>
    );
  }
}

export default userIsAuthenticated(Profile);
