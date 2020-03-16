import React, { Component } from "react";
import { Modal, Button, Image, Form, Input } from "semantic-ui-react";
import { connect } from "react-redux";
import { uploadPhoto, getUser } from "../../redux";

class UpdateUser extends Component {
    state = {
        picture: ""
    };


    handleChange = e => {
        // e.preventDefault()
        this.setState({ [e.target.name]: e.target.value })
    };

    handleUserUpdate = e => {
        // e.preventDefault()
        this.props.uploadPhoto(this.getStateusername, this.state)
    };

    componentDidMount() {
        this.props.getUser(this.props.username);
      }

    render() {
        const error = this.props;

        return (
            <React.Fragment>
                <Modal trigger={<Button>Update Profile</Button>}>
                    <Modal.Content image>
                        <Image
                            wrapped
                            size="medium"
                            src="https://react.semantic-ui.com/images/avatar/large/rachel.png"
                        />
                        <Form>
                            <Form.Field>
                                <Input
                                    type="image"
                                    />
                            </Form.Field>
                        </Form>
                                <Button
                                    type="submit"
                                    onClick={this.handleUploadPicture}
                                > Upload Picture</Button>

                    </Modal.Content>
                </Modal>
                <Button className="get-messages-button">My Kweets</Button>

                {error && <p style={{ color: "red" }}>{error.message}</p>}
            </React.Fragment>
        );
    };
}

export default connect(
    (state) => ({
        updateResult: state.users.uploadPhoto.result,
        updateLoading: state.users.uploadPhoto.loading,
        updateError: state.users.uploadPhoto.error,
        createResult: state.users.getUser.result
    }),
    { uploadPhoto, getUser }
)(UpdateUser);
