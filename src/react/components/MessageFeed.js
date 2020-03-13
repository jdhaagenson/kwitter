import React, { Component } from "react";
import { connect } from "react-redux";
import { createMessage } from "../../redux";
import { Feed, Card, Form, Button } from "semantic-ui-react";
import moment from "moment";
import "./MessageFeed.css";

class MessageFeed extends Component {
  state = {
    text: ""
  };

  handleKweet = e => {
    e.preventDefault();
    this.props.createMessage(this.state.text);
    this.setState({ text: "" });
    this.setState({ value: "" });
  };

  handleChange = e => {
    e.preventDefault();
    this.setState({ text: e.target.value });
  };

  render() {
    return (
      <React.Fragment>
        <Card className="kweet-form-card" style={{ width: "100%" }}>
          <Form className="kweet-form">
            <Form.Field>
              <label htmlFor="text"> </label>

              <input
                type="text"
                name="text"
                placeholder="What's on your mind..."
                autoFocus
                required
                onChange={this.handleChange}
              ></input>
            </Form.Field>
          </Form>
          <Button
            className="kweet-button"
            type="submit"
            onClick={this.handleKweet}
          >
            Kweet
          </Button>
        </Card>

        <Card style={{ width: "100%" }}>
          <Card.Content>
            <Messages />
          </Card.Content>
        </Card>
      </React.Fragment>
    );
  }
}

export default connect(
  state => ({
    result: state.messages.createMessage.result,
    loading: state.messages.createMessage.loading,
    error: state.messages.createMessage.error
  }),
  { createMessage }
)(MessageFeed);
