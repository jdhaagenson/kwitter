import React from "react";
import { NavLink } from "react-router-dom";
import "./Menu.css";
import { connect } from "react-redux";
import { logout } from "../../redux";
import { Dropdown, Icon, Menu } from "semantic-ui-react";
import SearchBar from "./SearchBar";
import UpdateUser from "./UpdateUser";
import users from "../users.json";
import DeleteUser from "./DeleteUser";

class MainMenu extends React.Component {
  state = { active: "" };

  handleLogout = () => {
    // event.preventDefault();
    this.props.logout();
  };

  handleOpen = () => this.setState({ active: true });
  handleClose = () => this.setState({ active: false });

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

            <Menu.Item style={{ color: "white" }}>Home</Menu.Item>

            <NavLink to="/messagefeed">
              <Menu.Item
                name="messages"
                className="menu-link"
                style={{ color: "white" }}
                active={activeItem === "messages"}
                onClick={this.handleItemClick}
              ></Menu.Item>{" "}
            </NavLink>

            <Dropdown item text="More">
              <Dropdown.Menu>
                <UpdateUser />

                <Dropdown.Item
                  icon="key"
                  text="logout"
                  onClick={this.handleLogout}
                />
                <DeleteUser />
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
