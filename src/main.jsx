import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { store, persistor } from './redux/store';
import App from './App.jsx'; 
import './index.css';
// // import './fonts.css';


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <BrowserRouter basename="/project-SevenTeam-07">
                    <App />
                </BrowserRouter>
            </PersistGate>    
        </Provider>
    </React.StrictMode>
);
