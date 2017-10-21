<template>
    <div>
        <div class="row">
            <div class="col-md-12">
                <vuestic-widget header-text="操作">
                    <button class="btn btn-info" @click="$router.push({name:'system.permission.create'})">
                        添加
                    </button>
                </vuestic-widget>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
                <vuestic-widget headerText="Search & Pagination">
                    <vuestic-data-table ref="datatables" @buttons="buttons" :tableConfig="tableConfig"></vuestic-data-table>
                </vuestic-widget>
            </div>
        </div>
    </div>
</template>
<script>
    import {List,destroySystemPermission} from './../../../api/api';

    export default {
        data() {
            return {
                tableConfig: {
                    apiUrl: List.permission
                }
            }
        },
        methods: {
            buttons(type,row,Context) {
                if (type === 'show') {
                    Context.$router.push({name: 'system.permission.show', params: {id: row.id}});
                } else if (type === 'edit') {
                    Context.$router.push({name: 'system.permission.edit', params: {id: row.id}});
                } else if (type === 'destroy') {
                    let Datatables = this.$refs.datatables;
                    swal({
                        title: '删除',
                        text: '确认删除该权限?',
                        type: "warning",
                        showCancelButton: true,
                        confirmButtonColor: "#DD6B55",
                        confirmButtonText: "确认",
                        cancelButtonText: "取消",
                        closeOnConfirm: false,
                        closeOnCancel: false
                    }, (isConfirm) => {
                        if (isConfirm) {
                            destroySystemPermission(row).then(() => {
                                this.$refs.datatables.removeDetailRow('id',row.id);
                                swal("已删除!", "权限已经删除", "success");
                            }).catch(() => {
                                swal("失败", "权限删除失败", "error");
                            });
                        } else {
                            swal("取消", "取消操作", "error");
                        }
                    });
                }
            }
        }
    }
</script>