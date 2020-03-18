import React, { Component } from "react";
import { connect } from "react-redux";
import { getMessage } from "../../redux";
import { NavLink } from 'react-router-dom'
import { Feed, Card, Icon } from "semantic-ui-react";
import Likes from "./Likes";

import moment from "moment";
import "./MessageFeed.css";

const defaultImages = [
  'rachel.png', 'ade.jpg', 'chris.jpg', 'christian.jpg', 'daniel.jpg', 'elliot.jpg', 'elyse.png',
  'helen.jpg', 'jenny.jpg', 'joe.jpg', 'justen.jpg', 'kristy.png', 'laura.jpg', 'matt.jpg', 'matthew.png',
  'molly.png', 'nan.jpg', 'nom.jpg', 'patrick.png', 'steve.jpg', 'stevie.jpg', 'tom.jpg', 'veronika.jpg', 'zoe.jpg'
]
const imageURL = 'https://react.semantic-ui.com/images/avatar/large/'
const randomAvatar = () => {
  let min = 0;
  let max = 23;
  let r = Math.floor(Math.random()*(max-min+1))+min
  return imageURL+defaultImages[r]
}

class Messages extends Component {
  componentDidMount() {
    this.props.getMessage();
  }

  render() {
    if (this.props.result === null) {
      return <div>empty</div>;
    }

    return (
      <Card style={{ width: "100%" }}>
        <Card.Content>
          {this.props.result.map(each => (
            <React.Fragment key={each.id}>
              <Feed>
                <Feed.Event>
                  <Feed.Label image={randomAvatar()} />
                  <Feed.Content>
                    <Feed.Summary>
                      {each.username} posted on their page
                      <Feed.Date>
                        <Icon name="clock outline" />
                        {moment(each.createdAt).fromNow()}
                      </Feed.Date>
                    </Feed.Summary>
                    <Feed.Extra text>{each.text}</Feed.Extra>
                    <Feed.Meta>
                      <Feed.Like>
                        <Likes />
                        {/* <Icon name="like" />5 Likes */}
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
