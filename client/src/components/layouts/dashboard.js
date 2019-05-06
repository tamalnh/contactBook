import React, { Component } from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import setAuthToken from '../../utils/setAuthToken';


import Contacts from './contacts';



class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }


    render() {

        if (!this.props.auth.isAuthenticated) {
            window.location.href = '/'
        }

        return (
            <div className="dashboard">
                <Contacts />
            </div>
        );
    }
}



const mapStateToProps = state => {
    return {
        auth: state.auth
    }
}


export default connect(mapStateToProps)(Dashboard);