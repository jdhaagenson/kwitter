import React from "react";
import { Menu } from "./components";
import { userIsAuthenticated } from "./HOCs";
import { UserInfo, Avatar, MessageFeed, UpdateUserInfo, DeleteUser } from "../react/components";
import "./Profile.css";
import UserList from './components/UserList'
import { Divider, Icon, Button } from 'semantic-ui-react'


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
            <UserList />
          </div>
          <div className="user-info-card">
            <UserInfo
            username={this.props.match.params.username}
            displayName={this.props.match.params.displayName}
            description={this.props.match.params.about}
            extra="22 friends"
             />
             <Avatar/>
             <UpdateUserInfo
              username={this.props.match.params.username}

             />
             <DeleteUser/>
             <Divider/>
            <Button fluid size="massive" toggle className="get-messages-button">
              <Icon name="comment alternate outline" />
                Just My Kweets
            </Button>

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
