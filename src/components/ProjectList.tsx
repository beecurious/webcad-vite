import { useNavigate } from "react-router-dom";
import supabase from "../supabaseClient"
import { useEffect, useState } from "react";
import type { Database } from '@/utils/database.types'
import ProjectListCard from "./ProjectListCard";



export default function ProjectList({ projects }: Database) {
    const [listType, setListType] = useState('grid');

    const itemList = projects.map((item: Database) => {
        if (listType == 'grid') {
            return (<ProjectListCard key={item.project_id} content={item} />)
        }
        else if (listType == 'list') {
            return (<ProjectListCard content={item} />)
        }

    })

    return (
        <div className="h-min flex flex-col justify-start align-middle">
            <div className="Filters ">   </div>
            <div className="container flex gap-10 justi p-5">{itemList}</div>
        </div>

    )
}
