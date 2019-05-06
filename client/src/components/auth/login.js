import React, { Component } from 'react';
import propTypes from 'prop-types';
import {connect} from 'react-redux';
import { loginUser } from '../../store/actions/auth.action';




class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            email: '',
            password: '',
            errors: {}
         }
    }

    inputHandler = event => {
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    fromSubmitHandler = event => {
        event.preventDefault()

        let user = {
            email: this.state.email,
            password: this.state.password
        }

        this.props.loginUser(user)

    }

    componentWillReceiveProps(nextProps){

        if(nextProps.auth.isAuthenticated){
            this.props.history.push('/dashboard')
        }

        if(nextProps.errors){
            this.setState({
                errors: nextProps.errors
            })
        }
    }


    componentDidMount(){
        if(this.props.auth.isAuthenticated){
            this.props.history.push('/dashboard')
        }
    }


    render() { 

        const {error} = this.state.errors 
        
        


        return ( 
            <div className="section-padding login-slide text-center">
                <div className="container">
                    <div className="row">
                        <div className="offset-sm-3 col-sm-6">
                            <div className="login-form">
                                <h3>react contact book</h3>

                                <form className="form-group" onSubmit={this.fromSubmitHandler}>
                                    <input 
                                        type="email" name="email" 
                                        className="form-control mb-3" 
                                        placeholder="type your email...." 
                                        defaultValue={this.state.email}
                                        onChange={this.inputHandler}/>
                                    <input 
                                        type="password" name="password" 
                                        className="form-control mb-3" 
                                        placeholder="type your password......" 
                                        defaultValue={this.state.password}
                                        onChange={this.inputHandler}/>

                                         
                                            {error ? (
                                                <div className="text-danger mb-2">{error}</div> 
                                            ) : ''}

                                    <button className="btn btn-primary float-right">signin</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

         );
    }
}


Login.propTypes = {
    loginUser: propTypes.func.isRequired,
    errors: propTypes.object.isRequired
}




const mapStateToProps = state => {
    return {
        auth: state.auth,
        errors: state.errors
    }
}

 
export default connect(mapStateToProps, {loginUser})(Login);