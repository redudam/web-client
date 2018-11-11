import React from 'react';
import { Collapse, Input, InputGroup, InputGroupAddon, Button } from 'reactstrap';
import './collapsible-input.css';

export class CollapsibleInput extends React.Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.state = { 
            collapse: false,
            email: ''
        };
    }

    handleEmailChange(event) {
        this.setState({
            email: event.target.value
        });
    }

    toggle() {
        this.setState({collapse: !this.state.collapse});
    }

    render() {
        return (
            <li className='orgItem'><div style={{display:'flex'}}><p style={{flexGrow: 10}}>{ this.props.org.title }</p> 
                    <Button color="success" onClick={this.toggle}>+</Button></div>
                    <Collapse isOpen={this.state.collapse}>
                        <InputGroup style={{marginTop: 10}}>
                            <Input 
                            value={this.state.email}
                            onChange={this.handleEmailChange}
                            placeholder='Email сотрудника' 
                            type='email' />
                            <InputGroupAddon  addonType='append'>
                                <Button 
                                color="primary"
                                onClick={() => this.props.onInviteClick(this.state.email, this.props.org.id)}
                                >Пригласить</Button>
                            </InputGroupAddon>
                        </InputGroup> 
                    </Collapse>
            </li>
        )
    }
} 
