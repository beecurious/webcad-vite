import { Link, Outlet, redirect } from "react-router-dom";
import supabase from "../supabaseClient";

const navButtonStyle = 'font-sans font-normal text-grey-800 hover:text-white hover:cursor-pointer '

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

      <div className="flex flex-row gap-4 justify-evenly">
        <Link to='/' className={navButtonStyle}> Home </Link>
        {!session?<Link to='/Login' className={navButtonStyle}> Login</Link> : <>
        <Link to='/dashboard' className={navButtonStyle}> Dashboard </Link>
        <div className={navButtonStyle} onClick={logout}>Logout</div> 
        </>
          
          }
        
      </div>
      
      </div>
  )
}