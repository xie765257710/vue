<template>
  <div class="msg">
      <van-nav-bar title="消息" />
      <div>
            <van-list
                v-model="loading"
                :finished="finished"
                finished-text="没有更多了"
                @load="onLoad">
                <van-cell v-for="item in list" :key="item" :title="item"/>
            </van-list>
      </div>
  </div>
</template>

<script>
export default {
    name: 'home',
    data () {
        return {
            list: [],
            loading: false,
            finished: false
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
                if (this.list.length >= 40) {
                    this.finished = true;
                }
            }, 500);
        }
    }
}
</script>

<style scoped>
    .msg{
        height: 100%;
        width: 100%;
        background: palevioletred;
    }
</style>
