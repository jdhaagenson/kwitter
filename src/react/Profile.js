import React from "react";
import { Menu } from "./components";
import { userIsAuthenticated } from "./HOCs";
import { UserInfo, MessageFeed, UpdateInfo, DeleteUser } from "../react/components";
import "./Profile.css";
import UserList from './components/UserList'
import { Divider, Icon, Button } from 'semantic-ui-react'
// import { userIsNotAuthenticated } from "./HOCs";


class Profile extends React.Component {
  render() {
    return (
      <div id="profile">
        <h2 className="heading">Profile</h2>
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
             <UpdateInfo/>
             <DeleteUser/>
             <Divider/>
             <Button fluid size='massive' className="get-messages-button">
              <Icon name="comment alternate outline" />
              My Kweets
            </Button>
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
