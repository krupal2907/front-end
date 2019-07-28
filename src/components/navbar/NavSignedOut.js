import React from "react";
import { NavLink, Link } from "react-router-dom";

class NavSignedOut extends React.Component {

    //Function to open the nav-bar links (overlay)
    openNav() {
        document.getElementById("myNav").style.width = "100%";
    }
    //Function to close the nav-bar links (overlay)
    closeNav() {
        document.getElementById("myNav").style.width = "0%";
    }

    render() {

        return (
            <nav>
                {/*  Nav-bar when the user is signed out  */}
                <div className="nav-signed-out">
                    {/*  Logo  */}
                    <div className="logo"><Link to="/">Logo</Link></div>
                    {/*  Button to toggle the Navbar. Visible at small width of viewport  */}
                    <button className="tog-btn" onClick={this.openNav}>&#9776;</button>
                    {/*  Navigation links  */}
                    <ul className="nav-links">
                        <li><NavLink to="/signin" className="navlink ripple">Sign In</NavLink></li>
                        <li><NavLink to="/login" className="navlink ripple">Log In</NavLink></li>
                        <li><NavLink to="#" className="navlink ripple">About</NavLink></li>
                    </ul>
                </div>
                {/*  Overlay  */}
                <div id="myNav" className="overlay">
                    {/*  Button to close the overlay  */}
                    <button className="close-btn" onClick={this.closeNav}>&times;</button>
                    {/*  Overlay links  */}
                    <ul className="mob-links">
                        <li><NavLink to="/signin" className="moblink" onClick={this.closeNav}>Sign In</NavLink></li>
                        <li><NavLink to="/login" className="moblink" onClick={this.closeNav}>Log In</NavLink></li>
                        <li><NavLink to="#" className="moblink" onClick={this.closeNav}>About</NavLink></li>
                    </ul>
                </div>

            </nav>
        );
    }
}

export default NavSignedOut;
