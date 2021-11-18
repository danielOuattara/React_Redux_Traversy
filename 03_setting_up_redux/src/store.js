import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers'

const initialState = {};

const middleware = [thunk];

// export const store = createStore(() => [], {}, applyMiddleware( ));

export const store = createStore(
    rootReducers, 
    initialState, 
    applyMiddleware(...middleware)
);