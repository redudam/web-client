import React from 'react';
import productLogo from './logo.png';
import { LogoutButton } from '../logout-button';
import { NavLink } from 'react-router-dom';
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
                        <NavLink className="menuEntryText"
                           activeClassName='inThis' 
                         to='/profile'>Профиль</NavLink>
                    </li>
                    <li className="menuEntry">
                        <NavLink className="menuEntryText"
                        activeClassName='inThis'
                        exact
                        to='/'>Задачи</NavLink>
                    </li>
                    { this.Auth.isAdmin() && <li className="menuEntry">
                        <NavLink className="menuEntryText"
                        activeClassName='inThis'
                        to='/create-task'>Создать задачу</NavLink>
                    </li> }
                    <li className="menuEntry">
                        <LogoutButton />
                    </li>
                </ul>
            </SideMenu>}
            <center><img alt="productlogo" id="productLogo" src={productLogo} /></center>
        </div>;
    }
}
