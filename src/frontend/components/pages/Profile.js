import React, { useState, useEffect } from 'react';
import { Grid, GridCol, GridRow, InlineGrid } from '@sb1/ffe-grid-react';
import PersonIcon from '@sb1/ffe-icons-react/lib/person-ikon';
import PhoneIcon from '@sb1/ffe-icons-react/lib/telefon-ikon';
import MailIcon from '@sb1/ffe-icons-react/lib/konvolutt-ikon';
import CompanyIcon from '@sb1/ffe-icons-react/lib/kontorbygg-solid-ikon';

// Test data - remove 
// Remove the file too when merging with excellence repo
import data from '../../api/user.json';

function ContactInformation() {
    const [user, setUser] = useState({});

    useEffect(() => {
        const getUser = () => {
            const getUserResult = data;
            setUser(getUserResult)
        };
        getUser(); 
    }, [])

    // Test if user is fetched
    console.log(user);

    return (
        <Grid className="contact-information__container">
            <GridRow>
                <GridCol sm="12" md="8" lg="9">
                    <div className="contact-information__user--name">
                        <h3 className="ffe-h3">{user.first_name} {user.last_name}</h3>
                    </div>
                    <InlineGrid>
                        <GridRow>
                            <GridCol sm="12" md="12" lg="12">
                                <div className="contact-information__header">
                                    <h5 className="ffe-h5">Kontaktinformasjon</h5>
                                </div>
                            </GridCol>
                        </GridRow>
                        <GridRow>
                            <GridCol sm="4" lg="3">
                                <div className="contact-information__user">
                                    <div className="contact-information__user--ident">
                                        <PersonIcon className="contact-information__user--icon"/>
                                        <span>Ident:</span>
                                    </div>
                                    <div className="contact-information__user--phone">
                                        <PhoneIcon className="contact-information__user--icon"/>
                                        <span>Telefon:</span>
                                    </div>
                                    <div className="contact-information__user--email">
                                        <MailIcon className="contact-information__user--icon"/>
                                        <span>E-post:</span>
                                    </div>
                                    <div className="contact-information__user--company">
                                        <CompanyIcon className="contact-information__user--icon"/>
                                        <span>Selskap:</span>
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

function Profile() {
    return (
        ContactInformation()
    )
}

export default Profile;
