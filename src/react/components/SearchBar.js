import React, { Component } from "react";
import { connect } from "react-redux";
import { searchUser } from "../../redux";
import { Grid, Icon, Label, Loader, Search } from "semantic-ui-react";
// import moment from "moment";
import "./SearchBar.css";
import users from "../users.json";
// import faker from "faker";
import _ from "lodash";
import { NavLink } from 'react-router-dom'

const initialState = {isLoading: false, results: [], value: ""};

// const source = _.times(20, () => ({
//   pictureLocation: faker.internet.avatar(),
//   username: faker.internet.userName(),
//   displayName: faker.name.firstName(),
//   about: faker.name.jobTitle() + "in " + faker.name.jobArea(),
//   googleId: null,
//   createdAt: faker.date.past(),
//   updatedAt: faker.date.recent()
// }));

const resultRenderer = ({username}) => <Label content={username}><NavLink
  to={`/profiles/${username}`}>username</NavLink></Label>;

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
        results: _.filter(users, isMatch)
      });
    }, 300);
  };
  handleChange = e => {
    e.preventDefault();
    this.setState({ text: e.target.value });
  };

  handleSearch = e => {
    e.preventDefault();
    this.props.getUser(this.state.value);
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
              onResultSelect={this.handleResultSelect}
              onSearchChange={_.debounce(this.handleSearchChange, 500, {
                leading: true
              })}
              results={result}
              value={this.state.value}
              resultRenderer={resultRenderer}
            >
              <Icon name={"search"}/>
            </Search>
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
