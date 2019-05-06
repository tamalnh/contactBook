import React, { Component } from 'react';
import propTypes from 'prop-types';
import { updateContact } from '../../store/actions/contact.action'; 
import { connect } from 'react-redux';

class EditContact extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            id: '',
            name: '',
            email: '',
            phone: ''
        }
    }

    componentDidMount() {
        const {_id,name, email, phone} = this.props.contact
        this.setState({
            id: _id,
            name,
            email,
            phone
        })
    }




    fromSubmitHandler = event => {
        event.preventDefault() 
        let updatedContact = {
            _id: this.state.id,
            name: this.state.name,
            email: this.state.email,
            phone: this.state.phone
        }  

        this.props.updateContact(updatedContact);
        this.props.closeEditContact();
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
                    <h4 className="display-4 text-center mb-3">edit contact</h4>
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
                                <button className="btn btn-primary" onClick={this.props.closeEditContact}>cancle</button>
                                <button className="btn btn-success ml-2">update contact</button>
                        </div>
                    </div>
                    </form>
                </div>
            </div>
        );
    }
}

EditContact.propTypes = { 
    updateContact: propTypes.func.isRequired
}



export default connect(null, {updateContact})(EditContact);