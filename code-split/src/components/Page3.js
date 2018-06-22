import React from 'react';
import logo from '../logo.svg';

const Page3 = ({ onRouteChange }) => {
    return (
        <section className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1 className="App-title">Welcome to React</h1>
            </header>
            <button
                onClick={() => onRouteChange('page1')}>Page 1</button>
            <button
                onClick={() => onRouteChange('page2')}>Page 2</button>
            <button className="disabled">Page 3</button>
        </section>
    )
}

export default Page3;