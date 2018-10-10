import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider }  from 'react-redux'
import mainReducer from './reducers'
import ReduxThunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import App from './App';

import registerServiceWorker from './registerServiceWorker';

const createStoreWithMiddleware = applyMiddleware(ReduxThunk)(createStore)

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(mainReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())}>
  <App />
  </Provider>

  , document.getElementById('root'));
registerServiceWorker();
