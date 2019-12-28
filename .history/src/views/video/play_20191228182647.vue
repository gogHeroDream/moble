<template>
  <div class="play">
    <h5>播放器测试几个字啊呀一二三四五六七八九十</h5>
    <div class="prism-player" id="J_prismPlayer"></div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "play",
  data(){
    return {
      play: '',
      src: 'https://ccm2cdn.open.com.cn/testyf/TM/TEST/2019/1216/VEiqrieTEST20191216174809651.mp4?Expires=3154328628&OSSAccessKeyId=81kgc0VJPbZ4WnpN&Signature=DhNqJT6ZErgCC3k8cgtCPVWWxzI%3D'
    }
  },
  methods: {
    mounted() {
      console.log(Aliplayer)
      // this.player = new Aliplayer({
      //   id: "J_prismPlayer",
      //   width: "100%",
      //   autoplay: true,
      //   //支持播放地址播放,此播放优先级最高
      //   source: this.src
      // });
    }
  }
};
</script>
<style lang="scss">
</style>
