import React from 'react';
import { Button } from 'antd';

class Main extends React.Component {
    render() {
        return (
            <div>
                <Button type="primary">Primary</Button>
                <Button>Default</Button>
                <Button type="dashed">Dashed</Button>
                <Button type="danger">Danger</Button>
                 <ul>
                    <li>Form</li>
                    <li>One</li>
                    <li>Two</li>
                </ul>
            </div>
        )
    }
}

export default Main