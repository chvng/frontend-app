import { getUserInformation } from '../../api/api';

import React, { useState, useEffect } from 'react';
import { Grid, GridCol, GridRow, InlineGrid } from '@sb1/ffe-grid-react';

function ContactInformation() {
    const [user, setUser] = useState({});

    useEffect(() => {
        setUser(getUserInformation);
    }, []);

    return (
        <Grid className="contact-information">
            <GridRow>
                <GridCol className="contact-information__container" sm="12" md="8" lg="12">
                    <div className="contact-information__user--name contact-information__dividerline">
                        <h3 className="ffe-h3">{user.first_name} {user.last_name}</h3>
                    </div>
                    <InlineGrid>
                        <GridRow>
                            <GridCol sm="12" md="12" lg="12">
                                <div className="contact-information__header">
                                    <h5 className="ffe-h5">Kontaktinformasjon</h5>
                                </div>
                            </GridCol>
                            <GridCol sm="4" lg="3">
                                <div className="contact-information__user">
                                    <div className="contact-information__user--ident">
                                        {/* Remember to add icon later */}
                                        <span>Ident</span>
                                    </div>
                                    <div className="contact-information__user--phone">
                                        {/* Remember to add icon later */}
                                        <span>Telefon</span>
                                    </div>
                                    <div className="contact-information__user--email">
                                        {/* Remember to add icon later */}
                                        <span>E-post</span>
                                    </div>
                                    <div className="contact-information__user--company">
                                        {/* Remember to add icon later */}
                                        <span>Selskap</span>
                                    </div>
                                </div>
                            </GridCol>
                            <GridCol sm="8" lg="9">
                                <div className="contact-information__user">
                                    <span className="contact-information__user--information">{user.ident}</span>
                                    <span className="contact-information__user--information">{user.mobile}</span>
                                    <span className="contact-information__user--information">{user.email}</span>
                                    <span className="contact-information__user--information">{user.company}</span>
                                </div>
                            </GridCol>
                        </GridRow>
                    </InlineGrid>
                </GridCol>
            </GridRow>
        </Grid>
    )
}

export default ContactInformation;