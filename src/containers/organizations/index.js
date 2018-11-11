import React from 'react';
import withAuth from '../withAuth';
import { getOrganizations, inviteUserToOrganization
 } from '../../api';
import { CollapsibleInput } from '../../components/collapsible-input';
import { Header } from '../../components/header';
import {Alert} from 'reactstrap';

class Organizations extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            organizations: [],
            inviteWasSent: false
        };
        this.inviteUserToOrganization = this.inviteUserToOrganization.bind(this);
        this.onDismiss = this.onDismiss.bind(this);
    }

    onDismiss() {
        this.setState({
            inviteWasSent: false
        });
    }

    componentDidMount() {
        getOrganizations().then(organizations => {
            this.setState({
                organizations
            });
        });
    }

    inviteUserToOrganization(email, orgId) {
        inviteUserToOrganization(email, orgId)
            .then(() => {
                this.setState({
                    inviteWasSent: true
                });
            });
    }

    render() {
        return (
            <div>
                <Header />
                <Alert 
                isOpen={this.state.inviteWasSent} 
                toggle={this.onDismiss}
                color="success">
                    Пользователю было отправлено приглашение
                </Alert>
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