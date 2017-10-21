<template>
    <div class="form-elements">
        <div class="row">
            <div class="col-md-12">
                <vuestic-widget headerText="编辑角色">
                    <form>
                        <div class="row">
                            <div class="col-md-12">
                                <fieldset>
                                    <div class="form-group">
                                        <div class="input-group">
                                            <input id="name" v-model="form.name" required/>
                                            <label class="control-label" for="name">角色值</label><i class="bar"></i>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <div class="input-group">
                                            <input id="display_name" v-model="form.display_name" required/>
                                            <label class="control-label" for="display_name">展示名称</label><i
                                                class="bar"></i>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <div class="input-group">
                                            <textarea type="text" v-model="form.description" id="description"
                                                      required></textarea>
                                            <label class="control-label" for="description">描述</label><i class="bar"></i>
                                        </div>
                                    </div>
                                    <permissions v-model="form.permissions"></permissions>
                                    <div class="form-group">
                                        <button class="btn btn-info" @click="patchRole">
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
    import {patchSystemRole, editSystemRole} from './../../../api/api';

    export default {

        data() {
            return {
                form: {
                    id: this.$route.params.id,
                    name: '',
                    display_name: '',
                    description: '',
                    permissions: []
                }
            }
        },
        created() {
            this.fetchEditRole();
        },
        methods: {
            fetchEditRole() {
                editSystemRole(this.form).then((response) => {
                    let form = response.data.data, permissions = [];
                    form.perms.forEach(function (v) {
                        permissions.push(v.id);
                    });
                    this.form = form;
                    this.form.permissions = permissions;
                    toastr.success('成功', '加载角色信息成功');
                })
            },
            patchRole() {
                patchSystemRole(this.form).then((response) => {
                    toastr.success("成功", response.data);
                    this.$router.push({name: 'system.role.lists'});
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