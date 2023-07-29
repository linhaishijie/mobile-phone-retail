import Cookie from "js-cookie";
import { add } from '@/utils/form'
export default {
    namespaced: true,
    state: {
        menu: [],
    },
    mutations: {
        //菜单数据
        setMenu(state, menu) {
            state.menu = menu
            Cookie.set('menu', JSON.stringify(menu))
        },
        addMenu(state, Router) {
            if (!Cookie.get('menu')) return
            const menu = JSON.parse(Cookie.get('menu'))
            state.menu = menu
            const routerArrary = add(menu)
            routerArrary.forEach((res) => {
                Router.addRoute('layout', res);
            })
        }
    },/*  */
}