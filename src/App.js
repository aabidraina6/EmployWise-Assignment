import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import UserList from './pages/UserList';
import EditUser from './pages/EditUser';

const App = () => {
    const token = localStorage.getItem('token');

    return (
        <Router>
            <Routes>
                <Route
                    path="/"
                    element={token ? <Navigate to="/users" replace /> : <Navigate to="/login" replace />}
                />
                <Route path="/login" element={<Login />} />
                <Route path="/users" element={token ? <UserList /> : <Navigate to="/login" replace />} />
                <Route path="/users/edit/:id" element={token ? <EditUser /> : <Navigate to="/login" replace />} />
            </Routes>
        </Router>
    );
};

export default App;
