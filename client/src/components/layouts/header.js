import React, { Component } from 'react';
import propTypes from 'prop-types';
import {Link} from 'react-router-dom';
import { logOutUser } from '../../store/actions/auth.action';
import setAuthToken from '../../utils/setAuthToken'
import { connect } from 'react-redux';






class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }


    logoutHandler = e => {
        e.preventDefault()
        this.props.logOutUser()
    }


    render() { 
        const {user, isAuthenticated} = this.props.auth; 


        const authLink = (
            <ul className="menu-right"> 
                <li>{user.email}</li>
                <li> <Link to="/logout" onClick={this.logoutHandler}> logout </Link> </li> 
            </ul>
            
        )

        const guestLink = (
            <ul className="menu-right"> 
                <li> <Link to="/login"> Login </Link> </li>
                <li><Link to="/register"> Register </Link></li> 
            </ul>
        )

        return ( 
            <div className="header-nav">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-3">
                             <div className="logo">
                                <Link to="/">react contact book</Link>
                             </div>
                        </div>

                        <div className="col-sm-3">
                            <ul className="menu-left">
                                <li><Link to="#about">How it works</Link></li> 
                                <li><Link to="#feature">feature</Link></li> 
                            </ul>
                        </div>

                        <div className="offset-sm-3 col-sm-3">
                            {isAuthenticated ? authLink : guestLink}
                        </div>
                    </div>
                </div>
            </div>
                                                                                                                                                                                                                                                                                                                                                                                                             
         );
    }
}

Header.propTypes = {
    auth: propTypes.object.isRequired,
    logOutUser: propTypes.func.isRequired
}


const mapStateToProps = state => {
    return {
        auth: state.auth,
    }
}
 
export default connect(mapStateToProps, {logOutUser})(Header);