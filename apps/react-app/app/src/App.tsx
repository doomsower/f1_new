import React from 'react';
import './App.css';
import { CircuitTable } from '@react-app/circuitTable';
import Header from './Components/Header/Header';
import LeftSidebar from './Components/LeftSidebar/LeftSidebar';

function App() {
    return (
        <div className="wrapper">
            <Header />
            <div className="main">
                <div className="left-sidebar">
                    <LeftSidebar />
                </div>
                <div className="main-content">
                    <div className="main-content-wrapper">
                        <CircuitTable />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
