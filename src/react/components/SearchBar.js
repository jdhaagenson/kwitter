<<<<<<< HEAD
import React, { Component } from "react";
import { connect } from "react-redux";
import { searchUser } from "../../redux";
import { Search, Grid, Label, Loader } from "semantic-ui-react";
// import moment from "moment";
import "./SearchBar.css";
import users from "../users.json";
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

const resultRenderer = ({ username }) => <Label content={username} />;

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
      const isMatch = result => re.test(result.username);

      this.setState({
        isLoading: false,
        results: _.filter(source, isMatch)
      });
    }, 300);
  };
  handleChange = e => {
    e.preventDefault();
    this.setState({ text: e.target.value });
  };

  handleSearch = e => {
    e.preventDefault();
    this.props.searchUser(this.state.searchTerm);
    this.setState({ searchTerm: "" });
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
        <Grid>
          <Grid.Column width={6}>
            <Search
              placeholder="Search users"
              loading={loading}
              onResultSelect={this.handleResultSelect}
              onSearchChange={_.debounce(this.handleSearchChange, 500, {
                leading: true
              })}
              results={result}
              value={this.state.value}
              resultRenderer={resultRenderer}
            ></Search>
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
=======
import _ from 'lodash'
import faker from 'faker'
import React, { Component } from 'react'
import { Search, Grid } from 'semantic-ui-react'

const initialState = { isLoading: false, results: [], value: '' }

const source = _.times(5, () => ({
  title: faker.company.companyName(),
  description: faker.company.catchPhrase(),
  image: faker.internet.avatar(),
  price: faker.finance.amount(0, 100, 2, '$'),
}))

export default class SearchBar extends Component {
  state = initialState

  handleResultSelect = (e, { result }) => this.setState({ value: result.title })

  handleSearchChange = (e, { value }) => {
    this.setState({ isLoading: true, value })

    setTimeout(() => {
      if (this.state.value.length < 1) return this.setState(initialState)

      const re = new RegExp(_.escapeRegExp(this.state.value), 'i')
      const isMatch = (result) => re.test(result.title)

      this.setState({
        isLoading: false,
        results: _.filter(source, isMatch),
      })
    }, 300)
  }

  render() {
    const { isLoading, value, results } = this.state

    return (
      <Grid>
        <Grid.Column width={6} style={{ marginRight: 20}}>
          <Search
            loading={isLoading}
            onResultSelect={this.handleResultSelect}
            onSearchChange={_.debounce(this.handleSearchChange, 500, {
              leading: true,
            })}
            results={results}
            value={value}
            {...this.props}
          />
        </Grid.Column>
      </Grid>
    )
  }
}

>>>>>>> 84a54c11d1088ae159168e8ea6e651d202233127
