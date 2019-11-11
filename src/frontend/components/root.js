import React, { Component } from 'react';
import Header from './header/Header.js';

class Root extends Component {
    render() {
        return (
            <React.Fragment>
                <Header />
                    <main>
                        {this.props.children}
                    </main>
            </React.Fragment>
        )
    }
}

export default Root;