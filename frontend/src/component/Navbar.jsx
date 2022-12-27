import React from "react";
import { Link } from "react-router-dom";
import "../../src/App.css";


const Navbar = () => {

  const handleLogout = () =>{
    console.log("clicked")
    localStorage.clear();
    window.location.reload()
  }
  return (
    <div>
      <nav class="navbar navbar-expand-lg shadow " style={{height:'70px'}}>
        <div class="container">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 fs-6 fw-bold">
              <li class="nav-item border-style">
                <Link class="nav-link active text-dark " aria-current="page" to="/" >
                  Home
                </Link>
              </li>
              <li class="nav-item border-style">
                <Link class="nav-link text-dark" to="/about">
                  About
                </Link>
              </li>
              <li class="nav-item border-style">
                <Link class="nav-link text-dark" to="/services">
                  Service
                </Link>
              </li>
              <li class="nav-item border-style">
                <Link class="nav-link text-dark" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
            <Link class="navbar-brand fw-bolder fs-4 mx-auto text-dark" to="/">
            <img
                src="data:image/jpeg;base64,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"
                alt="logo"
                style={{width: '53px',height: '53px',borderRadius: '50%'}}
                />
             
            </Link>

            {/**<input
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
            /> **/}

            <Link to="/login" class="btn btn-outline-primary ms-auto px-4 rounded-pill">
              Login
            </Link>
            <Link to="/register" class="btn btn-outline-primary ms-2 px-4 rounded-pill">
              Register
            </Link>

            <Link to="/dashboard" class="btn btn-outline-primary ms-2 px-4 rounded-pill">
           Dashboard
          </Link>
          <Link 
          to="/logout" 
          class="btn btn-outline-primary ms-2 px-4 rounded-pill"
          onClick={handleLogout}
          >
              Logout
            </Link>
            
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

//******* Note  *********//
// always remember React has case sensitive and when we are using Router then we have to focus on 
// Link and other Router concept 
