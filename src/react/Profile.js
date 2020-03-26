import React from "react";
import { DeleteUserButton, MainMenu } from "./components";
import { userIsAuthenticated } from "./HOCs";
import { MessageFeed, UserInfo, UserMenu } from "../react/components";
import "./Profile.css";
import UserList from "./components/UserList";

class Profile extends React.Component {
  render() {
    return (
      <div>
        <UserMenu/>
        <div id="profile">
          <h2 className="heading">Profile</h2>
          <div id="profile-body">
            <div className="menu">
              <MainMenu
                isAuthenticated={this.props.isAuthenticated}
                className="menu"
              />
              <UserList/>
            </div>
            <div className="user-info-card">
              <UserInfo
                username={this.props.match.params.username}
                displayName={this.props.match.params.displayName}
                description={this.props.match.params.about}
                extra=""
              />
              <DeleteUserButton/>
            </div>
            <div className="message-feed-card">
              <MessageFeed/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default userIsAuthenticated(Profile);
