import service from "..";

export function getMusicItemList(data){
   return service({
     method:"GET",
     url:`/playlist/detail?id=${data}` 

   })
   
}
//获取歌单的所有歌曲
   export function getItemlist(data){
      return service({
         method:"GET",
         url:`/playlist/track/all?id=${data}&limit=20&offset=0` 

      })

}