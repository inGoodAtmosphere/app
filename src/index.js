import React from 'react';
import ReactDOM from 'react-dom';
import ReactGA from 'react-ga';
import AppRouter from './routers/AppRouter';
import 'normalize.css';
import * as serviceWorker from './serviceWorker';
import './styles/index.scss';

ReactGA.initialize('UA-156974442-1');
ReactDOM.render(<AppRouter />, document.getElementById('root'));
serviceWorker.register();
