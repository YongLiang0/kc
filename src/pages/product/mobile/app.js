import layout from './index.vue';
import requireComponent from "@/components/index.js";

requireComponent([
    "headerPc"
]);

new Vue({
    el: '#app',
    components: {
        layout
    },
    template: '<layout/>'
})