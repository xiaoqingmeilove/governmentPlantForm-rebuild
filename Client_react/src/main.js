import React from 'react';

class Main extends React.Component {
    render() {
        console.log("gggg",this)
        return (
            <div>
                <div>--------头部--------</div>
                {this.props.children}
                <div>--------尾部--------</div>
            </div>
        )
    }
}

export default Main