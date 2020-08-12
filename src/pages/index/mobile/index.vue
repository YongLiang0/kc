<template>
    <div>
        index/mobile
    </div>
</template>

<script>
export default {
    data() {
        return {
            isMobile : _isMobile()
        }
    },

    mounted() {
        // if(this.isMobile){
        //     window.location.href = '/index/mobile.html'
        // }
        // else{
        //     window.location.href = 'index.html'
        // }

        console.log(this.isMobile)
    },
}
</script>