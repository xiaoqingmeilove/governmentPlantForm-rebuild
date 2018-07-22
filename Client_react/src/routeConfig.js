export default [
    {
        name:"登录",
        path:"/login",
        componentPath:"loginLogic",
    },{
        name:"主界面",
        path:"/main",
        layoutPath:"basicLayout",
        children:[
            {
                name:"内部路由1",
                path:"/main/inside1",
                componentPath:"login/index",
                children:[
                    {
                        name:"内部子路由",
                        path:"/main/inside1/small",
                        componentPath:"table/index",
                    }
                ]
            },
            {
                name:"内部路由2",
                path:"/main/inside2",
                componentPath:"main/index",
                children:[
                    {
                        name:"内部子路由",
                        path:"/main/inside2/small",
                        componentPath:"table/index",
                    },
                    {
                        name:"内部子路由",
                        path:"/main/inside2/big",
                        componentPath:"table/index",
                    }
                ]
            }
        ]
    }
]