import React, { useEffect, useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';

import './App.css'
import Favorites from './routes/Favorites';
import Projects from './routes/Projects';
import Dashboard from './routes/Dashboard';
import SideNav from './routes/SideNav';
import Home from './routes/Home';
import Nav from './routes/Nav';
import Login from './routes/Login';

import supabase from './supabaseClient'
import { AuthSession, AuthUser } from '@supabase/supabase-js';

import type { Database } from '../utils/database.types'
import AddProject from './routes/AddProject';
import PageUnavailable from './routes/PageUnavailable';
import Editor from './routes/Editor';

function App() {
  const [session, setSession] = useState<AuthSession | null>(null)
  const [user, setUser] = useState<AuthUser | null>(null)

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => { setSession(session) })

    supabase.auth.getUser().then(({ data: { user } }) => { setUser(user) });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })

    return () => subscription.unsubscribe()
  }, [])


  return (
    <div className="App bg-grey-100">
      <Nav session={session} />

      <div className=" h-5/6 w-screen flex flex-col flex-grow justify-center items-center align-middle">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='login' element={<Login session={session} />} />


          <Route path='dashboard' element={<SideNav session={session} user={user} />} />
          <Route path='dashboard/new' element={<AddProject user={user} />} />

          <Route path='editor/:pid' element={<Editor session={session} />} />


          <Route path='*' element={<PageUnavailable/>} />
        </Routes>
      </div>
    </div>
  )
}

export default App