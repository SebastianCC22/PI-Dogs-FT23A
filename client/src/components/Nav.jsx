import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import style from "./Nav.module.css";


export function Nav () {
    return (
        <div className={style.navbar}>
            <div>
            <Link to = "/home">
                <button className={style.btn}>Home</button>
            </Link>
            </div>
            <div>
            <Link to = "/dog"> 
                <button className={style.btn}>Create a dog</button>
            </Link>
            </div>
            <SearchBar />

        </div>
    )
}

export default Nav;