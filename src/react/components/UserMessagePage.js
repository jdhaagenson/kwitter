import React, { Component } from "react";
import { connect } from "react-redux";
import { myMessages, likeMessage } from "../../redux";
import { Card, Form, Button, Icon, Feed } from "semantic-ui-react";
import moment from "moment";
import "./UserMessagePage.css";
import UserList from "./UserList";
import UserMenu from "./UserMenu"

class UserMessagePage extends Component {
  componentDidMount() {
    this.props.myMessages();
  }

  handleLike = (e, id) => {
    console.log(id);
    this.props.likeMessage(id);
  };
  render() {

 
  
    
    if (this.props.result === null) {
    
      return <div>You have no Messages</div>;
    }
    return (
    <React.Fragment>
      <div id= "user-menu">
      <UserMenu/>
      </div>



      <div id="user-message-page">

     
      
        <Card style={{ width: "50%" }} id="user-messages-card">
          <Card.Content>
            {this.props.result.map(each => (
              <React.Fragment key={each.id}>
                <Feed>
                  <Feed.Event>
                    <Feed.Label image="https://react.semantic-ui.com/images/avatar/large/rachel.png" />
                    <Feed.Content>
                      <Feed.Summary>
                        You posted
                        <Feed.Date>
                          <Icon name="clock outline" />
                          {moment(each.createdAt).fromNow()}
                        </Feed.Date>
                      </Feed.Summary>
                      <Feed.Extra text>{each.text}</Feed.Extra>
                      <Feed.Meta>
                        <Feed.Like>
                          {/* <Likes /> */}
                          <Icon
                            name="like"
                            onClick={e => this.props.likeMessage(e, each.id)}
                          />
                          {each.likes.length}
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
        <div id="user-list">
        <UserList />
          
      </div>
      </div>
     </React.Fragment>
    );
  }
}

export default connect(
  state => ({
    result: state.messages.myMessages.result,
    loading: state.messages.myMessages.loading,
    error: state.messages.myMessages.error
  }),
  { myMessages, likeMessage }
)(UserMessagePage);
