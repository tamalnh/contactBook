import React, { Component } from 'react';
import propTypes from 'prop-types';
import {withRouter} from 'react-router-dom';
import {  connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import { registerUser } from '../../store/actions/auth.action'


class Register extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            name: '',
            email: '',
            password: ''
         }
    }

    formSubmitHandler = e => {
        e.preventDefault()

        let  newUser = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password
        }

        this.props.registerUser(newUser, this.props.history);


    }

    inputHandler = event => {
        this.setState({
            [event.target.name] : event.target.value
        })
    }
    

    componentDidMount(){
        if(this.props.auth.isAuthenticated){
            this.props.history.push('/dashboard')
        }
    } //start from here



    render() { 
        // console.log(this.props);
        // console.log(this.state);
        
        return ( 
            <div className="section-padding register-slide text-center">
                <div className="container">
                    <div className="row">
                        <div className="offset-sm-3 col-sm-6">
                            <div className="register-form">
                                <h3>react contact book</h3>

                                <form className="form-group" onSubmit={this.formSubmitHandler}>
                                    <input type="text" 
                                        name="name" 
                                        className="form-control mb-3" 
                                        placeholder="type your name...." 
                                        value={this.state.name}
                                        onChange={this.inputHandler}/> 
                                    <input type="email" 
                                        name="email" 
                                        className="form-control mb-3" 
                                        placeholder="type your email...." 
                                        value={this.state.email}
                                        onChange={this.inputHandler}/>
                                    <input type="password" 
                                        name="password" 
                                        className="form-control mb-3" 
                                        placeholder="type your password......" 
                                        value={this.state.password}
                                        onChange={this.inputHandler}/>

                                    <button className="btn btn-primary float-right">signup</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

         );
    }
}


Register.propTypes = {
    registerUser: propTypes.func.isRequired,
    auth: propTypes.object.isRequired,
    errors: propTypes.object.isRequired
}



// const mapDispatchToProps = dispatch => {
//     return bindActionCreators({
//         registerUser
//     }, dispatch)
// }

const mapStateToProps = state => {     
    return {
        auth: state.auth,
        errors: state.errors
    }
}
 
export default connect(mapStateToProps, {registerUser}) (withRouter(Register));