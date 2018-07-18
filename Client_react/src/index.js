import React from 'react';
import ReactDOM from 'react-dom';

import { HashRouter, Route } from 'react-router-dom';
import Loadable from 'react-loadable';

import { Provider } from 'react-redux';
import { createStore,applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'


import routeConfig from "./routeConfig.js"

import rootReducer from './redux/reducer/index'
import { helloSaga } from './redux/saga/index'

const sagaMiddleware=createSagaMiddleware()
const store = createStore(rootReducer,applyMiddleware(sagaMiddleware))
sagaMiddleware.run(helloSaga);

const MyLoadingComponent = ({ isLoading, error }) => {
    if (isLoading) {
        return <div>正在加载中...</div>;
    }
    else if (error) {
        return <div>抱歉, 该页面出现错误,请稍后再试</div>;
    }
    else {
        return null;
    }
};

const App = () => {
    return (
        <Provider store={store}>
            <HashRouter>
                <div>
                    {
                        function () {
                            return routeConfig.map(item => {
                                let Temp = Loadable({
                                    loader: () => import(`./layout/${item.layoutPath}`),
                                    loading: MyLoadingComponent
                                });
                                return <Route
                                    path={item.path}
                                    key={item.path}
                                    render={props => <Temp {...props} children={item.children} />}
                                />
                            })
                        }()
                    }
                </div>
            </HashRouter>
        </Provider>
    )
};

ReactDOM.render(<App />, document.getElementById('root'));