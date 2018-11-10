import React from 'react';
import withAuth from "../withAuth";

class CreateTask extends React.Component {
    render() {
        return <div>
            Let's create task
        </div>
    }
}

export default withAuth(CreateTask);