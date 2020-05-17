<template>
  <div>
    <div class="mui-card">
      <div class="mui-card-header">
        <h1>音乐榜单</h1>
        <router-link to="/MusicBillMore">更多</router-link>
      </div>
      <van-tabs>
        <van-tab title="热歌榜">
          <MusicList type="2" size="6" />
        </van-tab>
        <van-tab title="新歌榜">
          <MusicList type="1" size="6" />
        </van-tab>
        <van-tab title="King榜">
          <MusicList type="24" size="6" />
        </van-tab>
      </van-tabs>
      <div class="look-more">
          <router-link to="/MusicBillMore">点击查看更多》</router-link>
      </div>
    </div>
  </div>
</template>
<script>
import MusicList from "./MusicList";
import {getTodayList} from '../../api/music-api'
export default {
    props:{
        type:String,
        size:[Number,String],
        title:String
    },
    created() {
        getTodayList(this.type,this.size).then(res=>{

        })
    },
    components:{
        MusicList
    }
};
</script>
<style lang="less" scoped>
.look-more{
    margin: 10px;
    text-align: right;
}
</style>