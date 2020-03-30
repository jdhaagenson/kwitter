import React, { Component } from "react";
import { connect } from "react-redux";
import { getMessage, getPhoto, getUser, likeMessage, unlikeMessage } from "../../redux";
import defaultPhoto from "./images/default_avatar.png";
import { Card, Dimmer, Feed, Icon, Loader } from "semantic-ui-react";
import moment from "moment";
import { NavLink } from 'react-router-dom';

import "./MessageFeed.css";

class Messages extends Component {
  componentDidMount() {
    this.props.getMessage();
  };

  componentDidUpdate(prevProps) {
    if (this.props.result !== prevProps) {
    }
  };
  handleLike = (e, id) => {
    this.props.likeMessage(id);
  };
  handleUnLike = (e, id) => {
    e.preventDefault();
    let newMessage = [];
    if (this.props.result) {
      newMessage = this.props.result.filter(message => {
        return message.id === id;
      });
      let myLike = newMessage[0].likes.filter(like => {
        return like.username === this.props.username;
      });
      this.props.unlikeMessage(myLike[0].id);
      console.log(myLike[0].id);
    }
    console.log(newMessage);
  };

  handleClick = e => {
    console.log(e.target.value);
    console.dir(e.target);
    e.preventDefault();
    this.props.getUser(e.target)
  };

  render() {
    if (this.props.result === null) {
      return (
        <div>
          <Card style={{width: "100%"}}>
            <Dimmer active inverted>
              <Loader inverted>Loading Feed</Loader>
            </Dimmer>
          </Card>{" "}
        </div>
      );
    }
    return (
      <Card style={{ width: "100%" }}>
        <Card.Content style={{ height: "750px", overflow: "scroll" }}>
          {this.props.result.map(each => (
            <React.Fragment key={each.id}>
              <Feed>
                <Feed.Event>
                  <Feed.Label image={defaultPhoto || this.props.getPhoto(each.username)}/>
                  <Feed.Content>
                    <Feed.Summary>
                      <NavLink to={`/profiles/${each.username}`} onClick={this.handleClick}>
                        {each.username}
                      </NavLink> posted on their page
                      <Feed.Date>
                        <Icon name="clock outline"/>
                        {moment(each.createdAt).fromNow()}
                      </Feed.Date>
                    </Feed.Summary>
                    <Feed.Extra text>{each.text}</Feed.Extra>
                    <Feed.Meta>
                      <Feed.Like>
                        {/* <Likes /> */}
                        <Icon
                          name="thumbs up outline"
                          onClick={e => this.props.likeMessage(e, each.id)}
                        />
                        {each.likes.length}
                      </Feed.Like>
                      <Feed.Like>
                        <Icon
                          name="thumbs down outline"
                          onClick={e => {
                            this.handleUnLike(e, each.id);
                          }}
                        />
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
    error: state.messages.getMessage.error,
    username: state.auth.login.result.username
  }),
  {getMessage, likeMessage, unlikeMessage, getPhoto, getUser}
)(Messages);
