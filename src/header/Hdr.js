import React, {Component} from "react";
import {BrowserRouter, Route, Switch, NavLink} from "react-router-dom";
import './Hdr.css';

import Homepage from "../Pages/Homepage";
import Bookings from "../Services/Bookings";
import Tracking from "../Services/Tracking";
import Archiving from "../Services/Archiving";
import Commerce from "../Services/Commerce";
import ContactForm from "../forms/contactUs";

class Hdr extends Component {
    constructor(props){
        super(props);
        this.state = {isToggleOn: true};
        this.menuClick = this.menuClick.bind(this);
        this.quickClick = this.quickClick.bind(this);
    }
        menuClick() {
            this.setState(state => ({isToggleOn: !state.isToggleOn}));
        function toggle_visibility() {
            let boxhdr = document.querySelector(".nav");
            if (boxhdr.style.height === '100vh') {
                boxhdr.style.height = '10px';
                boxhdr.style.display = 'block';
                boxhdr.style.background = 'rgba(0,0,0,0.1)';
                    // Control the menu display
                    let boxnav = document.querySelector(".mainmenulist");
                    if(boxnav.style.display === 'block') {boxnav.style.display = 'none';}
                    else {setTimeout(function(){boxnav.style.display = 'block';boxnav.style.marginLeft = '0';}, 300);}

            }
            else {
                boxhdr.style.height = '100vh';
                boxhdr.style.display = 'block';
                boxhdr.style.background = 'rgba(18, 49, 70,1)';
                    // Control the menu display
                    let boxnav = document.querySelector(".mainmenulist");
                    if(boxnav.style.display === 'block') {boxnav.style.display = 'none';}
                    else {setTimeout(function(){boxnav.style.display = 'block';boxnav.style.marginLeft = '0';}, 300);}
            }
        }
        toggle_visibility();
    }
    quickClick() {
            let boxhdr = document.querySelector(".nav");
            if (boxhdr.style.height === '100vh') {
                this.setState(state => ({isToggleOn: !state.isToggleOn}));
                boxhdr.style.height = '10px';
                boxhdr.style.display = 'block';
                boxhdr.style.background = 'rgba(0,0,0,0.1)';
                // Control the menu display
                let boxnav = document.querySelector(".mainmenulist");
                if(boxnav.style.display === 'block') {boxnav.style.display = 'none';}
                else {setTimeout(function(){boxnav.style.display = 'block';boxnav.style.marginLeft = '0';}, 300);}

            }
    }
    componentDidMount() {
    }
    render() {
        return(
                <BrowserRouter>
                    <div id="header">

                        <div className="nav" id="nav">
                            <div className="mainmenulist animate">
                                <ul>
                                    <li><NavLink onClick={this.menuClick} exact={true} to="/">Home</NavLink>
                                        <ul>
                                            <li><NavLink onClick={this.menuClick} exact={true} to="/">Home sub</NavLink></li>
                                        </ul>
                                    </li>
                                    <li><NavLink onClick={this.menuClick} exact={true} to="/about">About</NavLink>
                                        <ul>
                                            <li><NavLink onClick={this.menuClick} exact={true} to="/">About Sub</NavLink></li>
                                        </ul>
                                    </li>
                                    <li><NavLink onClick={this.menuClick} exact={true} to="/contact">Get in touch</NavLink>
                                        <ul>
                                            <li><NavLink onClick={this.menuClick} exact={true} to="/">Contact sub</NavLink></li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <main>
                            <Switch>
                                <Route path="/" component={Homepage} exact />
                                <Route path="/about" component={Homepage} exact />
                                <Route path="/contact" component={Homepage} exact />
                                <Route path="/archiving" component={Archiving} exact />
                                <Route path="/bookings" component={Bookings} exact />
                                <Route path="/e-commerce" component={Commerce} exact />
                                <Route path="/tracking" component={Tracking} exact />
                                <Route path="/forms" component={ContactForm} exact />
                            </Switch>
                        </main>

                        <header>

                            <div className="logo">
                                <NavLink exact={true} to="/"><strong>PXLD</strong>GROUP</NavLink>
                            </div>

                            <nav>

                                <div className="quicklinks">
                                    <ul>
                                        <li><NavLink onClick={this.quickClick} exact={true} to="/bookings">Booking</NavLink></li>
                                        <li><NavLink onClick={this.quickClick} exact={true} to="/archiving">Archiving</NavLink></li>
                                        <li><NavLink onClick={this.quickClick} exact={true} to="/tracking">Tracking</NavLink></li>
                                        <li><NavLink onClick={this.quickClick} exact={true} to="/e-commerce">E-commerce</NavLink></li>
                                        <li><NavLink onClick={this.quickClick} exact={true} to="/forms">Forms</NavLink></li>
                                    </ul>
                                </div>

                                <div className="mainlinks">
                                    <div className="mobile">
                                        <button id="mainmenu" className={this.state.isToggleOn ? 'burgeroff' : 'burgeron'} onClick={this.menuClick} title="mobile menu button">
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                        </button>
                                    </div>
                                </div>

                            </nav>
                        </header>

                    </div>
                </BrowserRouter>
        )
    }
}
export default Hdr;