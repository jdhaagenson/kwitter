import React, { Component } from "react";
import { Modal, Button, Image, Form, Input } from "semantic-ui-react";
import { connect } from "react-redux";
import { setPhoto } from "../../redux";



class UploadPhoto extends Component {
    state = {
        picture: ""
    };


    handleChange = e => {
        e.preventDefault()
        this.setState({ [e.target.name]: e.target.value })
    };

    handleUserUpdate = e => {
        e.preventDefault()
        this.props.uploadPhoto(this.getState().username, this.state)
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
                                <label for="avatar"></label>
                                <Input
                                    name="avatar"
                                    id="avatar"
                                    type="file"
                                    accepts= "image/jpg, image/png, image/gif"
                                    />
                            </Form.Field>
                                <Button
                                    type="submit"
                                    onClick={this.props.setPhoto}
                                    > Upload Picture</Button>
                        </Form>

                    </Modal.Content>
                </Modal>

                {error && <p style={{ color: "red" }}>{error.message}</p>}
            </React.Fragment>
        );
    };
}

export default connect(
    (state) => ({
        result: state.users.setPhoto.result,
        loading: state.users.setPhoto.loading,
        error: state.users.setPhoto.error,
    }),
    { setPhoto }
)(UploadPhoto);
