<template>
    <div class="header-pc" :class="isFixed ? 'fixed' : ''">
        <div class="container">
            <div class="logo">
                <img src="../../assets/images/logo.png" alt="" srcset="">
                <!-- <i>K<span>C</span></i>
                <div class="text">
                    <h3>崆苍网络</h3>
                    <p>SUCCEED.COM</p>
                </div> -->
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
                    isFixed : false,
                },
                {
                    name : '产品与服务',
                    path : '/product.html',
                    isFixed : true
                },
                {
                    name : '关于我们',
                    path : '/about_us.html',
                    isFixed : true
                }
            ],
            isFixed : false
        }
    },

    mounted() {
        this.initNavList();
    },

    methods : {
        
        initNavList(){
            this.navList.forEach((item) => {
                if(item.path == location.pathname){
                    this.isFixed = item.isFixed;
                }
            });
        },

        onClickSwitchMenu(){
            this.isShow = !this.isShow;
        }
    },
}
</script>
