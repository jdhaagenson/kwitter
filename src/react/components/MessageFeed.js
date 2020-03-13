import React, { Component } from "react";
import { connect } from "react-redux";
import { createMessage } from "../../redux";
import { Feed, Card, Form, Button } from "semantic-ui-react";
import moment from "moment";
import "./MessageFeed.css";

class MessageFeed extends Component {
  state = {
    // token: this.props.token,
    text: ""
  };

  // componentDidMount() {
  //   this.props.getMessage(this.props.users);
  // }

  handleKweet = e => {
    e.preventDefault();
    this.props.createMessage(this.state.text);
    this.setState({ text: "" });
  };

  handleChange = e => {
    e.preventDefault();
    this.setState({ text: e.target.value });
  };

  render() {
    const messages = [
      {
        date: moment().fromNow(),
        image: "https://react.semantic-ui.com/images/avatar/small/rachel.png",

        extraText: "testing message feed xtratext",
        summary: "testing message feed"
      }
    ];

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
            <Feed className="message-feed" events={messages} />
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
