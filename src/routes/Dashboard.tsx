
import { useNavigate } from "react-router-dom";
import supabase from "../supabaseClient"
import { useEffect, useState } from "react";
import type { Database } from '/utils/database.types'
import Card from "../components/Card";


export default function Dashboard({ projects }: Database) {

    const [tile, setTile] = useState(true)
    console.log(projects)
    if (!projects) {
        return (<div>loading</div>)
    }
    console.log(projects)

    const projectsList = projects.map((element: Database) => (
        <div key={element.project_id}>
            <Card project={element} tile={tile} />
        </div>
    )
    );
    return (
        <div className="-mt-36">
            <div className=" -ml-32 -mt-36">
                <p className="text-2xl"> Project List </p>
            </div>
            
            <div>
            <button className="rounded-lg text-black bg-lilac hover:text-white hover:bg-grey-700" onClick={() => { setTile(!tile)}}>
                {tile?"Tile layout":"List Layout"}
            </button>
            </div>
            {projectsList}
            </div>
    )
}
