import React from "react";
import { Switch, Route } from "react-router-dom";
import Profile from "./Profile";
import NotFound from "./NotFound";
// import Register from "./Register";
import NewsFeed from "./NewsFeed";
import loginform from "./components/LoginForm"

class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/NewsFeed" component={NewsFeed} />
        <Route exact path="/profiles/:username" component={Profile} />
        <Route exact path="/logout" component={loginform}></Route>
        {/* <Route exact path="/Register" component={Register} /> */}
        <Route path="*" component={NotFound} />
      </Switch>
    );
  }
}

export default App;
