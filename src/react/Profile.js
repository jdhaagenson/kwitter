import React from "react";
import { Menu } from "./components";
import { userIsAuthenticated } from "./HOCs";
import { Card, Icon, Image } from "semantic-ui-react";

class Profile extends React.Component {
  render() {
    return (
      <>
        <Menu isAuthenticated={this.props.isAuthenticated} />
        <h2>Profile</h2>
        <Card>
          <Image src="https://www.blexar.com/avatar.png" wrapped ui={false} />
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
            <a>
              <Icon name="user" />
              22 Friends
            </a>
          </Card.Content>
        </Card>
      </>
    );
  }
}

export default userIsAuthenticated(Profile);
