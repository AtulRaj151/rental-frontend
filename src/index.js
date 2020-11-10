import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App';
import { configureStore } from './store'
import { Provider } from 'react-redux';

const store = configureStore();
console.log("Store in index.js",store)
ReactDOM.render(
   <Provider store= {store}>
           <App />
   </Provider>    
 ,
  document.getElementById('root')
);


