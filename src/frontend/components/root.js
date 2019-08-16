import React, { Component } from 'react';
import Header from './header/Header.js';
import Footer from './footer/Footer.js'


class Root extends Component {
    render() {
        return (
            <React.Fragment>
                <Header />
                <main>
                    {this.props.children}
                </main>
                <Footer /> 
            </React.Fragment>
        )
    }
}

export default Root
