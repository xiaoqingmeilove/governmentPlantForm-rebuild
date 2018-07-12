import React from  'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route } from 'react-router-dom';
import Loadable from 'react-loadable';

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

const LoginPage = Loadable({
    loader: () => import('./page/login/index.js'),
    loading: MyLoadingComponent
});
const MainPage = Loadable({
    loader: () => import('./page/main/index.js'),
    loading: MyLoadingComponent
});

const App = ()=>{
    return (
        <HashRouter>
            <div>
                <Route path="/main"  exact component={MainPage} />
                <Route path="/login" exact  component={LoginPage} />
            </div>
        </HashRouter>
   )
};

ReactDOM.render(<App/>,document.getElementById('root'));