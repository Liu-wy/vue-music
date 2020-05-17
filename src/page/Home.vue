<template>
  <div class="home">
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
      <!-- 今日榜单 -->
      <HomeList type="2" size="6" title="今日榜单" />
      <!-- 新歌速递 -->
      <HomeList type="1" size="3" title="新歌速递" />
      <!-- 轮播图 -->

      <!-- 音乐榜单 -->
      <MusicBill title="音乐榜单"/>
      <!-- 热门榜单 -->
      <HomeList type="24" title="热门榜单" size="6" />
    </van-pull-refresh>
  </div>
</template>
<script>
import HomeList from "../components/Home/HomeList";

import MusicBill from '../components/Home/MusicBill'
export default {
  data() {
    return {
      isLoading: false
    };
  },
  methods: {
    onRefresh() {
      setTimeout(() => {
        this.$toast("刷新成功");
        this.isLoading = false;
        this.count++;
      }, 1000);
    }
  },
  components: {
    HomeList,
    MusicBill
  }
};
</script>
<style lang="less" scoped>
.home {
  margin-top: 60px;
}
</style>