import Vue from 'vue';
import Router from 'vue-router';
import lazyLoading from './lazyLoading';

Vue.use(Router);

const routes = [
    {
        path: '/login',
        component: lazyLoading('system/auth/Login')
    },
    {
        path: '/',
        component: lazyLoading('layout/Main'),
        children: [
            {
                path: '/home',
                component: lazyLoading('system/home/Index'),
            }, {
                path: '/system/permission',
                component: lazyLoading('system/permission/Index'),
                name: 'system.permission.lists'
            }, {
                path: '/system/permission/create',
                component: lazyLoading('system/permission/Create'),
                name: 'system.permission.create'
            }, {
                path: '/system/permission/:id',
                component: lazyLoading('system/permission/Show'),
                name: 'system.permission.show',
                params: {
                    id: ''
                }
            }, {
                path: '/system/permission/:id/edit',
                component: lazyLoading('system/permission/Edit'),
                name: 'system.permission.edit',
                params: {
                    id: ''
                }
            }, {
                path: '/system/user',
                component: lazyLoading('system/user/Index'),
                name: 'system.user.lists'
            }, {
                path: '/system/user/create',
                component: lazyLoading('system/user/Create'),
                name: 'system.user.create'
            }, {
                path: '/system/user/:id',
                component: lazyLoading('system/user/Show'),
                name: 'system.user.show',
                params: {
                    id: ''
                }
            }, {
                path: '/system/user/:id/edit',
                component: lazyLoading('system/user/Edit'),
                name: 'system.user.edit',
                params: {
                    id: ''
                }
            }, {
                path: '/system/role',
                component: lazyLoading('system/role/Index'),
                name: 'system.role.lists'
            }, {
                path: '/system/role/create',
                component: lazyLoading('system/role/Create'),
                name: 'system.role.create'
            }, {
                path: '/system/role/:id',
                component: lazyLoading('system/role/Show'),
                name: 'system.role.show',
                params: {
                    id: ''
                }
            }, {
                path: '/system/role/:id/edit',
                component: lazyLoading('system/role/Edit'),
                name: 'system.role.edit',
                params: {
                    id: ''
                }
            }, {
                path: '/system/menu',
                component: lazyLoading('system/menu/Index'),
                name: 'system.menu.lists'
            },
        ]
    }
];
export default new Router({
    routes,
    strict: process.env.NODE_ENV !== 'production',
})