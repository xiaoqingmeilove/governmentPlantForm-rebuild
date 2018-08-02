import React from 'react';
import ReactDOM from 'react-dom';

import { HashRouter, Route } from 'react-router-dom';
import Loadable from 'react-loadable';


import { observable, computed, autorun } from "mobx";
import { Provider } from 'mobx-react';
import Store from './mobx/store/storeIndex'


import routeConfig from "./routeConfig.js"
import 'antd/dist/antd.css';



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
        <Provider {...Store}>
            <HashRouter>
                <div>
                    {
                        function () {
                            return routeConfig.map(item => {
                                if(item.layoutPath){
                                    let Temp = Loadable({
                                        loader: () => import(`./layout/${item.layoutPath}`),
                                        loading: MyLoadingComponent
                                    });
                                    return <Route
                                        path={item.path}
                                        key={item.path}
                                        render={props => <Temp {...props} children={item.children} />}
                                    />
                                }else if(item.componentPath&&item.componentPath.indexOf("/")!=-1){
                                    let Temp = Loadable({
                                        loader: () => import(`./page/${item.componentPath}`),
                                        loading: MyLoadingComponent
                                    });
                                    return <Route
                                        path={item.path}
                                        key={item.path}
                                        component={Temp}
                                        exact={true}
                                    />
                                }else{
                                   return
                                }
                            })
                        }()
                    }
                </div>
            </HashRouter>
            </Provider>
    )
};

ReactDOM.render(<App />, document.getElementById('root'));