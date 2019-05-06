import {GET_ALL_CONTACTS, ADD_NEW_CONTACT, EDIT_CONTACT, DELETE_CONTACT} from '../actions/types.action';

const initialState = {
    contacts:{},
    isLoading: false
}

export default function (state=initialState, action){
    switch (action.type) {
        case GET_ALL_CONTACTS:
            return {
                ...state,
                contacts: action.payload
            }
        case ADD_NEW_CONTACT:             
            return {
                // ...state,
                contacts: [...state.contacts, action.payload]
            }
            case EDIT_CONTACT: 

            const findIndex = state.contacts.findIndex(contact => {
                return contact._id === action.payload._id
            })
            
            state.contacts.splice(findIndex, 1, action.payload)

            return{  
                ...state,
                contacts: state.contacts
            }


 

        case DELETE_CONTACT: 
            return { 
                contacts: [...state.contacts.filter(contact => contact._id !== action.payload._id )]
            }
    
        default:
            return state;
    }
}