<template>
    <div class="k-header">
        <i class="logo"></i>
        <h1 class="text">Koala Music</h1>
    </div>
</template>
<style lang="stylus">
    @import "~common/stylus/variable"
    @import "~common/stylus/mixin"
    .k-header {
        position relative
        height 44px
        line-height 44px
        color $color-theme
        text-align center
        .logo {
            display inline-block
            vertical-align middle
            width 30px
            height 32px
            bg-image(logo)
            background-size 30px 32px
        }
        .text {
            display inline-block
            font-size $font-size-large
        }
    }
</style>
<script>
    export default {}
</script>
