import mock from 'mockjs'
import echart from './mock/echart'
import user from './mock/user'
import permission from './mock/permission'
// 拦截，然后调用响应方法
mock.mock('/api/echart/getData', echart.getStatisticalData)
mock.mock('/api/user/add', 'post', user.createUser)
mock.mock('/api/user/edit', 'post', user.updateUser)
mock.mock('/api/user/del', 'post', user.deleteUser)
mock.mock(/api\/user\/get/, user.getUserList)
mock.mock(/api\/permission\/getMenu/, 'post', permission.getMenu)