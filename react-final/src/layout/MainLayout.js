import { Route, Routes } from 'react-router-dom';
import React from "react";
import HomePage from '../pages/HomePage';
import UserPage from '../pages/UserPage';
import UserListPage from '../pages/UserListPage';
import HooksPage from '../pages/HooksPage';
import RegistrationPage from '../pages/RegistrationPage';
import Login from '../pages/Login';
import UserComp from '../pages/UserComp';
import JsonComp from '../pages/JsonComp';

export default class MainLayout extends React.Component {

    render() {
        return (
            <div className="thbs-main container">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/user" element={<UserPage />} />
                    <Route path="/list" element={<UserListPage />} />
                    <Route path="/hooks" element={<HooksPage />} />
                    <Route path="/reg" element={<RegistrationPage />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/comp" element={<UserComp />} />
                    <Route path="/json" element={<JsonComp />} />
                </Routes>
            </div>
        )
    }
}