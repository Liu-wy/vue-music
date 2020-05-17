import http from './http'
//确定输入和输出
//输入的有type.size,offset(主要看接口的属性)
//输出的是我们需要的内容，我们的请求是异步请求，不能直接通过return直接返回数据，需要用到promise
//返回的是promise对象，通过这个对象获取想要拿到的值
export function getTodayList(type,size=6,offset=0){
    const url = `/api/v1/restserver/ting?method=baidu.ting.billboard.billList&type=${type}&size=${size}&offset=${offset}`
    
    // return this.axios.get(url)//this拿不到axios,this指向的是当前环境
    //箭头函数中this指向的是定义他的地方
    //function中的this指向的是调用他的地方
    return http.get(url)
}
export function getBillList(type,size=3,offset=0){
    const url = `/api/v1/restserver/ting?method=baidu.ting.billboard.billList&type=${type}&size=${size}&offset=${offset}`
    return http.get(url)
}

export function getSearch(query){
    const url = `/api/v1/restserver/ting?method=baidu.ting.search.catalogSug&query=${query}`
    return http.get(url)
}
//获取歌曲
export function getPlaySong(songid){
    const url = `/url/v1/restserver/ting?method=baidu.ting.song.playAAC&songid=${songid}&from=web`
    return http.get(url)
}
//获取歌词
export function getMusicLRC(lrclink){
    const url = `/lrc/data/song/lrc?lrc_link=${lrclink}`
    return http.get(url)
}