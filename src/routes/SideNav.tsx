import { Link, Outlet, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import DashboardIcon from '../assets/icons/DashboardIcon.svg'
import FavoritesIcon from '../assets/icons/FavoritesIcon.svg'
import ProjectsIcon from '../assets/icons/ProjectsIcon.svg'
import MenuIcon from '../assets/icons/MenuIcon.svg'
import DocumentationIcon from '../assets/icons/DocumentsIcon.svg'
import { AuthSession } from "@supabase/auth-ui-react/dist/components/Auth/UserContext";

import type {Database} from '../../utils/Database.types'
import Dashboard from "./Dashboard";
import supabase from "../supabaseClient";
import SideNavButton from "../components/SideNavButton";


export default function SideNav({session, user}:AuthSession) {
    const [collapse, setCollapse] = useState(false);
    const [projects, setProjects] = useState<Database.projects | null>(null);

    const navigate = useNavigate()

    useEffect(()=>{
        if(!session)
        {
            //User session doesn't exist, redirect to login.
            navigate('/login')
        }
        else
        {
            getAllProjects();
            console.log(projects);
        }
    },[])
    
      const getAllProjects = async () => {
    
        let { data: projects, error } = await supabase
          .from('projects')
          .select('*')
          .eq('user_id', session!.user.id)
    
        if (!error) {
          setProjects(projects);
        }
      }

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
            
            <div className=" h-5/6 w-screen flex flex-col flex-grow justify-center items-center align-middle">
            <Dashboard projects={projects} />
            </div>
        </div>
    )
}