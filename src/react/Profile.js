import React from "react";
import { Menu } from "./components";
import { userIsAuthenticated } from "./HOCs";
import { UserInfo, MessageFeed } from "../react/components";
import "./Profile.css";
import UserList from "./components/UserList";
import logo from "./components/images/logo.png";
import { Image } from "semantic-ui-react";

class Profile extends React.Component {
  render() {
    return (
      <div id="profile">
        <Image src={logo} alt="logo" size="small" centered />
        <h2 className="heading">PROFILE</h2>
        <div id="profile-body">
          <div className="menu">
            <Menu
              isAuthenticated={this.props.isAuthenticated}
              className="menu"
            />
            <UserList />
          </div>
          <div className="user-info-card">
            <UserInfo
              username={this.props.match.params.username}
              displayName={this.props.match.params.username}
              description={this.props.match.params.about}
              extra=""
            />
          </div>
          <div className="message-feed-card">
            <MessageFeed />
          </div>
        </div>
      </div>
    );
  }
}

export default userIsAuthenticated(Profile);
