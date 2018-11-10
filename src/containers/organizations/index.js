import React from 'react';
import withAuth from '../withAuth';
import { getOrganizations } from '../../api';

class Organizations extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            organizations: []
        }
    }

    componentDidMount() {
        getOrganizations().then(organizations => {
            this.setState({
                organizations
            });
        });
    }

    render() {
        return (
            <div>
                <h1>Организации</h1>
                <ul>
                    { 
                        this.state.organizations.map(org => <li key={org.id}>{ org.title }</li>)
                    }
                </ul>
            </div>
        );
    }
}

export default withAuth(Organizations);