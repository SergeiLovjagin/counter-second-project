import React from 'react';
import './App.css';
import {Counter} from "./CounterContainer/CounterModule/Counter";
import {CounterSettings} from "./CounterContainer/CounterSettings/CounterSettings";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Counter/>
                <CounterSettings/>
            </header>
        </div>
    );
}

export default App;
