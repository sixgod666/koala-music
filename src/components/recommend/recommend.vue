<template>
    <div class="recommend">
        <scroll ref="scroll">
            <div ref="rec">
                <slider ref="slider" @imgLoaded="refreshScroll"  :autoplay="4000" v-if="recommends.length" :items="recommends"></slider>
                <div class="recommend-list">
                    <h1 class="list-title">热门歌单推荐</h1>
                    <ul class="diss-list">
                        <li v-for="item in discList" class="diss-item" :key="item.listennum">
                            <img  width="60" height="60" v-lazy="item.imgurl">
                            <div class="text-wrapper">
                                <h2 class="author-name">{{item.creator.name}}</h2>
                                <p class="diss-name">{{item.dissname}}</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </scroll>
        <div class="loading-wrapper" v-show="!discList.length">
            <loading></loading>
        </div>
    </div>
</template>

<script>
    import slider from 'base/slider/slider'
    import {getRecommend, getDiscList} from 'api/recommend'
    import {ERR_OK} from 'api/config'
    import scroll from 'base/scroll/scroll'
    import loading from 'base/loading/loading'
    export default {
        name: 'recommend',
        data(){
            return {
                recommends: [],
                discList: []
            }
        },
        created(){
            let self = this
            window.addEventListener('resize', function(){
                self.refreshSlider()
                self.refreshScroll()
            })
            self._getRecommend()
            self._getDiscList()
        },
        beforeRouteEnter(to, from, next) {
            next(vm => {
                vm.refreshSlider(true)
            })
        },
        methods: {
            _getRecommend(){
                let self = this
                getRecommend().then(function(data){
                    if(data.code === ERR_OK) {
                        self.recommends = data.data.slider
                    }
                })
            },
            _getDiscList() {
                let self = this
                getDiscList().then(function(data) {
                    if(data.code === ERR_OK) {
                        self.discList = data.data.list
                        self.$nextTick(self.refreshScroll)
                    }
                })
            },
            refreshScroll() {
                this.$refs.scroll.refresh()
            },
            refreshSlider(flag) {
                this.$refs.slider&&this.$refs.slider.refresh(flag)
            },
            sliderToNext() {
                this.$refs.slider&&this.$refs.slider.next()
            }
        },
        components: {
            slider,
            scroll,
            loading
        }
    }
</script>

<style scoped lang="stylus">
    @import "~common/stylus/variable"
    .recommend {
        position fixed
        bottom 0
        top 88px
        width 100%
        overflow hidden
        .recommend-list {
            .list-title {
                color $color-theme
                font-size $font-size-medium-x
                text-align center
                height 65px
                line-height 65px
            }
            .diss-list {
                .diss-item {
                    box-sizing border-box
                    padding 0 20px 20px
                    display flex
                    align-items center
                    img {
                        flex 0 0 60px
                        width 60px
                        margin-right 20px
                    }
                    .text-wrapper {
                        display flex
                        flex-direction column
                        justify-content center
                        flex 1
                        line-height 20px
                        font-size $font-size-medium
                        .author-name {
                            color $color-text
                            margin-bottom 10px
                        }
                        .diss-name {
                            color $color-text-d
                        }
                    }
                }
            }
        }
        .loading-wrapper {
            position absolute
            width 100%
            top 50%
            transform translateY(-50%)
        }
    }
</style>
