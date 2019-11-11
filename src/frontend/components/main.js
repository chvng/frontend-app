import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

ReactDOM.render(
    <Router>
        <RootComponent>
            <Switch>
                <Route path='/' exact component={Oversikt} />
                <Route path='/logganalyse' component={Logganalyse} /> 
                <Route path="/statistikk" component={} />
                <Route path='/hjelp' component={} />
            </Switch>
        </RootComponent>
    </Router>
)