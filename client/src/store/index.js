import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk'
import reducer from './reducers'

const nitialState = {}
const thunkMiddleware = [thunk];

const store = createStore(
        reducer, 
        nitialState,
        compose(applyMiddleware(...thunkMiddleware),
            window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
        )
    );

export default store;

