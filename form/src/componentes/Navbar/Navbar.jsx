import React, { useState } from "react";
import "./Navbar.css";
import Search from "./Search/Search";
import Icon from "./iconLapiz.png"
import { Link } from "react-router-dom";

export default function Nav() {
    

    return (
        <>
            <div>

            <ul className="nav nav-tabs">
                <div>
                    <img src={Icon} alt="icono de lapiz" className="icono" />
                    <label className="navbar-brand">Formularios</label> 
                </div>
                <div style={{display:'flex'}}>
                    <li className="nav-item">
                        <Link to='/' className="nav-link active" aria-current="page" >Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/login" className="nav-link" >Login</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/register" className="nav-link" >Register</Link>
                    </li>
                </div>
                
            </ul>

            
            {/* <nav className="navbar navbar-light bg-light">
                <div className="container-fluid">
                    
                    <div>
                       <img src={Icon} alt="icono de lapiz" className="icono" />
                        <a className="navbar-brand">Formularios</a> 
                    </div>
                        
                        <form className="d-flex">
                            <Link to='/login'>Login</Link>
                            <Search />
                        </form>
                    
                </div>
            </nav>   */}


            </div>

        </>
    )
}