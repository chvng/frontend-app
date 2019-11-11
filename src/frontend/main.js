import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import RootComponent from './components/root';

import './styles/styles.less';

ReactDOM.render(
    <Router>
        <RootComponent>
            <Switch>
                <Route path='/' exact component={""} />
            </Switch>
        </RootComponent>
    </Router>, document.getElementById('root'));
    
if (module.hot) { module.hot.accept(); }