<template>
    <div class="singer">
        <itemlist :items="singers"></itemlist>
    </div>
</template>

<script>
    import getSingerList from 'api/singer'
    import {ERR_OK} from '../../api/config'
    import Singer from 'common/js/singer'
    import itemlist from 'base/itemlist/itemlist'
    const HOT_LENGTH = 10
    const HOT_TITLE = '热门'
    export default {
        name: 'singer',
        data(){
            return {
                singers: []
            }
        },
        created() {
            this._getSingerList()
        },
        methods: {
            _getSingerList() {
                getSingerList().then((data) => {
                    if(data.code === ERR_OK) {
                        this.singers = this.groupByIndex(data.data.list)
                    }
                })
            },
            groupByIndex(singers) {
                let map = {}
                let hot = {
                    title: HOT_TITLE,
                    items: []
                }
                let special = []
                let group = []
                singers.forEach((item, index) => {
                    if(index < HOT_LENGTH) {
                        hot.items.push(new Singer(item.Fsinger_mid, item.Fsinger_name))
                    }
                    map[item.Findex] = map[item.Findex] || {title: item.Findex, items: []}
                    map[item.Findex].items.push(new Singer(item.Fsinger_mid, item.Fsinger_name))
                })
                for(let key in map) {
                    if(key.match(/[a-zA-Z]/)){
                        group.push(map[key])
                        continue
                    }
                    map[key].title = '#'
                    special.push(map[key])
                }
                return [hot].concat(group.sort((a, b) => a.title.charCodeAt(0) - b.title.charCodeAt(0))).concat(special)
            },
            touchMove(currentY) {
            }
        },
        components: {
            itemlist
        }
    }
</script>

<style scoped lang="stylus">
    .singer {
        position fixed
        top 88px
        bottom 0
        width 100%
    }
</style>
