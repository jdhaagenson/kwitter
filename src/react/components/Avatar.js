import React, {Component} from 'react';
import {Button, Header, Input, Image, Modal} from 'semantic-ui-react';
import {setPhoto} from '../../redux'

const defaultImages = [
    'rachel.png', 'ade.jpg', 'chris.jpg', 'christian.jpg', 'daniel.jpg', 'elliot.jpg', 'elyse.png',
    'helen.jpg', 'jenny.jpg', 'joe.jpg', 'justen.jpg', 'kristy.png', 'laura.jpg', 'matt.jpg', 'matthew.png',
    'molly.png', 'nan.jpg', 'nom.jpg', 'patrick.png', 'steve.jpg', 'stevie.jpg', 'tom.jpg', 'veronika.jpg', 'zoe.jpg'
  ]
  const imageURL = 'https://react.semantic-ui.com/images/avatar/large/'
  const randomAvatar = () => {
    let min = 0;
    let max = 24;
    let r = Math.floor(Math.random()*(max-min+1))+min
    return imageURL+defaultImages[r]
  }

class Avatar extends Component {
    state={
        image:"",
        modalOpen:false
    };

    handleOpenModal = () => {this.setState({modalOpen:true})}

    handleCloseModal = () => {this.setState({modalOpen:false})}

    handleSelect = (e) => {
        this.setState({image:e.src})
    }

    handleSetAvatar = (e) => {
        this.props.setPhoto(this.props.username, this.state.image)
    }



    render() {
        return(
            <>
            <Modal
            trigger={<Button>Change Avatar</Button>}
            open={this.state.modalOpen}
            onClose={this.handleClose}
            centered={false}>
            <Modal.Header>Select an Avatar</Modal.Header>
            <Modal.Content image>
                <Button.Group>
                    <Image wrapped inline bordered as="Button" size="tiny" src={imageURL + "ade.jpg"}/>
                    <Image wrapped inline bordered as="Button" size="tiny" src={imageURL + "rachel.png"}/>
                    <Image wrapped inline bordered as="Button" size="tiny" src={imageURL + "chris.jpg"}/>
                    <Image wrapped inline bordered as="Button" size="tiny" src={imageURL + "christian.jpg"}/>
                    <Image wrapped inline bordered as="Button" size="tiny" src={imageURL + "daniel.jpg"}/>
                    <Image wrapped inline bordered as="Button" size="tiny" src={imageURL + "elliot.jpg"}/>
                    <Image wrapped inline bordered as="Button" size="tiny" src={imageURL + "elyse.png"}/>
                    <Image wrapped inline bordered as="Button" size="tiny" src={imageURL + "helen.jpg"}/>
                    <Image wrapped inline bordered as="Button" size="tiny" src={imageURL + "jenny.jpg"}/>
                    <Image wrapped inline bordered as="Button" size="tiny" src={imageURL + "joe.jpg"}/>
                    <Image wrapped inline bordered as="Button" size="tiny" src={imageURL + "justen.jpg"}/>
                    <Image wrapped inline bordered as="Button" size="tiny" src={imageURL + "kristy.png"}/>
                    <Image wrapped inline bordered as="Button" size="tiny" src={imageURL + "laura.jpg"}/>
                    <Image wrapped inline bordered as="Button" size="tiny" src={imageURL + "matt.jpg"}/>
                    <Image wrapped inline bordered as="Button" size="tiny" src={imageURL + "matthew.png"}/>
                    <Image wrapped inline bordered as="Button" size="tiny" src={imageURL + "molly.png"}/>
                    <Image wrapped inline bordered as="Button" size="tiny" src={imageURL + "nan.jpg"}/>
                    <Image wrapped inline bordered as="Button" size="tiny" src={imageURL + "nom.jpg"}/>
                    <Image wrapped inline bordered as="Button" size="tiny" src={imageURL + "patrick.png"}/>
                    <Image wrapped inline bordered as="Button" size="tiny" src={imageURL + "steve.jpg"}/>
                    <Image wrapped inline bordered as="Button" size="tiny" src={imageURL + "stevie.jpg"}/>
                    <Image wrapped inline bordered as="Button" size="tiny" src={imageURL + "tom.jpg"}/>
                    <Image wrapped inline bordered as="Button" size="tiny" src={imageURL + "veronika.jpg"}/>
                    <Image wrapped inline bordered as="Button" size="tiny" src={imageURL + "zoe.jpg"}/>
                </Button.Group>
                <Modal.Description>
                    <Header>Default Avatar</Header>
                    <p>
                        Choose an avatar to display as your profile picture or upload your own photo
                    </p>
                </Modal.Description>
                <Modal.Actions>
                    <Button>Upload Image</Button>

                    <Button
                        onClick={this.handleSetAvatar}
                        >Done</Button>
                </Modal.Actions>
            </Modal.Content>
        </Modal>
        </>
        )
    }

}

export default Avatar;