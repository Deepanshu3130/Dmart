import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import { configureStore } from '@reduxjs/toolkit'
import { Toaster } from 'react-hot-toast';

import productReducer from './slices/productSlice'
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById('root'));
const store =  configureStore({
  reducer: {
    product : productReducer
  }
})
root.render(


<Provider store={store}>
<BrowserRouter>
    <React.StrictMode>
    <App />
    <Toaster></Toaster>
  </React.StrictMode>
  </BrowserRouter>
</Provider>
 
);

reportWebVitals();
