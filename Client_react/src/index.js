import React from  'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route } from 'react-router-dom';
import Login from "./page/login/index"
import Main from "./page/main/index"
import Loadable from './uil/loadable';

const App = ()=>{
    return (
        <HashRouter>
            <div>
                <Route path="/main"  component={Loadable(Main)} />
                <Route path="/login" exact  component={Loadable(Login)} />
            </div>
        </HashRouter>
   )
};

ReactDOM.render(<App/>,document.getElementById('root'));