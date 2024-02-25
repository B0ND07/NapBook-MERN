import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { store } from './redux/store';
import { Provider } from 'react-redux';
import { GoogleOAuthProvider } from '@react-oauth/google';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="726909015466-0d24a25krafomrhvdrb658p3gdtkdj2e.apps.googleusercontent.com">
     <Provider store={store} >
    <App />
    </Provider>
    </GoogleOAuthProvider>
  </React.StrictMode>
);

