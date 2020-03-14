import React from "react";
import { userIsAuthenticated } from "./HOCs";
import { Card, Feed, Button, Icon, Label } from "semantic-ui-react";
import { Menu } from "./components";
import NewTweet from "./components/NewTweet";

class NewsFeed extends React.Component {
  render() {
    return (
      <div>
        <Menu isAuthenticated={this.props.isAuthenticated} />
        <NewTweet/>
        <Card style={{ marginLeft: 700, marginTop: 10, width: 500 }}>
          <Card.Content>
            <Card.Header>Recent Activity</Card.Header>
          </Card.Content>
          <Card.Content>
            <Feed>
              <Feed.Event>
                <Feed.Label image="https://imgix.bustle.com/uploads/image/2018/5/9/aa15d5d8-4b32-4888-b5c1-aa51349df70d-2t4a9501.JPG" />
                <Feed.Content>
                  <Feed.Date content="1 day ago" />
                  <Feed.Summary>
                    {/* You added <a>Jenny Hess</a> to your <a>coworker</a> group. */}
                    <Button as="div" labelPosition="right">
                      <Button icon>
                        <Icon name="heart" />
                        Like
                      </Button>
                      <Label as="a" basic pointing="left">
                        2,048
                      </Label>
                    </Button>
                  </Feed.Summary>
                </Feed.Content>
              </Feed.Event>

              <Feed.Event>
                <Feed.Label image="https://profiles.howard.edu/sites/profiles.howard.edu/files/A0001156.jpg" />
                <Feed.Content>
                  <Feed.Date content="3 days ago" />
                  <Feed.Summary>
                    {/* You added <a>Molly Malone</a> as a friend. */}
                    <Button as="div" labelPosition="right">
                      <Button icon>
                        <Icon name="heart" />
                        Like
                      </Button>
                      <Label as="a" basic pointing="left">
                        2,048
                      </Label>
                    </Button>
                  </Feed.Summary>
                </Feed.Content>
              </Feed.Event>

              <Feed.Event>
                <Feed.Label image="https://images.squarespace-cdn.com/content/v1/5070f2f8c4aa65eb3b6394d0/1436318763288-A0DOHGAV0JWK7J5XD0UC/ke17ZwdGBToddI8pDm48kMIebV6MdNPQMcRDrC5oPxMUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKc73FUbOtyHSZLq0696RfXhzOQ1C7e-4RYctpOI87j69--0uIsXqDbvJ5MkV0zcn4f/LYB+People+Profile+%2809%29.jpg?format=1500w" />
                <Feed.Content>
                  <Feed.Date content="4 days ago" />
                  <Feed.Summary>
                    {/* You added <a>Elliot Baker</a> to your <a>musicians</a>{" "}
                    group. */}
                    <Button as="div" labelPosition="right">
                      <Button icon>
                        <Icon name="heart" />
                        Like
                      </Button>
                      <Label as="a" basic pointing="left">
                        2,048
                      </Label>
                    </Button>
                  </Feed.Summary>
                </Feed.Content>
              </Feed.Event>
            </Feed>
          </Card.Content>
        </Card>
      </div>
    );
  }
}

export default userIsAuthenticated(NewsFeed);
