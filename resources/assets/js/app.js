/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import App from './App.vue';
import store from './store';
import router from './router';
import {sync} from 'vuex-router-sync';
import components from './components';
import directives from './directives';
import VeeValidate from 'vee-validate';
window.toastr = require('toastr/build/toastr.min.js');
window.toastr.options = {
    positionClass: "toast-top-right",
    showDuration: "300",
    hideDuration: "1000",
    timeOut: "5000",
    extendedTimeOut: "1000",
    showEasing: "swing",
    hideEasing: "linear",
    showMethod: "fadeIn",
    hideMethod: "fadeOut"
};

window.swal = require('sweetalert/dist/sweetalert.min.js');
Vue.use(BootstrapVue);

Vue.use(VeeValidate, {
    fieldsBagName: 'formFields'
});

components.forEach(function (v) {
    Vue.component(v.name, v);
});

directives.forEach(function (v) {
    Vue.directive(v.name, v);
});

sync(store, router);

router.beforeEach((to, from, next) => {
    store.commit('setLoading', true);
    next();
});

router.afterEach((to, from) => {
    store.commit('setLoading', false);
});

new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: {App}
});
