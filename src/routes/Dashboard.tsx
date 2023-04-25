
import { useNavigate } from "react-router-dom";
import supabase from "../supabaseClient"
import { useEffect, useState } from "react";
import type { Database } from '/utils/database.types'
import Card from "../components/Card";


export default function Dashboard({ projects }: Database) {

    const [tile, setTile] = useState(true)
    
    if (!projects) {
        return (<div>loading</div>)
    }

    const projectsList = projects.map((element: Database) => (
        <div key={element.project_id}>
            <Card project={element} tile={tile} />
        </div>
    )
    );

    
    return (
        <div className=" " >
            <div className="  ">
            <div className=" flex flex-row gap-2 ">
                <p className="text-2xl font-semibold text-black"> Projects </p>
                <button className="rounded-lg text-black bg-lilac hover:text-white hover:bg-grey-700 mb-2 p-1 text-xl font-md " onClick={() => { setTile(!tile)}}>
                    {tile?"Tile layout":"List Layout"}
                </button>
            </div>
            </div>

            <div className=" w-full ">
                {(tile)?
                <div className="grid grid-cols-3 gap-3 grow max-w-4xl ">
                    {projectsList}
                </div>:
                <div className="grid grid-cols-1 gap-3 grow max-w-4xl">
                    {projectsList}
                </div>
                } 
            </div>
        </div>
    )
}
