<template>
  <div class="more">
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
      <h1>{{this.$route.params.title}}</h1>
      <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
        <div class="song-show" v-for="item in songlist" :key="item.song_id">
          <router-link :to="'/PlaySong/'+item.song_id">
            <img :src="item.pic_big" alt />
            <p>{{item.title}}</p>
            <p>{{item.author}}</p>
          </router-link>
        </div>
      </van-list>
    </van-pull-refresh>
  </div>
</template>
<script>
import { getTodayList } from "../../api/music-api";
export default {
  data() {
    return {
      songlist: [],
      loading: false,
      finished: false,
      refreshing: false,
      isLoading: false,
      offset: 0
    };
  },
  props: {
    title: String
  },
  created() {},
  methods: {
    onLoad() {
      setTimeout(() => {
        getTodayList(this.$route.params.type, 10, this.offset)
          .then(res => {
            // debugger
            this.songlist = this.songlist.concat(res.song_list);
            this.offset += 10;
            this.loading = false;
            // console.log(res.billboard);
          })
          .catch();
      }, 1000);
    },
    onRefresh() {
      setTimeout(() => {
        this.$toast("刷新成功");
        this.isLoading = false;
      }, 1000);
    }
  }
};
</script>
<style lang="less" scoped>
.more {
  margin-top: 60px;
  .song-show {
    float: left;
    width: 50%;
    padding: 4px;
    text-align: center;
  }
}
</style>