import React from 'react'
import { List, Header, Form, Divider, Button, Modal, Icon } from 'semantic-ui-react'
import axios from 'axios'

const incomingContact = {
    name: "Test",
    cellphone: "Test",
    homephone: "Test",
    workphone: "Test",
    email: "Test"
}



async function getContact() {
    try {

    } catch(error) {

    }
}

async function handleEdit() {
    try {

    } catch(error) {

    }
}

async function handleDelete() {
    try {

    } catch(error) {

    }
}

function Contact () {


    return (
        <>

            <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.2/semantic.min.css"/>
            <List>
                <Icon  name='address book' /> <p>Name: {incomingContact.name} </p> 
                <Icon  name='phone' /> <p>Cell Phone: {incomingContact.cellphone} </p> 
                <Icon  name='phone' /> <p>Home Phone: {incomingContact.homephone} </p> 
                <Icon  name='phone' /> <p>Work Phone: {incomingContact.workphone} </p> 
                <Icon  name='envelope' /> <p>Email: {incomingContact.email} </p>
            </List>
            <Button floated="right" icon="pencil" onClick={handleEdit} /> <br /> <br />
            <Modal trigger={<Button floated="right" >Edit</Button>} closeIcon>
                <Header icon='archive' content='Archive Old Messages' />
                <Modal.Content>
                <p>
                    Are you sure you want to delete this contact?
                </p>
                </Modal.Content>
                <Modal.Actions>
                <Button color='red'>
                    <Icon name='remove' /> No
                </Button>
                <Button color='green' onClick={handleDelete}>
                    <Icon name='checkmark' /> Yes
                </Button>
                </Modal.Actions>    
            </Modal>
            <br /><br />
            <Divider /> 
        </>

    )

}


export default Contact