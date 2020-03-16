import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.css"

class NotFound extends React.Component {
  render() {
    return (
      <>
        <h1 className="NotFound">404</h1>
        <p>Page not found for {this.props.location.pathname}</p>
        <Link to="/">Go Home</Link>
      </>
    );
  }
}

export default NotFound;
