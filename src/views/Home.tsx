import React from "react";
import style from "./style.module.css"
import "./style.scss"

import ms from "./my_style.module.scss"
import { Link } from "react-router-dom";

const Home = () => {
    return(
        <div className={style.home}>
            <h1 >Hello Home</h1>
            <span>siema eniu</span>
            <button className={ms.btn}>hellooo</button>
            <h1>This is the rythm of cos tam cos tam...</h1>
            <Link to="/about">Click me to navigate</Link>
        </div>
    )
}

export default Home