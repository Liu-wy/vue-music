<template>
  <div class="search">
    <form action="/">
      <van-search
        v-model="value"
        show-action
        placeholder="请输入搜索关键词"
        @search="onSearch"
        @cancel="onCancel"
      />
    </form>
    <!-- 搜索记录 -->
    <div class="search-history">
        <b>搜索记录:</b>
        <span v-for="item in namearr" :key="item.index">{{item.songname}}</span>
    </div>
    <!-- 搜索结果 -->
    <div class="search-res">
      <ul>
        <li v-for="item in songlist.song" :key="item.songid">
          <router-link :to="'/PlaySong/'+item.songid">
            <p>{{item.songname}}------------演唱者:{{item.artistname}}</p>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import { getSearch } from "../api/music-api";
export default {
  data() {
    return {
      value: "",
      songlist: [],
      searchlist:{},
      namearr:[]
    };
  },
    created() {
      this.onSearch()
    },
  methods: {
    onSearch() {
      // this.$toast(val);
      getSearch(this.value)
        .then(res => {
          this.songlist = res;
          //存储搜索记录
          const searchlist = {songname:this.value}
          this.namearr = JSON.parse(localStorage.getItem('val')||"[]")
          this.namearr.push(searchlist)
          localStorage.setItem('val',JSON.stringify(this.namearr))
        //   console.log(this.namearr);
        })
        .catch();
    },
    onCancel() {
      this.$toast("取消");
    }
  }
};
</script>
<style lang="less" scoped>
.search {
  margin-top: 50px;
  .search-res {
    ul {
      padding: 10px;
      li {
        width: 100%;
        padding: 5px;
        height: 40px;
        line-height: 40px;
        border-bottom: 1px solid #ccc;
      }
    }
  }
  .search-history{
      width: 95%;
      margin: auto;
      height: 60px;
      background-color: #ffffff;
      border-radius: 5px;
      margin-top: 10px;
      font-size: 12px;
      span{
          margin-right: 6px;
          font-style: italic;
      }
  }
}
</style>