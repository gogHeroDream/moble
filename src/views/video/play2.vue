<template>
  <div class="play">
    <h5>播放器测试几个字啊呀一二三四五六七八九十</h5>
    <div class="video-div">
      <div class="prism-player" id="J_prismPlayer"></div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "play",
  data() {
    return {
      play: "",
      src:"https://ccm2cdn.open.com.cn/testyf/TM/TEST/2019/1216/VEiqrieTEST20191216174809651.mp4?Expires=3154328628&OSSAccessKeyId=81kgc0VJPbZ4WnpN&Signature=DhNqJT6ZErgCC3k8cgtCPVWWxzI%3D",
      src2:"https://861.cdn-vod.huaweicloud.com/asset/6718ae888e4a0349b4501f859df4acd2/play_video/69a36eb618d7e55200f77fa50b18d34f.m3u8"
    };
  },
  mounted() {
   
    // console.log(TcPlayer);

    // alert(typeof window.WeixinJSBridge)
    this.player = new Aliplayer(
      {
        id: "J_prismPlayer",
        autoplay: true, //是否自动播放
        playsinline: true, //H5是否内置播放
        useH5Prism: true, //强制H5播放器
        // isLive: true, //是不是直播
        preload: true, //播放器自动加载
        snapshot: true, //falsh启用截图
        width: "100%",
        height: "100%",
        x5_type: 'h5',
        // x5_fullscreen: true,
        x5_video_position:'center',
        x5_orientation: 'portraint',
        controlBarVisibility: "always", //控制面板的实现 ‘click’ 点击出现、‘hover’ 浮动出现、‘always’ 一直在
        source: this.src2 //这里 记住一定是JSON字符串类型 播放地址  如果有好几种格式 {'LD':556464,'HD':4564} 只有标准格式才能切换清晰度
      },
      function(player) {
        player.play();
        player.on('completeSeek', function() {
          alert(player.getCurrentTime())
        })
        console.log("播放器创建了。");
      }
    );
  },
  methods: {}
};
</script>
<style lang="scss" scoped>
$q: 75;
.play {
  h5 {
    font-size: 0.5rem;
    line-height: 1rem;
    background: #eee;
  }
}
.video-div {
  width: 10rem;
  height: 422rem / $q;
  #id_test_video,#J_prismPlayer {
    height: 100%;
    overflow: hidden;
  }
}
</style>
