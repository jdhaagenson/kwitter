import React, { Component } from "react";
import { Icon } from "semantic-ui-react";
// import { likeMessage } from "../../redux";
// import { connect } from "react-redux";

class Likes extends Component {
  // handleLike = e => {
  //   this.props.handleLike(e, this.props.messages.id);
  // };

  render() {
    return (
      <React.Fragment>
        <Icon name="like" onClick={this.handleLike} />
      </React.Fragment>
    );
  }
}

export default Likes;

// connect(
//   state => ({
//     result: state.likes.likemessage.result,
//     loading: state.likes.likemessage.loading,
//     error: state.likes.likemessage.error
//   }),
//   { likeMessage }
// )(Likes);
