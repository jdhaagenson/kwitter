import React from "react";
import { connect } from "react-redux";
import { Menu } from "./components";
import { userIsAuthenticated } from "./HOCs";
import { MessageFeed, UserInfo } from "../react/components";
import "./Profile.css";
import UserList from "./components/UserList";
import logo from "./components/images/logo.png";
import { Icon, Image } from "semantic-ui-react";
import { getUser, logout } from "../redux";

class Profile extends React.Component {
  handleLogout = () => {
    this.props.logout();
  };
  componentDidMount = () => {
    this.props.getUser(this.props.username)
  };

  render() {
    return (
      <div id="profile">
        <Image src={logo} alt="logo" size="small" centered/>

        <h2 className="heading">PROFILE</h2>
        <Icon
          name="key"
          className="logout-key"
          color="orange"
          inverted
          onClick={this.handleLogout}
        />
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

export default connect(
  state => ({
    result: state.auth.logout.result,
    loading: state.auth.logout.loading,
    error: state.auth.logout.error
  }),
  {logout, getUser}
)(userIsAuthenticated(Profile));
