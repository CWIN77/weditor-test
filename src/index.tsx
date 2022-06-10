import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import {BrowserRouter} from 'react-router-dom'
import {Amplify} from "aws-amplify"
import awsExports from './aws-exports'
Amplify.configure(awsExports);



ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render
(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
