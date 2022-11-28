<template>
    <div class="liebiao">111</div>
</template>
<style>
.liebiao {
    background-color: white;
    width: 100%;
    height: 640px;
    border: 1px solid white;
    border-radius: 50px;
}
</style>
<script>
export default {
    setup(props) {
        console.log(props);
    },
    props: ['itemList']
};
</script>
