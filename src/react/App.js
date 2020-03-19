import React from "react";
import { Switch, Route } from "react-router-dom";
import Profile from "./Profile";
import NotFound from "./NotFound";
<<<<<<< HEAD
import Registration from "./components/Registration";
import MessageFeed from "./components/Messages";
=======
// import Register from "./Register";
import NewsFeed from "./NewsFeed";
import loginform from "./components/LoginForm"
>>>>>>> 84a54c11d1088ae159168e8ea6e651d202233127

class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/NewsFeed" component={NewsFeed} />
        <Route exact path="/profiles/:username" component={Profile} />
<<<<<<< HEAD
        <Route exact path="/registration" component={Registration} />
        <Route exact path="/messagefeed" component={MessageFeed} />
=======
        <Route exact path="/logout" component={loginform}></Route>
        {/* <Route exact path="/Register" component={Register} /> */}
>>>>>>> 84a54c11d1088ae159168e8ea6e651d202233127
        <Route path="*" component={NotFound} />
      </Switch>
    );
  }
}

export default App;
