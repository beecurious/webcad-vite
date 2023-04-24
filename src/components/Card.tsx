
import { useNavigate } from "react-router-dom";
import supabase from "../supabaseClient"
import { useEffect, useState } from "react";
import type { Database } from '/utils/database.types'

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
                <p>Project: {project.name}</p>
                <p>{(project.modified_at === null)?' ':`Modified at: ${project.modified_at.slice(0,19)}`}</p>
                 <p>{(project.created_at === null)?' ':`Created at: ${project.created_at.slice(0,19)}`}</p>
            </button>
        )
    }
    else {
        return (
            <div>
                <button className="border-grey-700 rounded-lg h-auto w-auto p-4 border-2">
                    Project: {project.name} &nbsp; &nbsp;
                    {(project.modified_at === null)?' ':`Modified at: ${project.modified_at.slice(0,19)}`}&nbsp; &nbsp;
                    {(project.created_at === null)?' ':`Created at: ${project.created_at.slice(0,19)}`}
                </button>
            </div>
        )
    }
}

export default Card; 
