import React from "react";
import { LoginForm, Menu } from "./components";
import { userIsNotAuthenticated } from "./HOCs";
import "./Home.css";

class Home extends React.Component {
  render() {
    return (
      <div id="home-page">
        <Menu />

        <LoginForm />
      </div>
    );
  }
}

export default userIsNotAuthenticated(Home);
