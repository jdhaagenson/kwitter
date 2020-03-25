import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import Profile from "./Profile";
import NotFound from "./NotFound";
import Registration from "./components/Registration";
import userMessagePage from "./components/UserMessagePage";
import { UserList } from "./components";

class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/profiles/:username" component={Profile} />
        <Route exact path="/registration" component={Registration} />
        <Route exact path="/messagefeed" component={userMessagePage} />
        <Route exact path="/users" component={UserList} />
        <Route path="*" component={Home} />
      </Switch>
    );
  }
}

export default App;
