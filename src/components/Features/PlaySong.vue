<template>
  <div class="play-song">
    <!-- 返回首页  显示歌名和作者  搜索 -->
    <div class="top">
      <router-link to="/Home">
        <van-icon name="wap-home-o" class="home" />
      </router-link>
      <div class="song-conner">
        <p>{{this.SongInfo.title}}</p>
        <p>{{this.SongInfo.artist}}</p>
      </div>
      <router-link to="/Search">
        <van-icon name="search" class="search" />
      </router-link>
    </div>
    <!-- 中间区域 -->
    <div class="song-pic-lrc">
      <!-- 图片 -->
      <img :src="this.SongInfo.pic_big" alt />
      <!-- 歌词 -->
      <div class="lrc">
        <LRC :lrclink="lrclink" v-if="lrclink"></LRC>
      </div>
    </div>
    <!-- 添加收藏和下载 -->
    <div class="like-done">
      <van-icon name="like-o" class="like" v-if="flag" @click="toggle" />
      <van-icon name="like" class="like" v-if="!flag" @click="collection" color="#ff0000" />
      <van-icon name="down" class="done" />
    </div>
    <!-- 播放组件 -->
    <div class="play">
      <audio ref="songplay" :src="this.SongPlay.show_link" controls class="songplay"></audio>
    </div>
  </div>
</template>
<script>
import { getPlaySong } from "../../api/music-api";
import LRC from "../Features/LRC";
export default {
  data() {
    return {
      SongInfo: {},
      SongPlay: {},
      flag: true,
      lrclink: ""
    };
  },

  created() {
    getPlaySong(this.$route.params.song_id).then(res => {
      this.SongInfo = res.songinfo;
      this.SongPlay = res.bitrate;
      //拿到歌词的链接
      this.lrclink = res.songinfo.lrclink;
      console.log(res.songinfo.lrclink);
      //监听播放器播放的时间变化
      //每次时间更新触发这个函数
      this.$refs.songplay.addEventListener("timeupdate", () => {
        // console.log(this.$refs.songplay.currentTime)
        this.$store.commit("changeCurrentTime", {
          currentTime: this.$refs.songplay.currentTime
        });
      });
    });
  },
  methods: {
    toggle(flag) {
      if (flag) {
        this.$toast("收藏成功");
        this.flag = false;
      }
    },
    collection(flag) {
      this.$dialog
        .alert({ message: "您确认要取消收藏吗？" })
        .then(() => {
          this.flag = !this.flag;
        })
        .catch(() => {
          this.flag = this.flag;
        });
    }
  },
  components: {
    LRC
  },
  computed: {
    prossTime(){
      return this.$store.state.prossTime
    }
  },
  watch: {
    prossTime(){
      this.$refs.songplay.currentTime = this.prossTime
    }
  },
};
</script>
<style lang="less" scoped>
.play-song {
  margin-top: 50px;
  .top {
    padding: 20px;
    width: 100%;
    display: flex;
    text-align: center;
    .home {
      flex: 1;
    }
    .song-conner {
      flex: 8;
    }
    .search {
      flex: 1;
    }
  }
  //中间区域
  .song-pic-lrc {
    padding: 20px;
    text-align: center;
    img {
      width: 60%;
    }
    .lrc {
      height: 200px;
      // border: 1px solid #000;
      margin-top: 15px;
      overflow: hidden;
    }
  }
  //喜欢和下载
  .like-done {
    margin-top: 15px;
    height: 20px;
    padding: 0 10px;
    .like {
      float: left;
    }
    .done {
      float: right;
    }
  }
  //播放组件
  .play {
    width: 100%;
    text-align: center;
    .songplay {
      margin: auto;
    }
  }
}
</style>