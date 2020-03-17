import React, {Component} from 'react';
import {Button, Header, Input, Divider, Image, Modal} from 'semantic-ui-react';
import {setPhoto} from '../../redux';
import { connect } from 'react-redux';


  const imageURL = 'https://react.semantic-ui.com/images/avatar/large/'

class Avatar extends Component {
    state={
        image:"",
        modalOpen:false
    };

    handleOpen = () => {this.setState({modalOpen:true})}

    handleClose = () => {this.setState({modalOpen:false})}

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
            wrapped
            trigger={<Button>Change Avatar</Button>}
            open={this.handleOpen}
            onClose={this.handleClose}
            centered={false}>
            <Modal.Header>Select an Avatar</Modal.Header>
            <Modal.Content image>
                <Image.Group >
                    <Image onClick={this.handleSelect} centered bordered as="Button" size="tiny" src={imageURL + "ade.jpg"}/>
                    <Image onClick={this.handleSelect} centered bordered as="Button" size="tiny" src={imageURL + "rachel.png"}/>
                    <Image onClick={this.handleSelect} centered bordered as="Button" size="tiny" src={imageURL + "chris.jpg"}/>
                    <Image onClick={this.handleSelect} centered bordered as="Button" size="tiny" src={imageURL + "christian.jpg"}/>
                </Image.Group>
                <Image.Group>
                    <Image onClick={this.handleSelect} centered bordered as="Button" size="tiny" src={imageURL + "daniel.jpg"}/>
                    <Image onClick={this.handleSelect} centered bordered as="Button" size="tiny" src={imageURL + "elliot.jpg"}/>
                    <Image onClick={this.handleSelect} centered bordered as="Button" size="tiny" src={imageURL + "elyse.png"}/>
                    <Image onClick={this.handleSelect} centered bordered as="Button" size="tiny" src={imageURL + "helen.jpg"}/>
                </Image.Group>
                <Divider hidden/>
                <Image.Group>
                    <Image onClick={this.handleSelect} centered bordered as="Button" size="tiny" src={imageURL + "jenny.jpg"}/>
                    <Image onClick={this.handleSelect} centered bordered as="Button" size="tiny" src={imageURL + "joe.jpg"}/>
                    <Image onClick={this.handleSelect} centered bordered as="Button" size="tiny" src={imageURL + "justen.jpg"}/>
                    <Image onClick={this.handleSelect} centered bordered as="Button" size="tiny" src={imageURL + "kristy.png"}/>
                </Image.Group>
                <Image.Group>
                    <Image onClick={this.handleSelect} centered bordered as="Button" size="tiny" src={imageURL + "laura.jpg"}/>
                    <Image onClick={this.handleSelect} centered bordered as="Button" size="tiny" src={imageURL + "matt.jpg"}/>
                    <Image onClick={this.handleSelect} centered bordered as="Button" size="tiny" src={imageURL + "matthew.png"}/>
                    <Image onClick={this.handleSelect} centered bordered as="Button" size="tiny" src={imageURL + "molly.png"}/>
                </Image.Group>
                <Divider hidden/>
                <Image.Group>
                    <Image onClick={this.handleSelect} centered bordered as="Button" size="tiny" src={imageURL + "nan.jpg"}/>
                    <Image onClick={this.handleSelect} centered bordered as="Button" size="tiny" src={imageURL + "nom.jpg"}/>
                    <Image onClick={this.handleSelect} centered bordered as="Button" size="tiny" src={imageURL + "patrick.png"}/>
                    <Image onClick={this.handleSelect} centered bordered as="Button" size="tiny" src={imageURL + "steve.jpg"}/>
                </Image.Group>
                <Image.Group>
                    <Image onClick={this.handleSelect} centered bordered as="Button" size="tiny" src={imageURL + "stevie.jpg"}/>
                    <Image onClick={this.handleSelect} centered bordered as="Button" size="tiny" src={imageURL + "tom.jpg"}/>
                    <Image onClick={this.handleSelect} centered bordered as="Button" size="tiny" src={imageURL + "veronika.jpg"}/>
                    <Image onClick={this.handleSelect} centered bordered as="Button" size="tiny" src={imageURL + "zoe.jpg"}/>
                </Image.Group>
                <Divider hidden/>

                <Modal.Actions>
                    <Button type='image'>Upload Image</Button>
                    <Divider hidden/>
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

export default connect(
    (state) => ({
        result: state.users.setPhoto.result,
        loading: state.users.setPhoto.loading,
        error: state.users.setPhoto.error
    }),
    {setPhoto}
)(Avatar)