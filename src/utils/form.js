export function add(menu) {
    let noChild = []
    let child = []
    for (let i = 0; i < menu.length; i++) {
        if (menu[i].children && menu[i].children.length > 0) {
            child = menu[i].children.map(item => farm(item))
        } else {
            noChild.push(farm(menu[i]))
        }
    }
    return child.concat(noChild)
}

// 组装路由
function farm(item) {
    let route = {
        path: item.path,
        name: item.name,
        component: () => import(`@/views/${item.url}`),
        meta: {
            icon: item.icon,
            label: item.label
        },
        children: []
    }
    return route
}