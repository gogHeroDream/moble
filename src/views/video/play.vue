<template>
  <div class="play">
    <h5>播放器测试几个字啊呀一二三四五六七八九十</h5>
    <!-- <div class="prism-player" id="J_prismPlayer"></div> -->
    <div class="video-div">
      <div id="id_test_video" style="width:100%; height:auto;"></div>
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
      src:
        "https://ccm2cdn.open.com.cn/testyf/TM/TEST/2019/1216/VEiqrieTEST20191216174809651.mp4?Expires=3154328628&OSSAccessKeyId=81kgc0VJPbZ4WnpN&Signature=DhNqJT6ZErgCC3k8cgtCPVWWxzI%3D"
    };
  },
  mounted() {
    // console.log(Aliplayer);
    var player = new TcPlayer(
      "id_test_video",
      {
        m3u8: this.src, //请替换成实际可用的播放地址
        m3u8_hd: this.src,
        m3u8_sd: this.src,
        // autoplay: true, //iOS 下 safari 浏览器，以及大部分移动端浏览器是不开放视频自动播放这个能力的
        poster: { style: "cover", src: "/img/liangwei.jpg" },
        live: true,
        x5_player: true,
        x5_type: "h5",
        x5_fullscreen: true,
        x5_orientation: 2,
        volume: 0.6,
        // controls: 'none',
        // systemFullscreen: true,
        pausePosterEnabled: false,
        width: "100%", //视频的显示宽度，请尽量使用视频分辨率宽度
        height: "100%" //视频的显示高度，请尽量使用视频分辨率高度
      },
      function(player) {
        console.log(player);
        player.listener("seeked", event => {
          console.log("Video found the playback position it was looking for.");
        });
        player.listener("pause", event => {
          console.log(
            "The Boolean paused property is now true. Either the " +
              "pause() method was called or the autoplay attribute was toggled."
          );
        });
        // player.seek(20)
      }
    );
    const videoeEl = player.el.querySelector("video");
    // console.log(el);
    videoeEl.addEventListener("pause", event => {
      console.log(
        "The Boolean paused property is now true. Either the " +
          "pause() method was called or the autoplay attribute was toggled."
      );
    });

    videoeEl.addEventListener("seeked", event => {
      alert(player.currentTime());
      console.log("Video found the playback position it was looking for.");
    });
    // console.log(TcPlayer);

    // alert(typeof WeixinJSBridge)
    // this.player = new Aliplayer(
    //   {
    //     id: "J_prismPlayer",
    //     autoplay: true, //是否自动播放
    //     playsinline: true, //H5是否内置播放
    //     useH5Prism: true, //强制H5播放器
    //     isLive: true, //是不是直播
    //     preload: true, //播放器自动加载
    //     snapshot: true, //falsh启用截图
    //     // width: "100%",
    //     // height: "100%",
    //     controlBarVisibility: "always", //控制面板的实现 ‘click’ 点击出现、‘hover’ 浮动出现、‘always’ 一直在
    //     source: this.src //这里 记住一定是JSON字符串类型 播放地址  如果有好几种格式 {'LD':556464,'HD':4564} 只有标准格式才能切换清晰度
    //   },
    //   function(player) {
    //     console.log("播放器创建了。");
    //   }
    // );
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
  #id_test_video {
    height: 100%;
  }
}
</style>
