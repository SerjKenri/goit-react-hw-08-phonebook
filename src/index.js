import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { App } from 'components/App';
import './index.css';
import { store, persistor } from 'redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter } from 'react-router-dom';
import { Loader } from 'components/Loader/Loader';

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <PersistGate loading={<Loader />} persistor={persistor}>
            <BrowserRouter basename="goit-react-hw-08-phonebook">
                <App />
            </BrowserRouter>
        </PersistGate>
    </Provider>
);
