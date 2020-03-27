import React from "react";
import Spinner from "react-spinkit";
import { connect } from "react-redux";
import { createUser, login } from "../../redux";
import "./LoginForm.css";
import GoogleLogin from "react-google-login";
import logo from "./images/logo.png";
import { withRouter } from "react-router-dom";

import { Card, Image, Form, Checkbox, Button } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

class Registration extends React.Component {
  state = { username: "", password: "", displayName: "" };

  handleRegistration = e => {
    e.preventDefault();
    console.log(this.state);
    this.props.createUser(this.state);
    this.props.history.push("/");
  };

  handleChange = e => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { loading, error } = this.props;
    const responseGoogle = response => {
      console.log(response);

      const googleLoginInfo = {
        username: response.profileObj.givenName,
        displayName: response.profileObj.givenName,
        password: response.profileObj.googleId.slice(8)
      };

      this.props.createUser(googleLoginInfo).then(() =>
        this.props.login({
          username: googleLoginInfo.username,
          password: googleLoginInfo.password
        })
      );
    };

    return (
      <div id="registration-page">
        <React.Fragment>
          <Card id="registration-card">
            <Image src={logo} wrapped ui={false} />
            <Card.Content>
              <Card.Header>Sign Up</Card.Header>
              <Card.Meta>
                <span>Please fill out the form to join! </span>
              </Card.Meta>

              <Form onSubmit={this.handleRegistration}>
                <Form.Field>
                  <label htmlFor="username">Username:</label>
                  <input
                    type="text"
                    name="username"
                    autoFocus
                    required
                    onChange={this.handleChange}
                    placeholder="Choose a username"
                  />
                </Form.Field>
                <Form.Field>
                  <label htmlFor="displayName">Display Name:</label>
                  <input
                    type="text"
                    name="displayName"
                    autoFocus
                    required
                    onChange={this.handleChange}
                    placeholder="Choose a display name"
                  />
                </Form.Field>

                <Form.Field>
                  <label htmlFor="password">Password:</label>
                  <input
                    type="password"
                    name="password"
                    autoFocus
                    required
                    onChange={this.handleChange}
                  ></input>
                </Form.Field>

                {/* <Form.Field>
                  <Checkbox label="I agree to the Terms and Conditions" />
                </Form.Field> */}
                <Button type="submit" disabled={loading}>
                  Sign Up
                </Button>

                <GoogleLogin
                  clientId="298197707803-tvpbkf3c6vci4hc1kcp7fotjtcm6dcav.apps.googleusercontent.com"
                  buttonText="Sign up with Google"
                  onSuccess={responseGoogle}
                  onFailure={responseGoogle}
                  cookiePolicy={"single_host_origin"}
                />
                <br />
                <NavLink to="/"> Already a Member</NavLink>
              </Form>
            </Card.Content>

            {loading && <Spinner name="circle" color="blue" />}
            {error && <p style={{ color: "red" }}>{error.message}</p>}
          </Card>
        </React.Fragment>
      </div>
    );
  }
}

export default connect(
  state => ({
    result: state.users.createUser.result,
    loading: state.users.createUser.loading,
    error: state.users.createUser.error
  }),
  { createUser, login }
)(withRouter(Registration));
