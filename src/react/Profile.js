import React from "react";
import { Menu } from "./components";
import { userIsAuthenticated } from "./HOCs";
import { UserInfo, MessageFeed } from "../react/components";
import "./Profile.css";

class Profile extends React.Component {
  render() {
    return (
      <>
        <Menu isAuthenticated={this.props.isAuthenticated} />
        <h2 className="heading">Profile</h2>
        <div id="profile-body">
          <div className="user-info-card">
            <UserInfo username={this.props.match.params.username} />
          </div>
          <div className="message-feed-card">
            <MessageFeed />
          </div>
        </div>
      </>
    );
  }
}

export default userIsAuthenticated(Profile);
