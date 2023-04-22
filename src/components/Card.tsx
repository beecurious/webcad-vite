
import { useNavigate } from "react-router-dom";
import supabase from "../supabaseClient"
import { useEffect, useState } from "react";
import type {Database} from '/utils/database.types'

type cardType = {
    project:Database;
    tile:number;
}


function Card({project, tile}:cardType){
    console.log(tile); 
    

    return(
        <button className=' border-grey-700 rounded-lg h-auto w-42 p-4 border-2 '> 
            <img
                src="src/assets/Rectangle 9.png"
                alt="PlaceHolder"
            ></img>
            <p>Project: {project.name}</p>
            <p>Modified at: {project.Modified}</p>
        </button>
    )
}

export default Card; 