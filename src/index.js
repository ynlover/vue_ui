import YnSwitch from './components/yn-switch/index';
import YnUpload from './components/yn-upload/index';
const components = [
    YnUpload,
    YnSwitch
];
const install = function(Vue) {
    if (install.installed) return;
    components.map(component => {
        Vue.component(component.name, component);
    });
};

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
};

export {
    YnSwitch,
    YnUpload
};