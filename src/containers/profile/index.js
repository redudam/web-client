import React from 'react';
import './profile.css';
import withAuth from '../withAuth';

class Profile extends React.Component {
    render() {
        return <div>Профиль</div>
    }
}

export default withAuth(Profile);