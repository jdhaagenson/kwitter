import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { Menu, Segment } from "semantic-ui-react";
import { logout } from "../../redux";
import MessageFeed from "./MessageFeed";
import SearchBar from "./SearchBar";
// import Profile from "../Profile"

class UserMenu extends Component {
  state = { activeItem: "home" };

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name });
  };

  handleLogout = event => {
    this.props.logout();
  };

  render() {
    const { activeItem } = this.state;

    return (
      <div id="user-menu">
        <Menu pointing secondary style={{ backgroundColor: "#f58220" }}>
          <NavLink to="/">
            {" "}
            <Menu.Item
              name="Home"
              active={activeItem === "home"}
              onClick={this.handleItemClick}
            />
          </NavLink>

          <Menu.Item />
          <NavLink to="/users">
            <Menu.Item
              name="All Users"
              active={activeItem === "all users"}
              onClick={this.handleItemClick}
            />
          </NavLink>
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
