import React, { useState} from 'react';
import { Link, Route, Routes } from 'react-router-dom';
// import { createClient } from '@supabase/supabase-js'
// import {SUPABASE_KEY} from '../.env'

import './App.css'
import Dashboard from './routes/Dashboard';
import DashboardNav from './routes/DashboardNav';
import Favorites from './routes/Favorites';
import Home from './routes/Home';
import HomeNav from './routes/HomeNav';
import Login from './routes/Login';
import Projects from './routes/Projects';
import Register from './routes/Register';

function App()
{
  const [isLoggedIn, setIsLoggedIn] = useState(false);


    return (
      <div className="App bg-grey-500">
        <Routes>
          <Route path='/' element={<HomeNav/>}>
            <Route index element={<Home/>}/>
            <Route path='login' element={<Login />}/>
            <Route path='register' element={<Register/>}/>
          </Route>

          <Route path='/Dashboard' element={<DashboardNav/>}>
            <Route index={true} element={<Dashboard/>}/>
            <Route path='favorites' element={<Favorites />}/>
            <Route path='projects' element={<Projects/>}/>
          </Route>
        </Routes>
      </div>
    )
}

export default App