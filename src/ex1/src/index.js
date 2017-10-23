import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

/// Prevents refresh 
if (module.hot) {
    module.hot.accept(); 
}

initialize();

function initialize() {
    console.log(`NODE_ENV= ${process.env.NODE_ENV}`);
    if (process.env.NODE_ENV !== 'development') {
        registerServiceWorker();
    }

}

