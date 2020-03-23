import React, { Component } from "react";
import { connect } from "react-redux";
import { getUser, getMessage, getPhoto, deleteMessage, likeMessage } from "../../redux";
import { NavLink } from 'react-router-dom'
import { Feed, Divider, Container, Header, Card, Icon, Button, Modal } from "semantic-ui-react";
// import Likes from "./Likes";

import moment from "moment";
import "./MessageFeed.css";

const defaultImages = [
  "rachel.png",
  "ade.jpg",
  "chris.jpg",
  "christian.jpg",
  "daniel.jpg",
  "elliot.jpg",
  "elyse.png",
  "helen.jpg",
  "jenny.jpg",
  "joe.jpg",
  "justen.jpg",
  "kristy.png",
  "laura.jpg",
  "matt.jpg",
  "matthew.png",
  "molly.png",
  "nan.jpg",
  "nom.jpg",
  "patrick.png",
  "steve.jpg",
  "stevie.jpg",
  "tom.jpg",
  "veronika.jpg",
  "zoe.jpg"
];
const imageURL = "https://react.semantic-ui.com/images/avatar/large/";
const randomAvatar = () => {
  let min = 0;
  let max = 24;
  let r = Math.floor(Math.random()*(max-min+1))+min
  return imageURL+defaultImages[r]
}

class Messages extends Component {
  state = {
    modalOpen:false,
    confirmed:false,
    id:"",
    username:""
  }

  componentDidMount() {
    this.props.getMessage();
  }

  handleDelete = (e) => {
    console.log(e)
    this.props.deleteMessage(this.props.messageId)
    this.handleClose()
  }
  handleConfirmation = (e) => {
    this.setState({confirmed:true, modalOpen:true})
    this.handleCaptureId(this.e.children.id);
    this.handleDelete(this.propsid)
  }
  handleClose = () => {
    this.setState({confirmed:false, modalOpen:false})
  }
  handleCaptureId = (key) => {
    this.setState({id:key})
    return key
  }

  handleLike = (e) => {
    this.props.likeMessage(this.state.id);
  };
  componentDidUpdate(prevProps) {
    if (
      this.props.updateResult &&
      this.props.updateResult !== prevProps.updateResult
    ) {
      this.props.getUser(this.props.username);
    }
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
              <Modal
              trigger={<Button floated='right' id={each.id} size='mini' onClick={this.handleConfirmation}><Icon name="delete"/></Button>}
              on={this.state.modalOpen}
              open={this.state.modalOpen}
              id={each.id}
              >
                <Header size='huge' textAlign='center'><Icon size="massive" name="exclamation triangle"/></Header>
                <Divider hidden/>
                <Header size="medium" textAlign='center'>Are you sure you want to delete this message from the feed?</Header>
                <Divider hidden/>
                <Container textAlign="center" >It cannot be undone.</Container>
                <Divider hidden/>
                <Button.Group widths={5}>
                  <Button basic onClick={this.handleClose}><Icon name="ban"/>Cancel</Button>
                  <Button  color="red" id={each.id} onClick={this.handleDelete}><Icon name="trash alternate"/>Delete</Button>
                </Button.Group>

              </Modal>
              <Feed>
                <Feed.Event>
                  <Feed.Label image={ randomAvatar()}  />
                  <Feed.Content>

                    <Feed.Summary>
                      <NavLink to={`/profiles/${each.username}`} >
                      {each.username }
                      </NavLink> posted on their page
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
                          id={each.id}
                          onClick={ this.handleLike }
                        />
                        {each.likes.length}
                      </Feed.Like>
                    </Feed.Meta>
                  </Feed.Content>
                </Feed.Event>
              </Feed>
              <Divider/>
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
    deleteResult: state.messages.deleteMessage.result,
    deleteLoading: state.messages.deleteMessage.loading,
    deleteError: state.messages.deleteMessage.error,
    like: state.likes.likeMessage.result,
    unlike: state.likes.unlikeMessage.result,


  }),
  { getUser, getMessage, getPhoto, deleteMessage, likeMessage }
)(Messages);
