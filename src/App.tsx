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

function App() {
  const [session, setSession] = useState<AuthSession | null>(null)
  const [user, setUser] = useState<AuthUser | null>(null)
  const [projects, setProjects] = useState<Database.projects | null>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => { setSession(session) })

    supabase.auth.getUser().then(({ data: { user } }) => { setUser(user) });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })

    // return () => subscription.unsubscribe()
  }, [])

  useEffect(() => {
    if (user) {
      getAllProjects();
    }
  }, [user])


  const getAllProjects = async () => {

    let { data: projects, error } = await supabase
      .from('projects')
      .select('*')
      .eq('user_id', user!.id)

    if (!error) {
      setProjects(projects);
    }
  }


  return (
    <div className="App bg-grey-100">
      <Nav session={session} />

      <div className=" h-5/6 w-screen flex flex-col flex-grow justify-center items-center align-middle">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='login' element={<Login session={session} />} />
          {session &&
          <Route path='dashboard' element={<SideNav session={session} user={user} />}>
            <Route index={true} element={<Dashboard projects={projects} />} />
            <Route path='favorites' element={<Favorites projects={projects} />} />
            <Route path='projects' element={<Projects projects={projects} />} />
            <Route path='new' element={<AddProject projects={projects} user={user}/>} />
          </Route>}
          <Route path='*' element={<div> You fucked up </div>} />
        </Routes>
      </div>
    </div>
  )
}

export default App