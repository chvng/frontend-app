import React from 'react';
import SystemContainer from '../components/systemstatus/SystemContainer.js';
import OperationalContainer from '../components/operationalmessages/OperationalContainer.js';
import MaintanenceContainer from '../components/operationalmessages/MaintanenceContainer.js';

const Oversikt = () => {
    return (
        <div>
            <SystemContainer/>
            <div className="operational__container">
                <h2 className="ffe-h2">Driftsmeldinger</h2>
                <OperationalContainer/>
                <h2 className="ffe-h2">Informasjon & planlagte aktiviteter</h2>
                <MaintanenceContainer/>
            </div>
        </div>
    );
}

export default Oversikt;