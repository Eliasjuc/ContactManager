import React from 'react'
import { List, Header, Form, Divider, Button, Modal, Icon } from 'semantic-ui-react'
import axios from 'axios'

async function handleEdit(event, props) {
    event.preventDefault();

    try {

    } catch(error){

    }
}

async function handleDelete(event, props) {
    event.preventDefault();

    try {
        const response = await axios.delete(
            `http://localhost:3000/api/contacts/$id`
        );
        
        console.log(`user deleted`);
    } catch(error) {

    }
}

function Contact(props) {
    const [show, setShow] = React.useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
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
            <Modal show={show} onHide={handleClose} trigger={<Button floated="right" >Delete</Button>} closeIcon>
                <Header icon='archive' content='Archive Old Messages' />
                <Modal.Content>
                <p>
                    Are you sure you want to delete this contact?
                </p>
                </Modal.Content>
                <Modal.Actions>
                <Button color='red' onClick={handleClose}>
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