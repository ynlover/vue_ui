import YnSwitch from './yn-switch.vue';
console.log(YnSwitch);
YnSwitch.install = function(Vue) {
    Vue.component(YnSwitch.name, YnSwitch);
};

export default YnSwitch;