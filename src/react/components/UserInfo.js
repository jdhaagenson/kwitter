import React, { Component } from "react";
import {
  Card,
  Image,
  // Header,
  Icon,
  Divider
} from "semantic-ui-react";
import {NavLink} from 'react-router-dom'
import Avatar from "./Avatar";
import { connect } from "react-redux";
import { updateUser, getUser, setPhoto } from "../../redux";


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
const imageURL = "https://react.semantic-ui.com/images/avatar/large/";
const randomAvatar = () => {
  let min = 0;
  let max = 23;
  let r = Math.floor(Math.random() * (max - min + 1)) + min;
  return imageURL + defaultImages[r];
};
class UserInfo extends Component {
  state = {
    displayName: "",
    password: "",
    about: "Update profile to add something about yourself.",
    image: randomAvatar()
  };

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

  componentDidUpdate(prevProps) {
    if (
      this.props.updateResult &&
      this.props.updateResult !== prevProps.updateResult
    ) {
      this.props.getUser(this.props.username);
    }
  }
  render() {
    const { error } = this.props;
    const user = this.state;

    if (!this.props.updateResult && !this.props.createResult) {
      return (
        <React.Fragment>
          <Card
            className="user-info-card"
            // header={this.props.displayName}
            // description={user.about}
          >
            <Image src={this.state.image} />
            <Card.Header size="large">{this.props.displayName}</Card.Header>
            <Card.Meta>
              <span className="date" icon="calendar alternate outline">
                <Icon name="calendar alternate outline" />
                Joined in 2020
              </span>
            </Card.Meta>
            <Divider/>
            <Card.Meta>{"@" + this.props.username}</Card.Meta>
            <Divider/>
            <Card.Description>{user.about}</Card.Description>
          </Card>

          <Avatar/>



        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <Card
            className="user-info-card"
            header={
              this.props.createResult.user.displayName || this.props.displayName
            }
            description={user.about}
          >
            <NavLink to={`/profiles/${this.props.username}`} >
            <Image src={this.state.image} />
            <Card.Header size="large">{this.props.createResult.user.displayName}</Card.Header></NavLink>
            <Card.Meta>{"@" + this.props.username}</Card.Meta>
            <Card.Meta>
              <span className="date" icon="calendar alternate outline">
                <Icon name="calendar alternate outline" />
                Joined in 2020
              </span>
            </Card.Meta>
            <Card.Description>
              {" "}
              {this.props.createResult.user.about ||
                "Tell us something about yourself"}
            </Card.Description>
          </Card>


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
    createLoading:state.users.getUser.loading,
    createError:state.users.getUser.error,

    setPhoto_result:state.users.setPhoto.result,
    setPhoto_loading:state.users.setPhoto.loading,
    setPhoto_error:state.users.setPhoto.error
  }),
  { updateUser, getUser, setPhoto }
)(UserInfo);
