import React, { Component } from "react";
import { connect } from "react-redux";
import { Image, List, Card, Button, Segment, Header } from "semantic-ui-react";

class WhoToFollow extends Component {
  render() {
    return (
      <Card style={{ width: "100%"}}>
        <Segment>
          <List divided verticalAlign="middle" animated="middle" relaxed>
            <Header as="h2" style={{ color: "Black", }}>
              Who To Follow
            </Header>

            <List.Item>
              <List.Content floated="right">
                <Button style={{backgroundColor:"#95b9c7" }}>Add</Button>
              </List.Content>
              <Image
                size={"massive"}
                avatar
                src="https://react.semantic-ui.com/images/avatar/small/lena.png"
              />
              <List.Content>Lena</List.Content>
            </List.Item>
            <List.Item>
              <List.Content floated="right">
                <Button style={{backgroundColor:"#95b9c7" }}>Add</Button>
              </List.Content>
              <Image
                size={"massive"}
                avatar
                src="https://react.semantic-ui.com/images/avatar/small/lindsay.png"
              />
              <List.Content>Lindsay</List.Content>
            </List.Item>
            <List.Item>
              <List.Content floated="right">
                <Button style={{backgroundColor:"#95b9c7" }}>Add</Button>
              </List.Content>
              <Image
                size={"massive"}
                avatar
                src="https://react.semantic-ui.com/images/avatar/small/mark.png"
              />
              <List.Content>Mark</List.Content>
            </List.Item>
            <List.Item>
              <List.Content floated="right">
                <Button style={{backgroundColor:"#95b9c7" }}>Add</Button>
              </List.Content>
              <Image
                size={"massive"}
                avatar
                src="https://react.semantic-ui.com/images/avatar/small/molly.png"
              />
              <List.Content>Molly</List.Content>
            </List.Item>
            <List.Item>
              <List.Content floated="right">
                <Button style={{backgroundColor:"#95b9c7" }}>Add</Button>
              </List.Content>
              <Image
                size={"massive"}
                avatar
                src="https://react.semantic-ui.com/images/avatar/small/lena.png"
              />
              <List.Content>Lena</List.Content>
            </List.Item>
          </List>
        </Segment>
      </Card>
    );
  }
}

export default WhoToFollow ;

