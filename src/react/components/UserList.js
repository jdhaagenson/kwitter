import React, { Component } from "react";
import { connect } from "react-redux";
import { getPhoto, searchUser } from "../../redux";
import { Card, Divider, Header, Image } from "semantic-ui-react";
import defaultPhoto from "./images/default_avatar.png";
import { NavLink } from 'react-router-dom';
import { domain } from "../../redux/helpers";

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
                  key={each.id}
                  src={each.pictureLocation ? domain + each.pictureLocation : defaultImages}
                  size="mini"
                  circular
                />
                <span><NavLink to={`/profiles/${each.username}`}>{each.username}</NavLink></span>
                <Divider/>
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
  {searchUser, getPhoto}
)(UserList);
