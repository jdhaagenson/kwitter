import React from "react";
import { NavLink } from "react-router-dom";
import "./Menu.css";
import { connect } from "react-redux";
import { logout } from "../../redux";
<<<<<<< HEAD
import { Dropdown, Icon, Input, Menu } from "semantic-ui-react";
import SearchBar from "./SearchBar";
import UpdateUser from "./updateUser";
import users from '../users.json';

class MainMenu extends React.Component {
  state = {};
=======
import SearchBar from "../components/SearchBar"
>>>>>>> 84a54c11d1088ae159168e8ea6e651d202233127

  handleLogout = event => {
    // event.preventDefault();
    this.props.logout();
  };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;
    return (
<<<<<<< HEAD
      <React.Fragment>
        {this.props.isAuthenticated && (
          <Menu fluid={true} vertical>
            <Menu.Item>
              <SearchBar
                results={users}
                loading={this.props.isLoading}
                value={this.props.value}
                {...this.props}
              />
            </Menu.Item>

            <Menu.Item>
              Home
              <Menu.Menu>
                <Menu.Item
                  name="Logout"
                  active={activeItem === "logout"}
                  onClick={this.handleLogout}
                >
                  Search
                </Menu.Item>
                <Menu.Item
                  name="add"
                  active={activeItem === "add"}
                  onClick={this.handleItemClick}
                >
                  Add
                </Menu.Item>
                <Menu.Item
                  name="about"
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
              active={activeItem === "messages"}
              onClick={this.handleItemClick}
            >
              <NavLink to="/messagefeed">Messages </NavLink>
            </Menu.Item>

            <Dropdown item text="More">
              <Dropdown.Menu>
                <Dropdown.Item
                    icon="edit"
                    text="Edit Profile"
                />
                <UpdateUser/>
                <Dropdown.Item icon="settings" text="Account Settings" />
                <Dropdown.Item
                  icon="key"
                  text="logout"
                  onClick={this.handleLogout}
                />
              </Dropdown.Menu>
            </Dropdown>
          </Menu>
=======
      <div id="menu">
        <h1>ThoughtBlog</h1>
        {this.props.isAuthenticated && (
          <div id="menu-links">
            <SearchBar />
            <Link to="/NewsFeed">Home</Link>
            <Link exact to="/profiles/:username">Profile</Link>
            <Link to="/" onClick={this.handleLogout}>
              Logout
            </Link>
          </div>
>>>>>>> 84a54c11d1088ae159168e8ea6e651d202233127
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
