import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter,Route } from "react-router-dom";

import { Provider } from "react-redux";
import store from './store/configureStore';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Assets/main-styles.css';
import './Assets/responsive.css';
import './Assets/extrea.css';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
       <BrowserRouter>
        <App/>  
        </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
