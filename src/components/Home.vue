<template lang="pug">
    .home
        <van-nav-bar fixed title="商品" />
        <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
            <van-card v-for="(item, index) in commoditys" :key="index" :tag="item.tag" :desc="item.details" :title="item.title" :thumb="item.img">
                <div slot="tags">
                    <van-tag plain type="primary">价格一: 志愿者积分 {{item.score}}</van-tag>
                    <van-tag plain type="primary">价格二：人民币 ¥ {{item.rmb}} + 康乐币 {{item.klb}} 枚</van-tag>
                </div>
                <div slot="footer">
                    <van-button type="danger" size="mini">加入购物车</van-button>
                    <van-button type="primary" size="mini">立即购买</van-button>
                </div>
            </van-card>
            .null-div(v-if="commoditys.length < 1")
                img(src="../../static/imgs/mall.png")
                span 暂无商品
        </van-pull-refresh>
</template>

<script>
export default {
    name: 'home',
    data () {
        return {            
            count: 0,
            isLoading: false,
            commoditys:[
                {id:1,img:require('../../static/imgs/timg.jpg'),tag:'热销', title:'商品名称打瞌睡的空间撒谎的客户萨科技的撒客户端撒谎框架的萨克的撒娇的卡是框架的大大萨达所多',details:'我是商品描述111啊啊啊21212',klb:2,rmb:1,score:10},
                {id:2,img:require('../../static/imgs/timg.jpg'),tag:'热销', title:'商品名称',details:'我是商品描述111啊啊啊21212',klb:2,rmb:1,score:10},
                {id:3,img:require('../../static/imgs/timg.jpg'),tag:'热销', title:'商品名称',details:'我是商品描述111啊啊啊21212',klb:2,rmb:1,score:10},
                {id:3,img:require('../../static/imgs/timg.jpg'),tag:'热销', title:'商品名称',details:'我是商品描述111啊啊啊21212',klb:2,rmb:1,score:10},
                {id:3,img:require('../../static/imgs/timg.jpg'),tag:'热销', title:'商品名称',details:'我是商品描述111啊啊啊21212',klb:2,rmb:1,score:10},
                {id:3,img:require('../../static/imgs/timg.jpg'),tag:'热销', title:'商品名称',details:'我是商品描述111啊啊啊21212',klb:2,rmb:1,score:10},
                {id:4,img:require('../../static/imgs/timg.jpg'),tag:'热销', title:'商品名称',details:'我是商品描述111啊啊啊21212',klb:2,rmb:1,score:10}
            ]
        }
    },
    methods: {
        onRefresh() {
            setTimeout(() => {
                this.$toast('刷新成功');
                this.isLoading = false;
                this.count++;
            }, 500);
        }
    }
}
</script>

<style lang="stylus" scoped>
    .home
        margin-bottom 50px
        .van-pull-refresh            
            width 100%
            .null-div
                display flex
                flex-direction column
                text-align center
                justify-content center
                align-items center
                width 100%
                height calc(100vh - 100px)
                color gray
                img 
                    height 8rem
                    width 8rem     
</style>

