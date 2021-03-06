import React from "react";
import ReactDOM from "react-dom";
const Navbar = () => {
    return(
        <>
            <nav class="container-fluid navbar navbar-expand-lg">
                <div class="container-fluid">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                       <li class="nav-item">
                        <a class="nav-link" aria-current="page" href="#">General</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" aria-current="page" href="#">Meter</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="#">works</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="#">Specification</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="#">Assigned to</a>
                        </li>
                        
                        {/* <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Dropdown
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><a class="dropdown-item" href="#">Action</a></li>
                            <li><a class="dropdown-item" href="#">Another action</a></li>
                            <li><hr class="dropdown-divider"></hr></li>
                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                        </li> */}
                    </ul>
                    </div>
                </div>
                </nav>
        </>
    )
}

export default Navbar;