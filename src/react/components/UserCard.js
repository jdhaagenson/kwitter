import React, { Component } from "react";
import {
  Card,
  Modal,
  Button,
  Image,
  Header,
  Form,
  Icon
} from "semantic-ui-react";
import { connect } from "react-redux";
import { updateUser, getUser } from "../../redux";

class UserInfo extends Component {
  state = {
    displayName: "",
    password: "",
    about: "Update profile to add something about yourself."
  };

  handleModal = () => {};

  handleUserUpdate = e => {
    e.preventDefault();
    this.props.updateUser(this.state);
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleGoToMessages = e => {};

  componentDidMount() {
    this.props.getUser(this.props.username);
  }
  render() {
    const { error } = this.props;
    const user = this.state;

    if (!this.props.updateResult) {
      return (
        <React.Fragment>
          <Card
            className="user-info-card"
            image="https://react.semantic-ui.com/images/avatar/large/rachel.png"
            header={this.props.displayName}
            meta={this.props.username}
            description={user.about}
            extra=""
          />
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <Card>
            <Image
              src="https://react.semantic-ui.com/images/avatar/large/rachel.png"
              wrapped
              ui={false}
            />
            <Card.Content>
              <Card.Header>{this.props.username}</Card.Header>
              <Card.Meta>
                <span className="date" icon="calendar alternate outline">
                  <Icon name="calendar alternate outline" />
                  Joined in 2020
                </span>
              </Card.Meta>
              <Card.Description>
                {this.props.updateResult.user.about ||
                  "Tell us something about yourself"}
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <a>
                <Icon name="user" />
                22 Friends
              </a>
            </Card.Content>
          </Card>

          <Modal
            trigger={
              <Button>
                <Icon name="edit outline" />
                Update Profile
              </Button>
            }
            id="update-user-modal"
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
                  <Button type="submit"> Upload Picture</Button>
                  <Button type="submit"> Update</Button>
                </Form>
              </Modal.Description>
            </Modal.Content>
          </Modal>
          <Button className="get-messages-button">
            <Icon name="comment alternate outline" />
            My Kweets
          </Button>

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
