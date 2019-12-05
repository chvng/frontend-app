import React, { useState, useEffect } from 'react';
import { Checkbox } from '@sb1/ffe-form-react';
import Dropdown from '@sb1/ffe-dropdown-react';
import { DividerLine } from '@sb1/ffe-core-react';
import { Grid, GridCol, GridRow, InlineGrid } from '@sb1/ffe-grid-react';
import PersonIcon from '@sb1/ffe-icons-react/lib/person-ikon';
import PhoneIcon from '@sb1/ffe-icons-react/lib/telefon-ikon';
import MailIcon from '@sb1/ffe-icons-react/lib/konvolutt-ikon';
import CompanyIcon from '@sb1/ffe-icons-react/lib/kontorbygg-solid-ikon';

// Test data - remove 
// Remove the file too when merging with excellence repo
import data from '../../api/user.json';
import list from '../../api/subscriptionrule.json';
import group from '../../api/subscribableservicegroup.json';

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
    // console.log(user);

    return (
        <Grid className="contact-information__container">
            <GridRow>
                <GridCol sm="12" md="8" lg="12">
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
                            <GridCol sm="4" lg="3">
                                <div className="contact-information__user">
                                    <div className="contact-information__user--ident">
                                        <PersonIcon className="contact-information__user--icon"/>
                                        <span>Ident</span>
                                    </div>
                                    <div className="contact-information__user--phone">
                                        <PhoneIcon className="contact-information__user--icon"/>
                                        <span>Telefon</span>
                                    </div>
                                    <div className="contact-information__user--email">
                                        <MailIcon className="contact-information__user--icon"/>
                                        <span>E-post</span>
                                    </div>
                                    <div className="contact-information__user--company">
                                        <CompanyIcon className="contact-information__user--icon"/>
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

function Subscription() {
    const [subscriptionRule, setSubscriptionRule] = useState({results:[]});
    const [checkedForSMS, setCheckedForSMS] = useState(false);

    useEffect(() => {
        const getSubscriptionList = () => {
            const getSubscriptions = list;
            setSubscriptionRule(getSubscriptions);
        };
        getSubscriptionList();
    }, [])
    console.log(subscriptionRule);

    const handleCheckedForSMS = () => {
        if(checkedForSMS === true) { 
            return (
                <Dropdown 
                    className="subscription__dropdown-box"
                    defaultValue="placeholder"
                >
                    <option 
                        value="placeholder"
                        disabled
                    >
                            Velg tidspunkt
                    </option>
                    {subscriptionRule.results.map((sub, index) => (
                        <option 
                            value={sub.name} 
                            key={index}
                        >
                                {sub.name}
                        </option>
                    ))}
                </Dropdown>
            )
        }
    }

    return (
        <div className="subscription">
            <Grid className="subscription__container">
                <GridRow>
                    <GridCol style={{ paddingBottom: '0.3em' }} lg="2">
                        <div className="subscription__header">
                            <h4 className="ffe-h4">Abonnering</h4>
                        </div>
                    </GridCol>
                </GridRow>
                <GridRow>
                    <GridCol className="profile__menu" lg="12">
                        <div className="subscription__underline"></div>
                    </GridCol>
                </GridRow>
                <GridRow>
                    <GridCol className="subscription__description" lg="12">
                        <div className="subscription__text">
                            <p>Vi sender varsling på SMS ved alvorlige driftshendelser og ellers kun på e-post. Du kan selv velge om du ønsker å motta varslinger på SMS under.</p>
                        </div>
                    </GridCol>
                    <GridCol className="subscription__notification-sms" lg="4">
                        <Checkbox
                            name="notification" 
                            value="sms" 
                            inline={true}
                            onChange={()=> {setCheckedForSMS(!checkedForSMS)}}
                        >
                                Motta varslinger på SMS
                        </Checkbox>
                        {handleCheckedForSMS()}
                    </GridCol>
                    <GridCol className="subscription__notification-email" lg="4">
                        <Checkbox
                            name="notification" 
                            value="email" 
                            disabled
                            inline={true}
                            checked={true}
                        >
                                Motta varslinger på e-post
                        </Checkbox>
                    </GridCol>
                </GridRow>
            </Grid>
        </div>
    )
}

function Systems() {
    const [subscribableGroup, setSubscribableGroup] = useState({results: []});

    useEffect(() => {
        const getSubscribableGroupList = () => {
            const getSubscribableGroup = group;
            setSubscribableGroup(getSubscribableGroup);
        }
        getSubscribableGroupList();
    }, [])

    console.log(subscribableGroup);

    return (
        <Grid className="systems__container">
            <GridRow>
                <GridCol style={{ paddingBottom: '0.3em' }} lg="2">
                    <div className="systems__header">
                        <h4 className="ffe-h4">Systemer</h4>
                    </div>
                </GridCol>
                <GridCol className="systems__menu" lg="12">
                    <div className="systems__underline"></div>
                </GridCol>
            </GridRow>
            <GridRow>
                <GridCol className="systems__picker" lg="6">
                    <div className="systems__description">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                    <div className="systems__dropdown">
                    <Dropdown 
                    className="subscription__dropdown-box"
                    defaultValue="placeholder"
                >
                    <option 
                        value="placeholder"
                        disabled
                    >
                            Velg systemer
                    </option>
                    {subscribableGroup.results.map((sub, index) => (
                        <option 
                            value={sub.name} 
                            key={index}
                        >
                                {sub.name}
                        </option>
                    ))}
                </Dropdown>
                    </div>
                </GridCol>
            </GridRow>
        </Grid>
    )
}

function Profile() {
    return (
        <React.Fragment>
            <ContactInformation/>
            <Subscription/>
            <Systems/>
        </React.Fragment>
    )
}

export default Profile;
