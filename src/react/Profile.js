import React from "react";
import { Menu } from "./components";
import { userIsAuthenticated } from "./HOCs";
import { UserInfo, MessageFeed } from "../react/components";
import  WhoToFollow   from "../react/components/WhoToFollow";

import "./Profile.css";
import UserList from "./components/UserList";

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
            <UserList style={{height: "100px"}} />
          </div>
          <div style={{height: 600}} className="user-info-card">
            <UserInfo
              username={this.props.match.params.username}
              displayName={this.props.match.params.username}
              description={this.props.match.params.about}
              extra=""
            />
          </div>
          <div className="message-feed-card">
            <MessageFeed />
            <WhoToFollow />
          </div>
        </div>
      </>
    );
  }
}

export default userIsAuthenticated(Profile);
