import React, { Component } from "react";
import { connect } from "react-redux";
import { searchUser } from "../../redux";
import { Card, Image, Divider, Header } from "semantic-ui-react";
import defaultPhoto from "./images/default_avatar.png";
import users from "../users.json";

const defaultImages = defaultPhoto;

class UserList extends Component {
  componentDidMount() {
    this.props.searchUser();
  }
  render() {
    if (this.props.result === null) {
      return <div>empty</div>;
    }
    return (
      <div>
        <Header>Users</Header>
        <Card style={{ width: "100%", height: "45em", overflow: "scroll" }}>
          <Card.Content>
            {this.props.result.map(each => (
              <React.Fragment key={each.id}>
                {/* <div style={{height: "50px", overflow: "scroll" }}> */}
                <Image
                  src={each.pictureLocation || defaultImages}
                  size="mini"
                  circular
                />
                <span>{each.username}</span>
                <Divider />
                {/* </div> */}
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
  { searchUser }
)(UserList);
