<template>
    <div>
        <div class="row">
            <div class="col-md-12">
                <vuestic-widget header-text="操作">
                    <button class="btn btn-info" @click="$router.push({name:'system.role.create'})">
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
    import {List,destroySystemRole} from './../../../api/api';

    export default {
        data() {
            return {
                tableConfig: {
                    apiUrl: List.role
                }
            }
        },
        methods:{
            buttons(type,row,Context){
                if (type === 'show') {
                    Context.$router.push({name: 'system.role.show', params: {id: row.id}});
                } else if (type === 'edit') {
                    Context.$router.push({name: 'system.role.edit', params: {id: row.id}});
                } else if (type === 'destroy') {
                    swal({
                        title: '删除',
                        text: '确认删除该角色?',
                        type: "warning",
                        showCancelButton: true,
                        confirmButtonColor: "#DD6B55",
                        confirmButtonText: "确认",
                        cancelButtonText: "取消",
                        closeOnConfirm: false,
                        closeOnCancel: false
                    }, (isConfirm) => {
                        if (isConfirm) {
                            destroySystemRole(row).then(() => {
                                this.$refs.datatables.removeDetailRow('id',row.id);
                                swal("已删除!", "角色已经删除", "success");
                            }).catch(() => {
                                swal("失败", "角色删除失败", "error");
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