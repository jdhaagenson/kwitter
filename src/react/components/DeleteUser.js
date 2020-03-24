import React from "react";
import { connect } from "react-redux";
import {deleteMessage, getMessage} from "../../redux"

class DeleteMessageButton extends React.Component {
  handleDeleteMessage = event => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this message?"
    );
    if (confirmed) {
      this.props.deleteMessage(this.props.messageId);
    }
  };

  render() {
    return (
      this.props.username === this.props.loggedInUsername && (
        <button onClick={this.handleDeleteMessage}>Delete</button>
      )
    );
  }
}

/*
mapStateToProps
  loading
  error
  result

mapDispatchToProps
  deleteMessage

  loggedInUsername
*/

const mapStateToProps = state => {
  return {
    loggedInUsername: state.auth.login.result.username
  };
};

export default connect(mapStateToProps,
  {getMessage, deleteMessage})(DeleteMessageButton)

