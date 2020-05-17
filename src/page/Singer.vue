<template>
  <div class="singer">
    <div class="mui-card">
      <div class="mui-card-content">
        <div class="mui-card-content-inner" v-for="item in SingList" :key="item.ting_uid">
          <router-link :to="'/SingerInfo/'+item.ting_uid">
            <img :src="item.avatar_big" alt />
            <span>{{item.name}}</span>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// import {getSingerList} from '../api/music-api'
export default {
  data() {
    return {
      SingerId: [
        "2517",
        "7994",
        "1091",
        "45561",
        "2507",
        "245815",
        "1077",
        "1204",
        "1117",
        "82366"
      ],
      SingList: []
    };
  },
  // created() {
  //     getSingerList(this.singerid).then(res=>{
  //         console.log(res)
  //     })
  // },
  created() {
    this.getSinger();
  },
  methods: {
    getSinger() {
      for (let item of this.SingerId) {
        const URL =
          "/api/v1/restserver/ting?method=baidu.ting.artist.getInfo&tinguid=" +
          item;
        this.$axios
          .get(URL)
          .then(res => {
            const singerObj = {};
            singerObj.name = res.data.name;
            singerObj.avatar_big = res.data.avatar_big;
            singerObj.ting_uid = res.data.ting_uid;
            this.SingList.push(singerObj);
            // console.log(this.SingList);
          })
          .catch();
      }
    }
  }
};
</script>
<style lang="less" scoped>
.singer {
  margin-top: 60px;
}
.mui-card-content-inner {
  img {
    width: 15%;
    border-radius: 50%;
    vertical-align: middle;
  }
  span {
    margin-left: 10px;
  }
}
</style>