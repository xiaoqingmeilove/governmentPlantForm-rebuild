import React from 'react';
import Login from '../page/login/index'

const makeProps = (Target) => (props) => {
    let func2 = Target.prototype['componentWillMount']
    Target.prototype['componentWillMount'] = function (...argus) {
        // let temp = func2.apply(this,argus);//执行原有的逻辑
        console.log("组件开始使用")
    }
    return <Target {...props} />
}

const Result = makeProps(Login);

export default Result


