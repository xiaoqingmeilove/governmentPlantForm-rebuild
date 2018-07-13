import React from 'react';
import { Route,Switch } from 'react-router-dom';
import Page from "../login/index"
import Loadable from '../../uil/loadable'

class Index extends React.Component {
  
  render() {
    return (
      <div>
        <h1>-----这里是主界面的头部-----</h1>
        <Switch>
          <Route path="/main/about" render={() => <div>about</div>}/>
          <Route path="/main/user" component={Loadable(Page)}/>
        </Switch>
        <h1>-----这里是主界面的尾部-----</h1>
      </div>
    );
  }
}
;
export default Index;