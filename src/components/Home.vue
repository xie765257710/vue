<template lang="pug">
    .home
        <van-nav-bar title="商品" />
        .commodity
            span 基础用法
            span 通过v-model绑定 checkbox 的勾选状态

            <van-checkbox v-model="checked">复选框</van-checkbox>
            
            span 禁用状态
            <van-checkbox v-model="checked" disabled>复选框</van-checkbox>
            span 自定义颜色
            <van-checkbox v-model="checked" checked-color="#07c160">复选框</van-checkbox>
            span 自定义图标
            span 通过 icon 插槽自定义图标，可以通过 slot-scope 判断是否为选中状态

            <van-checkbox v-model="checked"> 
                span 自定义图标
                <img slot="icon" slot-scope="props" :src="props.checked ? icon.active : icon.normal" >
            </van-checkbox>
</template>

<script>
export default {
    name: 'home',
    data () {
        return {
            checked: true,
            icon: {
                normal: '../../static/imgs/logo.png',
                active: '../../static/imgs/logo.png'
            }
        }
    }
}
</script>

<style lang="stylus" scoped>
    .van-checkbox
        margin 20px
        img
            width 20px
            height 20px
</style>

