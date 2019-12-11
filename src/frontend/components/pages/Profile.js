import React from 'react';
// import PersonIcon from '@sb1/ffe-icons-react/lib/person-ikon';
// import PhoneIcon from '@sb1/ffe-icons-react/lib/telefon-ikon';
// import MailIcon from '@sb1/ffe-icons-react/lib/konvolutt-ikon';
// import CompanyIcon from '@sb1/ffe-icons-react/lib/kontorbygg-solid-ikon';

import ContactInformation from '../profile/ContactInformation';
import Subscription from '../profile/Subscription';

function Profile() {

    return (
        <React.Fragment>
            <ContactInformation />
            <Subscription />
        </React.Fragment>
    )
}

export default Profile;
