import React, { Component } from "react";
import { Modal, Button, Image, Header, Form, Icon } from "semantic-ui-react";
import { connect } from "react-redux";
import { updateUser, getUser } from "../../redux";

import UploadPhoto from "./UploadPhoto";

class UpdateUserInfo extends Component {
  state = {
    password: "",
    displayName: "",
    about:"",
    modalOpen: false,
    image: "",
  };

  handleChange = e => {
    e.preventDefault()
    this.setState({ [e.target.name]: e.target.value });
  };

  handleUserUpdate = e => {
    e.preventDefault();
    this.props.updateUser(this.state);
  };

  handleOpen = e => {
    this.setState({modalOpen:true})
  }
  handleClose = e => {
    this.setState({modalOpen:false})
  }

  render() {
    const { error } = this.props;
    // const user = this.state;

      return (
        <React.Fragment>
          <div>
          <Modal
          trigger={<Button fluid>Update Profile</Button>}
          open={this.state.modalOpen}
          onClose={this.handleClose}
          >
            <Modal.Header>Update Profile</Modal.Header>
            <Modal.Content image>
              <Image
                wrapped
                size="medium"
                src="https://react.semantic-ui.com/images/avatar/large/rachel.png"
              />
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
)(UpdateUserInfo);
