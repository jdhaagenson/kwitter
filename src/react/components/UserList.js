import React, { Component } from "react";
import { connect } from "react-redux";
import { searchUser } from "../../redux";
import { Card, Image } from "semantic-ui-react";

class UserList extends Component {
  componentDidMount() {
    this.props.searchUser();
  }


  render() {
    if (this.props.result === null) {
      return <div>empty</div>;
    }

    return (
      <>
      <Card style={{ width: "100%" }}>
        <Card.Content>
          {this.props.result.map(each => (
            <React.Fragment key={each.id}>
                <Image Avatar src={each.pictureLocation}/>
                <p>{each.username}</p>
            </React.Fragment>
          ))}

          {/* <Feed className="message-feed" events={handleMessages} /> */}
        </Card.Content>
      </Card>
      </>
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
