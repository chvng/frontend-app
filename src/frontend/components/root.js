import React, { Component } from 'react';
import Spinner from '@sb1/ffe-spinner-react';

class Root extends Component {
    render() {
        return (
            <main>
                <div style={{ textAlign: 'center' }}>
                    <h2 className="ffe-h2" style={{ marginTop: '20px' }}>
                        Heisann, her kan du lage komponenter eller hva du vil!
                    </h2>
                    <Spinner large={true} />
                    <p>Venter på at du skal lage noe kult</p>
                </div>
            </main>
        );
    }
}

export default Root;