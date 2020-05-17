<template>
  <div>
    <van-list class="ul-list">
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
  </div>
</template>
<script>
import { getTodayList } from "../../api/music-api";
export default {
  data() {
    return {
      MusicList: [],
      offset: 0
    };
  },
  props: {
    type: String,
    size: [Number, String]
  },
  created() {
    getTodayList(this.type, 6)
      .then(res => {
        this.MusicList = this.MusicList.concat(res.song_list);
      })
      .catch();
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