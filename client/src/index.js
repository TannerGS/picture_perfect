import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './App';
import Footer from './components/Footer';
import Header from './components/Header';
import './index.css';

ReactDOM.render(
    <Router>
        <Header />
        <App />
        <Footer />
    </Router>, 
    document.getElementById('root'));