// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {Provider} from "react-redux";
import {store} from "./store/Store.ts";
import React from "react";
import {BrowserRouter} from "react-router-dom";

createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
        <Provider store={store}>
           <App/>
        </Provider>
    </BrowserRouter>
)