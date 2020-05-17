import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

//tabbar
import Home from '../page/Home.vue'
import Singer from '../page/Singer.vue'
import BillBoard from '../page/BillBoard.vue'
import Mine from '../page/Mine.vue'
import Search from '../page/Search.vue'
import More from '../components/Home/HomeMore.vue'
import MusicBillMore from '../components/Home/MusicBillMore.vue'
import SingerInfo from '../components/Singer/SingerInfo.vue'
import BillInfo from '../components/Bill/BillInfo.vue'
import PlaySong from '../components/Features/PlaySong.vue'

export default new Router({
  routes: [
    {path:'/',redirect:'/Home'},
    {path:'/Home',component:Home},
    {path:'/Singer',component:Singer},
    {path:'/BillBoard',component:BillBoard},
    {path:'/Mine',component:Mine},
    {path:'/Search',component:Search},
    {path:'/More/:type/:title',component:More,name:'more'},
    {path:'/MusicBillMore',component:MusicBillMore},
    {path:'/SingerInfo/:ting_uid',component:SingerInfo},
    {path:'/BillInfo/:type',component:BillInfo},
    {path:'/PlaySong/:song_id',component:PlaySong}

  ]
})
