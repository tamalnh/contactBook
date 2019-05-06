import axios from 'axios';
import jwtDecode from 'jwt-decode';
import {GET_ERRORS, SET_CURRENT_USER} from './types.action'; 
import setAuthToken from '../../utils/setAuthToken';


const BASE_URL = 'http://localhost:5000'


export const registerUser = (user, history) => dispatch =>  { 
    
    axios.post(`${BASE_URL}/api/users/signup`, user)
        .then(res => {
            history.push('/login')
        })
        .catch(err => {
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
                
            })
            
        })
}

export const loginUser = user => dispatch => {
    axios.post(`${BASE_URL}/api/users/signin`, user)
        .then(res => {
            const {token} = res.data; //collect token

            localStorage.setItem('jwtToken', token)//save token to localStorage

            setAuthToken(token) //pass token to auth header

            const decode = jwtDecode(token); //decode user from token

            dispatch(setCurrentUser(decode))//dispatch setCurrentUserFunc
            
        })
        .catch(err => {
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        })
}

export const setCurrentUser = user => {
    return({
        type: SET_CURRENT_USER,
        payload: user
    })
}

export const logOutUser = () => dispatch => {
    localStorage.removeItem('jwtToken') //remove token from localStorage

    setAuthToken(false)//pass falsy value to auth header
    dispatch(setCurrentUser({})) // dispatch setCurrentUser as an empty object
    window.location.href = '/'
}