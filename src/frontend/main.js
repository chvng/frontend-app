import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import RootComponent from './components/root';
import Oversikt from './pages/Oversikt';
import Verktoy from './pages/Verktoy';
import OmOss from './pages/OmOss';

import './styles.less';

ReactDOM.render(
    <Router>
        <RootComponent>
            <Switch>
                <Route path='/' exact component={Oversikt} />
                <Route path="/verktoy" component={Verktoy} />
                <Route path='/servicedesk' component={() => {
                    window.open('https://servicedesk.intern.sparebank1.no', '_blank').then(window.location = '/');
                    return null;
                }} />
                <Route path='/logganalyse' component={() => {
                    window.open('https://logganalyse.intern.sparebank1.no', '_blank').then(window.location = '/');
                    return null;
                }} />
                <Route path='/om-oss' component={OmOss} />
                <Redirect from='*' to='/' />
            </Switch>
        </RootComponent>
    </Router>, document.getElementById('root'));

if (module.hot) { module.hot.accept(); }