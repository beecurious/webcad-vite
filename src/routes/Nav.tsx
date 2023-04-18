import { Link, Outlet, redirect } from "react-router-dom";
import supabase from "../supabaseClient";
import { AuthSession, Session } from "@supabase/supabase-js";

export default function HomeNav({session}:any)
{
  const logout = async ()=>
  {
    const { error } = await supabase.auth.signOut()
      redirect('/')
  }
  
  return (
      <div className="Nav w-full h-fit bg-lilac p-4 border-solid border-2 flex flex-row justify-between items-center">
        <Link to='/' className="font-sans font-semibold text-3xl text-grey-800 hover:text-white "> WebCAD</Link>

        {!session?<Link to='/Login' className="font-sans font-light text-grey-800 hover:text-white hover:font-medium"> Login</Link> : <button onClick={logout}>Logout</button> }
        
      </div>
  )
}