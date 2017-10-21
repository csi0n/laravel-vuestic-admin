<template>
    <div class="table-responsive">
        <div class="d-flex flex-md-row flex-column justify-content-md-between align-items-center">
            <filter-bar @filter="onFilterSet"></filter-bar>
            <items-per-page :options="itemsPerPage"
                            :defaultPerPage="perPage"
                            @items-per-page="onItemsPerPage"></items-per-page>
        </div>
        <vuetable ref="vuetable"
                  :apiUrl="tableConfig.apiUrl"
                  :fields="tableFields"
                  :data="tableData"
                  :css="css.table"
                  dataPath="data"
                  paginationPath=""
                  :appendParams="appendParams"
                  @buttons="buttons"
                  :perPage="perPage"
                  @vuetable:load-success="onLoadSuccess"
                  @vuetable:pagination-data="onPaginationData">
        </vuetable>
        <div class="d-flex justify-content-center mb-4">
            <vuetable-pagination ref="pagination"
                                 :css="css.pagination"
                                 :onEachSide="onEachSide"
                                 @vuetable-pagination:change-page="onChangePage">
            </vuetable-pagination>
        </div>
    </div>
</template>

<script>
    import Vuetable from 'vuetable-2/src/components/Vuetable';
    import VuetablePagination from 'vuetable-2/src/components/VuetablePagination';
    import ItemsPerPage from './datatable-components/ItemsPerPage.vue';
    import DataTableStyles from './data/data-table-styles';
    import Vue from 'vue';

    export default {
        name: 'vuestic-data-table',
        components: {
            Vuetable,
            VuetablePagination,
            ItemsPerPage
        },
        props: {
            tableConfig: {
                type: Object,
                required: true,
                default: function () {
                    return {
                        apiUrl: ''
                    }
                }
            }
        },
        data() {
            return {
                tableData: [],
                perPage: 50,
                colorClasses: {},
                css: DataTableStyles,
                tableFields: [],
                onEachSide: 2,
                itemsPerPage: [
                    {value: 50}
                ],
                appendParams: {
                    search: {}
                },
                renderColumns: null
            }
        },
        methods: {
            buttons(type, row) {
                this.$emit('buttons', type, row, this);
            },
            onFilterSet(filterText) {
//                const txt = new RegExp(filterText, 'i')
//                this.tableData.data = originalData.filter(function (item) {
//                    return item.name.search(txt) >= 0 || item.email.search(txt) >= 0
//                })

                if (filterText !== "") {
                    for (let i in this.appendParams.search) {
                        this.appendParams.search[i] = filterText;
                    }
                    Vue.nextTick(() => this.$refs.vuetable.refresh())
                } else {
                    Vue.nextTick(() => this.$refs.vuetable.refresh())
                }
            },
            removeDetailRow(column, value) {
                Vue.nextTick(() => {
                    let deleteRowId = -1;
                    for (let i in this.$refs.vuetable.tableData) {
                        if (this.$refs.vuetable.tableData[i][column] === value) {
                            deleteRowId = i;
                            break;
                        }
                    }
                    this.$refs.vuetable.tableData.splice(deleteRowId, 1)
                });
            },
            onItemsPerPage(itemsPerPageValue) {
                this.perPage = itemsPerPageValue;
                Vue.nextTick(() => this.$refs.vuetable.refresh())
            },
            onPaginationData(paginationData) {
                this.$refs.pagination.setPaginationData(paginationData)
            },
            onChangePage(page) {
                this.$refs.vuetable.changePage(page)
            },
            onLoadSuccess(response) {
                let renderColumns = response.data.render_columns;
                this.renderColumns = renderColumns;

                this.tableFields = [];
                for (let i in renderColumns) {
                    if (renderColumns[i].default) {
                        this.tableFields.push({name: i, title: renderColumns[i].zh_name});
                    }
                    if (renderColumns[i].searchable) {
                        this.appendParams.search[i] = '';
                    }
                }
                this.tableFields.push({name: '__component:vuestic-datatable-action-buttons', title: '操作'});
                Vue.nextTick(() => this.$refs.vuetable.normalizeFields());
            }
        }
    }
</script>

<style lang="scss">
    @import "../../../sass/variables";

    @media (max-width: 1258px) {
        .pagination-link-btn:first-child, .pagination-link-btn:last-child {
            display: none;
        }

        .pagination-link-btn:nth-child(2) {
            border-top-left-radius: $btn-border-radius !important;
            border-bottom-left-radius: $btn-border-radius !important;
        }

        .pagination-link-btn:nth-last-child(2) {
            border-top-right-radius: $btn-border-radius !important;
            border-bottom-right-radius: $btn-border-radius !important;
        }
    }

    @media (max-width: 576px) {
        .hide-not-focused-btn:not(.focus) {
            display: none;
        }
    }
</style>
