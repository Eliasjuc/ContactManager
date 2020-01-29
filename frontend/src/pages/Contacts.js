import React from 'react'
import Contact from '../components/contact_component'
import axios from 'axios'
import { Button, Form, Modal, Segment, Message } from 'semantic-ui-react'
import cookie from 'js-cookie'

var id = cookie.get('token')
id = JSON.parse(id).user.id

const INITIAL_CONTACT = {
    user: id,
    name: '',
    cellphone: '',
    homephone: '',
    workphone: '',
    email: ''
}


function Contacts() {
    const [contacts, setContacts] = React.useState([])
    const [contact, setContact] = React.useState(INITIAL_CONTACT)
    const [disabled, setDisabled] = React.useState("true")
    const [loading, setLoading] = React.useState(false)
    const [error, setError] = React.useState('')
    const [modalOpen, handleClose] = React.useState(false)

    // "https://still-stream-56632.herokuapp.com/"  "http://localhost:3000/"
    const url = "http://localhost:3000/"
    //Get contacts by user id in cookie named token
    

    if (!id) {
        window.location.href = "/"
    }

    function handleChange(event) {
        const { name, value } = event.target
        setContact(prevState => ({...prevState, [name]: value }) ) 
     }


     async function createContact(event) {
        event.preventDefault(event)

        try {
            const payload = {...contact}
            const response = await axios.post(`${url}api/contacts/add`, payload)
        } catch (error) {
            console.error(error)
        }
    }

    axios.get(`${url}api/contacts/?user=${id}`) 
       .then( response => {
            setContacts( response.data )
        })
    
        return (
            <>
            <Modal trigger={<Button floated="right" >Add Contact</Button>} closeIcon>
            <Form error={Boolean(error)} loading={loading} onSubmit={createContact}> 
                <Segment>
                    <Form.Input 
                        fluid
                        icon="address book"
                        iconPosition="left"
                        label="Name"
                        placeholder="Name"
                        name="name"
                        value={contact.name}
                        onChange={handleChange}
                    />
                    <Form.Input 
                        fluid
                        icon="phone"
                        iconPosition="left"
                        label="Cell Phone"
                        placeholder="Cell Phone"
                        name="cellphone"
                        value={contact.cellphone}
                        onChange={handleChange}
                    />
                    <Form.Input 
                        fluid
                        icon="phone"
                        iconPosition="left"
                        label="Work Phone"
                        placeholder="Work Phone"
                        name="workphone"
                        value={contact.workphone}
                        onChange={handleChange}
                    />
                    <Form.Input 
                        fluid
                        icon="phone"
                        iconPosition="left"
                        label="Home Phone"
                        placeholder="Home Phone"
                        name="homephone"
                        value={contact.homephone}
                        onChange={handleChange}
                    />
                    <Form.Input 
                        fluid
                        icon="envelope"
                        iconPosition="left"
                        label="Email"
                        placeholder="Email"
                        name="email"
                        value={contact.email}
                        onChange={handleChange}
                    />
                    
                    <Button
                    disabled={loading}
                    icon="cancel"
                    type="submit"
                    color="green"
                    content="Add Contact"
                    onClick={createContact}
                    />
                    <Button
                    disabled={loading}
                    icon="upload"
                    type="button"
                    color="red"
                    content="Cancel"
                    onClick={handleClose}
                    />
                </Segment>
                </Form>
                </Modal>
            <div>
                {contacts.map(contact => 
                    <Contact 
                        contact={contact}
                    />
                    
                )}
            </div>
            </>
        )
}

export default Contacts