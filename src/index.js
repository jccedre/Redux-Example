import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import counterReducer from './store/reducers/counterReducer';
import resultReducer from './store/reducers/resultReducer';

const rootReducer = combineReducers({
  ctr: counterReducer,
  res: resultReducer,
});

const logger = store => {
  return next => {
    return action => {
        console.log('[Middleware] Dispatching', action);
        const result = next(action);
        console.log('[Middleware] next state', store.getState());
        return result;
    }
  }
};

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const enhancer = composeEnhancers(
  applyMiddleware(logger, thunk),
);

const store = createStore(
  rootReducer,
  enhancer,
);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
