<template>
  <div id="app">
    <router-view/>
    <van-tabbar v-model="active">
        <van-tabbar-item icon="bag" @click="switchTo('/')">商品</van-tabbar-item>
        <van-tabbar-item icon="bill" @click="switchTo('/order')">订单</van-tabbar-item>
        <van-tabbar-item icon="chat" info="5" @click="switchTo('/msg')">消息</van-tabbar-item>
        <van-tabbar-item icon="manager" @click="switchTo('/mine')">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
    name: 'App',
    data () {
        return {
            active: 0
        }
    },
    methods: {
        switchTo(path) {
            this.$router.push(path)
        }
    }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background: #fff;
}
.van-nav-bar{
    background: #fff;
}
.van-tabbar{
    background: #fff;
}
</style>
