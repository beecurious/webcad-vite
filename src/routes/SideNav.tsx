import { Link, Outlet } from "react-router-dom";




export default function SideNav() {

    return (
            <div className="SideNav w-full h-full flex flex-row">
                <div className="h-full border-solid border-2 border-t-0 w-1/6 "> 
                    <div className="Top Buttons">
                    </div>
                </div>
                
                <Outlet/>

            </div>
    )
}