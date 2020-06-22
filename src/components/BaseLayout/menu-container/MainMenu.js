import React from "react";
import { NavLink } from "react-router-dom";
import "./MainMenu.css";

class MainMenu extends React.Component {
    render() {
        return (
            <nav >
                <ul id="main">
                    <p><NavLink activeClassName="selected" className="nav-link-header" to="/">Knowledge</NavLink></p>
                    <p><NavLink activeClassName="selected" className="nav-link-header" to="/portfolio">Experience</NavLink></p>
                    <p><NavLink activeClassName="selected" className="nav-link-header" to="/contact">Contact</NavLink></p>
                </ul>
            </nav>
        );
    }
}
export default MainMenu;