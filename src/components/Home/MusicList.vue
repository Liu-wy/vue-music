<template>
  <div>
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
        class="ul-list"
      >
        <li v-for="item in MusicList" :key="item.id">
          <router-link :to="'/PlaySong/'+item.song_id">
            <img :src="item.pic_small" class="pic" alt />
            <div class="song-name">
              <p>{{item.title}}</p>
              <p>{{item.author}}</p>
            </div>
          </router-link>
        </li>
      </van-list>
    </van-pull-refresh>
  </div>
</template>
<script>
import { getTodayList } from "../../api/music-api";
export default {
  data() {
    return {
      MusicList: [],
      isLoading: false,
      loading: false,
      finished: false,
      offset:0
    };
  },
  props: {
    type: String,
    size: [Number, String]
  },
  created() {},
  methods: {
    onLoad() {
      setTimeout(() => {
        getTodayList(this.type, 10,this.offset)
          .then(res => {
            this.MusicList = this.MusicList.concat(res.song_list);
            this.offset += 10;
            this.loading = false;
          })
          .catch();
      }, 1000);
    },
    onRefresh() {
      setTimeout(() => {
        this.$toast("刷新成功");
        this.isLoading = false;
        this.count++;
      }, 1000);
    }
  }
};
</script>
<style lang="less" scoped>
.ul-list {
  li {
    padding: 5px;
    a {
      display: inline-block;
      display: flex;
      width: 100%;
      .pic {
        width: 15%;
      }
      .song-name {
        //    padding-top: 20%;
        margin-left: 10px;
      }
    }
  }
}
</style>