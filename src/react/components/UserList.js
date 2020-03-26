import React, { Component } from "react";
import { connect } from "react-redux";
import { getPhoto, searchUser } from "../../redux";
import { Card, Divider, Header, Icon, Image } from "semantic-ui-react";
import { NavLink } from 'react-router-dom'
import defaultAvatar from "./images/default_avatar.png"

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

class UserList extends Component {
  componentDidMount() {
    this.props.searchUser();
  }

  render() {
    if (this.props.result === null) {
      return <div>empty</div>;
    }

    return (
      <div >
        <Header><Icon name={"users"}/>Users</Header>
        <Card style={{width: "100%"}}>
          <Card.Content>
            {this.props.result.map(each => (
              <React.Fragment key={each.id}>
                <Image src={each.pictureLocation || defaultAvatar} avatar/>
                <span><NavLink to={`/profiles/${each.username}`}>{each.username}</NavLink></span>
                <Divider/>
              </React.Fragment>
            ))}

            {/* <Feed className="message-feed" events={handleMessages} /> */}
          </Card.Content>
        </Card>
      </div>
    );
  }
}

export default connect(
  state => ({
    result: state.users.searchUser.result,
    loading: state.users.searchUser.loading,
    error: state.users.searchUser.error
  }),
  {searchUser, getPhoto}
)(UserList);
