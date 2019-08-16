import React from 'react';
import MaintanenceMessage from './MaintanenceMessage.js';
import MessageContainer from './MessageContainer.js';
import data from './data_main.json';

function MaintanenceContainer() {
    const text = "Ingen spennende informasjon eller vedlikeholdsmeldinger å dele."

    return (
        MessageContainer(MaintanenceMessage, data, text)
    )
}

export default MaintanenceContainer;