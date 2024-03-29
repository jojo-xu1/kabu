import Vue from 'vue'
import App from './App'
import inputSearch from './components/inputSearch.vue'
Vue.config.productionTip = false
Vue.component('inputSearch', inputSearch)
Vue.prototype.$host = 'https://unidemo.dcloud.net.cn/';
//Vue.prototype.$baseUrl="http://192.168.2.121:8090"
//Vue.prototype.$baseUrl="http://192.168.1.164/api"   //线下接口  
// Vue.prototype.$baseUrl="http://127.0.0.1:8090"  //线上接口
// uni.setStorage({key: 'baseUrl',data: 'http://127.0.0.1:8090'})
Vue.prototype.$baseUrl="http://13.112.112.160:8090"  //线上接口
uni.setStorage({key: 'baseUrl',data: 'http://13.112.112.160:8090'})
//Luke Zhou Ali
// Vue.prototype.$baseUrl="http://139.224.56.43:8090"  //线上接口
// uni.setStorage({key: 'baseUrl',data: 'http://139.224.56.43:8090'})
//uni.setStorage({key: 'baseUrl',data: 'http://192.168.2.121:8090'})

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
