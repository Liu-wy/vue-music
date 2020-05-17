<template>
  <div ref="lrcBox" class="lrcBox">
    <div
      v-for="(item,index) in lrcObjList"
      :key="index"
      :class="{active:activeIndex == index}"
      @click="playNow(item.time)"
    >{{item.content}}</div>
  </div>
</template>
<script>
import { getMusicLRC } from "../../api/music-api";
export default {
  data() {
    return {
      //定义一个歌词的数组
      lrcObjList: [],
      //激活歌词的索引
      activeIndex: 0
    };
  },
  props: {
    lrclink: String
    // SongInfo:Object,
  },
  created() {
    getMusicLRC(this.lrclink)
      .then(res => {
        //   const lrcObjList = []
        //拿到歌词,我们想要的格式是{time:"100",content:"每一次"}
        //目的十八歌词处理成对象数组,建立播放进度与歌词的对应关系
        //通过换行符分割,把字符串处理成字符串数组
        const lrcStrList = res.content.split("\n");
        //遍历这个数组,对每一项进行处理
        lrcStrList.forEach(item => {
          //通过正则把时间解析出来,把解析出来的内容放到一个新数组
          //[00:02.94]通过正则匹配这个内容
          let reg = /\[\d*:\d*\.\d*\]/;
          let matchList = item.match(reg);
          //如果matchList是null就没办法匹配到
          if (matchList == null) return;
          for (let matchStr of matchList) {
            let time = 0;
            //获取分钟
            let minReg = /\[\d*/;
            //   debugger
            time =
              time + Number.parseInt(matchStr.match(minReg)[0].slice(1)) * 60;
            //获取秒钟
            let secondRed = /:\d*/;
            time =
              time + Number.parseInt(matchStr.match(secondRed)[0].slice(1));

            //把处理好的时间和内容添加到上面定义的歌词数组中
            this.lrcObjList.push({
              time,
              //reg是之前处理时间的正则表达式,我们只希望显示歌词不显示时间,通过replace用空字符串替换时间
              content: item.replace(reg, "")
            });

            // console.log(this.lrcObjList)
          }
          //   console.log(item);
        });
      })
      .catch();
  },
  methods: {
    //改变歌词进度，指哪唱哪
    playNow(time) {
      console.log(time);
      this.$store.commit("changeProssTime", { prossTime: time });
    }
  },
  //通过计算属性获取store里面的currentTime
  computed: {
    currentTime() {
      return this.$store.state.currentTime;
    }
  },
  watch: {
    //父组件的歌词属性
    lrclink(newVal, oldVal) {
      if (newVal) {
        //监听完获取数据
        this.getMusicLRC();
      }
    },

    currentTime() {
      for (let i = 1; i < this.lrcObjList.length; i++) {
        if (this.currentTime < this.lrcObjList[i].time) {
          //已经找到歌词位置
          this.activeIndex = i - 1;
          //激活dom对象，通过dom对象的offset的属性，获取它与顶部的距离
          this.$refs.lrcBox.scrollTop =
            this.$refs.lrcBox.children[this.activeIndex].offsetTop - 50;
          break;
        }
      }
    }
  }
};
</script>
<style lang="less" scoped>
.lrcBox {
  text-align: center;
  height: 200px;
  overflow: scroll;
  position: relative;
}
.active {
  color: red;
}
</style>