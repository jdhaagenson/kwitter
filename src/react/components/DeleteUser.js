import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Modal, Icon, Header, Button } from "semantic-ui-react";
import { deleteUser, logout } from "../../redux";

class DeleteUser extends Component {
  state = { modalOpen: false };

  handleOpen = () => this.setState({ modalOpen: true });

  handleClose = () => this.setState({ modalOpen: false });

  handleDeleteUser = () => {
    this.props.deleteUser();
    this.props.logout();
    this.props.history.push("/registration");
  };

  render() {
    return (
      <Modal
        trigger={
          <Button icon="trash alternate" fluid onClick={this.handleOpen}>
            Delete Profile
          </Button>
        }
        open={this.state.modalOpen}
        onClose={this.handleClose}
        basic
        size="small"
      >
        <Header icon="trash" content="Delete Profile" />
        <Modal.Content>
          <h2>Are you sure you want to delete your proile?</h2>
          <p>This action can't be undone, you will lose all of your darts.</p>
        </Modal.Content>
        <Modal.Actions>
          <Button color="green" onClick={this.handleClose} inverted>
            <Icon name="checkmark" /> Cancel
          </Button>
        </Modal.Actions>
        <Modal.Actions>
          <Button color="red" onClick={this.handleDeleteUser} inverted>
            <Icon name="trash alternative" /> Delete my profile
          </Button>
        </Modal.Actions>
      </Modal>
    );
  }
}

export default connect(
  state => ({
    result: state.auth.logout.result,
    loading: state.auth.logout.loading,
    error: state.auth.logout.error
  }),
  { deleteUser, logout }
)(withRouter(DeleteUser));
