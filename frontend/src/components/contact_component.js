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


    const [contacts, setContacts] = React.useState([])
    const [searchContact, setSearchContact] = React.useState("")
    const [disabled, setDisabled] = React.useState("true")
    const [loading, setLoading] = React.useState(false)
    const [error, setError] = React.useState('')
    const [modalOpen, handleOpen] = React.useState(false)

    function closeModal() {
        handleOpen(!modalOpen)
     }

        return (
            <>
                <List>
                    <Icon  name='address book' /> <p>Name: {props.contact.name} </p> 
                    <Icon  name='phone' /> <p>Cell Phone: {props.contact.cellphone} </p> 
                    <Icon  name='phone' /> <p>Home Phone: {props.contact.homephone} </p> 
                    <Icon  name='phone' /> <p>Work Phone: {props.contact.workphone} </p> 
                    <Icon  name='envelope' /> <p>Email: {props.contact.email} </p>
                </List>
                <Modal 
                trigger={<Button onClick={closeModal} floated="right" >Edit Contact</Button>} 
                open={modalOpen}  
                className="editContactFrom"          
            >

                     <Form error={Boolean(error)} loading={loading}>
                        <Form.Input 
                            fluid
                            icon="address book"
                            iconPosition="left"
                            label="Name"
                            placeholder="Name"
                            name="Name"
                            value={props.contact.name}
                            onChange={handleEdit}
                        />
                        <Form.Input 
                            fluid
                            icon="phone"
                            iconPosition="left"
                            label="Cell Phone"
                            placeholder="Cell Phone"
                            name="cellphone"
                            value={props.contact.cellphone}
                            onChange={handleEdit}
                        />
                        <Form.Input 
                            fluid
                            icon="phone"
                            iconPosition="left"
                            label="Work Phone"
                            placeholder="Work Phone"
                            name="workphone"
                            value={props.contact.workphone}
                            onChange={handleEdit}
                        />
                        <Form.Input 
                            fluid
                            icon="phone"
                            iconPosition="left"
                            label="Home Phone"
                            placeholder="Home Phone"
                            name="homephone"
                            value={props.contact.homephone}
                            onChange={handleEdit}
                        />
                        <Form.Input 
                            fluid
                            icon="envelope"
                            iconPosition="left"
                            label="Email"
                            placeholder="Email"
                            name="email"
                            value={props.contact.email}
                            onChange={handleEdit}
                        />
                    
                        <Button
                            disabled={loading}
                            icon="cancel"
                            type="submit"
                            color="green"
                            content="Save Changes"
                            //onClick={closeModal}
                        />
                        <Button
                            disabled={loading}
                            icon="upload"
                            type="button"
                            color="red"
                            content="Cancel"
                            onClick={closeModal}
                        />
                    </Form>
                </Modal>

                 <br /> <br />
                <Modal trigger={<Button floated="right" >Delete Contact</Button>} closeIcon>
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
                  <div>
            </div>
            </>

        )
    }

export default Contact
