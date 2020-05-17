//音乐歌词的vuex
//导出一个对象
export default{
    //命名空间,模块中的mutation和action都会被隔离
    namespaced:true,
    state:{
        //创建实例对象
        SongInfo:{
            title:'标题'
        },
        SongPlay:{}
    },
    mutations:{},
    actions:{}

}