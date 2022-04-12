import React from "react";
import { NavLink } from "react-router-dom";
import style from "./Landing.module.css";


const Landing = () => { 
    return (
        <div className = {style.background}>
                <NavLink exact to="/home" className={style.button}>Go to home</NavLink>
        </div>
    )

}

export default Landing;