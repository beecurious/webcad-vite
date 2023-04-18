import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import supabase from '../supabaseClient'

import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'


export default function Login({session}) {
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

      if(!session){
        return <Auth supabaseClient={supabase} appearance={{ theme: ThemeSupa }} providers={["github"]} />
      }
      else
      {
        navigate("/dashboard");
        return<></>
      }



    // return ( 

    //     <div className="Login bg-grey-200 border-2 rounded-2xl p-10 w-2/5 max-w-screen-md h-fit flex flex-col flex-wrap justify-center align-middle items-center">
    //         <div className="px-10 text-black font-serif font-bold text-base text-left w-full h-fit p-4 my-4">

    //             <div>
    //                 <div>Email Address</div>
    //                 <input type="text" className=" border-2 rounded-xl  bg-white p-3 mb-4 w-full" value={emailValue} onChange={(event:React.ChangeEvent<HTMLInputElement>)=>{setEmailValue(event.target.value)}}/>
    //             </div>

    //             <div>
    //                 <div> Password</div>
    //                 <input type="text" className="border-2 rounded-xl bg-white p-3 mb-4 w-full" value={passValue} onChange={(event:React.ChangeEvent<HTMLInputElement>)=>{setPassValue(event.target.value)}}/>
    //             </div>

    //         </div>
    //         <div className="text-red">{message}</div>
    //         <button className=" bg-grey-200 text-black font-sans font-semibold text-lg w-fit h-fit p-4 my-4 border-black border-2 rounded-2xl" onClick={signInWithEmail} > Login</button>

    //         {/* <Link to="/Dashboard">Login</Link> */}
    //     </div>
    // );
}