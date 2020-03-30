import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import Profile from "./Profile";
import NotFound from "./NotFound";
import Registration from "./components/Registration";
import userMessagePage from "./components/UserMessagePage";
import UserInfo from './components/UserInfo';

import AllUsers from "./components/AllUsersPage";

class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/profiles/:username" component={Profile}/>
        <Route exact path="/profiles/:username" component={UserInfo}/>
        <Route exact path="/registration" component={Registration}/>
        <Route exact path="/messagefeed" component={userMessagePage} />
        <Route exact path="/users" component={AllUsers} />
        <Route path="*" component={NotFound} />
      </Switch>
    );
  }
}

export default App;
