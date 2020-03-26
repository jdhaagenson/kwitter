import React from "react";
import Spinner from "react-spinkit";
import { connect } from "react-redux";
import { createUser } from "../../redux";
import "./LoginForm.css";

import { Button, Card, Form, Image } from "semantic-ui-react";
import { NavLink } from "react-router-dom";
import signup from "./images/Sign In.gif"

class Registration extends React.Component {
  state = { username: "", password: "", displayName: "" };

  handleRegistration = e => {
    e.preventDefault();
    this.props.createUser(this.state);
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { loading, error } = this.props;
    return (
      <div className={'page'}>
        <Image src={signup} wrapped size={'massive'} className="gif" ui={false}/>
        <div className={"container-card"}>

          <Card className={'login-form'}>
            <Card.Content>
              <Card.Header>Sign Up</Card.Header>
              <Card.Meta>
                <span>Choose a username.</span>
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
                />
              </Form.Field>

                {/*<Form.Field>*/}
                {/*  <Checkbox label="I agree to the Terms and Conditions" />*/}
                {/*</Form.Field>*/}
                <Button type="submit" disabled={loading}>
                  <NavLink to="/"> Sign Up</NavLink>
                </Button>

                <NavLink to="/"> Already a Member</NavLink>
              </Form>
            </Card.Content>
          </Card>
        </div>


        {loading && <Spinner name="circle" color="blue"/>}
        {error && <p style={{color: "red"}}>{error.message}</p>}
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
  { createUser }
)(Registration);
