import React from 'react';
import { connect } from 'react-redux'
import Login from '../page/login/index'

const makeProps = (Target) => (props) => {
    let func2 = Target.prototype['componentWillMount']
    Target.prototype['componentWillMount'] = function (...argus) {
        // let temp = func2.apply(this,argus);//执行原有的逻辑
        console.log("组件开始使用")
    }
    return <Target {...props} />
}

const mapStateToProps = state => {
    return {
        login: {...state.todos}
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onLogin: (form) => {
            form.validateFields((err, values) => {
                console.log("values",values)
                if (!err) {
                    dispatch({ type: 'ACTION/login', payload: values });
                }else{
                    return
                }
              });
        },
    }
}

const Result = makeProps(connect(mapStateToProps, mapDispatchToProps)(Login));

export default Result


