<template>
  <div>
    <div class="mui-card">
      <div class="mui-card-header">
        <h1>音乐榜单</h1>
      </div>
      <van-tabs>
        <van-tab title="热歌榜">
          <MusicList type="2" size="100" />
        </van-tab>
        <van-tab title="新歌榜">
          <MusicList type="1" size="100" />
        </van-tab>
        <van-tab title="King榜">
          <MusicList type="24" size="100" />
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>
<script>
import MusicList from "./MusicList";
export default {
  components: {
    MusicList
  }
};
</script>
<style lang="less" scoped>
.mui-card{
    margin-top: 60px;
}
</style>