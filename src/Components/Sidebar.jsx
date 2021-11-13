import React from "react";
import ReactDOM from "react-dom";
import './Style.css';
import { SidebarData } from "./SidebarData";
const Sidebar = () =>{
    return(
        <>
            <div className="sidebar text-dark">
                <h5 className="p-3">Dashboard</h5>
                <ul className="sidebarList">
                    {SidebarData.map((val,key) => {
                        return(
                            <li key={key}
                                className="row"
                                id={window.location.pathname == val.link ? "active" : " "}
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
