import React from "react";
import "./Navbar.css";
import Search from "./Search/Search";
import Icon from "./iconLapiz.png"
import { Link } from "react-router-dom";

export default function Nav() {
    

    return (
        <>

            <ul className="nav nav-tabs" style={{display:'flex', justifyContent:'space-between'}}>
                <div style={{display:'flex', flexDirection:'row'}}>
                    <img src={Icon} alt="icono de lapiz" className="icono" style={{alignSelf:'center', marginLeft:'1rem'}} />
                    <label className="navbar-brand">Formularios</label> 
                    
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

                <div style={{display:'flex', marginRight:'4rem'}}>
                    <li className="nav-item">
                        <Link to="/about" className="nav-link" >About</Link>
                    </li>
                </div>
        
            </ul>


        </>
    )
}