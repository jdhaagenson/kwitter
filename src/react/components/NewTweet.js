import React from "react";
import "./NewTweet.css";
import { connect } from "react-redux";
import { Form, TextArea, Button } from "semantic-ui-react";
// import { postMessage } from "../../redux"


class NewTweet extends React.Component {
  state = { 
    text: "",
};

handleClick = e => {
  const text = e.target.value;
  console.log('Clicked!')
  this.setState(() => ({
    text
  }));
  console.log(this.state);
  // this.props.postMessage(this.state)
};



handleChange = e => {
  const text = e.target.value;
  console.log('changed')
  this.setState(() => ({
    text
  }));
};

  render() {
    const { text } = this.state;
    return (
      <>
        <Form style={{ width: 300, marginLeft: 800, marginTop: 20 }}>
          <TextArea  placeholder="What's happenning"
            value={text}
            onChange={this.handleChange}
            className="textarea"
            maxLength={280} />
        </Form>
        <Button onClick={this.handleClick} style={{ marginLeft: 1030, marginTop: 10 }}>Post</Button>

      </>
    );
  }
}

export default connect(null,null)(NewTweet);
