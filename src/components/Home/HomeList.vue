<template>
  <div>
    <div class="mui-card">
      <div class="mui-card-header">
        <h1>{{title}}</h1>
        <router-link :to="{name:'more',params:{type:type,title:title}}">更多</router-link>
      </div>
      <div class="mui-card-content">
        <ul class="mui-card-content-inner">
          <!-- <li>{{type}}</li> -->
          <li class="bill-pic" v-for="item in SongList" :key="item.id">
            <router-link :to="'/PlaySong/'+item.song_id">
              <img :src="item.pic_big" alt />
              <p>{{item.title}}</p>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import { getTodayList } from "../../api/music-api";
export default {
  data() {
    return {
      SongList: []
    };
  },
  props: {
    title: {
      type: String
    },
    type: {
      type: [Number, String]
    },
    size: {
      type: [Number, String]
    }
  },
  created() {
    getTodayList(this.type, this.size)
      .then(res => {
        this.SongList = res.song_list;
        // console.log(res.song_list);
      })
      .catch();
  }
};
</script>
<style lang="less" scoped>
.mui-card-content-inner {
  .bill-pic {
    width: calc(100% / 3);
    float: left;
    padding: 4px;
    p {
      text-align: center;
      white-space: nowrap;
      text-overflow: clip;
      overflow: hidden;
    }
  }
}
</style>