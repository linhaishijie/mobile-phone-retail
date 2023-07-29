import { http } from '@/utils/request.js'

//请求首页数据的接口
export const getData = () => {
    return http.get('/echart/getData')
}

export const createUser = (data) => {
    return http.post('/user/add', data)
}

export const updateUser = (data) => {
    return http.post('/user/edit', data)
}

export const deleteUser = (data) => {
    return http.post('/user/del', data)
}

export const getUserList = (params) => {
    return http.get('/user/get', params)
}

export const getMenu = (params) => {
    return http.post('/permission/getMenu', params)
}