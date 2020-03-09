import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import RootComponent from './components/root';

import Oversikt from '../frontend/components/pages/Oversikt';
import './styles/styles.less';

ReactDOM.render(
    <Router>
        <RootComponent>
            <Switch>
                <Route path='/' exact component={Oversikt} />
            </Switch>
        </RootComponent>
    </Router>, document.getElementById('root'));
    
if (module.hot) { module.hot.accept(); }