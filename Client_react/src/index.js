import React from  'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route } from 'react-router-dom';

import LoginPage from './page/login/index.js'
import MainPage from './page/main/index.js'


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