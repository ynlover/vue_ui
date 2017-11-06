import Vue from 'vue';
import {YnSwitch} from '../src/index.js';
import {YnUpload} from '../src/index.js';
console.log(YnUpload,9090);
Vue.use(YnSwitch);
Vue.use(YnUpload);

new Vue({
    el:'#app',
    methods:{
        onSwitchChange:function (checked) {
            console.log(checked);
        }
    }
});

