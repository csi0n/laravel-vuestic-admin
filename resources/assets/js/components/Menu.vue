<template>
    <vuestic-simple-select ref="select"
                           :label="label"
                           optionsLabel="name"
                           v-model="currentMenu"
                           v-bind:options="menus">
    </vuestic-simple-select>
</template>
<script>
    import {mapGetters} from 'vuex';
    import {recursionFlatten} from './../common/common';

    export default {
        name: 'menus',
        data() {
            return {
                simpleSelectModel: '',
                menus: [],
                currentMenu: ''
            }
        },
        created() {
            this.initMenus(this.$store.getters.menuItems || []);
        },
        props: {
            label: {
                type: String,
                default: function () {
                    return '父级菜单'
                }
            },
            value: {}
        },
        mounted() {
            this.$emit('input', this.value);
        },
        computed: mapGetters({
            menuItems: 'menuItems'
        }),
        methods: {
            initMenus: function (menus) {
                this.menus = recursionFlatten(menus, 'child');
                this.menus.unshift({name: "顶级菜单", id: 0});
            },
        },
        watch: {
            menuItems: function (v) {

            },
            currentMenu: function (v) {
                this.$emit('input', v.id);
            },
            value: function (v) {
                this.menus.forEach((item) => {
                    if (item.id === v) {
                        this.currentMenu = item;
                        this.$refs.select.displayValue = item.name;
                    }
                })
            }
        }
    }
</script>