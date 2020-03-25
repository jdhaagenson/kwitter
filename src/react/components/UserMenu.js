import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { Menu, Sticky } from "semantic-ui-react";
import { logout } from "../../redux";
import logo from "./images/logo.png";
import SearchBar from "./SearchBar";
// import Profile from "../Profile"

class UserMenu extends Component {
  state = { activeItem: "my messages" };

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
        <Sticky>
          <Menu pointing secondary style={{ backgroundColor: "#f58220" }}>
            <NavLink to="/">
              {" "}
              <Menu.Item
                name="home"
                active={activeItem === "home"}
                onClick={this.handleItemClick}
              />
            </NavLink>
            <NavLink to="/messagefeed">
              {" "}
              <Menu.Item
                name="my messages"
                active={activeItem === "my messages"}
                onClick={this.handleItemClick}
              />
            </NavLink>
            <Menu.Item />
            <NavLink to="/users">
              <Menu.Item
                name="all Users"
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
        </Sticky>
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
