import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import Profile from "./Profile";
import NotFound from "./NotFound";
import Registration from "./components/Registration";
import MessageFeed from "./components/Messages";
// import SearchResult from './SearchResult';

class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/profiles/:username" component={Profile} />
        <Route exact path="/registration" component={Registration} />
        <Route exact path="/messagefeed" component={MessageFeed} />
        <Route path="*" component={NotFound} />
      </Switch>
    );
  }
}

export default App;
