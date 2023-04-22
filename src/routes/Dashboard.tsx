
import { useNavigate } from "react-router-dom";
import supabase from "../supabaseClient"
import { useEffect, useState } from "react";
import type {Database} from '/utils/database.types'
import Card from "../components/Card";


export default function Dashboard({projects}:Database) {
    console.log(projects)
    if(!projects){
        return(<div>loading</div>)
    }
    console.log(projects)

    const [tile, setTile] = useState(1)
    return (
   <>   
    <div className="w-36"></div>
        <h1 className=" text-2xl  mt-8 "> Recent:  </h1>
    
    

   </>
      
)
}