<template>
    <div>
        <van-nav-bar title="商品" />
        <div class="commodity">
            基础用法
            通过v-model绑定 checkbox 的勾选状态

            <van-checkbox v-model="checked">复选框</van-checkbox>
            
            禁用状态
            <van-checkbox v-model="checked" disabled>复选框</van-checkbox>
            自定义颜色
            <van-checkbox v-model="checked" checked-color="#07c160">复选框</van-checkbox>
            自定义图标
            通过 icon 插槽自定义图标，可以通过 slot-scope 判断是否为选中状态

            <van-checkbox v-model="checked"> 自定义图标
                <img slot="icon" slot-scope="props" :src="props.checked ? icon.active : icon.normal" >
            </van-checkbox>  
        </div>
    </div>
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

<style scoped>
    .van-checkbox{
        margin: 20px;
    }
    .van-checkbox img{
        width: 20px;
        height: 20px;
    }
</style>
