// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import fastclick from 'fastclick'
import 'common/stylus/index.styl'
import vueLazyload from 'vue-lazyload'

fastclick.attach(document.body)
Vue.config.productionTip = false
Vue.use(vueLazyload, {
    loading: require('common/image/default.png'),
    listenEvents: ['scroll', 'click', 'wheel', 'mousewheel', 'resize', 'animationend', 'transitionend']
})
/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})
