// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// import axios from 'axios'
// Vue.prototype.$axios = axios
import VueAxios from 'vue-axios'
//导入我们封装的http实例,把axios挂载到http上，在全局都可以通过this.去访问
import http from './api/http'
Vue.use(VueAxios, http)
// Vue.use(VueAxios, axios)

import { Tabbar, TabbarItem, Tab, Tabs, PullRefresh, Toast, List, Cell, CellGroup, Icon, Search, Dialog } from 'vant';
Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(Tab);
Vue.use(Tabs);
Vue.use(PullRefresh);
Vue.use(Toast);
Vue.use(List);
Vue.use(Cell);
Vue.use(CellGroup);
Vue.use(Icon);
Vue.use(Search);
Vue.use(Dialog);


//导入min包
import './assets/mui/css/mui.min.css'
import './assets/mui/fonts/mui.ttf'
import './assets/mui/fonts/mui-icons-extra.ttf'
import './assets/mui/css/icons-extra.css'
import './assets/css/clear.css'

Vue.config.productionTip = false

//导入vuex
import store from '../src/store/store'
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  store
})
