import React from "react";
import Spinner from "react-spinkit";
import { connect } from "react-redux";
import { login } from "../../redux";
import "./LoginForm.css";
import { NavLink } from "react-router-dom";
import { Card, Image, Form, Checkbox, Button, Icon } from "semantic-ui-react";
import GoogleLogin from "react-google-login";
import logo from "./images/logo.png";

class LoginForm extends React.Component {
  state = { username: "", password: "" };

  handleLogin = e => {
    e.preventDefault();
    this.props.login(this.state);
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { loading, error } = this.props;

    const responseGoogle = response => {
      console.log(response);

      const googleLoginInfo = {
        username: response.profileObj.givenName,
        password: response.profileObj.googleId.slice(8)
      };
      this.props.login(googleLoginInfo);
    };

    return (
      <React.Fragment>
        <Card id="loginCard">
          <Image src={logo} wrapped ui={false} className="logo" />
          <Card.Content>
            <Card.Header>Login</Card.Header>
            <Card.Meta>
              <span className="date">Please login to get started</span>
            </Card.Meta>

            <Form onSubmit={this.handleLogin}>
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
                <label htmlFor="password">Password:</label>
                <input
                  type="password"
                  name="password"
                  autoFocus
                  required
                  onChange={this.handleChange}
                ></input>
              </Form.Field>
              <Form.Field>
                <Checkbox label="I agree to the Terms and Conditions" />
              </Form.Field>

              <Button type="submit" disabled={loading}>
                {" "}
                <Icon name="key" />
                Login
              </Button>

              <GoogleLogin
                clientId="298197707803-tvpbkf3c6vci4hc1kcp7fotjtcm6dcav.apps.googleusercontent.com"
                buttonText="Google Login"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={"single_host_origin"}
              />
            </Form>
          </Card.Content>
          <Card.Content>
            <Card.Description>
              <NavLink to="/forgotpassword"> Forgot Password?</NavLink>
            </Card.Description>
            <Card.Description>
              Not a member? Sign up <NavLink to="/registration">Here </NavLink>
            </Card.Description>
          </Card.Content>

          {loading && <Spinner name="circle" color="blue" />}
          {error && <p style={{ color: "red" }}>{error.message}</p>}
        </Card>
      </React.Fragment>
    );
  }
}

export default connect(
  state => ({
    result: state.auth.login.result,
    loading: state.auth.login.loading,
    error: state.auth.login.error
  }),
  { login }
)(LoginForm);
