import React from 'react';
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

let promiseComponent = (component)=>{
    return new Promise((resolve)=>{
        resolve(component)
    }); 
};

export default function(component){
    return Loadable({
        loader: () => promiseComponent(component),
        loading: MyLoadingComponent
    })
}