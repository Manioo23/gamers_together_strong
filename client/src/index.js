import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import App from './components/App';
import registerServiceWorker from './services/registerServiceWorker';
import Overlay from './components/overlay/Overlay';

ReactDOM.render(
    <>
        <Overlay />
        <App />
    </>
    , document.getElementById('root'));
registerServiceWorker();