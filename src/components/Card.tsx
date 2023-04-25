
import { useNavigate } from "react-router-dom";
import supabase from "../supabaseClient"
import { useEffect, useState } from "react";
import type { Database } from '/utils/database.types'
import { Link } from "react-router-dom";

type cardType = {
    project: Database;
    tile: boolean;
}


function Card({ project, tile }: cardType) {
    
    const navigate = useNavigate();



    console.log(`/editor/${project.project_id}`)
    if (tile) {
        return (

            <button className='bg-grey-400 rounded-lg h-auto min-w-full p-2 border-solid border-black border-2 text-black' onClick={()=>{navigate(`/editor/${project.project_id}`)}}>
                 <Link to={`/editor/${project.project_id}`} className=' text-black hover:text-lilac' >
                 <p className=" font-bold "> {project.name}</p>
                 </Link>
                { !!project.modified_at && <p> Modified at: {project.modified_at.slice(0,19)}</p> }
                { !!project.created_at && <p> Created at: {project.created_at.slice(0,19)}</p> }
            </button>
        )
    }
    else {
        return (
            <div>
                <button className="bg-grey-400 text-white rounded-lg h-auto min-w-full p-2 border-2" onClick={()=>{navigate(`/editor/${project.project_id}`)}}>
                   <Link to={`/editor/${project.project_id}`} className='  font-bold   text-white hover:text-lilac' >
                  {project.name}
                 </Link>
                 &nbsp; &nbsp;
                { !!project.modified_at && `Modified at: ${project.modified_at.slice(0,19)}` }  &nbsp; &nbsp;
                { !!project.created_at &&  `Created at: ${project.created_at.slice(0,19)}` }
                </button>
            </div>
        )
    }
}

export default Card; 
