import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import supabase from '../supabaseClient'

import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'


export default function Login({session}:any) {
    const [showPass, setShowPass] = useState("false");
    const [emailValue, setEmailValue] = useState("");
    const [passValue, setPassValue] = useState("");
    const [message, setMessage] = useState("");
    
    const navigate = useNavigate();

    async function signInWithEmail() {
        const {data, error } = await supabase.auth.signInWithPassword({
          email: emailValue,
          password: passValue,
        })
      }
 
      useEffect(()=>{
        if(!!session){
            // User session doesn't exist, keep at login.
            navigate('/dashboard');
        }
    },[session])

      return( <Auth supabaseClient={supabase} appearance={{ theme: ThemeSupa }} providers={[]} />)
}