import React from 'react';
import OperationalMessage from './OperationalMessage';
import MessageContainer from './MessageContainer';
import data from './data_ops.json';

import './operational.less';


function OperationalContainer() {
    const text = "Vi har en gladnyhet. Alt fungerer som det skal og ingen driftsmeldinger å vise.";

    return (
        MessageContainer(OperationalMessage, data, text)
    )
}

export default OperationalContainer;