
import { useNavigate } from "react-router-dom";
import supabase from "../supabaseClient"
import { useEffect, useState } from "react";



export default function Dashboard() {
    

    return (
   <>   
    <div className="w-96">
    </div>

   <div className=" ">
    <h1 className=" text-2xl  mt-8 "> Favorites:</h1>
   <div className=" min-w-full flex flex-row  gap-2 m-9">
   <div className='Favorite box-border  border-grey-700 rounded-lg h-32 w-42 p-4 border-2 '> 
    <p>Favorite #1</p>
    <p>Last opened: 3 hours ago</p>
   </div>
   <div className='Favorite box-border  border-grey-700 rounded-lg h-32 w-42 p-4 border-2 '> 
    <p>Favorite #1</p>
    <p>Last opened: 3 hours ago</p>
   </div> <div className='Favorite box-border  border-grey-700 rounded-lg h-32 w-42 p-4 border-2 '> 
    <p>Favorite #1</p>
    <p>Last opened: 3 hours ago</p>
   </div>
   </div>
    </div>
   
   
   </>
      
)
}