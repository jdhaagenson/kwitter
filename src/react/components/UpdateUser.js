import React, { Component } from "react";
import { Button, Form, Header, Icon, Image, Modal } from "semantic-ui-react";
import { connect } from "react-redux";
import { getUser, updateUser } from "../../redux";
import defaultImage from "./images/default_avatar.png";

class UpdateUser extends Component {
  state = {
    password: "",
    displayName: "",
    about: "",
    open: false
  };

  handleChange = e => {
    // e.preventDefault()
    this.setState({[e.target.name]: e.target.value});
  };
  handleOpen = e => {
    e.preventDefault();
    this.setState({open: true})
  };

  handleUserUpdate = e => {
    e.preventDefault();
    this.props.updateUser({
      about: this.state.about,
      password: this.state.password,
      displayName: this.state.displayName
    });
    this.setState({open: false})
  };

  render() {
    const {error} = this.props;
    // const user = this.state;

    return (
      <React.Fragment>
        <div>
          <Modal
            open={this.state.open}
            trigger={
              <Button onClick={this.handleOpen} fluid>
                <Icon name="edit outline"/>
                Update Profile
              </Button>
            }
          >
            <Modal.Header>Update Profile</Modal.Header>
            <Modal.Content image>
              <Image wrapped size="medium" src={defaultImage} />
              <Modal.Description>
                <Header>User info</Header>
                <Form onSubmit={this.handleUserUpdate}>
                  <Form.Field>
                    <label htmlFor="displayName">Display Name:</label>
                    <input
                      type="text"
                      name="displayName"
                      autoFocus
                      required
                      onChange={this.handleChange}
                      placeholder="Choose a new display name"
                    />
                  </Form.Field>

                  <Form.Field>
                    <label htmlFor="password">Password:</label>
                    <input
                      type="password"
                      name="password"
                      autoFocus
                      required
                      onChange={this.handleChange}
                    />
                  </Form.Field>

                  <Form.Field>
                    <label htmlFor="about">About:</label>
                    <input
                      type="text"
                      name="about"
                      autoFocus
                      required
                      onChange={this.handleChange}
                    />
                  </Form.Field>

                  <Button type="submit" onClick={this.handleUserUpdate}>
                    {" "}
                    Update
                  </Button>
                </Form>
              </Modal.Description>
            </Modal.Content>
          </Modal>
        </div>

        {error && <p style={{ color: "red" }}>{error.message}</p>}
      </React.Fragment>
    );
  }
}

export default connect(
  state => ({
    updateResult: state.users.updateUser.result,
    updateLoading: state.users.updateUser.loading,
    updateError: state.users.updateUser.error,
    createResult: state.users.getUser.result
  }),
  { updateUser, getUser }
)(UpdateUser);
