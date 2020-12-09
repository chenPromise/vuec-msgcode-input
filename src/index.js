import vueCMsgCodeInput from './App.vue'

// 导出模块
export default vueCMsgCodeInput

//global 情况下 自动安装
if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.component('vueC-msgCode-input', vueCMsgCodeInput)
}
