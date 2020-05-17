<template>
  <div id="app">
    <!-- 头部 -->
    <div class="header">
      <van-tabbar v-model="active">
        <van-tabbar-item>
          <router-link to="/Home">
            <img src="./assets/images/logo.png" alt />
          </router-link>
        </van-tabbar-item>

        <van-tabbar-item>
          <router-link to="/Singer">歌手</router-link>
        </van-tabbar-item>

        <van-tabbar-item>
          <router-link to="/BillBoard">榜单</router-link>
        </van-tabbar-item>

        <van-tabbar-item>
          <router-link to="/Mine">我的</router-link>
        </van-tabbar-item>

        <van-tabbar-item>
          <router-link to="/Search">搜素</router-link>
        </van-tabbar-item>
      </van-tabbar>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      active: 0
    };
  }
};
</script>

<style lang="less" scoped>
.header {
  .van-tabbar {
    top: 0;
  }
  .van-tabbar-item {
    font-size: 16px;
  }
}
</style>
