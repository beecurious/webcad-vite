import { useState } from "react"
import type { Database } from '../../utils/database.types'
import { Link, useNavigate } from "react-router-dom";
import supabase from "../supabaseClient";


export default function AddProject({ projects, user}: Database) {
    const [name, setName] = useState<string>("");
    const [favorite, setFavorite] = useState(false);
    const navigate = useNavigate();

    const handleAddProject = async () => {

        if(name == '')
        {

        }
        else{
            const { data, error } = await supabase
            .from('projects')
            .insert([
                {
                    code: 'render(cube(5))',
                    created_at: Date().slice(0,24) ,
                    favorite: favorite,
                    modified_at: Date().slice(0,24) ,
                    name: name,
                    user_id: user.id
                  }
            ])

            if(!error){
                navigate('/dashboard')
            }
        }

        

    }

    return (
        <div className="w-full h-full flex justify-center items-center bg-grey-600">
            <div className="w-fit bg-grey-400 p-5 flex flex-col justify-start gap-4 font-sans rounded-lg border-2 text-black">
                <h1> Create Project</h1>

                <label>
                    Enter Project Name
                    <input className="p-2 mx-2 rounded-lg bg-grey-100 border-solid border-2 outline-none" value={name} onChange={(e) => { setName(e.target.value) }} />
                </label>
                <label> Set Favorite
                    <input type="checkbox" className="p-2 mx-2 rounded-lg bg-grey-100 border-solid border-2 outline-none" checked={favorite} onChange={(e) => { setFavorite(!favorite) }} />
                </label>

                <div className="flex flex-row p-2 justify-end items-center">
                    <Link to="/dashboard" className="p-2 m-2 hover:text-red">cancel</Link>
                    <button className="rounded-lg bg-lilac border-black border-2 text-black border-solid font-nunito m-2 font-semibold hover:text-green-600 hover:scale-110 transition-all" onClick={handleAddProject}> Add </button>

                </div>





            </div>
        </div>
    )

}