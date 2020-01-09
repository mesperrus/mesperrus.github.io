import React from 'react';
import ReactDOM from 'react-dom'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
// import logo from './logo.svg';
import './App.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export default function App() {
    return (
        <Router>
            <Switch>
                <Route path="/experience">
                    <Experience />
                </Route>
                <Route path="/portfolio">
                    <Portfolio />
                </Route>
                <Route path="/">
                    <About />
                </Route>
            </Switch>
        </Router>
    );
}

class Workbar extends React.Component {
    render() {
        if (this.props.orientation == "vertical") {
            return (
                <ul style={{listStyleType: "none"}}>
                    <li class="vertRightAlign"><Link class="naviItem" to="/">About</Link></li>
                    <li class="vertRightAlign"><Link class="naviItem" to="/experience">Experience</Link></li>
                    <li class="vertRightAlign"><Link class="naviItem" to="/portfolio">Portfolio</Link></li>
                    <li class="vertRightAlign"><a class="naviItem" target="_blank" href="https://drive.google.com/open?id=1yqMO3pYSPpTFIEAjudw-uVI-nT-kwESp">Resume</a></li>
                </ul>
            );
        }
        else if (this.props.orientation == "horizontal") {
            return (
                <ul style={{listStyleType: "none"}}>
                    <li class="horCenterAlign"><Link class="naviItem" to="/">About</Link></li>
                    <li class="horCenterAlign"><Link class="naviItem" to="/experience">Experience</Link></li>
                    <li class="horCenterAlign"><Link class="naviItem" to="/portfolio">Portfolio</Link></li>
                    <li class="horCenterAlign"><a class="naviItem" target="_blank" href="https://drive.google.com/open?id=1yqMO3pYSPpTFIEAjudw-uVI-nT-kwESp">Resume</a></li>
                </ul>
            );
        }
    }
}

function About() {
    document.getElementById("root").style.justifyContent = "center";
    return (
        <div id="inner">
            <div id="upper">
                <h1>Mesa Perry</h1>
                <Workbar orientation="vertical"/>
            </div>
            <div id="mid">
                <p>Ayo -- welcome to my humble abode. I'm a student and software developer from University of Illinois Urbana-Champaign.</p>
                <p>My experience includes a machine learning internship at ST Engineering and various personal projects. Feel free to visit some of my work above, or check me out on other sites below.</p>
            </div>
            <div id="foot">
                <a href="https://github.com/mesperrus/"><FontAwesomeIcon icon="angry" /></a>
                <a href="https://www.linkedin.com/in/mesa-perry-558715193/"><i class="fab fa-linkedin fa-3x" id="linkedin"></i></a>
                <a href="https://www.instagram.com/mesa.perry/"><i class="fa fa-instagram" id="insta" aria-hidden="true"></i></a>
            </div>
        </div>
    );
}

function Experience() {
    document.getElementById("root").style.justifyContent = "start";
    return (
        <div id="container">
            <div id="header">
                <Workbar orientation="horizontal" />
            </div>
        </div>
    );
}

function Portfolio() {
    document.getElementById("root").style.justifyContent = "start";
    return (
        <div id="container">
            <div id="header">
                <Workbar orientation="horizontal" />
            </div>
        </div>
    );
}