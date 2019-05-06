import React, { Component } from 'react';
import propTypes from 'prop-types';
import { addNewContact } from '../../store/actions/contact.action'; 
import { connect } from 'react-redux';

class AddContact extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            name: '',
            email: '',
            phone: ''
        }
    }


    componentDidMount(){
        // this.props.modalHandler('#my-modal')
    }

    fromSubmitHandler = event => {
        event.preventDefault()

        const contact = {
            name: this.state.name,
            email: this.state.email,
            phone: this.state.phone
        }

        this.props.addNewContact(contact);
        this.props.closeAddContact()
        
        
    }

    inputHandler = event => {
        this.setState({
            [event.target.name] : event.target.value
        })
    }



    render() {
        return (
            <div className="row py-5"> 
                <div className="col-sm-12">
                    <h4 className="display-4 text-center mb-3">add new contact</h4>
                    <form className="form-group" onSubmit={this.fromSubmitHandler}>
                        <div className="form-row">
                            <div className="col">
                                <input 
                                    type="text" className="form-control" 
                                    name="name" 
                                    placeholder="type your name..." 
                                    defaultValue={this.state.name}
                                    onChange={this.inputHandler}/>
                            </div>
                            <div className="col">
                                <input 
                                    type="email" className="form-control" 
                                    name="email" 
                                    placeholder="type your email..." 
                                    defaultValue={this.state.email}
                                    onChange={this.inputHandler}/>
                            </div>
                            <div className="col">
                                <input 
                                    type="tel" className="form-control" 
                                    name="phone" 
                                    placeholder="type your phone number..." 
                                    defaultValue={this.state.phone}
                                    onChange={this.inputHandler}/>
                            </div>
                            <div className="col text-center">
                                <button className="btn btn-primary" onClick={this.props.closeAddContact}>cancle</button>
                                <button className="btn btn-success ml-2">save contact</button>
                        </div>
                    </div>
                    </form>
                </div>
            </div>
        );
    }
}

AddContact.propTypes = {
    addNewContact: propTypes.func.isRequired
}



export default connect(null, {addNewContact})(AddContact);