import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

// import App from './App';
import reportWebVitals from './reportWebVitals';
import {CartContextProvider} from "./components/Context/CartContext"

import { RouterProvider } from "react-router-dom";
import { router } from "./router";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBT74QRRNhc7rx5LMeUCuZaaj7woiFmdog",
  authDomain: "e-commerce-ch-coffe-house.firebaseapp.com",
  projectId: "e-commerce-ch-coffe-house",
  storageBucket: "e-commerce-ch-coffe-house.appspot.com",
  messagingSenderId: "812174082820",
  appId: "1:812174082820:web:79faacdac68a33f46e4651"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CartContextProvider>
      <RouterProvider router={router}/>
    </CartContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();