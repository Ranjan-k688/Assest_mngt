import React from "react";
import ReactDOM from "react-dom";
import './Style.css';
import { SidebarData } from "./SidebarData";
const Sidebar = () =>{
    return(
        <>
            <div className="sidebar text-dark">
<<<<<<< HEAD
                <h5 className="p-3">dashboard</h5>
=======
                <h5 className="p-3">Dashboard</h5>
>>>>>>> 9e39631b48038d040cae9e4de84a493a66cbf017
                <ul className="sidebarList">
                    {SidebarData.map((val,key) => {
                        return(
                            <li key={key}
                                className="row"
<<<<<<< HEAD
                                id={window.location.pathname == val.link ? "active" : " "}
=======
                                id={window.location.pathname === val.link ? "active" : " "}
>>>>>>> 9e39631b48038d040cae9e4de84a493a66cbf017
                             onClick={()=> {window.location.pathname = val.link}}>
                                {" "}
                                <div id="icon">{val.icon}</div>{" "}
                                <div id="tittle">
                                    {val.tittle}
                                </div>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </>
    )
}

export default Sidebar;
