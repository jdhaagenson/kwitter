import React, { Component } from "react";
import { connect } from "react-redux";
import { searchUser } from "../../redux";
import { Card, Icon, Image, Divider, Header } from "semantic-ui-react";
// import users from '../users.json'


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
  let r = Math.floor(Math.random() * (max - min + 1)) + min;
  return imageURL + defaultImages[r];
};

class UserList extends Component {
  state = {
    searchTerm:"",
    selected:""
  }
  componentDidMount() {
    this.props.searchUser();
  }

  searchUser() {
    this.props.searchUser()
  }
  handleSelect(event) {
    this.setState({selected:event.target.id})
  }



  render() {
    if (this.props.result === null) {
      return <div>empty</div>;
    }

    return (
      <div >
        <Header><Icon name="address book outline"/>Users</Header>
        <Card style={{ width: "100%" }} >
          <Card.Content>
            {this.props.result.map(each => (
              <React.Fragment key={each.id}>
                <Image src={each.pictureLocation || randomAvatar()} avatar />
                <span>{each.username}</span>
                <Divider />
              </React.Fragment>
            ))}

            {/* <Feed className="message-feed" events={handleMessages} /> */}
          </Card.Content>
        </Card>
      </div>
    );
  }
}

export default connect(
  state => ({
    result: state.users.searchUser.result,
    loading: state.users.searchUser.loading,
    error: state.users.searchUser.error
  }),
  { searchUser }
)(UserList);
