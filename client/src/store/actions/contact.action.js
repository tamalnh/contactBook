import axios from 'axios';
import jwtDecode from 'jwt-decode'
import { GET_ALL_CONTACTS, GET_ERRORS, ADD_NEW_CONTACT, EDIT_CONTACT, DELETE_CONTACT} from '../actions/types.action'; 

const BASE_URL = 'http://localhost:5000'

export const getAllContacts =  () => dispatch => {

    const token = localStorage.jwtToken
    const user = jwtDecode(token)
    // console.log(user);
    

    axios.get(`${BASE_URL}/api/contacts/`, {
        headers: {
            'Authorization': token,
            'Content-Type': 'application/json'
        }
    })
    .then(res => {
        // console.log(res);
        
        dispatch({
            type: GET_ALL_CONTACTS,
            payload: res.data.contacts
        })
        
    })
    .catch(err => {
        // dispatch({
        //     type: GET_ERRORS,
        //     payload: err.response.data
        // })
    })
}

export const addNewContact = contact => dispatch => {
    const token = localStorage.jwtToken

    axios.post(`${BASE_URL}/api/contacts`, contact, {
        headers: {
            'Authorization': token,
            'Content-Type': 'application/json'
        }
    })
    .then(res => {
        // console.log(res);
        
        dispatch({
            type: ADD_NEW_CONTACT,
            payload: res.data.contact
        })
        
    })
    .catch(err => { 
        
        dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        })
    })
}


export const updateContact = contact => dispatch => {
    const token = localStorage.jwtToken   
    
    axios.patch(`${BASE_URL}/api/contacts/${contact._id}`, contact, {
            headers: {
                'Authorization': token,
                'Content-Type': 'application/json'
            }
    })
    .then(res => {
        dispatch({
            type: EDIT_CONTACT,
            payload: res.data.contact
        })
        
    })
    .catch(err => {
        
    })
}


export const deleteContact = id => dispatch => {
    const token = localStorage.jwtToken
    axios.delete(`${BASE_URL}/api/contacts/${id}`, {
        headers: {
            'Authorization': token,
            'Content-Type': 'application/json'
        }
    })
    .then(res => {
        dispatch({
            type: DELETE_CONTACT,
            payload: res.data.deletedConact
        })
        
    })
    .catch(err => {
        dispatch({
            type: GET_ERRORS,
            payload:err.response.data
        })
    })
}