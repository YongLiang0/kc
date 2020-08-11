import layout from './index.vue';
import requireComponent from "@/components/index.js";

import "../../assets/css/index.scss";

requireComponent([
    "headerBar"
]);

new Vue({
    el: '#app',
    components: {
        layout
    },
    template: '<layout/>'
})