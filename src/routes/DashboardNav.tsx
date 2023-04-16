import { Link, Outlet } from "react-router-dom";




export default function DashboardNav() {

    return (
        <>

            <div className="Nav w-full h-fit bg-lilac p-4 border-2 flex flex-row justify-between items-center ">
                <Link to='/' className="font-sans font-semibold text-3xl text-grey-800 hover:text-white "> WebCAD</Link>
                <div className="font-sans font-light text-grey-800 hover:text-white hover:font-medium"> account</div>
            </div>

            <div className=" h-5/6 w-screen flex flex-col justify-center items-center">
              <div className="sideNav"> </div>  <Outlet />
            </div>

            <footer>

            </footer>

        </>


    )
}