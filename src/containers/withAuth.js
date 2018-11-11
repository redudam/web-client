import React, { Component } from 'react';
import AuthService from '../AuthService';

export default function withAuth(AuthComponent) {
    const Auth = new AuthService('http://95.213.28.116')
    return class AuthWrapped extends Component {
        constructor(props) {
            super(props);

            this.state = {
                user: null
            }
        }

        componentWillMount() {
            console.log('with auth will mount');
            if (!Auth.isLoggedIn()) {
                console.log('redirecting to login');
                this.props.history.replace('/login');
            }
            else {
                try {
                    const user = Auth.getUser();
                    this.setState({
                        user: user
                    });
                }
                catch(err){
                    Auth.logout()
                    console.log('redirecting to login from catch');
                    this.props.history.replace('/login')
                }
            }
        }

        render() {
            if (this.state.user) {
                return (
                    <AuthComponent history={this.props.history} user={this.state.user} {...this.props}  />
                )
            }
            else {
                return null;
            }
        }
    }
}
