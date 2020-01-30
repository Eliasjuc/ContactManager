import React from 'react'
import { List, Header, Form, Divider, Button, Modal, Icon } from 'semantic-ui-react'
import axios from 'axios'

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


function Contact(props) {  
        return (
            <>
                <List>
                    <Icon  name='address book' /> <p>Name: {props.contact.name} </p> 
                    <Icon  name='phone' /> <p>Cell Phone: {props.contact.cellphone} </p> 
                    <Icon  name='phone' /> <p>Home Phone: {props.contact.homephone} </p> 
                    <Icon  name='phone' /> <p>Work Phone: {props.contact.workphone} </p> 
                    <Icon  name='envelope' /> <p>Email: {props.contact.email} </p>
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