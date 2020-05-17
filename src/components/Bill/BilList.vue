<template>
  <div>
    <div class="bill">
      <router-link :to="'/BillInfo/'+this.type">
        <div class="mui-card">
          <div class="mui-card-content">
            <div class="mui-card-content-inner">
              <img :src="LeftImg.pic_s192" alt class="left-img" />
              <ul class="right-rank">
                <li v-for="item in RightRank" :key="item.index">
                  <span class="rank">{{item.rank}}</span>
                  <span>{{item.title}}</span>
                  <span>{{item.author}}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>
<script>
import { getTodayList } from "../../api/music-api";
export default {
  data() {
    return {
      LeftImg: {},
      RightRank: []
    };
  },
  props: {
    type: String
  },
  created() {
    getTodayList(this.type, 3)
      .then(res => {
        this.LeftImg = res.billboard;
        this.RightRank = res.song_list;
        // console.log(res);
      })
      .catch();
  }
};
</script>
<style lang="less" scoped>
img {
  width: 20%;
  float: left;
}
.mui-card {
  padding-bottom: 10px;
  box-shadow: 5px 5px 5px 5px rgba(182, 174, 206, 0.4);
  border-radius: 5px;
}
.right-rank {
  float: left;
  width: 80%;
  padding-left: 10px;
  li {
    white-space: nowrap;
    text-overflow: clip;
    overflow: hidden;
    .rank{
        font-weight: bolder;
        color: red;
    }
  }
}
</style>