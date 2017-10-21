<template>
    <div>
        <div class="abc-checkbox abc-checkbox-primary"
             v-for="(item,index) in roles" :key="index">
            <input :id="'label-'+index" type="checkbox" v-model="form.roles" :value="item.id">
            <label :for="'label-'+index">
                <span class="abc-label-text">{{item.display_name}}</span>
            </label>
        </div>
    </div>
</template>
<script>
    import {getSystemRole} from './../api/api';

    export default {
        name: 'roles',
        props: {
            value: {
                type: Array,
                default() {
                    return [];
                }
            }
        },
        mounted() {
            this.$emit('input', this.value);
        },
        watch: {
            'form.roles': function (v) {
                this.$emit('input', v);
            },
            'value': function (v) {
                this.form.roles = v;
            }
        },
        data() {
            return {
                roles: [],
                form: {
                    roles: []
                }
            }
        },
        created() {
            this.fetchRoles();
        },
        methods: {
            fetchRoles() {
                getSystemRole({type: 'all'}).then((response) => {
                    this.roles = response.data;
                });
            },
        }
    }
</script>
<style>

</style>