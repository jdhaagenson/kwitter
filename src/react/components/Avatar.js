import React, { Component } from "react";
import {
  Button,
  Header,
  Input,
  Divider,
  Image,
  Modal
} from "semantic-ui-react";
import  setPhoto  from "../../redux";
import { connect } from "react-redux";
import UploadImage from "./UploadImage"

const imageURL = "https://react.semantic-ui.com/images/avatar/large/";
const randomAvatar = () => {
  let min = 0;
  let max = 23;
  let r = Math.floor(Math.random() * (max - min + 1)) + min;
  return imageURL;
};
class Avatar extends Component {
    constructor(props) {
        super(props)

        this.handleClose = this.handleClose.bind(this)
        this.handleOpen = this.handleOpen.bind(this)
        // this.handleSelect = this.handleSelect.bind(this)

        this.state = {
            modalOpen: false,
            // image: randomAvatar(),
            file: null
        }
    }

//   const {open, modalOpen} = React.useState(false);

  handleOpen() {
    this.setState({ modalOpen: true });
  };

  handleClose() {
    this.setState({ modalOpen: false });
  };

  // handleSelect(e) {
  //   this.setState({ image: e.src });
  // };

  handleSetAvatar(e) {
    e.preventDefault();
    this.props.setPhoto(e.target);
  };

  handleUploadImage(event) {
    this.setState({
      file: URL.createObjectURL(event.target.files[0])
    })
  };

  renderImages() {
      let images = ['ade.jpg']
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
            key={'img-' + i}
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
          )
      })
  }
  render() {
    //   if (this.state.modalOpen === true) {

          return (
              <>
              {this.state.modalOpen &&
        <Modal
          wrapped
          open={this.handleOpen}
          onClose={this.handleClose}
          centered={false}
          >
          <Modal.Header>Select an Avatar</Modal.Header>
          <Modal.Content image>
            <Image.Group>
                {this.renderImages()}
            </Image.Group>
            <Image.Group>
              
            </Image.Group>
            <Divider hidden />
            <Image.Group>
    
            </Image.Group>
            <Image.Group>
              
            </Image.Group>
            <Divider hidden />
            <Image.Group>
            
            </Image.Group>
            <Image.Group>
            </Image.Group>
            <Divider hidden />
            
            <Modal.Actions>
              <form onSubmit={this.handleUploadImage}>
                <input floated="right" type="file" icon="file" name="picture" />
                <input type="submit" onClick="handleImageUpload "value="Upload Picture" />
              </form>
              <Divider hidden />
              <Button onClick={this.handleClose}>Done</Button>
            </Modal.Actions>
          </Modal.Content>
        </Modal>
  }
  <button className="ui button" style={{margin: 10}} onClick={this.handleOpen}>Change Avatar</button>
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
