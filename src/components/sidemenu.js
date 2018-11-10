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
  backgroundColor: 'aqua',
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
};

export default class SideMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpened: false
    };
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu() {
    if (!this.state.menuOpened){
      document.getElementById('sideMenu').style.width = "75%";
      this.setState({
        menuOpened: true
      });
    }
    else {
      document.getElementById('sideMenu').style.width = "0px";
      this.setState({
        menuOpened: false
      });
    }
  }

  render() {
    return (
      <>
      <img src={burgerIcon} style={toggleBtn} onClick={this.toggleMenu} />
      <div id="sideMenu" style={sideMenuStyle}>
        {this.props.children}
      </div>
      </>
    );
  }
}
