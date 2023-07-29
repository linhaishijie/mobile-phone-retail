import Vue from 'vue'
//引入Vuex
import Vuex from 'vuex'
//应用Vuex插件
Vue.use(Vuex)

//创建并暴露store
import hamburger from './hamburger'
import menu from './menu'

export default new Vuex.Store({
    modules: {
        hamburger,
        menu,
    }
})