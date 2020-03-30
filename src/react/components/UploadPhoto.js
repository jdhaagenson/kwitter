import React, { Component } from "react";
import { Button, Form, Icon, Image, Input, Modal } from "semantic-ui-react";
import { connect } from "react-redux";
import { getUser, setPhoto } from "../../redux";
import defaultAvatar from "./images/default_avatar.png"
// const defaultImages = [
//   'rachel.png', 'ade.jpg', 'chris.jpg', 'christian.jpg', 'daniel.jpg', 'elliot.jpg', 'elyse.png',
//   'helen.jpg', 'jenny.jpg', 'joe.jpg', 'justen.jpg', 'kristy.png', 'laura.jpg', 'matt.jpg', 'matthew.png',
//   'molly.png', 'nan.jpg', 'nom.jpg', 'patrick.png', 'steve.jpg', 'stevie.jpg', 'tom.jpg', 'veronika.jpg', 'zoe.jpg'
// ];
// const imageURL = 'https://react.semantic-ui.com/images/avatar/large/';
// const randomAvatar = () => {
//   let min = 0;
//   let max = 24;
//   let r = Math.floor(Math.random() * (max - min + 1)) + min;
//   return imageURL + defaultImages[r]
// };
class UploadPhoto extends Component {
  state = {
    open: false,
    fileInput: React.createRef()
  };
  handleOpen = event => {
    event.preventDefault();
    this.setState({open: true})
  };
  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state.fileInput.current.files[0]);
    this.setState({picture: this.state.fileInput.current.files[0]});
    const data = new FormData();
    data.append("picture", this.state.picture);
    this.props.setPhoto(event, data);
    this.setState({open: false})
  };
  componentDidMount() {
    this.props.getUser(this.props.username);
  }
  render() {
    const error = this.props;
    // if (this.props.username === this.props.loggedInUsername)
    return (
      <React.Fragment>
        <Modal open={this.state.open}
               trigger={<Button fluid color={"teal"} onClick={this.handleOpen}
               ><Icon name={'upload'}/>Upload Profile Picture</Button>}>
          <Modal.Content image>
            <Image
              wrapped
              size="medium"
              src={defaultAvatar}
            />
            <Form>
              <Input
                type="file"
                name="picture"
              />
              <Button
                type="submit"
                name="picture"
                onClick={this.handleUploadPicture}
              >Upload Picture
              </Button>
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
    updateResult: state.users.setPhoto.result,
    updateLoading: state.users.setPhoto.loading,
    updateError: state.users.setPhoto.error,
    createResult: state.users.getUser.result,
    // loggedInUsername: state.auth.login.result.username
  }),
  {setPhoto, getUser}
)(UploadPhoto);