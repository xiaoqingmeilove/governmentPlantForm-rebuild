import React from  'react';
import {Provider}from 'react-redux';
import ReactDOM from 'react-dom';
import { HashRouter, Route } from 'react-router-dom';
import Loadable from 'react-loadable';
import routeConfig from "./routeConfig.js"

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

const App = ()=>{ 
    return (
        <HashRouter>
            <div>
            {
                function(){
                    return routeConfig.map(item=>{
                        let Temp =  Loadable({
                                        loader: () => import(`./layout/${item.layoutPath}`),
                                        loading: MyLoadingComponent
                                    });
                        return  <Route
                                    path={item.path}
                                    key={item.path}
                                    render={props => <Temp {...props} children={item.children}/>}
                                />
                    })
                }()
            }
            </div>
        </HashRouter>
   )
};

ReactDOM.render(<App/>,document.getElementById('root'));