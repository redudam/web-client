import React from 'react';
import productLogo from './logo.png';
import { LogoutButton } from '../logout-button';
import { Link } from 'react-router-dom';
import { fakeAuth } from '../../auth';
import SideMenu from '../sidemenu';
import './header.css';

export class Header extends React.Component {
    render() {
        return <div id="navbar" style={{paddingLeft: '0 !important'}}>
            {fakeAuth.isAuthenticated && <SideMenu>
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
