import React from "react";
import "./NewTweet.css";
import { Form, TextArea, Button } from "semantic-ui-react";


class NewTweet extends React.Component {
  state = { 
    post: "",
};

handleClick= e => {
 console.log("Clicked!")
};

  render() {
    return (
      <>
        <Form style={{ width: 300, marginLeft: 800, marginTop: 20 }}>
          <TextArea placeholder="Tell us more" />
        </Form>
        <Button onClick={this.handleClick} style={{ marginLeft: 1030, marginTop: 10 }}>Post</Button>
      </>
    );
  }
}

export default NewTweet;
