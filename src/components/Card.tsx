
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
    console.log(tile);
    const [show, setShow] = useState({
        created:false,
        modified:false,
    })


    if (tile) {
        return (

            <button className=' border-grey-700 rounded-lg h-auto w-42 p-4 border-2 '>
                 <Link to='/editor'>
                 <p>Project: {project.name}</p>
                 </Link>
                 
            
                { !!project.modified_at && <p> Modified at: {project.modified_at.slice(0,19)}</p> }

                <p>{(project.created_at === null)?' ':`Created at: ${project.created_at.slice(0,19)}`}</p>
            </button>
        )
    }
    else {
        return (
            <div>
                <button className="border-grey-700 rounded-lg h-auto w-auto p-4 border-2">
                   <Link to='/editor'>
                 Project: {project.name}
                 </Link>
                 &nbsp; &nbsp;
                    {(project.modified_at === null)?' ':`Modified at: ${project.modified_at.slice(0,19)}`}&nbsp; &nbsp;
                    {(project.created_at === null)?' ':`Created at: ${project.created_at.slice(0,19)}`}
                </button>
            </div>
        )
    }
}

export default Card; 
