import React from 'react';
import productLogo from './logo.png';
import { LogoutButton } from '../logout-button';
import { Link } from 'react-router-dom';
import SideMenu from '../sidemenu';
import './header.css';
import AuthService from '../../AuthService';


export class Header extends React.Component {
    constructor() {
        super();
        this.Auth = new AuthService();
    }

    render() {
        return <div id="navbar">
            {this.Auth.isLoggedIn() && <SideMenu>
                <ul>
                    <li>
                        <Link to='/profile'>Профиль</Link>
                    </li>
                    <li>
                        <LogoutButton />
                    </li>
                </ul>
            </SideMenu>}
            <center><img alt="productlogo" id="productLogo" src={productLogo} /></center>
        </div>;
    }
}
