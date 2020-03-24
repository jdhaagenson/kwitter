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
import Avatar from "./Avatar";
import { connect } from "react-redux";
import { updateUser, getUser } from "../../redux";
import UpdateUser from "./updateUser";

const defaultImages = [
  "rachel.png",
  "ade.jpg",
  "chris.jpg",
  "christian.jpg",
  "daniel.jpg",
  "elliot.jpg",
  "elyse.png",
  "helen.jpg",
  "jenny.jpg",
  "joe.jpg",
  "justen.jpg",
  "kristy.png",
  "laura.jpg",
  "matt.jpg",
  "matthew.png",
  "molly.png",
  "nan.jpg",
  "nom.jpg",
  "patrick.png",
  "steve.jpg",
  "stevie.jpg",
  "tom.jpg",
  "veronika.jpg",
  "zoe.jpg"
];

class UserInfo extends Component {
  state = {
    displayName: "",
    password: "",
    about: "Update profile to add something about yourself.",
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
            header={this.props.displayName}
            description={user.about}
          >
            <Image src={this.state.image} />
            <Header>{this.props.displayName}</Header>
            <Card.Meta>{"@" + this.props.username}</Card.Meta>
            <Card.Meta>
              <span className="date" icon="calendar alternate outline">
                <Icon name="calendar alternate outline" />
                Joined in 2020
              </span>
            </Card.Meta>
            <Card.Description>{user.about}</Card.Description>
          </Card>
          <Avatar />
          <UpdateUser />
          <Button  style={{margin: 10}} className="get-messages-button">
            <Icon name="comment alternate outline" />
            My Kweets
          </Button>
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <Card
            className="user-info-card"
            header={this.props.displayName}
            description={user.about}
          >
            <Image src={this.state.image} />
            <Header>{this.props.updateResult.user.displayName}</Header>
            <Card.Meta>{"@" + this.props.username}</Card.Meta>
            <Card.Meta>
              <span className="date" icon="calendar alternate outline">
                <Icon name="calendar alternate outline" />
                Joined in 2020
              </span>
            </Card.Meta>
            <Card.Description>
              {" "}
              {this.props.updateResult.user.about ||
                "Tell us something about yourself"}
            </Card.Description>
          </Card>
          <Avatar />
          <UpdateUser />
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
