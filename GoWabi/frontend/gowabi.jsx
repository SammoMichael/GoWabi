import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store.js';
import Root from './components/root';
import { fetchLocations, fetchLocation } from './actions/location_actions';
import { openModal, closeModal } from './actions/modal_actions';
import { login, logout, signup } from './actions/session_actions';

document.addEventListener('DOMContentLoaded', () => {
    let store;
    if (window.currentUser) {
        const preloadedState = {
            session: { id: window.currentUser.id },
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }
    window.fetchLocations = fetchLocations;
    window.fetchLocation = fetchLocation;
    window.openmodal = openModal;
    window.login = login; 
    window.logout = logout;
    window.signup = signup;
    window. closeModal = closeModal;
    window.dispatch = store.dispatch;
    const root = document.getElementById('root');
    ReactDOM.render(<Root store={store} />, root);
});
