import React from "react";
import "./NewTweet.css";
import { Form, TextArea } from "semantic-ui-react";

class NewTweet extends React.Component {
  render() {
    return (
      <>
        <Form style={{ width: 300, marginLeft: 800, marginTop: 20 }} >
          <TextArea placeholder="Tell us more" />
        </Form>
      </>
    );
  }
}

export default NewTweet;
