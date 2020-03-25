import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteMessage } from "../../redux";
import { Button, Icon } from "semantic-ui-react";
import { userIsNotAuthenticated } from "../HOCs"

class DeleteMessage extends Component{
  state = {
  };

  handleDelete = e => {
    deleteMessage(this.props.username)
  };


  render() {
    return (
      <div>
        <Modal
          floated='right'
          trigger={<Button fluid icon="user delete" color='red' onClick={this.handleOpen}>Delete User</Button>}
          open={this.state.modalOpen}
          onClose={this.handleClose}
          centered={true}>
        >
          <Header>Are you sure you want to delete your account?</Header>
          <Button
            basic
            color='red'
            onClick={this.handleClose}
          >
            <Icon name='ban'/>
          Cancel</Button>
          <Button
            icon="checkmark"
            color='red'
            onClick={this.handleDelete}
          >
            <Icon name="checkmark"/>
          Confirm</Button>
        </Modal>
      </div>
    )
  }
}

export default connect(
  (state) => ({
    result: state.users.deleteMessage.result,
    loading: state.users.deleteMessage.loading,
    error: state.users.deleteMessage.error,
    username: state.auth.login.result.username
  }),
  { deleteMessage }
)(DeleteMessage)
