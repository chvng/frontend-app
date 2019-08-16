import React from "react";
import { Grid, GridCol, GridRow } from '@sb1/ffe-grid-react';
import './Footer.less';

const Footer = () => {
    return (
        <footer>
            <Grid className="footer__container">
            <GridRow>
                <GridCol sm="6" md="4" className="footer__shortcuts">
                    <h4 className="footer__h4--align">Snarveier</h4>
                    <ul >
                        <li>
                            <a href="https://origo.intern.sparebank1.no/origo/om_origo">Om oss</a>
                        </li>
                        <li>
                            <a href="https://servicedesk.intern.sparebank1.no/">Servicedesk</a>
                        </li>
                        <li>
                            <a href="https://logganalyse.intern.sparebank1.no/en-US/app/logganalyse/privat">Logganalysen</a>
                        </li>
                        <li>
                            <a href="https://confluence.intern.sparebank1.no/display/LFL/Kjente+feil">Kjente feil</a>
                        </li>
                    </ul>
                </GridCol>
                <GridCol className="footer__contact__mobile" sm="6">
                    <h4 className="footer__h4--align">Kontakt</h4>
                    <ul>
                        <li>Telefon</li>
                        <li>21 02 88 88</li>
                    </ul>
                </GridCol>
                <GridCol className="footer__contact__intern" md="4" lg="4">
                    <h4 className="footer__h4--align">Kontakt Origo Intern</h4>
                    <ul>
                        <li>Mandag-Fredag 07:30–16:00</li>
                        <li style={{ fontWeight: "bold" }}>Åpningstider i skranken</li>
                        <li>Mandag-Torsdag 07:30–16:00</li>
                        <li>Fredag 08:00–09:30 og 10:30–16:00</li>
                        <li>Telefon 21 02 88 88 (Valg 1)</li>
                    </ul>
                </GridCol>
                <GridCol className="footer__contact__sos" md="4" lg="4">
                    <h4 className="footer__h4--align">Kontakt Team SOS</h4>
                    <ul>
                        <li>Mandag-Torsdag 07:30–23:00</li>
                        <li>Fredag 07:30–21:00</li>
                        <li>Lørdag 10:00–17:00</li>
                        <li>Telefon 21 02 88 88 (Valg 1)</li>
                    </ul>
                </GridCol>
            </GridRow>
            <GridRow className="footer__row__below">
                <GridCol md={{ cols: 4, offset: 4 }}>
                    <p> SpareBank 1 Utvikling, Hammersborggata 9, Oslo</p>
                </GridCol>
            </GridRow>
        </Grid>
    </footer>
    );
}

export default Footer;
