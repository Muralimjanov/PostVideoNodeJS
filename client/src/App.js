import React from 'react';
import Navbar from './components/navbar/navbar';
import Main from './pages/main';
import './App.css';

const App = () => {
    return (
        <div className="App">
            <Navbar />
            <Main />
        </div>
    )
}

export default App;