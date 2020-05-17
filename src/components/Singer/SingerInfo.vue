<template>
  <div class="singerinfo">
    <div class="singerinner">
      <!-- 背景图 -->
      <img class="bgpic" :src="SingerInfo.avatar_s180" alt />
      <!-- 歌手头像 -->
      <img class="singerpic" :src="SingerInfo.avatar_big" alt />
    </div>
    <!-- 歌曲列表 -->
    <ul>
      <li v-for="item in SongList" :key="item.index">
        <router-link :to="'/PlaySong/'+item.song_id">{{item.title}}</router-link>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      SingerInfo: {},
      SongList: []
    };
  },
  created() {
    this.$axios
      .get(
        "/api/v1/restserver/ting?method=baidu.ting.artist.getSongList&tinguid=" +
          this.$route.params.ting_uid
      )
      .then(res => {
        this.SingerInfo = res.data.artistinfo;
        this.SongList = res.data.songlist;
        console.log(res);
      })
      .catch();
  }
};
</script>
<style lang="less" scoped>
.singerinfo {
  margin-top: 50px;
  .singerinner {
    position: relative;
    .bgpic {
      width: 100%;
      opacity: 0.2;
      height: 200px;
    }
    .singerpic {
      width: 20%;
      border-radius: 50%;
      position: absolute;
      transform: translate(-50%, -50%);
      top: 50%;
      left: 50%;
    }
  }
  ul {
    width: 100%;
    padding: 0 10px;
    li {
      height: 40px;
      line-height: 40px;
      border-bottom: 1px solid #cccccc;
      padding-left: 4px;
    }
  }
}
</style>