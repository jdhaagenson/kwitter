import React, { Component } from "react";
import { Modal, Button, Icon, Image, Form } from "semantic-ui-react";
import { connect } from "react-redux";
import { setPhoto, getUser } from "../../redux";

// const defaultImages = [
//     'rachel.png', 'ade.jpg', 'chris.jpg', 'christian.jpg', 'daniel.jpg', 'elliot.jpg', 'elyse.png',
//     'helen.jpg', 'jenny.jpg', 'joe.jpg', 'justen.jpg', 'kristy.png', 'laura.jpg', 'matt.jpg', 'matthew.png',
//     'molly.png', 'nan.jpg', 'nom.jpg', 'patrick.png', 'steve.jpg', 'stevie.jpg', 'tom.jpg', 'veronika.jpg', 'zoe.jpg'
//   ]
//   const imageURL = 'https://react.semantic-ui.com/images/avatar/large/'
//   const randomAvatar = () => {
//     let min = 0;
//     let max = 24;
//     let r = Math.floor(Math.random()*(max-min+1))+min
//     return imageURL+defaultImages[r]
//   }

class UploadPhoto extends Component {
    state = {
        picture: this.props.getUser.pictureLocation
    };


    handleChange = e => {
        e.preventDefault()
        this.setState({ [e.target.name]: e.target.value })
    };

    handleUserUpdate = e => {
        e.preventDefault()
        this.props.uploadPhoto(this.props.username, ...this.state)
    };

    componentDidMount() {
        this.props.getUser(this.props.username);
      }

    render() {
        const error = this.props;
        const loading = this.props;
        const setPhoto = this.props;

        return (
            <React.Fragment>
                <Modal trigger={<Button fluid><Icon name="upload"/>Upload Photo</Button>}>
                    <Modal.Content image>
                        <Image
                            wrapped
                            size="medium"
                            src={this.state.picture}
                        />
                        <Form action={setPhoto} type="POST">
                            <Form.Field>
                                <input
                                    type="file"
                                    loading={loading}
                                    />
                            </Form.Field>
                        </Form>
                                <Button
                                    type="submit"
                                    onClick={setPhoto}
                                > Upload Picture</Button>

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
        createResult: state.users.getUser.result
    }),
    { setPhoto, getUser }
)(UploadPhoto);
