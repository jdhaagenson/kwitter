import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteUser } from "../../redux";
import { Button, Modal, Icon, Header } from "semantic-ui-react";


class DeleteUser extends Component{
  state = {
    modalOpen: false
  };

  handleDelete = e => {
    deleteUser(this.props.username)
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
          trigger={<Button fluid icon="user delete" color='red' onClick={this.handleOpen}><Icon name="trash alternate"/>Delete User</Button>}
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
    result: state.users.deleteUser.result,
    loading: state.users.deleteUser.loading,
    error: state.users.deleteUser.error,
    username: state.auth.login.result.username
  }),
  { deleteUser }
)(DeleteUser)
