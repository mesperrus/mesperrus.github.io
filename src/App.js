import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
// import logo from './logo.svg';
import './App.css';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons';

library.add(faGithub, faLinkedinIn, faInstagram); 


export default class App extends React.Component {
  componentDidMount(){
    document.title = "Mesa Perry";
  }

  render() {
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
}

class Workbar extends React.Component {
    render() {
        if (this.props.orientation === "vertical") {
            return (
                <ul>
                    <li className="vertRightAlign"><Link className="naviItem clickable" to="/">About</Link></li>
                    <li className="vertRightAlign"><Link className="naviItem clickable" to="/experience">Experience</Link></li>
                    <li className="vertRightAlign"><Link className="naviItem clickable" to="/portfolio">Portfolio</Link></li>
                    <li className="vertRightAlign"><a className="naviItem clickable" target="_blank" rel="noopener noreferrer" href="https://drive.google.com/open?id=1yqMO3pYSPpTFIEAjudw-uVI-nT-kwESp">Resume</a></li>
                </ul>
            );
        }
        else if (this.props.orientation === "horizontal") {
            return (
                <ul>
                    <li className="horCenterAlign"><Link className="naviItem clickable tile" to="/">About</Link></li>
                    <li className="horCenterAlign"><Link className="naviItem clickable tile" to="/experience">Experience</Link></li>
                    <li className="horCenterAlign"><Link className="naviItem clickable tile" to="/portfolio">Portfolio</Link></li>
                    <li className="horCenterAlign"><a className="naviItem clickable tile" target="_blank" rel="noopener noreferrer" href="https://drive.google.com/open?id=1yqMO3pYSPpTFIEAjudw-uVI-nT-kwESp">Resume</a></li>
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
                <p className="aboutText">Ayo -- welcome to my humble abode. I'm a student and software developer from University of Illinois Urbana-Champaign.</p>
                <p className="aboutText">My experience includes a machine learning internship at ST Engineering and various personal projects. Feel free to visit some of my work above, or check me out on other sites below.</p>
            </div>
            <div id="foot">
                <a href="https://github.com/mesperrus/"><FontAwesomeIcon icon={['fab', 'github']} size="3x" className="clickable" /></a>
                <a href="https://www.linkedin.com/in/mesa-perry-558715193/"><FontAwesomeIcon icon={['fab', 'linkedin-in']} size="3x" className="clickable" /></a>
                <a href="https://www.instagram.com/mesa.perry/"><FontAwesomeIcon icon={['fab', 'instagram']} size="3x" className="clickable" /></a>
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
            <div id="content">
              <p>Coming soon...</p>
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
            <div id="content">
              <p>Coming soon...</p>
            </div>
        </div>
    );
}