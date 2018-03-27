<template>
    <ul class="list-container">
        <h2 class="current-title">热门</h2>
        <scroll ref="scroll">
            <li v-for="group in items" :key="group.title">
                <ul class="group">
                    <h2 class="title">{{group.title}}</h2>
                    <li class="singer-wrapper" v-for="it in group.items" :key="it.id">
                        <img class="avator" v-lazy="it.avator">
                        <span class="name">{{it.name}}</span>
                    </li>
                </ul>
            </li>
        </scroll>
    </ul>
</template>

<script>
    import scroll from 'base/scroll/scroll'
    export default {
        props: {
            items: {
                type: Array,
                default: () => []
            }
        },
        watch: {
            items() {
                this.$nextTick(() => {
                    this.$refs.scroll.refresh()
                })
            }
        },
        components: {
            scroll
        }
    }
</script>
<style lang="stylus">
    @import "~common/stylus/variable"
    .list-container {
        color $color-text-l
        overflow hidden
        position absolute
        top 0
        bottom 0
        width 100%
        .current-title {
            height 30px
            line-height 30px
            background-color $color-highlight-background
            text-indent 20px
            position absolute
            z-index 100
            width 100%
            top 0
        }
        .group {
            padding-bottom 20px
            .title {
                height 30px
                line-height 30px
                background-color $color-highlight-background
                text-indent 20px
            }
            .singer-wrapper {
                display flex
                align-items center
                padding 20px 0 0 30px
                .avator {
                    border-radius 50%
                    width 50px
                    height 50px
                }
                .name {
                    margin-left 20px
                    font-size $font-size-medium
                }
            }
        }
    }
</style>
