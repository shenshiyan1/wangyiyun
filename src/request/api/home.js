import service from "..";

export function getBanner(){
    //获取轮播图数据
   return service({
    method:"GET",
    url:"/banner?type=2"
   })
}
export function getMusicList(){
    //获取歌单
    return service({
    method:'GET',
    url:"/personalized?limit=10"
})
}
