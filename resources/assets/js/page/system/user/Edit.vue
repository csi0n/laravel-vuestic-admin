<template>
    <div class="form-elements">
        <div class="row">
            <div class="col-md-12">
                <vuestic-widget headerText="编辑用户">
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


                                    <permissions v-model="form.permissions" style="margin-top: 80px"></permissions>

                                    <div class="form-group">
                                        <button class="btn btn-info" @click="patchUser">
                                            保存
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
    import {editSystemUser, patchSystemUser} from './../../../api/api';

    export default {
        data() {
            return {
                form: {
                    id: this.$route.params.id,
                    name: '',
                    email: '',
                    password: '',
                    roles: [],
                    permissions: []
                }
            }
        },
        created() {
            this.fetchUser();
        },
        methods: {
            patchUser() {
                patchSystemUser(this.form).then((response) => {
                    toastr.success("成功", "保存成功");
                    this.$router.push({name: 'system.user.lists'});
                });
            },
            fetchUser() {
                editSystemUser(this.form).then((response) => {
                    let user = response.data.data, roles = [], permissions = [];
                    user.roles.forEach((v) => {
                        roles.push(v.id);
                    });
                    user.perms.forEach((v) => {
                        permissions.push(v.id);
                    });

                    this.form = user;
                    this.form.roles = roles;
                    this.form.permissions = permissions;

                    toastr.success("成功", '用户信息加载成功');

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