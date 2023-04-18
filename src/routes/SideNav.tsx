import { Link, Outlet, useNavigate } from "react-router-dom";
import supabase from "../supabaseClient";
import { useEffect, useState } from "react";

import DashboardIcon from '../assets/icons/DashboardIcon.svg'
import FavoritesIcon from '../assets/icons/FavoritesIcon.svg'
import ProjectsIcon from '../assets/icons/ProjectsIcon.svg'
import MenuIcon from '../assets/icons/MenuIcon.svg'
import DocumentationIcon from '../assets/icons/DocumentsIcon.svg'



type TypeSideNavButton = {
    collapse:boolean;
    icon: string;
    text: string;
    onClick?: React.MouseEventHandler<HTMLDivElement> | undefined;
}

export function SideNavButton({collapse, icon, text}:TypeSideNavButton)
{
    return( 
    <div className="flex flex-row p-3 justify-start items-end hover:bg-grey-100 rounded-lg">     
    <img src={icon} className="p-1"/>
    {!collapse && <div className="ml-1 p-0 align-bottom font-serif text-black">{text}</div>}

    </div>)
}


export default function SideNav({session}:any) {
    const [collapse, setCollapse] = useState(false);

    const navigate = useNavigate()

    useEffect(()=>{
        if(!session){
            //User session doesn't exist, redirect to login.
            navigate('/login')
        }
    },[session])

    return (
        <div className="Content w-full h-full flex flex-row">

            <div className="SideNav h-full border-solid border-2 border-t-0 w-fit pt-2 flex flex-col items-start transition-all justify-between bg-grey-200">
               
                <div className="SideNavTop">
                    <SideNavButton collapse={collapse} icon={DashboardIcon} text="Dashboard"/>
                    <SideNavButton collapse={collapse} icon={FavoritesIcon} text="Favorites" />
                    <SideNavButton collapse={collapse} icon={ProjectsIcon} text="All projects" />
                </div>
                <div  onClick={()=>{setCollapse(!collapse)}} className="self-end p-2 hover:text-lilac">{collapse?">>":"<<"}</div>
                <div className="SideNavBottom">
                    <SideNavButton collapse={collapse} icon={MenuIcon} text="New Project" />
                    <SideNavButton collapse={collapse} icon={DocumentationIcon} text="Documentation" />
                </div>
            </div>

            <Outlet />

        </div>
    )
}