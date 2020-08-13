import layout from './index.vue';
import requireComponent from "@/components/index.js";
import "@/assets/css/product-mobile.scss";

requireComponent([
    "headerMobile"
]);

new Vue({
    el: '#app',
    components: {
        layout
    },
    template: '<layout/>'
})