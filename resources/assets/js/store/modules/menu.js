import {getSystemMenu} from '../../api/api';
import * as types from '../mutation-types'

const menu = {
    state: {
        menus: []
    },
    mutations: {
        [types.MENUS](state, menus) {
            if (typeof menus !=="undefined"){
                menus.forEach(function (v) {
                    v.expanded = false;
                });
                state.menus = menus;
            }
        },
        [types.TOGGLE_EXPAND_MENU_ITEM](state, payload) {
            let menuItem = payload.menuItem;
            let expand = payload.expand;
            if (menuItem.child) {
                state.menus.forEach(function (v) {
                    if (v.id === menuItem.id) {
                        v.expanded = expand;
                    }
                });
            }
        }
    },
    actions: {
        getSystemMenuLists({commit}) {
            return new Promise((resolve, reject) => {
                getSystemMenu().then((resp) => {
                    commit(types.MENUS, resp.data);
                    resolve(true);
                }).catch(error => {
                    reject(error);
                })
            });
        },
        toggleExpandMenuItem({commit}, payload) {
            commit(types.TOGGLE_EXPAND_MENU_ITEM, payload);
        }
    }
};
export default menu;