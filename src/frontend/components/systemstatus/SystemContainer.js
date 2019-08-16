import React from 'react';
import { Grid, GridRow } from '@sb1/ffe-grid-react';

import data from './data.json';
import SystemStatus from './SystemStatus.js';

import './systemstyles.less';

function SystemContainer() {
    const systemComponents = data.map(system => 
        <SystemStatus 
            key={system.id}
            name={system.name} 
            isUnavailable={system.isUnavailable}
            isUnstable={system.isUnstable}
            maintenanceOngoing={system.maintenanceOngoing} 
            />
        )

    return (
        <div className="card__container">
            <Grid>
                <GridRow>
                    {systemComponents}
                </GridRow>
            </Grid>
        </div>
    )
}

export default SystemContainer;