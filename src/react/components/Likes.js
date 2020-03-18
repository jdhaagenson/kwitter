import React, { Component } from "react";
import { Icon } from "semantic-ui-react";

class Likes extends Component {
  render() {
    return (
      <React.Fragment>
        <Icon name="thumbs up" />
        <Icon name="thumbs down" />
      </React.Fragment>
  )}
}

export default Likes;
