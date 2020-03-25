import React, { Component } from "react";
import {
  Button,
  Header,
  Form,
  Input,
  Divider,
  Image,
  Modal,
  Icon
} from "semantic-ui-react";
import { setPhoto } from "../../redux";
import { connect } from "react-redux";

const imageURL = "https://react.semantic-ui.com/images/avatar/large/";

class Avatar extends Component {
  state = {
    image: "https://techformist.com/uploads/quokka-js-playground-vscode.gif",
    modalOpen: false
  };

  handleOpen = e => {
    this.setState({ modalOpen: true });
  };

  handleClose = e => {
    this.setState({ modalOpen: false });
  };

  handleSelect = event => {
    this.setState({ image: event.target.src });
  };

  handleSetAvatar = e => {
    this.props.setPhoto(this.props.username, this.state.image);
  };

  render() {
    return (
      <div>
        <Modal
          wrapped
          trigger={
            <Button onClick={this.handleOpen} fluid>
              <Icon name="image outline" />
              Change Avatar
            </Button>
          }
          open={this.state.modalOpen}
          onClose={this.handleClose}
          centered={false}
        >
          <Header>Select an Avatar</Header>
          <Modal.Content image>
            <Form action={this.props.setPhoto} method="PUT">
              <div>
                <Image.Group>
                  <Image
                    onClick={this.handleSelect}
                    centered
                    bordered
                    as="Button"
                    size="tiny"
                    src={imageURL + "ade.jpg"}
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
                    as="Button"
                    bordered
                    size="tiny"
                    src={imageURL + "chris.jpg"}
                  />
                  <Image
                    onClick={this.handleSelect}
                    centered
                    as="Button"
                    bordered
                    size="tiny"
                    src={imageURL + "christian.jpg"}
                  />
                  <Image
                    onClick={this.handleSelect}
                    centered
                    as="Button"
                    bordered
                    size="tiny"
                    src={imageURL + "daniel.jpg"}
                  />
                  <Image
                    onClick={this.handleSelect}
                    centered
                    as="Button"
                    bordered
                    size="tiny"
                    src={imageURL + "elliot.jpg"}
                  />
                  <Image
                    onClick={this.handleSelect}
                    centered
                    as="Button"
                    bordered
                    size="tiny"
                    src={imageURL + "elyse.png"}
                  />
                  <Image
                    onClick={this.handleSelect}
                    centered
                    as="Button"
                    bordered
                    size="tiny"
                    src={imageURL + "helen.jpg"}
                  />
                </Image.Group>
                <Image.Group>
                  <Image
                    onClick={this.handleSelect}
                    centered
                    as="Button"
                    bordered
                    size="tiny"
                    src={imageURL + "jenny.jpg"}
                  />
                  <Image
                    onClick={this.handleSelect}
                    centered
                    as="Button"
                    bordered
                    size="tiny"
                    src={imageURL + "joe.jpg"}
                  />
                  <Image
                    onClick={this.handleSelect}
                    centered
                    as="Button"
                    bordered
                    size="tiny"
                    src={imageURL + "justen.jpg"}
                  />
                  <Image
                    onClick={this.handleSelect}
                    centered
                    as="Button"
                    bordered
                    size="tiny"
                    src={imageURL + "kristy.png"}
                  />
                  <Image
                    onClick={this.handleSelect}
                    centered
                    as="Button"
                    bordered
                    size="tiny"
                    src={imageURL + "laura.jpg"}
                  />
                  <Image
                    onClick={this.handleSelect}
                    centered
                    as="Button"
                    bordered
                    size="tiny"
                    src={imageURL + "matt.jpg"}
                  />
                  <Image
                    onClick={this.handleSelect}
                    centered
                    as="Button"
                    bordered
                    size="tiny"
                    src={imageURL + "matthew.png"}
                  />
                  <Image
                    onClick={this.handleSelect}
                    centered
                    as="Button"
                    bordered
                    size="tiny"
                    src={imageURL + "molly.png"}
                  />
                </Image.Group>
                <Image.Group>
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
                    as="Button"
                    bordered
                    size="tiny"
                    src={imageURL + "nom.jpg"}
                  />
                  <Image
                    onClick={this.handleSelect}
                    centered
                    as="Button"
                    bordered
                    size="tiny"
                    src={imageURL + "patrick.png"}
                  />
                  <Image
                    onClick={this.handleSelect}
                    centered
                    as="Button"
                    bordered
                    size="tiny"
                    src={imageURL + "steve.jpg"}
                  />
                  <Image
                    onClick={this.handleSelect}
                    centered
                    as="Button"
                    bordered
                    size="tiny"
                    src={imageURL + "stevie.jpg"}
                  />
                  <Image
                    onClick={this.handleSelect}
                    centered
                    as="Button"
                    bordered
                    size="tiny"
                    src={imageURL + "tom.jpg"}
                  />
                  <Image
                    onClick={this.handleSelect}
                    centered
                    as="Button"
                    bordered
                    size="tiny"
                    src={imageURL + "veronika.jpg"}
                  />
                  <Image
                    onClick={this.handleSelect}
                    as="Button"
                    centered
                    bordered
                    size="tiny"
                    src={imageURL + "zoe.jpg"}
                  />
                </Image.Group>
                <Divider hidden />
              </div>
              <span>
                <Modal.Actions>
                  <Button type="file">Upload Image</Button>
                  <Input type="file" />
                  <Divider hidden />
                  <Button
                    onClick={this.handleSetAvatar}
                    onSubmit={this.handleSetAvatar}
                  >
                    Done
                  </Button>
                </Modal.Actions>
              </span>
            </Form>
          </Modal.Content>
        </Modal>
      </div>
    );
  }
}

export default connect(
  state => ({
    result: state.users.setPhoto.result,
    loading: state.users.setPhoto.loading,
    error: state.users.setPhoto.error,
    username: state.auth.login.result.username
  }),
  { setPhoto }
)(Avatar);
