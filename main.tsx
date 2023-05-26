import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter} from 'react-router-dom';
import { Auth0Provider } from "@auth0/auth0-react";


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render( 
    <Auth0Provider
      domain="dev-bvmzyxmgv3k4ifju.us.auth0.com"
      clientId="lF63ki9CNbSJg1Ltx8aPBiC5irq5Tik3"
      authorizationParams={{
        redirect_uri: window.location.origin
      }}
    >
  
  <React.StrictMode>
    <BrowserRouter> 
    <App />
    </BrowserRouter>
  </React.StrictMode>,
  </Auth0Provider>
)
