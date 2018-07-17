import React from 'react';
import { Route,Switch } from 'react-router-dom';
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

class Index extends React.Component {
  makeRoute=(children)=>{
    var result = []
    let self = this
    function inside(children){
      for(let i=0;i<children.length;i++){
        let Temp =  Loadable({
          loader: () => import(`../page/${children[i].componentPath}`),
          loading: MyLoadingComponent
        });
        result.push(<Route
                      path={children[i].path}
                      key={children[i].path}
                      component={Temp}
                      exact={true}
                  />)
        if(children[i].children){
          inside(children[i].children)
        }
      }
    }
    inside(children)
    return result
  }
  
  render() {
    const children = this.props.children
    console.log("ggggg",children)
    return (
      <div>
        <h1>-----这里是主界面的头部-----</h1>
        <Switch>
          {this.makeRoute(children)}
        </Switch>  
        <h1>-----这里是主界面的尾部-----</h1>
      </div>
    );
  }
}
;
export default Index;