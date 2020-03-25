
import React from "react";
import Spinner from "react-spinkit";
import { connect } from "react-redux";
import { login } from "../../redux";
import "./LoginForm.css";
import { NavLink } from "react-router-dom";
import { Card, Image, Form, Checkbox, Button, Icon } from "semantic-ui-react";

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
    return (
      <React.Fragment>
        <Card>
          <Image src="/images/avatar/large/rachel.png" wrapped ui={false} />
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
              <Button>
                <Icon name="google plus" />
                Google Sign in
              </Button>
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
        </Card>

        {loading && <Spinner name="circle" color="blue" />}
        {error && <p style={{ color: "red" }}>{error.message}</p>}
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
