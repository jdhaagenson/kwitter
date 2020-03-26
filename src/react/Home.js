import React from "react";
import { LoginForm, MainMenu } from "./components";
import { userIsNotAuthenticated } from "./HOCs";
import "./Home.css";

class Home extends React.Component {
  render() {
    return (
      <div id="home-page">
        <MainMenu/>

        <LoginForm />
      </div>
    );
  }
}

export default userIsNotAuthenticated(Home);
