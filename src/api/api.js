/**
 * 整个项目api的管理
 */
import request from "./request.js";

export default {
    //home组件 左侧表格数据获取
    getTableData(params) {
        return request({
            url: '/home/getTableData',
            method: 'get',
            data: params,
            mock: true,
        })
    },
    getCountData() {
        return request({
            url: '/home/getCountData',
            method: 'get',
            mock: true,
        })
    },
    getChartData() {
        return request({
            url: "/home/getChartData",
            method: "get",
            mock: true,
        })
    },
    getUserData(params) {
        return request({
            url: "/user/getUser",
            method: "get",
            mock: false,
            data: params,
        })
    },
    addUser(params) {
        return request({
            url: "/user/add",
            method: "post",
            mock: false,
            data: params,
        })
    },
    editUser(params) {
        return request({
            url: "/user/edit",
            method: "post",
            mock: false,
            data: params,
        })
    },
    deleteUser(params) {
        return request({
            url: "/user/delete",
            method: "get",
            mock: false,
            data: params,
        })
    },
    //权限控制
    getMenu(params){
        return request({
            url: "/permission/getMenu",
            method: "post",
            mock: false,
            data: params,
        })
    }
}
