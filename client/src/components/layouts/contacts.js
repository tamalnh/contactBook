import React, { Component } from 'react';
import propTypes from 'prop-types';
import { getAllContacts, deleteContact } from '../../store/actions/contact.action'
import { connect } from 'react-redux';
import AddContact from './addContact';


import Contact from './contact';
import EditContact from './editContact';

class Contacts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contact: {},
            isAdd: false,
            isEdit: false
        }
    }


    componentDidMount() {
        this.props.getAllContacts();
    }


    addContactHandler = () => {
        this.setState({
            isAdd: true
        })
    }

    closeAddContact = () => {
        this.setState({
            isAdd: false
        })
    }

    openEditContact = () => {
        this.setState({
            isEdit: true
        })
    }
    closeEditContact = () => {
        this.setState({
            isEdit: false
        })
    }

    getEditContactValue = contact => {
        this.setState({
            contact
        })
    }



    renderContact = ({contacts}) => {
       if(contacts.length > 0){
        return contacts.map(item => {
            return (
                <Contact 
                    key={item._id} 
                    contact={item} 
                    deleteContactHandler={this.deleteContactHandler} 
                    openEditContact={this.openEditContact}
                    getEditContactValue={this.getEditContactValue}/>
            )
        })
       }
        
    }


    deleteContactHandler = (id) => {
        this.props.deleteContact(id);
    }

 


    render() {
        const {contacts} = this.props
        
        return (
            <div className="contact-slide section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-4">
                            <form className="form-group">
                                <input type="text" className="form-control" name="search" placeholder="search....." />
                            </form>
                        </div>

                        <div className="offset-sm-4 col-sm-4 d-flex justify-content-end">
                            Add contact <button className="btn btn-primary" onClick={this.addContactHandler}>add new contact+</button>
                        </div>
                    </div>

                    {this.state.isAdd ? <AddContact closeAddContact={this.closeAddContact} closeAddContact={this.closeAddContact}/> : ''}
                    {this.state.isEdit? <EditContact contact={this.state.contact ? this.state.contact : ''} closeEditContact={this.closeEditContact}/> : ''}

                    <div className="row py-3">
                        <div className="col-sm-12">
                            <div className="contact-list">
                                <table className="table table-hover">
                                    <thead>
                                        <tr>
                                            <th>Name</th>
                                            <th>Email</th>
                                            <th>Number</th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        {this.renderContact(contacts)} 
                                    </tbody>

                                </table>
                            </div>
                        </div>
                    </div>


                    
                </div>
            </div>
        );
    }
}


Contacts.propTypes = {
    getAllContacts: propTypes.func.isRequired,
    deleteContact: propTypes.func.isRequired
}


const mapStateToProps = state => {
    // console.log(state);
    
    return { 
        contacts: state.contacts
    }
}

export default connect(mapStateToProps, { getAllContacts, deleteContact })(Contacts);