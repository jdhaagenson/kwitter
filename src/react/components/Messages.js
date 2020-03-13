import React, { Component } from "react";
import { connect } from "react-redux";
import { getMessage } from "../../redux";
import { Feed, Card, Icon } from "semantic-ui-react";

import moment from "moment";
import "./MessageFeed.css";

class Messages extends Component {
  componentDidMount() {
    this.props.getMessage();
  }

  render() {
    if (this.props.result === null) {
      return <div>empty</div>;
    }

    const handleMessages = this.props.result;

    // const FeedExampleEventsProp = () => <Feed events={events} />

    return (
      <Card style={{ width: "100%" }}>
        <Card.Content>
          {this.props.result.map(each => (
            <React.Fragment>
              <Feed>
                <Feed.Event>
                  <Feed.Label image="https://react.semantic-ui.com/images/avatar/large/rachel.png" />
                  <Feed.Content>
                    <Feed.Summary>
                      <a>{each.username}</a> posted on his page
                      <Feed.Date>3 days ago</Feed.Date>
                    </Feed.Summary>
                    <Feed.Extra text>{each.text}</Feed.Extra>
                    <Feed.Meta>
                      <Feed.Like>
                        <Icon name="like" />5 Likes
                      </Feed.Like>
                    </Feed.Meta>
                  </Feed.Content>
                </Feed.Event>
              </Feed>
            </React.Fragment>
          ))}

          {/* <Feed className="message-feed" events={handleMessages} /> */}
        </Card.Content>
      </Card>
    );
  }
}

export default connect(
  state => ({
    result: state.messages.getMessage.result,
    loading: state.messages.getMessage.loading,
    error: state.messages.getMessage.error
  }),
  { getMessage }
)(Messages);
