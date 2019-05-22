import React from 'react';
import ReactDOM from 'react-dom';
import RootComponent from './components/root';

import './styles.less';

ReactDOM.render(<RootComponent />, document.getElementById('root'));

if(module.hot) { module.hot.accept(); }