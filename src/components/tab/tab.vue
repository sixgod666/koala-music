<template>
    <div class="tab">
        <router-link tag="div" class="tab-item" to="/recommend">
            <span class="text">推荐</span>
        </router-link>
        <router-link tag="div" class="tab-item" to="/singer">
            <span class="text">歌手</span>
        </router-link>
        <router-link tag="div" class="tab-item" to="/rank">
            <span class="text">排行</span>
        </router-link>
        <router-link tag="div" class="tab-item" to="/search">
            <span class="text">搜索</span>
        </router-link>
    </div>
</template>

<script>
    export default {
        name: 'tab'
    }
</script>

<style scoped lang="stylus">
    @import "~common/stylus/variable"
    .tab {
        display flex
        height 44px
        line-height 44px
        font-size $font-size-medium
        color $color-text-l
        .tab-item {
            flex 1
            text-align center
            .text {
                padding-bottom 5px
            }
            &.router-link-active .text {
                border-bottom 2px solid $color-theme
                color $color-theme
            }
        }
    }
</style>
