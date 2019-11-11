import React, { useState, useEffect } from 'react';
import { Grid, GridCol, GridRow, InlineGrid } from '@sb1/ffe-grid-react';

// Test data - remove 
import data from './user.json';

function ContactInformation() {
    const [user, setUser] = useState({});

    useEffect(() => {
        const getUser = () => {
            const getUserResult = data;
            setUser(getUserResult)
        };
        getUser(); 
    }, [])

    console.log(user);

    return (
        <GridCol sm="12" md="8" lg="9" className="contact-information__user">
            <div className="contact-information__user--name">
                <h3 className="ffe-h3">{user.first_name} {user.last_name}</h3>
            </div>
            <InlineGrid>
                <GridRow>
                    <GridCol sm="4" lg="3">
                        <div className="contact-information__user--information">
                            <h5 className="ffe-h5" style={{ color: "#676767" }}>Kontaktinformasjon</h5>
                            <div className="contact-information__user--ident">

                                <span className="contact-information__user--information">Ident:</span>
                            </div>
                            <div className="contact-information__user--phone">

                                <span className="contact-information__user--information">Telefon:</span>
                            </div>
                            <div className="contact-information__user--email">

                                <span className="contact-information__user--information">E-post:</span>
                            </div>
                            <div className="contact-information__user--company">

                                <span className="contact-information__user--information">Selskap:</span>
                            </div>
                        </div>
                    </GridCol>
                    <GridCol sm="8" lg="9">
                        <div className="contact-information__profile">
                            <span className="contact-information__profile--information">{user.ident}</span>
                            <span className="contact-information__profile--information">{user.mobile}</span>
                            <span className="contact-information__profile--information">{user.email}</span>
                            <span className="contact-information__profile--information">{user.company}</span>
                        </div>
                    </GridCol>
                </GridRow>
            </InlineGrid>
        </GridCol>
    )
}

function Profile() {
    return (
        ContactInformation()
    )
}

export default Profile;
