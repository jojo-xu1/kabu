import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

Vue.prototype.$host = 'https://unidemo.dcloud.net.cn/';

//Vue.prototype.$baseUrl="http://192.168.1.164/api"   //线下接口  
Vue.prototype.$baseUrl="http://13.112.112.160:8090"  //线上接口
uni.setStorage({key: 'baseUrl',data: 'http://13.112.112.160:8090'})


App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
