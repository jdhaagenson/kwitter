import React, { Component } from "react";
import {
  Button,
  Header,
  Input,
  Divider,
  Image,
  Modal
} from "semantic-ui-react";
import { setPhoto } from "../../redux";
import { connect } from "react-redux";
import { domain } from "../../redux/helpers";
const imageURL = "https://react.semantic-ui.com/images/avatar/large/";
class Avatar extends Component {
  constructor(props) {
    super(props);
    this.handleClose = this.handleClose.bind(this);
    this.handleOpen = this.handleOpen.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
    this.handleSetAvatar = this.handleSetAvatar.bind(this);
    this.handleUploadImage = this.handleUploadImage.bind(this);
    this.state = {
      modalOpen: false,
      image: " ",
      file: null
    };
  }
  //   const {open, modalOpen} = React.useState(false);
  handleOpen = () => {
    this.setState({ modalOpen: true });
  };
  handleClose = () => {
    this.setState({ modalOpen: false });
  };
  handleSelect = e => {
    this.setState({ images: e.src });
  };
  handleSetAvatar = e => {
    console.log(e.target.files[0]);
    // e.preventDefault();
    this.setState({
      file: e.target.files[0]
    });
    console.log(this.state);
  };
  handleUploadImage = event => {
    // this.setState({
    //   file: event.target.value
    // })
    const data = new FormData();
    data.append("picture", this.state.file);
    console.log(domain);
    this.props.setPhoto(event, data);
  };
  renderImages() {
    let images = ["ade.jpg"];
    return images.map((img, i) => {
      return (
        <div>
          <Image
            onClick={this.handleSelect}
            centered
            bordered
            as="Button"
            size="tiny"
            src={imageURL + img}
            key={"img-" + i}
          />
          <Image
            onClick={this.handleSelect}
            centered
            bordered
            as="Button"
            size="tiny"
            src={imageURL + "rachel.png"}
          />
          <Image
            onClick={this.handleSelect}
            centered
            bordered
            as="Button"
            size="tiny"
            src={imageURL + "chris.jpg"}
          />
          <Image
            onClick={this.handleSelect}
            centered
            bordered
            as="Button"
            size="tiny"
            src={imageURL + "christian.jpg"}
          />
          <Image
            onClick={this.handleSelect}
            centered
            bordered
            as="Button"
            size="tiny"
            src={imageURL + "daniel.jpg"}
          />
          <Image
            onClick={this.handleSelect}
            centered
            bordered
            as="Button"
            size="tiny"
            src={imageURL + "elliot.jpg"}
          />
          <Image
            onClick={this.handleSelect}
            centered
            bordered
            as="Button"
            size="tiny"
            src={imageURL + "elyse.png"}
          />
          <Image
            onClick={this.handleSelect}
            centered
            bordered
            as="Button"
            size="tiny"
            src={imageURL + "helen.jpg"}
          />
          <Image
            onClick={this.handleSelect}
            centered
            bordered
            as="Button"
            size="tiny"
            src={imageURL + "jenny.jpg"}
          />
          <Image
            onClick={this.handleSelect}
            centered
            bordered
            as="Button"
            size="tiny"
            src={imageURL + "joe.jpg"}
          />
          <Image
            onClick={this.handleSelect}
            centered
            bordered
            as="Button"
            size="tiny"
            src={imageURL + "justen.jpg"}
          />
          <Image
            onClick={this.handleSelect}
            centered
            bordered
            as="Button"
            size="tiny"
            src={imageURL + "kristy.png"}
          />
          <Image
            onClick={this.handleSelect}
            centered
            bordered
            as="Button"
            size="tiny"
            src={imageURL + "laura.jpg"}
          />
          <Image
            onClick={this.handleSelect}
            centered
            bordered
            as="Button"
            size="tiny"
            src={imageURL + "matt.jpg"}
          />
          <Image
            onClick={this.handleSelect}
            centered
            bordered
            as="Button"
            size="tiny"
            src={imageURL + "matthew.png"}
          />
          <Image
            onClick={this.handleSelect}
            centered
            bordered
            as="Button"
            size="tiny"
            src={imageURL + "molly.png"}
          />
          <Image
            onClick={this.handleSelect}
            centered
            bordered
            as="Button"
            size="tiny"
            src={imageURL + "nan.jpg"}
          />
          <Image
            onClick={this.handleSelect}
            centered
            bordered
            as="Button"
            size="tiny"
            src={imageURL + "nom.jpg"}
          />
          <Image
            onClick={this.handleSelect}
            centered
            bordered
            as="Button"
            size="tiny"
            src={imageURL + "patrick.png"}
          />
          <Image
            onClick={this.handleSelect}
            centered
            bordered
            as="Button"
            size="tiny"
            src={imageURL + "steve.jpg"}
          />
          <Image
            onClick={this.handleSelect}
            centered
            bordered
            as="Button"
            size="tiny"
            src={imageURL + "tom.jpg"}
          />
        </div>
      );
    });
  }
  render() {
    //   if (this.state.modalOpen === true) {
    return (
      <>
        {this.state.modalOpen && (
          <Modal
            trigger={
              <Button
                className="ui button"
                style={{ margin: 10 }}
                onClick={this.handleOpen}
              >
                Change Avatar
              </Button>
            }
            wrapped
            open={this.handleOpen}
            onClose={this.handleClose}
            centered={false}
          >
            <Modal.Header>Select an Avatar</Modal.Header>
            <Modal.Content image>
              <Image.Group>{this.renderImages()}</Image.Group>
              <Image.Group></Image.Group>
              <Divider hidden />
              <Image.Group></Image.Group>
              <Image.Group></Image.Group>
              <Divider hidden />
              <Image.Group></Image.Group>
              <Image.Group></Image.Group>
              <Divider hidden />
              <Modal.Actions>
                <form
                  style={{ marginLeft: "1em" }}
                  onSubmit={this.handleUploadImage}
                >
                  <input
                    floated="right"
                    onChange={this.handleSetAvatar}
                    type="file"
                    icon="file"
                    name="picture"
                  />
                  {/* <input type="submit" onClick={this.handleUploadImage} value="Upload Picture" /> */}
                </form>
                <input
                  type="submit"
                  onClick={this.handleUploadImage}
                  value="Upload Picture"
                />
                <Divider hidden />
                <Button onClick={this.handleClose}>Done</Button>
              </Modal.Actions>
            </Modal.Content>
          </Modal>
        )}
      </>
    );
  }
  // }
}
export default connect(
  state => ({
    result: state.users.setPhoto.result,
    loading: state.users.setPhoto.loading,
    error: state.users.setPhoto.error
  }),
  { setPhoto }
)(Avatar);
