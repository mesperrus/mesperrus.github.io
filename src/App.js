import React from 'react';
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
// import logo from './logo.svg';
import './App.css';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons';

library.add(faGithub, faLinkedinIn, faInstagram);

export default class App extends React.Component {
  componentDidMount() {
    document.title = "Mesa Perry";
  }

  render() {
    return (
      <BrowserRouter basename="/">
        <Route render={({ location }) => {
          const { pathname, key } = location

          return (
            <TransitionGroup component={null}>
              <CSSTransition
                key={key}
                appear={true}
                onEnter={(node, appears) => play(pathname, node, appears)}
                timeout={{enter: 750, exit: 0}}
              >
                <Switch location={location}>
                  <Route path="/experience">
                    <Container page="Experience" />
                  </Route>
                  <Route path="/portfolio">
                    <Container page="Portfolio" />
                  </Route>
                  <Route path="/">
                    <Container page="Mesa Perry" />
                  </Route>
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          )
        }}/>

      </BrowserRouter>
    );
  }
}

class Container extends React.Component {
  render() {
    return (
      <div className="color1 container">
        <div className="color2 inner">
          <div className="vertical">
            <NavigationBar />
            <h1 className="text_color1 title">{this.props.page}</h1>
          </div>
          {this.props.page==="Mesa Perry" && <About />}
          {this.props.page==="Experience" && <Experience />}
          {this.props.page==="Portfolio" && <Portfolio />}
          <SocialBar />
        </div>
      </div>
    );
  }
}


class NavigationBar extends React.Component {
  render() {
    return (
      <div className="horizontal">
        <Link className="text_color1 clickable navi_button" to="/">About</Link>
        <Link className="text_color1 clickable navi_button" to="/experience">Experience</Link>
        <Link className="text_color1 clickable navi_button" to="/portfolio">Portfolio</Link>
        <a
          className="text_color1 clickable navi_button"
          target="_blank"
          rel="noopener noreferrer"
          href="https://drive.google.com/open?id=1gxt6W-gEsK1tu5ikDbddfdwjn1tme1Rl"
        >Resume</a>
      </div>
    );
  }
}

class SocialBar extends React.Component {
  render() {
    return (
      <div className="horizontal">
        <a href="https://github.com/mesperrus/">
          <FontAwesomeIcon
            icon={['fab', 'github']}
            size="3x"
            className="text_color1 clickable social_button"
          />
        </a>
        <a href="https://www.linkedin.com/in/mesa-perry-558715193/">
          <FontAwesomeIcon
            icon={['fab', 'linkedin-in']}
            size="3x"
            className="text_color1 clickable social_button"
          />
        </a>
        <a href="https://www.instagram.com/mesa.perry/">
          <FontAwesomeIcon
            icon={['fab', 'instagram']}
            size="3x"
            className="text_color1 clickable social_button"
          />
        </a>
      </div>
    );
  }
}

class About extends React.Component {
  render() {
    return (
      <div className="vertical">
        <p className="info">
          Heyo -- welcome to my abode!
          I'm a student and software developer from
          University of Illinois Urbana-Champaign.
        </p>
        <p className="info">
          My experience includes a deep learning internship at
          ST Engineering and various personal projects.
          Recently I participated in HackIllinois 2020 and
          won first place for Checkbook's challenge.
          This summer I'll be interning as a SDE intern
          at Amazon Lab126.
          Feel free to visit some of my work above,
          or check me out on other sites below.
        </p>
      </div>
    );
  }
}

class Experience extends React.Component {
  render() {
    return (
      <div>
        <p className="info">
          Coming soon...
        </p>
      </div>
    );
  }
}

class Portfolio extends React.Component {
  render() {
    return (
      <div>
        <p className="info">
          Coming soon...
        </p>
      </div>
    );
  }
}
