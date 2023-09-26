import Mock from 'mockjs'
export default {
    getMenu: config => {
        const { username, password } = JSON.parse(config.body)
        // 先判断用户是否存在
        // 判断账号和密码是否对应
        if (username === 'admin' && password === 'admin123') {
            return {
                code: 20000,
                data: {
                    menu: [
                        {
                            path: '/home',
                            name: 'home',
                            label: '首页',
                            icon: 's-home',
                            url: 'MyHome.vue'
                        },
                        {
                            path: '/user',
                            name: 'user',
                            label: '客户管理',
                            icon: 's-custom',
                            url: 'MyUser.vue'
                        },
                        {
                            path: '/mall',
                            name: 'mall',
                            label: '图表展示',
                            icon: 's-marketing',
                            url: 'MyChart.vue'
                        },
                        {
                            label: '系统工具',
                            icon: 's-cooperation',
                            children: [
                                {
                                    path: '/addr',
                                    name: 'addr',
                                    label: '仓库地址',
                                    icon: 's-promotion',
                                    url: 'GitAddr.vue'
                                },
                                {
                                    path: '/other',
                                    name: 'other',
                                    label: '其他',
                                    icon: 's-flag',
                                    url: 'OtherPage.vue'
                                }
                            ]
                        }
                    ],
                    token: Mock.Random.guid(),
                    message: '获取成功'
                }
            }
        } else if (username === 'user' && password === 'user123') {
            return {
                code: 20000,
                data: {
                    menu: [
                        {
                            path: '/home',
                            name: 'home',
                            label: '首页',
                            icon: 's-home',
                            url: 'MyHome.vue'
                        },
                        {
                            path: '/mall',
                            name: 'mall',
                            label: '图表展示',
                            icon: 's-marketing',
                            url: 'MyChart.vue'
                        },
                    ],
                    token: Mock.Random.guid(),
                    message: '获取成功'
                }
            }
        } else {
            return {
                code: -999,
                data: {
                    message: '密码错误'
                }
            }
        }

    }
}