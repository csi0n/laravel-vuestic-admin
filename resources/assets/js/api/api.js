import axios from 'axios';

let instance = axios.create({
    header: {}
});

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
    return instance.post(`/laravel-admin-api/api/login`, params);
};

export const systemLogout = params => {
    return instance.get(`/laravel-admin-api/api/logout`, params);
};

export const getSystemMenu = params => {
    return instance.get(`/laravel-admin-api/api/menu`, params);
};

export const storeSystemMenu = params => {
    return instance.post(`/laravel-admin-api/api/menu`, params);
};

export const deleteSystemMenu = params => {
    return instance.delete(`/laravel-admin-api/api/menu/${params.id}`, params);
};

export const patchSystemMenu = params => {
    return instance.patch(`/laravel-admin-api/api/menu/${params.id}`, params);
};

export const sortSystemMenu = params => {
    return instance.post(`/laravel-admin-api/api/menu/sort`, params);
};

export const getSystemPermission = params => {
    return instance.get(`/laravel-admin-api/api/permission`, {params: params});
};

export const storeSystemPermission = params => {
    return instance.post(`/laravel-admin-api/api/permission`, params);
};

export const editSystemPermission = params => {
    return instance.get(`/laravel-admin-api/api/permission/${params.id}/edit`);
};

export const showSystemPermission = params => {
    return instance.get(`/laravel-admin-api/api/permission/${params.id}`);
};

export const patchSystemPermission = params => {
    return instance.patch(`/laravel-admin-api/api/permission/${params.id}`, params);
};

export const destroySystemPermission = params => {
    return instance.delete(`/laravel-admin-api/api/permission/${params.id}`);
};

export const getSystemRole = params => {
    return instance.get(`/laravel-admin-api/api/role`, {params: params})
};
export const storeSystemRole = params => {
    return instance.post(`/laravel-admin-api/api/role`, params);
};

export const editSystemRole = params => {
    return instance.get(`/laravel-admin-api/api/role/${params.id}/edit`);
};

export const showSystemRole = params => {
    return instance.get(`/laravel-admin-api/api/role/${params.id}`);
};


export const patchSystemRole = params => {
    return instance.patch(`/laravel-admin-api/api/role/${params.id}`, params);
};

export const destroySystemRole = params => {
    return instance.delete(`/laravel-admin-api/api/role/${params.id}`, params);
};


export const storeSystemUser = params => {
    return instance.post(`/laravel-admin-api/api/user`, params);
};

export const editSystemUser = params => {
    return instance.get(`/laravel-admin-api/api/user/${params.id}/edit`);
};

export const showSystemUser = params => {
    return instance.get(`/laravel-admin-api/api/user/${params.id}`);
};

export const patchSystemUser = params => {
    return instance.patch(`/laravel-admin-api/api/user/${params.id}`, params);
};

export const destroySystemUser = params => {
    return instance.delete(`/laravel-admin-api/api/user/${params.id}`, params);
};

export const List = {
    permission: '/laravel-admin-api/api/permission',
    user: '/laravel-admin-api/api/user',
    role: '/laravel-admin-api/api/role',
};