import React, { Component } from "react";
import { connect } from "react-redux";
import { searchUser } from "../../redux";
import { Grid, Label, Loader, Search } from "semantic-ui-react";
// import moment from "moment";
import { NavLink } from 'react-router-dom'
import "./SearchBar.css";

import faker from "faker";
import _ from "lodash";

const initialState = { isLoading: false, results: [], value: "" };

const source = _.times(20, () => ({
  pictureLocation: faker.internet.avatar(),
  username: faker.internet.userName(),
  displayName: faker.name.firstName(),
  about: faker.name.jobTitle() + "in " + faker.name.jobArea(),
  googleId: null,
  createdAt: faker.date.past(),
  updatedAt: faker.date.recent()
}));

const resultRenderer = ({username}) => <><Label><NavLink
  to={`/profiles/${username}`}>{username}</NavLink> </Label></>;

class SearchBar extends Component {
  state = {
    isLoading: false,
    result: [],
    value: ""
  };

  handleResultSelect = (e, { result }) =>
    this.setState({ value: result.username });

  handleSearchChange = (e, { value }) => {
    this.setState({ isLoading: true, value });

    setTimeout(() => {
      if (this.state.value.length < 1) return this.setState(initialState);

      const re = new RegExp(_.escapeRegExp(this.state.value), "i");
      const isMatch = result => re.test(result.title);
      const filteredResults = _.reduce(
        source,
        (memo, data, name) => {
          const results = _.filter(data.results, isMatch);
          if (results.length) memo[name] = {name, results};
          return memo
        },
        {},
      );

      this.setState({
        isLoading: false,
        results: filteredResults,
      })
    }, 300)
  };

  handleChange = e => {
    e.preventDefault();
    this.setState({value: e.target.value});
  };

  handleSearch = e => {
    e.preventDefault();
    this.props.searchUser(this.state.value);
    this.setState({value: ""});
  };
  componentDidMount() {
    this.props.searchUser();
  }

  render() {
    // const output = [
    //     {
    //         date:moment().fromNow(),
    //         image: "https://react.semantic-ui.com/images/avatar/small/Rachel.png",
    //         extraText: "testing",
    //         summary: "test"
    //     }
    // ];
    const { loading, error, result } = this.props;
    return (
      <React.Fragment>
        <Grid style={{ border: "1px solid 008e97" }}>
          <Grid.Column width={6}>
            <Search
              placeholder="Search users"
              loading={loading}
              onChange={this.handleChange}
              onSelectionChange={_.debounce(this.handleSearchChange, 500, {
                leading: true
              })}
              onResultSelect={this.handleResultSelect}
              onSearchChange={_.debounce(this.handleSearchChange, 500, {
                leading: true
              })}
              results={result}
              autoComplete="on"
              value={this.state.value}
              resultRenderer={resultRenderer}
            />
          </Grid.Column>
        </Grid>
        {loading && <Loader />}
        {error && <p style={{ color: "red" }}>{error.message}</p>}
      </React.Fragment>
    );
  }
}

export default connect(
  state => ({
    result: state.users.searchUser.result,
    loading: state.users.searchUser.loading,
    error: state.users.searchUser.error
  }),
  { searchUser }
)(SearchBar);
