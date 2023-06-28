import Mock from "mockjs"
import homeApi from "./mockData/home.js"
import userApi from './mockData/user.js'
//拦截请求
Mock.mock('/home/getData', homeApi.getHomeData())

//本地获取user数据
Mock.mock(/user\/getUser/, 'get', userApi.getUserList)
Mock.mock(/user\/add/, 'post', userApi.createUser)
Mock.mock(/user\/edit/, 'post', userApi.updateUser)
