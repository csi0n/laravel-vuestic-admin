<template>
    <div>
        <div class="abc-checkbox abc-checkbox-primary"
             v-for="(item,index) in permissions" :key="index">
            <input :id="'label-'+index" type="checkbox" v-model="form.permissions" :value="item.id">
            <label :for="'label-'+index">
                <span class="abc-label-text">{{item.display_name}}</span>
            </label>
        </div>
    </div>
</template>
<script>
    import {getSystemPermission} from './../api/api';

    export default {
        name: 'permissions',
        props: {
            value: {
                type: Array,
                default() {
                    return [];
                }
            }
        },
        watch: {
            'form.permissions': function (v) {
                this.$emit('input', v);
            },
            'value': function (v) {
                this.form.permissions = v;
            }
        },
        data() {
            return {
                permissions: [],
                form: {
                    permissions: []
                }
            }
        },
        created() {
            this.fetchPermissions();
        },
        methods: {
            fetchPermissions() {
                getSystemPermission({type: 'all'}).then((response) => {
                    this.permissions = response.data;
                });
            },
        }
    }
</script>