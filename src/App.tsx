import React, { useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';

// import { createClient } from '@supabase/supabase-js'

import './App.css'
import Dashboard from './routes/Dashboard';
import SideNav from './routes/SideNav';
import Favorites from './routes/Favorites';
import Home from './routes/Home';
import HomeNav from './routes/Nav';
import Login from './routes/Login';
import Projects from './routes/Projects';
import Register from './routes/Register';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="App bg-grey-200">
      <Routes>
        <Route path='/' element={<HomeNav />}>
          <Route index element={<Home />} />
          <Route path='login' element={<Login />} />
          <Route path='register' element={<Register />} />
          <Route path='/Dashboard' element={<SideNav />}>
            <Route index={true} element={<Dashboard />} />
          </Route>
        </Route>
      </Routes>
    </div>
  )
}

export default App