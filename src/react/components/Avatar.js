import React, {Component} from 'react';
import {Button, Icon, Header, Divider, Image, Modal} from 'semantic-ui-react';
import {setPhoto, getPhoto} from '../../redux';
import { connect } from 'react-redux';
import UploadPhoto from './UploadPhoto'

const imageURL = "https://react.semantic-ui.com/images/avatar/large/";

class Avatar extends Component {
  state={
      selected:"",
      modalOpen:false
  };

  handleOpen = () => {this.setState({modalOpen:true})}

  handleClose = () => {this.setState({modalOpen:false})}


  handleSetAvatar = (e) => {
    e.preventDefault()
    this.props.setPhoto(this.props.username, this.state.selected)
    this.setState({modalOpen:false})
  }

  handleSelect = e => {
    e.preventDefault()
    this.setState({ image: e.target.src });
  };


    render() {
        return(
            <div>
            <Modal
            wrapped
            trigger={<Button fluid onClick={this.handleOpen}>Change Avatar</Button>}
            open={this.state.modalOpen}
            onClose={this.handleClose}
            centered={false}>
            <Header><Icon name="user"/>Select an Avatar</Header>
            <Modal.Content image>

            <div>
                <Image.Group >
                    <Image onClick={this.handleSelect} centered as='button' bordered size="tiny" src={imageURL + "ade.jpg"} />
                    <Image onClick={this.handleSelect} centered as='button' bordered size="tiny" src={imageURL + "rachel.png"}/>
                    <Image onClick={this.handleSelect} centered as='button' bordered size="tiny" src={imageURL + "chris.jpg"}/>
                    <Image onClick={this.handleSelect} centered as='button' bordered size="tiny" src={imageURL + "christian.jpg"}/>
                    <Image onClick={this.handleSelect} centered as='button' bordered size="tiny" src={imageURL + "daniel.jpg"}/>
                    <Image onClick={this.handleSelect} centered as='button' bordered size="tiny" src={imageURL + "elliot.jpg"}/>
                    <Image onClick={this.handleSelect} centered as='button' bordered size="tiny" src={imageURL + "elyse.png"}/>
                    <Image onClick={this.handleSelect} centered as='button' bordered size="tiny" src={imageURL + "helen.jpg"}/>
                    <Image onClick={this.handleSelect} centered as='button' bordered size="tiny" src={imageURL + "jenny.jpg"}/>
                    <Image onClick={this.handleSelect} centered as='button' bordered size="tiny" src={imageURL + "joe.jpg"}/>
                    <Image onClick={this.handleSelect} centered as='button' bordered size="tiny" src={imageURL + "justen.jpg"}/>
                    <Image onClick={this.handleSelect} centered as='button' bordered size="tiny" src={imageURL + "kristy.png"}/>
                    <Image onClick={this.handleSelect} centered as='button' bordered size="tiny" src={imageURL + "laura.jpg"}/>
                    <Image onClick={this.handleSelect} centered as='button' bordered size="tiny" src={imageURL + "matt.jpg"}/>
                    <Image onClick={this.handleSelect} centered as='button' bordered size="tiny" src={imageURL + "matthew.png"}/>
                    <Image onClick={this.handleSelect} centered as='button' bordered size="tiny" src={imageURL + "molly.png"}/>
                    <Image onClick={this.handleSelect} centered as='button' bordered size="tiny" src={imageURL + "nan.jpg"}/>
                    <Image onClick={this.handleSelect} centered as='button' bordered size="tiny" src={imageURL + "nom.jpg"}/>
                    <Image onClick={this.handleSelect} centered as='button' bordered size="tiny" src={imageURL + "patrick.png"}/>
                    <Image onClick={this.handleSelect} centered as='button' bordered size="tiny" src={imageURL + "steve.jpg"}/>
                    <Image onClick={this.handleSelect} centered as='button' bordered size="tiny" src={imageURL + "stevie.jpg"}/>
                    <Image onClick={this.handleSelect} centered as='button' bordered size="tiny" src={imageURL + "tom.jpg"}/>
                    <Image onClick={this.handleSelect} centered as='button' bordered size="tiny" src={imageURL + "veronika.jpg"}/>
                    <Image onClick={this.handleSelect} centered as='button' bordered size="tiny" src={imageURL + "zoe.jpg"}/>
                </Image.Group>
                <Divider hidden />
              </div>
              <span>
                <Modal.Actions>
                  <UploadPhoto
                    username={this.props.username}
                    />
                    <Divider hidden/>
                    <Button
                        type='submit'
                        onClick={this.handleSetAvatar}
                        onSubmit={this.handleSetAvatar}
                        >Done</Button>
                </Modal.Actions>
            </span>

            </Modal.Content>
        </Modal>
      </div>
    );
  }
}

export default connect(
    (state) => ({
        getresult:state.users.getPhoto.result,
        setresult: state.users.setPhoto.result,
        setloading: state.users.setPhoto.loading,
        seterror: state.users.setPhoto.error,
        username: state.auth.login.result.username
    }),
    {setPhoto, getPhoto}
)(Avatar)
