import React, { useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';

import './App.css'
import Dashboard from './routes/Dashboard';
import SideNav from './routes/SideNav';
import Favorites from './routes/Favorites';
import Home from './routes/Home';
import HomeNav from './routes/Nav';
import Login from './routes/Login';
import Projects from './routes/Projects';
import Register from './routes/Register';

import supabase from './supabaseClient'


function App() {
  const [session, setSession] = useState(null)

  return (
    <div className="App bg-grey-200">

      <HomeNav/>

      <div className=" h-5/6 w-screen flex flex-col flex-grow justify-center items-center align-middle">
      <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='login' element={<Login/>} />
          <Route path='/Dashboard' element={<SideNav />}>
            <Route index={true} element={<Dashboard />} />
        </Route>
      </Routes>
      </div>
      
    </div>
  )
}

export default App