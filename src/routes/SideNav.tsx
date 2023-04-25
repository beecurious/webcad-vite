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
import ProjectList from "../components/ProjectList";
import { useQuery } from "react-query";


export default function SideNav({session, user}:AuthSession) {
    const [collapse, setCollapse] = useState(true);
    const [projectList, setProjectList] = useState<Database | null>(null);

    const navigate = useNavigate()
    
      const { data: projects, status } = useQuery('projectData', async () => {

        const session = await supabase.auth.getSession();
        
            const { data: projects, error } = await supabase.from("projects").select("*").eq('user_id', session.data.session?.user.id);
            if (!error && projectList == null) {
              console.log(projects);
              setProjectList(projects);
              }
            
            return projects;

    });
    
    

  if (!session) {
    return (
      <> <div>
        You are not logged in!
      </div>
        <Link to='/login'> Login </Link> </>
    )
  }

  if (status == 'loading' || !projects) { return <span className="loader"></span> }

  if (!projects) { console.log("It isn't goint to load, something broke again.")}

  if (status == 'success') {

    return (
        <div className="Content w-full h-full flex flex-row">

            <div className="SideNav h-full border-solid border-2 border-t-0 w-fit pt-2 flex flex-col items-start transition-all justify-between bg-grey-200">
               
                <div className="SideNavTop">
                    <SideNavButton collapse={collapse} icon={DashboardIcon} text="Dashboard"/>
                    {/* <SideNavButton collapse={collapse} icon={FavoritesIcon} text="Favorites" /> */}
                    {/* <SideNavButton collapse={collapse} icon={ProjectsIcon} text="All projects" /> */}
                </div>
                <div  onClick={()=>{setCollapse(!collapse)}} className="self-end p-2 hover:text-lilac">{collapse?">>":"<<"}</div>
                <div className="SideNavBottom">
                    <SideNavButton collapse={collapse} icon={MenuIcon} text="New Project" handleOnClick={()=>{navigate("new")}}/>
                    <SideNavButton collapse={collapse} icon={DocumentationIcon} text="Documentation" />
                </div>
            </div>
            
            <div className=" h-full w-full grow flex flex-col justify-center align-middle items-center">
            <ProjectList projects={projects}/>
            </div>
        </div>
    )}


    return(<></>)
}