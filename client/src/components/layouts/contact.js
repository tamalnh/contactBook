import React, { Component } from 'react';


class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = { 

         }
    }
 

    deletehandler = (e, contactID) => {
        e.preventDefault()

        let confirmDelete = window.confirm('Are you sure want to delete this?')

        if(confirmDelete){
            this.props.deleteContactHandler(contactID)
        }
    }

    editContactHandler = (e, contact) => {
        e.preventDefault()
        this.props.getEditContactValue(contact)

        this.props.openEditContact()
        
        
    }


    render() { 
        const {contact} = this.props;

        return ( 
                <tr>
                    <td>{contact.name}</td>
                    <td>{contact.email}</td>
                    <td>{contact.phone}</td>
                    <td>
                        <a href="#" className="d-inline-block text-primary mr-3" onClick={e => this.editContactHandler(e, contact)}>
                            <i className="far fa-edit"></i>
                        </a>
                        <a href="#" className="d-inline-block text-danger" 
                            onClick={e => this.deletehandler(e, contact._id)}>
                            <i className="far fa-trash-alt"></i>
                        </a>
                    </td>
                </tr> 
         );
    }
}
 
export default Contact;