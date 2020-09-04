import React from 'react';
import logo from './logo.svg';
import './App.css';
import { getWelcomeString } from 'common/src/main';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>{getWelcomeString('World')}</p>
            </header>
        </div>
    );
}

export default App;
