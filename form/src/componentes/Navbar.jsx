import React, { useState } from "react";
import "./Navbar.css";
import Search from "./Search";
import Icon from "../iconLapiz.png"

export default function Nav() {

    return (
        <>
            <div>
            
            <nav className="navbar navbar-light bg-light">
                <div className="container-fluid">
                    
                    <div>
                       <img src={Icon} alt="icono de lapiz" className="icono" />
                        <a className="navbar-brand">Formularios</a> 
                    </div>
                    
                        <form className="d-flex">
                            <Search />
                        </form>
                    
                </div>
            </nav>  
            </div>

        </>
    )
}