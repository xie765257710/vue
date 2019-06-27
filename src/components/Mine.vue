<template lang="pug">
    .mine
        <van-nav-bar fixed title="我的" />
        .top
            img(src="../../static/imgs/head.png")
            .info
                .info-top
                    h2 {{name}}
                    span {{post}}
                .info-down
                    span {{site}}
            <van-icon name="arrow" />
        .top-float
            .float-left
                span(class="val") {{score}}
                span(class="att") 当前积分
            .center-line
            .float-right
                span(class="val") {{time}}
                span(class="att") 服务时长
        .list
            .list-title
                span(class="list-title-txt") 积分记录
                .score-details
                    span 明细
                    <van-icon name="arrow" />
            .list-content
                <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
                    <van-cell v-for="item in list" :key="item" :title="item" />
                </van-list>
</template>

<script>
export default {
    name: 'home',
    data () {
        return {
            name: '哈哈哈',
            post: '哈哈岗',
            site: '陶家岭志愿者服务站',
            score: 2500,
            time: 16,
            list: [],
            loading: false,
            finished: false,
        }
    },
    methods: {
        onLoad() {
            // 异步更新数据
            setTimeout(() => {
                for (let i = 0; i < 10; i++) {
                    this.list.push(this.list.length + 1);
                }
                // 加载状态结束
                this.loading = false;

                // 数据全部加载完成
                if (this.list.length >= 10) {
                    this.finished = true;
                }
            }, 0);
        }
    }
}
</script>

<style lang="stylus" scoped>
    .top
        display flex
        flex-direction row
        align-items center
        height 160px
        background-image linear-gradient(160deg, #34A9FF 20%,#A4CAF6 80%) 
        padding-bottom 40px
        img 
            width 64px
            height 64px
            border-radius 50%
            margin 20px
        .info
            display flex
            flex 1
            flex-direction column
            color #fff
            .info-top
                display flex
                flex-direction row  
                line-height 30px              
                h2
                    font-weight bold
                    font-size 16px
                    margin-right 20px   
                    line-height 30px         
        .van-icon
        
            margin 20px
            color #fff
            font-size 20px
    .top-float
        height 90px
        width 90%
        border-radius 10px
        background #fff
        box-shadow 3px 5px 5px rgba(0,0,0,.1)
        margin-left 5%
        margin-top -45px
        display flex
        justify-content space-around
        align-items center
        .float-left,
        .float-right
            display flex
            flex-direction column
            text-align center
            .val
                font-size 1.5rem
            .att
                fot-size .875rem
                margin 5px 0
        .center-line
            width 1px
            height 50px
            margin 0 -20px
            background #d8d8d8
    .list
        margin 20px
        margin-bottom 44px
        .list-title
            display flex
            justify-content space-between
            align-items center
            .list-title-txt
                border-left 4px solid #34A9FF
                padding-left 5px
                font-size 14px
                font-weight bold
            .score-details
                color #c3c3c3
                .van-icon
                    font-size 10px
</style>

