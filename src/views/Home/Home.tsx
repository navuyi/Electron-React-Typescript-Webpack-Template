import React from "react";

import { Link } from "react-router-dom";
import style from "./style.module.scss"


const Home = () => {
    return(
        <div className={style.home}>
            <h1 className={style.header}>Hello Home</h1>
            <Link to="/about" className={style.link}>Navigate to About page</Link>
        </div>
    )
}

export default Home