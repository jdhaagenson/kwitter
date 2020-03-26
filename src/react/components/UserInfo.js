import React, { Component } from "react";
import { Button, Card, Divider, Header, Icon, Image } from "semantic-ui-react";
import UploadPhoto from "./UploadPhoto";
import { connect } from "react-redux";
import { getUser, updateUser } from "../../redux";
import UpdateInfo from "./UpdateInfo";
import { NavLink } from "react-router-dom";
import default_avatar from "./images/default_avatar.png"

// const defaultImages = [
//   "rachel.png",
//   "ade.jpg",
//   "chris.jpg",
//   "christian.jpg",
//   "daniel.jpg",
//   "elliot.jpg",
//   "elyse.png",
//   "helen.jpg",
//   "jenny.jpg",
//   "joe.jpg",
//   "justen.jpg",
//   "kristy.png",
//   "laura.jpg",
//   "matt.jpg",
//   "matthew.png",
//   "molly.png",
//   "nan.jpg",
//   "nom.jpg",
//   "patrick.png",
//   "steve.jpg",
//   "stevie.jpg",
//   "tom.jpg",
//   "veronika.jpg",
//   "zoe.jpg"
// ];
// const imageURL = "https://react.semantic-ui.com/images/avatar/large/";
// const randomAvatar = () => {
//   let min = 0;
//   let max = 23;
//   let r = Math.floor(Math.random() * (max - min + 1)) + min;
//   return imageURL + defaultImages[r];
// };

class UserInfo extends Component {
  state = {
    displayName: "",
    password: "",
    about: "Update profile to add something about yourself.",
    image: default_avatar,
    open: false
  };

  handleUserUpdate = e => {
    e.preventDefault();
    this.props.updateUser({
      password: this.state.password,
      about: this.state.about,
      displayName: this.state.displayName
    });
    this.setState({open: false});
  };

  handleChange = e => {
    e.preventDefault();
    this.setState({[e.target.name]: e.target.value});
  };

  componentDidMount() {
    this.props.getUser(this.props.username);
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      this.props.updateResult &&
      this.props.updateResult !== prevProps.updateResult
    ) {
      this.props.getUser(this.props.username);
    }
  }

  render() {
    const {error} = this.props;
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
            <Header>{this.props.displayName}</Header>
            <Card.Meta>{"@" + this.props.username}</Card.Meta>
            <Divider hidden/>
            <Card.Meta>
              <span className="date">
                <Icon name="calendar alternate outline"/>
                Joined in 2020
              </span>
            </Card.Meta>
            <Divider/>
            <Card.Description>{user.about}</Card.Description>
          </Card>
          <Divider/>
          <UploadPhoto/>
          <UpdateInfo username={this.props.username} displayName={this.props.displayName}/>
          <Button className="get-messages-button">
            <Icon name="comment alternate outline"/>
            My Darts
          </Button>
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
            <Image src={this.state.image}/>
            <Header><NavLink
              to={`/profiles/:${user.username}`}>{this.props.createResult.user.displayName}</NavLink></Header>
            <Divider hidden/>
            <Card.Meta>{"@" + this.props.username}</Card.Meta>
            <Divider/>
            <Card.Meta>
              <span className="date">
                <Icon name="calendar alternate outline"/>
                Joined in 2020
              </span>
            </Card.Meta>
            <Divider hidden/>
            <Card.Description>
              {" "}
              {this.props.createResult.user.about ||
              "Tell us something about yourself"}
            </Card.Description>
          </Card>
          <Divider hidden/>
          <UploadPhoto username={this.props.username}/>
          <Divider hidden/>
          <UpdateInfo/>

          {error && <p style={{color: "red"}}>{error.message}</p>}
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
