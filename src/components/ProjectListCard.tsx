
import { useNavigate } from "react-router-dom";
import supabase from "../supabaseClient"
import { useEffect, useState } from "react";
import type { Database } from '/utils/database.types'



export default function ProjectListCard({ content }: Database) {
    const navigate = useNavigate();

    return (
        <button className='smoothAnimate border-black rounded-lg h-96 w-96 p-4 border-2 flex flex-col justify-evenly items-center hover:scale-105' onClick={() => { navigate(`/editor/${content.project_id}`) }}>
            <div className=" font-semibold text-black font-sans text-3xl">{content.name}</div>
            <div>
                <div> Last Modified: {new Date(content.modified_at).toLocaleTimeString('en')}</div>
                <div> Created: {new Date(content.created_at).toLocaleDateString('en')}</div>
            </div>
        </button>
    )
}

