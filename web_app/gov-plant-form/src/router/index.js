import Vue from 'vue';
import Router from 'vue-router';
import Login from '../views/login'
// const _import = require('./_import_' + process.env.NODE_ENV);

// const Login = _import('login/index');

Vue.use(Router);

export const constantRouterMap = [
    { path: '/login', component: Login }
]

export default new Router({
    routes: constantRouterMap
})