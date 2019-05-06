import React, { Component } from 'react'; 
import { BrowserRouter, Route} from 'react-router-dom';
import {Provider} from 'react-redux';
import setAuthToken from '../utils/setAuthToken';
import jwtDecode from 'jwt-decode';
import { setCurrentUser, logOutUser } from '../store/actions/auth.action';
import store from './../store';


import Header from './layouts/header';
import Landing from './layouts/landing';
import Dashboard from './layouts/dashboard';
import Login from './auth/login';
import Register from './auth/register';
import Footer from './layouts/footer';

import './App.css';


if(localStorage.jwtToken){ // check for token
  setAuthToken(localStorage.jwtToken);//set token to auth header

  const decoded = jwtDecode(localStorage.jwtToken);//decode token

  store.dispatch(setCurrentUser(decoded))// dispatch setCurrentUser

 //check expired token
 const currentTime = Date.now() / 1000;
 if(decoded.exp < currentTime) {
   //logout user
   store.dispatch(logOutUser());

 }

}


class App extends Component {
  render() {
    return (
      <Provider store={store}>
          <BrowserRouter>
            <div className="App">
              <Header />
                <Route exact path="/" component={Landing}/>
                <Route exact path="/login" component={Login}/>
                <Route exact path="/register" component={Register}/>
                <Route exact path="/dashboard" component={Dashboard}/>
              <Footer />
            </div>
          </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
