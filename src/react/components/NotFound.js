import React, { Component } from "react";

class NotFound extends Component {
  render() {
    return (
      <>
        <p>Page not found for {this.props.location.pathname}</p>
      </>
    );
  }
}

export default NotFound;
