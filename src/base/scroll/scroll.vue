<template>
    <div ref="container" class="scroll-container">
        <slot></slot>
    </div>
</template>

<script>
    import Fmover from 'finger-mover'
    import simulationScrollY from 'simulation-scroll-y'
    import simulationScrollX from 'simulation-scroll-x'
    export default {
        name: 'scroll',
        props: {
            direction: {
                type: String,
                default: 'y'
            }
        },
        mounted() {
            let self = this
            if(this.direction === 'x') {
                this.scroll = new Fmover({
                    el: '.scroll-container',
                    plugins: [
                        simulationScrollX({
                            unidirectional: true
                        })
                    ]
                })
            }else {
                this.scroll = new Fmover({
                    el: '.scroll-container',
                    plugins: [
                        simulationScrollY({
                            unidirectional: true,
                            scrollBar: false,
                            onTouchMove(currentY) {
                                let event = document.createEvent('HTMLEvents')

                                event.initEvent('scroll', true, true)

                                self.$refs.container.dispatchEvent(event)
                                self.$emit('touchMove', currentY)
                            },
                            onTransMove() {
                                let event = document.createEvent('HTMLEvents')

                                event.initEvent('scroll', true, true)

                                self.$refs.container.dispatchEvent(event)
                            }
                        })
                    ]
                })
            }
        },
        methods: {
            refresh() {
                this.scroll&&this.scroll[0].refreshSize()
            }
        }
    }
</script>

<style scoped>

</style>
