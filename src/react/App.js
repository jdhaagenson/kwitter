import React from "react";
import { Switch, Route } from "react-router-dom";
import Profile from "./Profile";
import NotFound from "./NotFound";
import Registration from "./components/Registration";
import NewsFeed from ".//NewsFeed";

class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/Newsfeed" component={NewsFeed} />
        <Route exact path="/profiles/:username" component={Profile} />
        <Route exact path="/registration" component={Registration} />
        <Route path="*" component={NotFound} />
      </Switch>
    );
  }
}

export default App;
