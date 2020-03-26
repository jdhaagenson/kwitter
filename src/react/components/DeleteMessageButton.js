import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteMessage, getMessage } from "../../redux";
import { Button, Icon, Menu, Message } from 'semantic-ui-react';


class DeleteMessageButton extends Component {
  state = {messageId: ""};
  handleClick = e => {
    e.preventDefault();
    this.setState({message: "handled onClick" + e.target})
  };
  handleDeleteMessage = e => {
    e.preventDefault();
    this.props.deleteMessage(e.messageId)
  };

  render() {
    const {message} = this.state;
    return (
      <Menu.Menu>
        <Menu.Item link>By Prop</Menu.Item>
        <Menu.Item href={"/messagefeed"}>Message Feed</Menu.Item>

        <Icon
          name="x"
          corner="top right"
          color="grey"
          as={Button}
          onClick={this.handleDeleteMessage()}
        />
        {message && <Message content={message}/>}
      </Menu.Menu>

    )
  }
}

export default connect(
  (state) => ({
    result: state.messages.deleteMessage.result,
    loading: state.messages.deleteMessage.loading,
    error: state.messages.deleteMessage.error,
    messageId: state.messages.getMessage.result
  }),
  {deleteMessage, getMessage}
)(DeleteMessageButton)