import React from "react";
import { Menu } from "./components";
import { userIsAuthenticated } from "./HOCs";
<<<<<<< HEAD
import { UserInfo, MessageFeed } from "../react/components";
import "./Profile.css";
import UserList from "./components/UserList";
=======
import { Card} from "semantic-ui-react";
>>>>>>> 84a54c11d1088ae159168e8ea6e651d202233127

class Profile extends React.Component {
  render() {
    return (
      <>
<<<<<<< HEAD
        <h2 className="heading">Profile</h2>
        <div id="profile-body">
          <div className="menu">
            <Menu
              isAuthenticated={this.props.isAuthenticated}
              className="menu"
            />
            <UserList />
          </div>
          <div className="user-info-card">
            <UserInfo
              username={this.props.match.params.username}
              displayName={this.props.match.params.username}
              description={this.props.match.params.about}
              extra=""
            />
          </div>
          <div className="message-feed-card">
            <MessageFeed />
          </div>
        </div>
=======
        <Menu isAuthenticated={this.props.isAuthenticated} />
        <h2>Profile</h2>
        <Card style={{ marginLeft: 600,}} >
          {/* <Image src="https://www.blexar.com/avatar.png" wrapped ui={false} /> */}
          <Card.Content>
            <Card.Header>Darion Suggs</Card.Header>
            <Card.Meta>
              <span className="date">Joined in 2015</span>
            </Card.Meta>
            <Card.Description>
              Software Engineer Student at Kenzie Academy.
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            {/* <a>
              <Icon name="user" />
              22 Friends
            </a> */}
          </Card.Content>
          <Card.Content extra>
            <button>Upload Image</button>
          </Card.Content>
          <Card.Content extra>
            <button>Change Profile Pic</button>
          </Card.Content>
        </Card>
>>>>>>> 84a54c11d1088ae159168e8ea6e651d202233127
      </>
    );
  }
}

export default userIsAuthenticated(Profile);
