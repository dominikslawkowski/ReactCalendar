import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

export class TestProvider extends React.Component {
    render(){
        return(
            <Provider store={createStoreWithMiddleware(reducers)}>
                <App />
            </Provider>
        )    
    };
}

const _provider = new TestProvider();

ReactDOM.render(
    _provider.render()
    , document.getElementById('root'));
registerServiceWorker();
