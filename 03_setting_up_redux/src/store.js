import { applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers'

const initialState = {};

const middleware = [thunk];

// export const store = createStore(() => [], {}, applyMiddleware( ));

 const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


 export const store = createStore(
    rootReducer, 
    initialState,
    /* preloadedState, */ 
    composeEnhancers(
        applyMiddleware(...middleware)
  ));

