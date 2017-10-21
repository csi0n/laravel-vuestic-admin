<template>
    <div class="form-group with-icon-left">
        <div class="input-group">
            <input id="input-icon-left" name="input-icon-left" @keyup="doFilter()" v-model="filterText" required/>
            <i class="glyphicon glyphicon-search icon-left input-icon search-icon"></i>
            <label class="control-label" for="input-icon-left">搜索</label><i class="bar"></i>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'filter-bar',
        data() {
            return {
                filterText: ''
            }
        },
        methods: {
            doFilter(e) {
                event.keyCode == 13 ? this.$emit('filter', this.filterText) : ""
            }
        }
    }
</script>

<style lang="scss" scoped>
    .search-icon {
        transform: rotate(90deg);
    }

    .form-group {
        min-width: 7rem;
    }

    @media (max-width: 768px) {
        .form-group {
            width: 80%;
        }
    }

</style>
