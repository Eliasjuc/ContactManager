import React from 'react'
import Contact from '../components/contact_component'
import axios from 'axios'
import { CommentActions } from 'semantic-ui-react'
import cookie from 'js-cookie'

class Contacts extends React.Component {
    constructor() {
        super()
        this.state = {contacts: []}
    }
    componentDidMount() {

        //Get contacts by user id in cookie named token
        var id = cookie.get('token')
        id = JSON.parse(id).user.id
        // "https://still-stream-56632.herokuapp.com/"  "http://localhost:3000/"
        const url = "http://localhost:3000/"
        axios.get(`${url}api/contacts/?user=${id}`) 
            .then( response => {
                const contacts = response.data
                this.setState({ contacts })
            })
    }   
    
    render(){    
        let contacts = this.state.contacts
        return (
            <div key={contacts._id}>
                {contacts.map(contact => 
                    <Contact 
                        contact={contact}
                    />
                    
                )}
            </div>
        )
    }
}

export default Contacts