import React from "react";
import { NavLink } from "react-router-dom";
import "./Menu.css";
import { connect } from "react-redux";
import { logout } from "../../redux";
import { Dropdown, Icon, Menu } from "semantic-ui-react";
import SearchBar from "./SearchBar";
import UpdateUser from "./UpdateInfo";
import users from "../users.json";

class MainMenu extends React.Component {
  state = {};

  handleLogout = event => {
    // event.preventDefault();
    this.props.logout();
  };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;
    return (
      <React.Fragment>
        {this.props.isAuthenticated && (
          <Menu fluid={true} vertical style={{ backgroundColor: "#008e97" }}>
            <Menu.Item>
              <SearchBar
                results={users}
                loading={this.props.isLoading}
                value={this.props.value}
                {...this.props}
              />
            </Menu.Item>

            <Menu.Item style={{ color: "white" }}>
              Home
              <Menu.Menu>
                <Menu.Item
                  name="home"
                  active={activeItem === "home"}
                  onClick={this.handleItemClick}
                >
                  Search
                </Menu.Item>
                <Menu.Item
                  name="add"
                  className="menu-link"
                  active={activeItem === "add"}
                  onClick={this.handleItemClick}
                >
                  Add
                </Menu.Item>
                <Menu.Item
                  name="about"
                  className="menu-link"
                  active={activeItem === "about"}
                  onClick={this.handleItemClick}
                >
                  Remove
                </Menu.Item>
              </Menu.Menu>
            </Menu.Item>

            <Menu.Item
              name="browse"
              active={activeItem === "browse"}
              onClick={this.handleItemClick}
            >
              <Icon name="grid layout" />
              Browse
            </Menu.Item>
            <Menu.Item
              name="messages"
              className="menu-link"
              style={{ color: "white" }}
              active={activeItem === "messages"}
              onClick={this.handleItemClick}
            >
              <NavLink to="/messagefeed">Messages </NavLink>
            </Menu.Item>

            <Dropdown item text="More">
              <Dropdown.Menu>
                <Dropdown.Item icon="edit" text="Edit Profile" />
                <UpdateUser />
                <Dropdown.Item icon="settings" text="Account Settings" />
                <Dropdown.Item
                  icon="key"
                  text="logout"
                  onClick={this.handleLogout}
                />
              </Dropdown.Menu>
            </Dropdown>
          </Menu>
        )}
      </React.Fragment>
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
)(MainMenu);
