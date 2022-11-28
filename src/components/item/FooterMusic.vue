<template>
    <div class="FooterMusic">
        <div class="footerLeft">
            <img :src="playList[playListIndex].al.picUrl" />
            <div>
                <p>{{playList[playListIndex].al.name}}</p>
                <span>横滑切换下一首</span>
            </div>
        </div>
        <div class="footerRight">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-bofang" @click="play" />
            </svg>
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-icon-test1" />
            </svg>
        </div>
        <audio ref="audio" :src="`https://music.163.com/song/media/outer/url?id=${playList[playListIndex].id}.mp3 `"></audio>
    </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
    computed: {
        ...mapState(['playList', 'playListIndex'])
    },
    mounted() {
        console.log(this.$refs);
    },
    methods: {
        play: function () {
            console.log('1111');

            this.$refs.audio.play();
        }
    }
};
</script>
<style lang="less" scoped>
.FooterMusic {
    width: 100%;
    height: 70px;
    background-color: #fff;
    bottom: 0px;
    position: fixed;
    padding: 10px;
    border-top: 1px solid #999;
    display: flex;
    justify-content: space-between;
    .footerLeft {
        width: 60%;
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        img {
            width: 50px;
            height: 50px;
            border-radius: 50%;
        }
    }
    .footerRight {
        width: 20%;
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .icon {
            width: 30px;
            height: 30px;
        }
    }
}
</style>
