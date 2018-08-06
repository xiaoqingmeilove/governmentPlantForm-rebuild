import React from 'react';
import {observer,inject} from "mobx-react";
import {observable,action,computed,autorun} from "mobx";


@inject(['Student']) 
@observer
class Index extends React.Component {
  
  render() {
    console.log("hhhhhh",this)
    return (
      <div>
        <h3>这里开始修改公司界面</h3>
      </div>
    );
  }
}
;
export default Index;