<template>
    <div class="iconList">
        <div class="iconItem">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-shizimao" />
            </svg>
            <span>每日推荐</span>
        </div>
        <div class="iconItem">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-dianshizhibo" />
            </svg>
            <span>私人FM</span>
        </div>
        <div class="iconItem">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-gedan" />
            </svg>
            <span>歌单</span>
        </div>
        <div class="iconItem">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-31paixingbang" />
            </svg>
            <span>排行榜</span>
        </div>
    </div>
</template>
<style lang='less' scoped>
.iconList {
    margin-top: 10px;
    width: 100%;
    height: 89px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    .iconItem {
        width: 25%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .icon {
        width: 50px;
        height: 50px;
    }
}
</style>