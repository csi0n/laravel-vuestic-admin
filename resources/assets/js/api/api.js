import axios from 'axios';
import {App} from 'laravel-admin-api';

let instance = axios.create({
    baseURL: '/laravel-admin-api/api/',
    header: {}
});
let app = new App({type: 'axios', instance: instance});
instance.interceptors.response.use((response) => {
    return response;
}, (error) => {
    switch (error.response.status) {
        case 422:
            for (let i in error.response.data) {
                console.log(i);
            }
            break;
        case 500:
            break;
        case 401:
            window.location.href = "#login";
            break;
    }
    return Promise.reject(error);
});

export const systemLogin = params => {
    return app.api.auth.postLogin(params);
};

export const systemLogout = params => {
    return app.api.auth.getLogout();
};

export const getSystemMenu = params => {
    return app.api.menu.getMenu();
};

export const storeSystemMenu = params => {
    return app.api.menu.storeMenu(params);
};

export const deleteSystemMenu = params => {
    console.log(params);
    return app.api.menu.deleteMenu(params);
};

export const patchSystemMenu = params => {
    return app.api.menu.patchMenu(params);
};

export const sortSystemMenu = params => {
    return app.api.menu.sortMenu(params);
};

export const getSystemPermission = params => {
    return app.api.permission.getPermission(params);
};

export const storeSystemPermission = params => {
    return app.api.permission.storePermission(params);
};

export const editSystemPermission = params => {
    return app.api.permission.editPermission(params);
};

export const showSystemPermission = params => {
    return app.api.permission.showPermission(params);
};

export const patchSystemPermission = params => {
    return app.api.permission.patchPermission(params);
};

export const destroySystemPermission = params => {
    return app.api.permission.deletePermission(params);
};

export const getSystemRole = params => {
    return app.api.role.getRole(params);
};
export const storeSystemRole = params => {
    return app.api.role.storeRole(params);
};

export const editSystemRole = params => {
    return app.api.role.editRole(params);
};

export const showSystemRole = params => {
    return app.api.role.showRole(params);
};

export const patchSystemRole = params => {
    return app.api.role.patchRole(params);
};

export const destroySystemRole = params => {
    return app.api.role.deleteRole(params);
};

export const storeSystemUser = params => {
    return app.api.user.storeUser(params);
};

export const editSystemUser = params => {
    return app.api.user.editUser(params);
};

export const showSystemUser = params => {
    return app.api.user.showUser(params);
};

export const patchSystemUser = params => {
    return app.api.user.patchUser(params);
};

export const destroySystemUser = params => {
    return app.api.user.deleteUser(params);
};

export const List = {
    permission: '/laravel-admin-api/api/permission',
    user: '/laravel-admin-api/api/user',
    role: '/laravel-admin-api/api/role',
};