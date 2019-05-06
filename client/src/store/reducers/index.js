import {combineReducers} from 'redux';
import authReducer from './auth.reducer';
import contactsReducer from './contact.reducer';
import errorReducer from './error.reducer';


const rootReducer = combineReducers({
    auth: authReducer,
    contacts: contactsReducer,
    errors: errorReducer,
})

export default rootReducer;