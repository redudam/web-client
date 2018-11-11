import React from 'react';
import withAuth from '../withAuth';
import { getOrganizations } from '../../api';
import { CollapsibleInput } from '../../components/collapsible-input';
import { Header } from '../../components/header';

class Organizations extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            organizations: []
        }
        this.inviteUserToOrganization = this.inviteUserToOrganization.bind(this);
    }

    componentDidMount() {
        getOrganizations().then(organizations => {
            this.setState({
                organizations
            });
        });
    }

    inviteUserToOrganization(email, orgId) {
        console.log(email, orgId);
    }

    render() {
        return (
            <div>
                <Header />
                <div style={{paddingRight: 20}}>
                    <h2 style={{marginLeft: 15}}>Организации</h2>
                    <ul style={{
                        listStyle:'none',
                        marginLeft: 15,
                        paddingLeft: 0
                        }}>
                        { 
                            this.state.organizations.map(org => <CollapsibleInput
                                org={org}
                                key={org.id}
                                onInviteClick={this.inviteUserToOrganization}
                            ></CollapsibleInput> )
                        }
                    </ul>
                </div>
            </div>
        );
    }
}

export default withAuth(Organizations);