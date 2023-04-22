
import { useNavigate } from "react-router-dom";
import supabase from "../supabaseClient"
import { useEffect, useState } from "react";
import type {Database} from '../../utils/Database.types'


export default function Dashboard({projects}:Database) {
  
    return (
   <>   
    <div className="w-36"></div>
        <h1 className=" text-2xl  mt-8 "> Recent:  </h1>
    <div>
        
    <div className=" min-w-full flex flex-row gap-2 mt-32">
        <div className='Favorite box-border  border-grey-700 rounded-lg h-auto w-42 p-4 border-2 '> 
            <img
                src="src/assets/Rectangle 9.png"
                alt="PlaceHolder"
            ></img>
            <p>Project #1</p>
            <p>Last opened: 3 hours ago</p>
        </div>
        <div className='Favorite box-border  border-grey-700 rounded-lg h-auto w-42 p-4 border-2 '> 
            <img
                src="src/assets/Rectangle 9.png"
                alt="PlaceHolder"
            ></img>
            <p>Project #2</p>
            <p>Last opened: 8 hours ago</p>
        </div>
         <div className='Favorite box-border  border-grey-700 rounded-lg h-auto w-42 p-4 border-2 '> 
            <img
                src="src/assets/Rectangle 9.png"
                alt="PlaceHolder"
            ></img>
            <p>Project #3</p>
            <p>Last opened: 16 hours ago</p>
        </div>
    </div>
    <div className='Favorite box-border  border-grey-700 rounded-lg h-auto  max-w-sm p-4 border-2 '> 
            <img
                src="src/assets/Rectangle 9.png"
                alt="PlaceHolder"
            ></img>
            <p>Project #3</p>
            <p>Last opened: 16 hours ago</p>
        </div>
    </div>
    

   
   
   </>
      
)
}