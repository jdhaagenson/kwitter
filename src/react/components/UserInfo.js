import React, { Component } from "react";
import { Card, Modal, Button, Image, Header, Form } from "semantic-ui-react";
import { connect } from "react-redux";
import { updateUser, getUser } from "../../redux";

class UserInfo extends Component {
  state = {
    displayName: "",
    password: "",
    about: ""
  };

  handleUserUpdate = e => {
    e.preventDefault();
    this.props.updateUser(this.state);
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  ss;
  componentDidMount() {
    this.props.getUser(this.props.username);
  }
  render() {
    const { error } = this.props;
    const user = this.state;
    console.log(user);
    console.log(this.props.createResult);
    if (!this.props.updateResult) {
      return (
        <React.Fragment>
          <Card
            image="https://react.semantic-ui.com/images/avatar/large/rachel.png"
            header={this.props.username}
            meta="@username"
            description={user.about}
            extra=""
          />

          <Modal trigger={<Button>Update Profile</Button>}>
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
                    ></input>
                  </Form.Field>

                  <Form.Field>
                    <label htmlFor="about">About:</label>
                    <input
                      type="text"
                      name="about"
                      autoFocus
                      required
                      onChange={this.handleChange}
                    ></input>
                  </Form.Field>

                  <Button type="submit"> Update</Button>
                </Form>
              </Modal.Description>
            </Modal.Content>
          </Modal>

          {error && <p style={{ color: "red" }}>{error.message}</p>}
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <Card
            image="https://react.semantic-ui.com/images/avatar/large/rachel.png"
            header={this.props.updateResult.user.displayName}
            meta={this.props.updateResult.user.username}
            description={this.props.updateResult.user.about}
            extra=""
          />

          <Modal trigger={<Button>Update Profile</Button>}>
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
                    ></input>
                  </Form.Field>

                  <Form.Field>
                    <label htmlFor="about">About:</label>
                    <input
                      type="text"
                      name="about"
                      autoFocus
                      required
                      onChange={this.handleChange}
                    ></input>
                  </Form.Field>

                  <Button type="submit"> Update</Button>
                </Form>
              </Modal.Description>
            </Modal.Content>
          </Modal>

          {error && <p style={{ color: "red" }}>{error.message}</p>}
        </React.Fragment>
      );
    }
  }
}

export default connect(
  (state, ownProps) => ({
    updateResult: state.users.updateUser.result,
    updateLoading: state.users.updateUser.loading,
    updateError: state.users.updateUser.error,
    createResult: state.users.getUser.result,
    username: ownProps.username
  }),
  { updateUser, getUser }
)(UserInfo);
