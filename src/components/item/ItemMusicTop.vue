<template>
    <div v-if="playlist.creator !=null">
        <div class="itemMusicTop">
            <img :src="playlist.coverImgUrl" alt class="bgimg" />
            <div class="itemLeft">
                <svg class="icon" aria-hidden="true" @click="$router.go(-1)">
                    <use xlink:href="#icon-fanhuijiantou" />
                </svg>
                <span>歌单</span>
            </div>
            <div class="itemRight">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-icon-test" />
                </svg>
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-icon-test1" />
                </svg>
            </div>
        </div>
        <div class="gedan">
            <div>
                <img :src="playlist.coverImgUrl" class="touxiang" />
            </div>
            <div style="margin-top: -126px; padding-left: 153px;">
                <span class="gedanname">{{playlist.name}}</span>
            </div>
            <div class="usertouxiang">
                <div>
                    <img :src="playlist.creator.avatarUrl" />
                    <div class="username">
                        <span style="color:#fff">{{playlist.creator.nickname}}</span>
                    </div>
                </div>
            </div>
            <div class="nr" style="width: 202px; margin: 21px 155px; all:inital;">
                <span>{{playlist.creator.signature}}</span>
            </div>
            <div>
                <svg class="icon" aria-hidden="true" @click="$router.go(-1)">
                    <use xlink:href="#icon-xinxi" />
                </svg>
                <svg class="icon" aria-hidden="true" @click="$router.go(-1)">
                    <use xlink:href="#icon-fenxiang" />
                </svg>
                <svg class="icon" aria-hidden="true" @click="$router.go(-1)">
                    <use xlink:href="#icon-xiazai-wenjianxiazai-07" />
                </svg>
                <svg class="icon" aria-hidden="true" @click="$router.go(-1)">
                    <use xlink:href="#icon-xuanze-duoxuan-tianchong" />
                </svg>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    setup(props) {
        console.log(props);
    },
    props: ['playlist']
};
</script>

<style lang="less" scoped>
.itemMusicTop {
    width: 100%;
    height: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    .bgimg {
        width: 100%;
        height: 8rem;
        position: fixed;
        z-index: -1;
        filter: blur(30px);
    }
    .itemLeft,
    .itemRight {
        width: 25%;
        height: 100%;
        display: flex;
        justify-content: space-between;
        span {
            font-size: 20px;
            color: #fff;
        }
        .icon {
            color: #fff;
        }
    }
}
.gedan {
    width: 100%;
    height: 200px;
    img {
        width: 122px;
        border-radius: 12px;
        margin-left: 8px;
    }
    .gedanname {
        color: white;
    }
}
.usertouxiang {
    margin-left: 148px;
    img {
        border-radius: 99px;
        width: 43px;
        margin-top: 12px;
    }
}
.nr {
    // margin-top: 5px;
    // padding-left: 153px;
    color: white;
}
.username {
    margin-top: -33px;
    margin-left: 64px;
}
</style>