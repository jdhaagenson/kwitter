import React, { Component } from "react";
import { Button, Form, Image, Input, Modal } from "semantic-ui-react";
import { connect } from "react-redux";
import { getUser, setPhoto } from "../../redux";

const defaultImages = [
  'rachel.png', 'ade.jpg', 'chris.jpg', 'christian.jpg', 'daniel.jpg', 'elliot.jpg', 'elyse.png',
  'helen.jpg', 'jenny.jpg', 'joe.jpg', 'justen.jpg', 'kristy.png', 'laura.jpg', 'matt.jpg', 'matthew.png',
  'molly.png', 'nan.jpg', 'nom.jpg', 'patrick.png', 'steve.jpg', 'stevie.jpg', 'tom.jpg', 'veronika.jpg', 'zoe.jpg'
];
const imageURL = 'https://react.semantic-ui.com/images/avatar/large/';
const randomAvatar = () => {
  let min = 0;
  let max = 24;
  let r = Math.floor(Math.random() * (max - min + 1)) + min;
  return imageURL + defaultImages[r]
};

class UpdateUser extends Component {
  state = {
    picture: ""
  };


  handleChange = e => {
    e.preventDefault();
    this.setState({[e.target.name]: e.target.value})
  };

  handleUserUpdate = e => {
    e.preventDefault();
    this.props.uploadPhoto(this.props.username, this.state)
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
    { uploadPhoto: setPhoto, getUser }
)(UpdateUser);
