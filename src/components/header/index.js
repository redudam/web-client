import React from 'react';
import productLogo from './logo.png';
// import { slide as Menu } from 'react-burger-menu';
import { LogoutButton } from '../logout-button';
import { Link } from 'react-router-dom';
import { fakeAuth } from '../../auth';

import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

export class Header extends React.Component {
    render() {
        return <div id="navbar">
        { fakeAuth.isAuthenticated && <span>menu</span>}
          <img alt="productlogo" id="productLogo" src={productLogo} />
        </div>;
    }
}