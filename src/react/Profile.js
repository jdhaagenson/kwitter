import React from "react";
import { Menu } from "./components";
import { userIsAuthenticated } from "./HOCs";
import { UserInfo, MessageFeed, UpdateUser } from "../react/components";
import "./Profile.css";

class Profile extends React.Component {
  render() {
    return (
      <>
        <h2 className="heading">Profile</h2>
        <div id="profile-body">
          <div className="menu">
            <Menu
              isAuthenticated={this.props.isAuthenticated}
              className="menu"
            />
          </div>
          <div className="user-info-card">
            <UserInfo
            displayName={this.props.match.params.username}
            username={this.props.match.params.username}
            description={this.props.match.params.about}
             />
            <UpdateUser/>
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
