<template>
    <div class="loading">
        <img src="./loading.gif">
        <span>{{text}}</span>
    </div>
</template>

<script>
    export default {
        name: 'loading',
        props: {
            text: {
                type: String,
                default: '加载中'
            }
        }
    }
</script>

<style scoped lang="stylus">
    @import "~common/stylus/variable"
    .loading {
        text-align center
        img {
            width 24px
            height 24px
            vertical-align middle
        }
        .text {
            color $color-text-l
            font-size $font-size-small
        }
    }
</style>
