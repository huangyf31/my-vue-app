import {createApp} from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import router from "./router/index.js";
import './assets/less/index.less';
import store from "./store/index.js";
import "./api/mock.js"
import api from "./api/api.js"

import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const app = createApp(App);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
app.use(ElementPlus);
app.config.globalProperties.$api = api
store.commit("addMenu", router)

function checkRouter(path) {
    let hasCheck = router.getRoutes().filter(route => route.path === path).length
    if (hasCheck) {
        return true;
    } else {
        return false;
    }
}

router.beforeEach((to, from, next) => {
    store.commit('getToken');
    const token = store.state.token;
    if (!token && to.name !== 'login') {
        next({name: 'login'})
    } else if (!checkRouter(to.path)) {
        next({name: 'login'})
    } else {
        next();
    }
})
app.use(router).use(store);
app.mount('#app');
