import { getSubscriptionRule } from '../../api/api';

import React, { useState, useEffect } from 'react';
import { Checkbox } from '@sb1/ffe-form-react';
import Dropdown from '../dropdown/Dropdown';
import { Grid, GridCol, GridRow, InlineGrid } from '@sb1/ffe-grid-react';

function Subscription() {
    const [subscription, setSubscription] = useState({ results: [] }),
          [changed, setChanged] = useState(),
          [checked, setChecked] = useState(false);

    useEffect(() => {
        setSubscription(getSubscriptionRule);
    }, []);
    
    const subscriptionRuleOptions = () => {
        const labelId = 'labelId1';
        if(checked) {
            return (
                // <Dropdown
                //     className="subscription__rule-choices"
                //     defaultValue="placeholder"
                //     onChange={e => setChanged(e.target.value)}
                // >
                //     <option
                //         value="placeholder"
                //         disabled
                //     >
                //         Velg tidspunkt
                //     </option>
                //     {subscription.results.map((sub, index) => (
                //         <option
                //             value={sub.name}
                //             key={index}
                //         >
                //             {sub.name}
                //         </option>
                //     ))}
                // </Dropdown>
                <Dropdown
                    className='subscription__rule-choices'
                    labelId={labelId}
                    inputProps={{placeholder: 'Velg'}}
                    dropdownAttributes={['name']}
                    dropdownList={subscription.results}
                    noMatch={{text: 'Søket ga ingen treff'}}
                    searchAttributes={['name']}
                />
            )
        } 
        //console.log(subscription.results);
    }

    return (
        <Grid className="subscription">
            <GridRow>
                <GridCol className="subscription__container" lg={12}>
                    <div className="subscription__header subscription__dividerline">
                        <h4 className="ffe-h4">Abonnering</h4>
                    </div>
                    <InlineGrid>
                        <GridRow>
                            <GridCol lg={12}>
                                <div className="subscription__description">
                                    <p>Vi sender varsling på SMS ved alvorlige driftshendelser og ellers kun på e-post. Du kan selv velge om du ønsker å motta varslinger på SMS under.</p>
                                </div>
                            </GridCol>
                            <GridCol className="subscription__notification-sms" lg={4}>
                                <Checkbox 
                                    name="notification"
                                    value="sms"
                                    inline={true}
                                    onChange={e => setChecked(e.target.checked)}
                                >
                                    Motta varslinger på SMS
                                </Checkbox>
                                {subscriptionRuleOptions()}
                            </GridCol>
                            <GridCol className="subscription__notification-email" lg={4}>
                                <Checkbox 
                                    name="notification"
                                    value="email"
                                    disabled
                                    checked={true}
                                    inline={true}
                                >
                                    Motta varslinger på e-post
                                </Checkbox>
                            </GridCol>
                        </GridRow>
                    </InlineGrid>
                </GridCol>
            </GridRow>
        </Grid>
    )
}

export default Subscription;