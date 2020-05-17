<template>
  <div>
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
      <img :src="BgPic.pic_s444" alt />
      <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
        <div class="mui-content">
          <ul class="mui-table-view mui-table-view-striped mui-table-view-condensed">
            <li class="mui-table-view-cell" v-for="item in SongList" :key="item.song_id">
              <router-link :to="'/PlaySong/'+item.song_id">
                <p class="title">{{item.title}}</p>
                <p>{{item.author}}</p>
              </router-link>
            </li>
          </ul>
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
      BgPic: {},
      SongList: [],
      loading: false,
      finished: false,
      refreshing: false,
      isLoading:false,
      offset: 0
    };
  },
  created() {},
  methods: {
    onLoad() {
      setTimeout(() => {
        getTodayList(this.$route.params.type, 10, this.offset)
          .then(res => {
            this.BgPic = res.billboard;
            this.SongList = this.SongList.concat(res.song_list);
            this.offset += 10;
            this.loading = false;
            // console.log(res);
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
.mui-content > .mui-table-view:first-child {
  margin-top: 0;
  .title {
    color: #000;
    font-size: 15px;
  }
}
</style>