<template>
  <div class="play">
    <h5>播放器测试几个字啊呀一二三四五六七八九十</h5>
    <div  class="prism-player" id="J_prismPlayer"></div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'play',
  methods: {
    mounted() {
       var player = new Aliplayer({
            id: 'J_prismPlayer',
            width: '100%',
            autoplay: true,
            //支持播放地址播放,此播放优先级最高
            source : '播放url'
    }
  }
}
</script>
<style lang="scss">
</style>
