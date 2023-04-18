import { Link, Outlet, useNavigate } from "react-router-dom";
import supabase from "../supabaseClient";
import { useEffect } from "react";





export default function SideNav({session}:any) {

    const navigate = useNavigate()
    
    useEffect(()=>{
        if(!session){
            //User session doesn't exist, redirect to login.
            navigate('/login')
        }
    },[session])
    
    const code = 'hello World'

    async function createPost() {
        await supabase
            .from('Project')
            .insert({
                code
            })
            .single();
        //fetchPosts() 
    }

    return (
        <div className="SideNav w-full h-full flex flex-row">
            <div className=" h-full border-solid border-2 border-t-0 w-1/6 ">
                <div className="Top Buttons">
                    <button>Dashboard</button>
                    <button>Favorites</button>
                    <button>Create Project</button>
                </div>

                <div className=" Bottom Buttons ">
                    <button>Documentation</button>
                </div>
            </div>
            <button onClick={createPost}> hello</button>

            <Outlet />

        </div>
    )
}