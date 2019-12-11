import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import RootComponent from './components/root';
import Profile from './components/pages/Profile';
import Dropdown from './components/Dropdown';

import './styles/styles.less';

ReactDOM.render(
    <Router>
        <RootComponent>
            <Switch>
                <Route path='/' exact component={Dropdown} />
                <Route path='/min-profil' component={Profile}/>
            </Switch>
        </RootComponent>
    </Router>, document.getElementById('root'));
    
if (module.hot) { module.hot.accept(); }