import React from "react";
import { Routes ,Route, BrowserRouter, Router } from 'react-router-dom';

import Home from './components/pages/Home'
import Profile from "./components/pages/Profile";
import Dashboard from "./components/pages/Dashboard";
import Settings from "./components/pages/Settings";
import Login from './components/Login'
import Register from './components/Register'

const App = () => {
    return(
    
        <div className="app-main">
            <Routes>
                <Route path='/' element ={<Login/>}/>
                <Route path='/home' element={<Home/>} />
                <Route path='/register' element={<Register/>} />
                <Route path='/dashboard' element={<Dashboard/>} />
                <Route path='/profile' element={<Profile/>} />
                <Route path='/settings' element={<Settings/>} />
            </Routes>
            
        </div>
    )
}

export default App