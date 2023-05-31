import React from "react"
import { Outlet } from "react-router";
import Sidebar from "../../components/SideBar/Sidebar.jsx";
import './index.css';
function DashCon(){
    return(
        <>
        <div className="flexdashcon">
        <Sidebar/>
        <Outlet/>
        </div>
        </>
    )
}
export default DashCon;