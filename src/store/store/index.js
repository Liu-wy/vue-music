import Vue from 'vue'
//vuex
import Vuex from 'vuex'
Vue.use(Vuex)
// import musicPlay from '../src/store/modules/music-play'
const store = new Vuex.Store({
  state:{
    //audio时间
    currentTime:0,
    //播放进度属性
    prossTime:0
  },
  mutations:{
    //修改currentTime
    changeCurrentTime(state,{currentTime}){
        state.currentTime = currentTime
    },
    //修改prosstime
    changeProssTime(state,{prossTime}){
      state.prossTime = prossTime
    }
  },
  getters: {},
  actions: {},
  modules: {
    // musicPlay
  },
})
export default store
