import React from 'react';
import productLogo from './logo.png';
import { LogoutButton } from '../logout-button';
import { Link } from 'react-router-dom';
import { fakeAuth } from '../../auth';
import SideMenu from '../sidemenu';
import './header.css';

import userAvatar from '../../logo.png';

export class Header extends React.Component {
    render() {
        return <div id="navbar">
            {fakeAuth.isAuthenticated && <SideMenu>
              <div id="userInfo">
                <img src={userAvatar} id="userAvatar" alt="Пользователь" />
                <div id="userName">Олег</div>
              </div>
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
