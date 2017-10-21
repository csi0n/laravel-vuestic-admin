<template>
    <div class="dropdown" v-dropdown.closeOnMenuClick>
        <button id="itemsPerPageBtn" class="btn btn-primary btn-sm dropdown-toggle" type="button"
                data-toggle="dropdown">
            操作
            <i class="ion-chevron-down arrow-down"></i>
        </button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <div class="dropdown-menu-content">
                <template v-for="(item , index ) in rowData.optionsButton">
                    <a class="dropdown-item" @click="buttons('show',rowData)" v-if="item==='show'">详情</a>
                    <a class="dropdown-item" @click="buttons('edit',rowData)" v-if="item==='edit'">编辑</a>
                    <a class="dropdown-item" @click="buttons('destroy',rowData)" v-if="item==='destroy'">删除</a>
                    <a class="dropdown-item" @click="buttons('characteristic-jsmind',rowData)" v-if="item==='characteristic-jsmind'">特征项脑图</a>
                </template>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'vuestic-datatable-action-buttons',
        props: {
            rowData: {
                type: Object,
                required: true
            },
            rowIndex: {
                type: Number
            }
        },
        methods: {
            buttons(type, row) {
                this.$parent.$emit('buttons', type, row);
            }
        }
    }
</script>