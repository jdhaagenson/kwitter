import React, {Component} from 'react';
import {connect} from 'react-redux';
import {searchUser} from '../../redux';
import {Feed, Button, Card, Form} from 'semantic-ui-react';
import moment from "moment";
import './SearchBar.css';

class SearchBar extends Component {
    state = {
        isLoading: false,
        results: [],
        value: ""
        }

    handleChange = e => {
        e.preventDefault()
        this.setState({text:e.target.value});
    }

    handleSearch = e => {
        e.preventDefault()
        this.props.searchUser(this.state.searchTerm)
        this.setState({searchTerm: ""})
    }

    render() {
        const output = [
            {
                date:moment().fromNow(),
                image: "https://react.semantic-ui.com/images/avatar/small/Rachel.png",
                extraText: "testing",
                summary: "test"
            }
        ];
        return (
            <React.Fragment>
                <Card></Card>
            </React.Fragment>
        )
    }
}

export default connect(
    state => ({
        result: state.users.searchUser.result,
        loading: state.users.searchUser.loading,
        error: state.users.searchUser.error
    }),
    {}
)(SearchBar)