import React from 'react';
import './sidemenu.css';
import burgerIcon from './menu.png';

const sideMenuStyle = {
  transition: '1s',
  position: 'fixed',
  top: 50,
  left: 0,
  width: 0,
  height: 'calc(100% - 50px)',
  backgroundColor: 'white',
  zIndex: 99,
  overflow: 'hidden'
};

const toggleBtn = {
  position: 'absolute',
  zIndex: 99,
  top: 10,
  left: 10,
  width: 30,
  height: 30,
  cursor: 'pointer'
};

const shadow = {
  position: 'fixed',
  top: 50,
  left: 0,
  height: '100%',
  width: '0px',
  backgroundColor: 'rgba(0,0,0,0.7)',
  opacity: 0,
  transition: 'opacity 1s'
};

export default class SideMenu extends React.Component {
  constructor(props) {
    super(props);
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  componentDidMount() {
    let menuOpened = false;
    let timeout = null;
  }

  hideShadow() {
    document.getElementById('shadowObj').style.opacity = 0;
    document.getElementById('shadowObj').style.width = "0px";

    clearTimeout(this.timeout);
    this.timeout = null;
  }

  toggleMenu() {
    if (!this.menuOpened){
      document.getElementById('shadowObj').style.width = "100%";
      document.getElementById('sideMenu').style.width = "75%";
      document.getElementById('shadowObj').style.opacity = 1;

      this.menuOpened = true;
    }
    else {
      document.getElementById('sideMenu').style.width = "0px";
      document.getElementById('shadowObj').style.opacity = 0;

      this.timeout = setTimeout(this.hideShadow, 1000);

      this.menuOpened = false;
    }
  }

  render() {
    return (
      <>
      <div id="shadowObj" onClick={this.toggleMenu} style={shadow}></div>
      <img alt='burger' src={burgerIcon} style={toggleBtn} onClick={this.toggleMenu} />
      <div id="sideMenu" style={sideMenuStyle}>
        {this.props.children}
      </div>
      </>
    );
  }
}
