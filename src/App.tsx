import React, { useEffect, useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';

import './App.css'
import Dashboard from './routes/Dashboard';
import SideNav from './routes/SideNav';
import Home from './routes/Home';
import Nav from './routes/Nav';
import Login from './routes/Login';

import supabase from './supabaseClient'

function App() {
  const [session, setSession] = useState<any|null>(null)

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
    
    return () => subscription.unsubscribe()
  }, [])

  return (
    <div className="App bg-grey-200">

      <Nav/>

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