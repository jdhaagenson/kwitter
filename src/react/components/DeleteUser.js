import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteUser } from "../../redux";
import { Button, Modal, Icon, Header } from "semantic-ui-react";
import {getState} from 'redux'

class DeleteUser extends Component{
  state = {
    username: getState().auth.login.result.token,
    modalOpen: false
  };

  handleDelete = e => {
    deleteUser(this.state.username)
  };

  handleOpen = () => {
    this.setState({modalOpen:true})
  }

  handleClose = () => {
    this.setState({modalOpen:false})
  }

  render() {
    return (
      <div>
        <Modal
          floated='right'
          trigger={<Button icon="user delete" color='red' onClick={this.handleOpen}>Delete User</Button>}
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
    result:getState().users.deleteUser.result,
    loading: getState().users.deleteUser.loading,
    error: getState().users.deleteUser.error
  }),
  { deleteUser }
)(DeleteUser)
