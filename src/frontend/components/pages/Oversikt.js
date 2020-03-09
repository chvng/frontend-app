import React from 'react';
import { CardBase, TextCard } from '@sb1/ffe-cards-react';

function Oversikt() {
    return (
        <div>
        {/* <CardBase style={{ position: "relative", width: "235px", height: "120px", float: "left", marginRight: "25px" }}>

            <input className="c-card" type="checkbox" id="1" value="1" />
            <div className="card-content">
                <label htmlFor="1">
                    <h4>Subject</h4>
                </label>
            </div>
        </CardBase> */}

        <div className="card-wrapper">
            <input className="c-card" type="checkbox" id="2" value="2" />
                <div className="card-content">
                    <label htmlFor="2">
                        <h4>Subject</h4>
                    </label>
                </div>
        </div>

        </div>
    )
}
        
export default Oversikt;