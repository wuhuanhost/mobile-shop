import Mock from 'mockjs'

import users from './user'

Mock.mock(/\/test/, 'get', users.getUser)
Mock.mock(/\/goods/, 'get', users.getGoods)
