import React from 'react';
import productLogo from './logo.png';
import { LogoutButton } from '../logout-button';
import { Link } from 'react-router-dom';
import SideMenu from '../sidemenu';
import './header.css';
import AuthService from '../../AuthService';


import userAvatar from '../../logo.png';

export class Header extends React.Component {
    constructor() {
        super();
        this.Auth = new AuthService();
    }

    render() {
        return <div id="navbar">
            {this.Auth.isLoggedIn() && <SideMenu>
              <Link to="/profile">
              <div id="userInfo">
                <img src={userAvatar} id="userAvatar" alt="Пользователь" />
                <div id="userName" style={{color: 'black'}}>Олег</div>
              </div>
              </Link>
              <hr />
                <ul>
                    <li className="menuEntry">
                        {this.props.inProfile ? <Link className="menuEntryText inThis" to='/profile'>Профиль</Link> :
                          <Link className="menuEntryText" to='/profile'>Профиль</Link>}
                    </li>
                    <li className="menuEntry">
                      {this.props.inTasks ? <Link className="menuEntryText inThis" to='/'>Задачи</Link> :
                        <Link className="menuEntryText" to='/'>Задачи</Link>}
                    </li>
                    <li className="menuEntry">
                        <LogoutButton />
                    </li>
                </ul>
            </SideMenu>}
            <center><img alt="productlogo" id="productLogo" src={productLogo} /></center>
        </div>;
    }
}
