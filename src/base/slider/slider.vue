<template>
    <div class="slider">
        <div class="slider-group" ref="slider-group">
            <div class="slider-item" v-for="item in items" :key="item.id">
                <a :href="item.linkUrl">
                    <img :src="item.picUrl" @load="loaded">
                </a>
            </div>
        </div>
        <div class="dots">
            <i v-for="(item,index) in items" :key="item.id" :class="{active: index===currentIndex}"></i>
        </div>
    </div>
</template>

<script>
    import Fmover from 'finger-mover'
    import fmoverSliderX from 'fmover-slide-x'
    export default {
        name: 'slider',
        props: {
            items: {
                type: Array
            },
            loop: {
                type: Boolean,
                default: true
            },
            autoplay: {
                type: Number,
                default: 0
            }
        },
        data(){
            return {
                currentIndex: 0
            }
        },
        mounted(){
            let self = this
            self.slider = new Fmover({
                el: '.slider-group',
                plugins: [
                    fmoverSliderX({
                        autoplay: this.autoplay,
                        loop: this.loop,
                        onChangeStart(index){
                            self.currentIndex = index - 1
                        }
                    })
                ]
            })
        },
        methods: {
            loaded() {
                if(!this.isLoaded) {
                    this.$emit('imgLoaded')
                    this.isLoaded = true
                }
            },
            refresh(flag) {
                this.slider && this.slider[0].refresh(flag)
            },
            next() {
                this.slider && this.slider[0].next()
            }
        }
    }
</script>

<style scoped lang="stylus">
    @import "~common/stylus/variable"
    .slider {
        width 100%
        overflow hidden
        position relative
        .slider-group {
            white-space nowrap
            font-size 0
            .slider-item {
                display inline-block
                a {
                    display block
                    img {
                        display block
                        width 100%
                    }
                }
            }
        }
        .dots {
            position absolute
            left 0
            right 0
            bottom 20px
            text-align center
            font-size 0
            i {
                display inline-block
                width 8px
                height 8px
                margin 0 4px
                border-radius 50%
                background-color $color-text-l
                &.active {
                    width 20px
                    border-radius 5px
                    background-color $color-text-ll
                }
            }
        }
    }
</style>
