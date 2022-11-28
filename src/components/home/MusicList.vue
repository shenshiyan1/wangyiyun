<template>
    <div class="musiclist">
        <div class="musicTop">
            <div class="title">发现好歌单</div>
            <div class="more">查看更多</div>
        </div>
        <div class="musicContent">
            <van-swipe :loop="false" :width="150" class="my-swpie">
                <van-swipe-item v-for="item in musicList" :key="item">
                    <router-link :to="{path:'/ItemMusic',query:{id:item.id}}">
                        <img :src="item.picUrl" />
                        <span class="playCount">
                            <svg class="icon" aria-hidden="true">
                                <use xlink:href="#icon-24gl-play" />
                            </svg>
                            {{changeCount(item.playCount)}}
                        </span>
                        <span class="name">{{item.name}}</span>
                    </router-link>
                </van-swipe-item>
            </van-swipe>
        </div>
    </div>
</template>
<script>
import { getMusicList } from '@/request/api/home.js';

export default {
    data() {
        return {
            musicList: []
        };
    },
    methods: {
        async getGneDan() {
            let res = await getMusicList();

            this.musicList = res.data.result;
            console.log(this.musicList);
        },
        changeCount: function (num) {
            if (num >= 10000000) {
                return (num / 10000000).toFixed(1) + '亿';
            } else if (num >= 10000) {
                return (num / 10000).toFixed(1) + '万';
            }
        }
    },
    mounted() {
        this.getGneDan();
    }
};
</script>

<style lang='less' scoped>
.musiclist {
    width: 100%;
    height: 5rem;
    padding: 0.2rem;
    .musicTop {
        width: 100%;
        height: 0.36rem;
        display: flex;
        justify-content: space-between;
        margin-bottom: 0.2rem;
        .title {
            font-size: 0.4rem;
            font-weight: 900;
        }
        .more {
            height: 30px;
            border: 1px solid #ccc;
            border-radius: 0.4rem;
            text-align: center;
            line-height: 0.6rem;
            padding: 0 0.2rem;
        }
    }
}
.musicContent {
    width: 100%;
    height: 4rem;
    margin-top: 20px;
    .my-swpie {
        height: 100%;
    }
    img {
        width: 100%;
        height: 150px;
    }
}
</style>