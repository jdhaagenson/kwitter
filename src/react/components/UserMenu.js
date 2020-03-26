import React, { Component } from "react";
import { connect } from "react-redux";
import { Menu } from "semantic-ui-react";
import { logout } from "../../redux";
// import MessageFeed from "./MessageFeed";
import SearchBar from "./SearchBar";

// import Profile from "../Profile"

class UserMenu extends Component {
  state = { activeItem: "home" };

  handleItemClick = (e, { name }) => {
    e.preventDefault();
    this.setState({activeItem: name});
  };

  handleLogout = event => {
    event.preventDefault();
    this.props.logout();
  };

  render() {
    const { activeItem } = this.state;

    return (
      <div id="user-menu">
        <Menu pointing secondary style={{ backgroundColor: "#f58220" }}>
          <Menu.Item
            name="Home"
            active={activeItem === "home"}
            onClick={this.handleItemClick}
            content={"Home"}

          />
          <Menu.Item
            name="messages"
            active={activeItem === "messages"}
            onClick={this.handleItemClick}
          />

          <Menu.Item
            name="friends"
            active={activeItem === "friends"}
            onClick={this.handleItemClick}
          />
          <Menu.Menu position="right">
            <SearchBar />
            <Menu.Item
              name="logout"
              active={activeItem === "logout"}
              onClick={this.handleLogout}
            />
          </Menu.Menu>
        </Menu>
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
  { logout }
)(UserMenu);
