<template>
    <ItemMusicTop :playlist="state.playlist" />
    <ItemMusicList :itemList="state.itemList" :subscribedCount="state.playlist.subscribedCount" />
</template>
<script>
import { useRoute } from 'vue-router';
import { onMounted, reactive } from 'vue';
import { getMusicItemList, getItemlist } from '@/request/api/item.js';
import ItemMusicTop from '@/components/item/ItemMusicTop.vue';
import ItemMusicList from '@/components/item/ItemMusicList.vue';
export default {
    setup() {
        const state = reactive({
            playlist: {},
            Itemlist: []
        });
        onMounted(async () => {
            let id = useRoute().query.id;
            // console.log(id);
            //获取歌单详情
            let res = await getMusicItemList(id);
            state.playlist = res.data.playlist;
            /*   console.log('1111');
            console.log(res); */
            //获取歌单歌曲
            let result = await getItemlist(id);
            console.log(result);
            state.Itemlist = result.songs;

            sessionStorage.setItem('itemDetail', JSON.stringify(state));
        });
        return { state };
    },
    components: { ItemMusicTop, ItemMusicList }
};
</script>
