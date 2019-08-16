import React, { useState } from 'react';
import { TextCard } from '@sb1/ffe-cards-react';
import { GridCol } from '@sb1/ffe-grid-react';

import './systemstyles.less';

function SystemStatus(props) {
    const [isUnavailable, setUnavailable] = useState(props.isUnavailable)
    const [isUnstable, setUnstable] = useState(props.isUnstable)
    const [maintenanceOngoing, setMaintenance] = useState(props.maintenanceOngoing)

    let color;

    if (isUnavailable) {
        color = '#F3BBAA'
    } else if (isUnstable && !isUnavailable) {
        color = '#FFFBCA'
    } else if (maintenanceOngoing && !isUnavailable && !isUnstable) {
        color = '#CCCCCC'
    } else {
        color = '#E1F4E3'
    }

    // OLD COLOR PALETTE
    // green: '#E1F4E3'
    // red: '#F3BBAA'
    // yellow: '#FFFBCA'
    // grey: '#CCCCCC'

    return (
        <GridCol className='card__col' sm="6" md="4" lg="2">
            <TextCard className='card' style={{ backgroundColor: color }}>
                {props.name}
            </TextCard>
        </GridCol>
    )
}

export default SystemStatus;