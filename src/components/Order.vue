<template>
    <div>
        <van-nav-bar fixed title="订单" />
        <div class="order">
            <van-pagination 
                v-model="currentPage" 
                :total-items="24" 
                :items-per-page="5" />
        </div>

        <van-tabs v-model="active">
            <van-tab title="标签 1">内容 1</van-tab>
            <van-tab title="标签 2">内容 2</van-tab>
            <van-tab title="标签 3">内容 3</van-tab>
            <van-tab title="标签 4">内容 4</van-tab>
        </van-tabs>

        
    </div>
</template>

<script>
export default {
    name: 'home',
    data () {
        return {
            
            currentPage: 1,
            active: 2,
            
        }
    },
    methods:{
    }
}
</script>

<style scoped>
    .order{
       
    }
</style>
