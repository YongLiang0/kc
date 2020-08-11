<template>
    <div class="header-pc">
        <div class="container">
            <div class="logo">
                <i>KC</i>
                <div class="text">
                    <h3>崆苍网络</h3>
                    <p>SUCCEED.COM</p>
                </div>
            </div>
            <div class="nav">
                <ul>
                    <li v-for="(item, index) in navList" :key="index">
                        <a :class="item.isCurrent ? 'active' : ''" :href="item.path">{{item.name}}</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            navList : [
                {
                    name : '首页',
                    path : '/index.html',
                    isCurrent : false
                },
                {
                    name : '产品与服务',
                    path : '/product.html',
                    isCurrent : false
                },
                {
                    name : '关于我们',
                    path : '/about_us.html',
                    isCurrent : false
                }
            ],
            isShow : false
        }
    },

    mounted() {
        this.initNavList();
    },

    methods : {
        
        initNavList(){
            this.navList.forEach((item) => {
                item.isCurrent = (item.path == location.pathname);
            });
        },

        onClickSwitchMenu(){
            this.isShow = !this.isShow;
        }
    },
}
</script>
