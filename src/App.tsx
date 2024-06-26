import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ThreadList from './components/forum/ThreadList';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import './App.css';

const App: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<ThreadList />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </Router>
    );
};

export default App;
