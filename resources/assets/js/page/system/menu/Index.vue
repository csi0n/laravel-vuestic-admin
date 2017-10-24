<template>
    <div>
        <div class="row">
            <div class="col-md-6">
                <vuestic-widget headerText="菜单管理">
                    <div class="dd">
                        <ol class="dd-list">
                            <li class="dd-item" :data-id="item.id" :data-pid="item.pid"
                                v-for="(item,index) in menuItems" :key="index">
                                <div class="dd-handle dd3-handle"></div>
                                <div class="dd3-content">
                                    {{item.name}}
                                    <div class="pull-right action-buttons">
                                        <a class="btn-xs tooltips" @click="createMenu(item)"><i class="fa fa-plus"></i></a>
                                        <a class="btn-xs tooltips" @click="editMenu(item)"><i class="fa fa-pencil"></i></a>
                                        <a class="btn-xs tooltips" @click="destroyMenu(item)"><i
                                                class="fa fa-trash"></i></a>
                                    </div>
                                </div>
                                <ol class="dd-list">
                                    <li class="dd-item" :data-id="item.id" :data-pid="item.pid"
                                        v-for="(item,index) in item.child" :key="index">
                                        <div class="dd-handle dd3-handle"></div>
                                        <div class="dd3-content">
                                            {{item.name}}
                                            <div class="pull-right action-buttons">
                                                <a class="btn-xs tooltips" @click="createMenu(item)"><i
                                                        class="fa fa-plus"></i></a>
                                                <a class="btn-xs tooltips" @click="editMenu(item)"><i
                                                        class="fa fa-pencil"></i></a>
                                                <a class="btn-xs tooltips" @click="destroyMenu(item)"><i
                                                        class="fa fa-trash"></i></a>
                                            </div>
                                        </div>
                                    </li>
                                </ol>
                            </li>
                        </ol>
                    </div>
                </vuestic-widget>
            </div>
            <div class="col-md-6">
                <vuestic-widget headerText="菜单操作">
                    <fieldset>
                        <div class="form-group">
                            <div class="input-group">
                                <input id="name" v-model="form.name" required/>
                                <label class="control-label" for="name">菜单名称</label><i class="bar"></i>
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="input-group">
                                <menus v-model="form.pid"></menus>
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="input-group">
                                <input id="language" v-model="form.language" required/>
                                <label class="control-label" for="language">菜单语言</label><i
                                    class="bar"></i>
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="input-group">
                                <input id="icon" v-model="form.icon" required/>
                                <label class="control-label" for="icon">菜单图标</label><i class="bar"></i>
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="input-group">
                                <input id="slug" v-model="form.slug" required/>
                                <label class="control-label" for="slug">菜单权限</label><i class="bar"></i>
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="input-group">
                                <input id="url" v-model="form.url" required/>
                                <label class="control-label" for="url">菜单URL名称</label><i class="bar"></i>
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="input-group">
                                            <textarea v-model="form.description" type="text" id="description"
                                                      required></textarea>
                                <label class="control-label" for="description">菜单描述</label><i
                                    class="bar"></i>
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="input-group">
                                <input id="sort" v-model="form.sort" type="number" required/>
                                <label class="control-label" for="sort">排序</label><i class="bar"></i>
                            </div>
                        </div>

                        <div class="radio abc-radio abc-radio-primary">
                            <input type="radio" v-model="form.status" name="radio1" id="radio1" value="enable" checked>
                            <label for="radio1">
                                <span class="abc-label-text">正常</span>
                            </label>
                        </div>

                        <div class="radio abc-radio abc-radio-primary">
                            <input type="radio" v-model="form.status" name="radio1" id="radio2" value="disable">
                            <label for="radio2">
                                <span class="abc-label-text">禁用</span>
                            </label>
                        </div>

                        <div class="form-group">
                            <button class="btn btn-info" @click="optionMenu()">
                                {{saveWord}}
                            </button>
                        </div>
                    </fieldset>
                </vuestic-widget>
            </div>
        </div>
    </div>
</template>
<script>
    require('./../../../vendor/jquery.nestable');
    import {mapGetters} from 'vuex'
    import {sortSystemMenu, storeSystemMenu, patchSystemMenu, deleteSystemMenu} from './../../../api/api';

    export default {
        data() {
            return {
                is_edit: false,
                form: {
                    pid: '',
                    name: '',
                    language: '',
                    icon: '',
                    slug: '',
                    url: '',
                    description: '',
                    sort: 0,
                    status: 'enable'
                }
            }
        },
        mounted() {
            $('.dd').nestable({
                "maxDepth": 2
            }).on('dragEnd', (event, item, source, destination, position) => {
                let currentItemId = $(item).data('id'), currentItemPid = $(item).data('pid'),
                    itemParentId = $(item).parent().parent().data('id');
                itemParentId = itemParentId === undefined ? 0 : itemParentId;
                if (currentItemPid === itemParentId) {
                    return false;
                }
                sortSystemMenu({currentItemId: currentItemId, itemParentId: itemParentId}).then((response) => {
                    toastr.success("成功", "排序成功");
                    this.refreshMenu();
                });
            });
        },
        computed: {
            saveWord: function () {
                return this.is_edit ? '保存' : '添加';
            },
            ...mapGetters({
                menuItems: 'menuItems'
            })
        },
        created() {
        },
        methods: {
            createMenu(menu) {
                this.is_edit = false;
                this.form.pid = menu.id;
            },
            editMenu(menu) {
                this.is_edit = true;
                this.form = menu;
            },
            destroyMenu(menu) {
                swal({
                    title: '删除',
                    text: '确认删除该菜单?',
                    type: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#DD6B55",
                    confirmButtonText: "确认",
                    cancelButtonText: "取消",
                    closeOnConfirm: false,
                    closeOnCancel: false
                }, (isConfirm) => {
                    if (isConfirm) {
                        deleteSystemMenu(menu).then(() => {
                            this.refreshMenu();
                            swal("已删除!", "菜单已经删除", "success");
                        }).catch(() => {
                            swal("失败", "菜单删除失败", "error");
                        });
                    }else{
                        swal("取消", "取消操作", "error");
                    }
                });

            },
            optionMenu() {
                if (this.is_edit) {
                    patchSystemMenu(this.form).then(() => {
                        toastr.success('成功', '修改菜单成功');
                        this.refreshMenu();
                    });
                } else {
                    storeSystemMenu(this.form).then(() => {
                        toastr.success('成功', '添加菜单成功');
                        this.refreshMenu();
                    });
                }

            },
            refreshMenu() {
                this.$store.dispatch('getSystemMenuLists');
            }
        }
    }
</script>
<style scoped>
    @import "./../../../../css/jquery.nestable.css";

    .fa {
        color: black;
    }
</style>