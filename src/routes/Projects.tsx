import type {Database} from '../../utils/Database.types'
import Card from '../components/Card'
import { useState } from 'react';
// this will be used to display the projects page, should include the Favorites and a list of all projects 


export default function Projects({projects}:Database){


const [tile, setTile] = useState(1)
    return (
   <>   
    <div className="w-36"></div>
        <h1 className=" text-2xl  mt-8 "> Favorites:  </h1>
    <div>  
        <div className=" min-w-full flex flex-row gap-2 mt-32">
            <Card projects={projects} tile={tile}/>
        </div>    
    </div>
    
    
    <div>
        <Card projects={projects} tile={tile} />
    </div>
    

   
   
   </>
    )
}