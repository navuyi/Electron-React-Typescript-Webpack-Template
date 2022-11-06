import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { HashRouter, Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';

import "./global-style.scss"

import About from './views/About/About';
import Home from './views/Home/Home';


const App = () => {
    return(
        <>
          <HashRouter>
            <Routes>
                <Route 
                    path="/" 
                    element={<Home />}
                />
                <Route
                    path="/about"
                    element={<About />}
                />
            </Routes>
          </HashRouter>
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById("app-container") as HTMLElement)

function render() {
    root.render(
        <React.StrictMode>
            <App />
        </React.StrictMode>
    )
}

render();