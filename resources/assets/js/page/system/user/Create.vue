<template>
    <div class="form-elements">
        <div class="row">
            <div class="col-md-12">
                <vuestic-widget headerText="添加用户">
                    <form>
                        <div class="row">
                            <div class="col-md-12">
                                <fieldset>
                                    <div class="form-group">
                                        <div class="input-group">
                                            <input id="name" v-model="form.name" required/>
                                            <label class="control-label" for="name">用户名</label><i class="bar"></i>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <div class="input-group">
                                            <input id="email" v-model="form.email" required/>
                                            <label class="control-label" for="email">邮箱</label><i
                                                class="bar"></i>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <div class="input-group">
                                            <input id="password" v-model="form.password" required/>
                                            <label class="control-label" for="password">密码</label><i
                                                class="bar"></i>
                                        </div>
                                    </div>

                                    <roles v-model="form.roles"></roles>


                                    <permissions v-model="form.permissions"  style="margin-top: 80px"></permissions>
                                    <div class="form-group">
                                        <button class="btn btn-info" @click="storeUser">
                                            添加
                                        </button>
                                    </div>
                                </fieldset>
                            </div>
                        </div>
                    </form>
                </vuestic-widget>
            </div>
        </div>
    </div>
</template>
<script>
    import {storeSystemUser} from './../../../api/api';

    export default {
        data() {
            return {
                form: {
                    name: '',
                    email: '',
                    password: '',
                    roles: [],
                    permissions: [],
                }
            }
        },
        methods: {
            storeUser() {
                storeSystemUser(this.form).then((response) => {
                    toastr.success("成功", response.data);
                    this.$router.push({name: 'system.user.lists'});
                });
            }
        }
    }
</script>
<style lang="scss">
    .abc-checkbox, .abc-radio {
        display: flex !important;
        justify-content: flex-start;
    }

    input[type=checkbox]:disabled + label, input[type=radio]:disabled + label,
    input[type=checkbox]:disabled, input[type=radio]:disabled {
        cursor: not-allowed;
    }
</style>