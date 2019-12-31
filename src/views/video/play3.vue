<template>
  <div class="play">
    <h5>播放器测试几个字啊呀一二三四五六七八九十</h5>
    <div class="video-div">
      <video id="test" class="video-js vjs-default-skin vjs-big-play-centered"></video>
    </div>
    <!-- <div class="video-div">
      <div id="id_test_video" style="width:100%; height:auto;"></div>
    </div>-->
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
        "https://ccm2cdn.open.com.cn/testyf/TM/TEST/2019/1216/VEiqrieTEST20191216174809651.mp4?Expires=3154328628&OSSAccessKeyId=81kgc0VJPbZ4WnpN&Signature=DhNqJT6ZErgCC3k8cgtCPVWWxzI%3D",
      src1:
        "https://ccm2cdn.open.com.cn/testyf/TM/TEST/2019/1216/VEiqrieTEST20191216174809651.mp4?Expires=3154480227&OSSAccessKeyId=81kgc0VJPbZ4WnpN&Signature=KqCanbwzzgPRBCE3EUOnhAKBeOY%3D",
      src2:
        "https://ccm2cdn.open.com.cn/testyf/TM/TEST/2019/1216/VEpbgmuTEST20191216174809852.mp4?Expires=3154480227&OSSAccessKeyId=81kgc0VJPbZ4WnpN&Signature=IE8EOqepKlliL81J7wdAHmz1GV8%3D",
      src3:
        "https://ccm2cdn.open.com.cn/testyf/TM/TEST/2019/1216/VEyizdtTEST20191216174809720.mp4?Expires=3154480227&OSSAccessKeyId=81kgc0VJPbZ4WnpN&Signature=WVdPhNnjjcfKTp1C%2FP7WawtoCoo%3D",
      src4:
        "https://ccm2cdn.open.com.cn/testyf/TM/TEST/2019/1216/VErflhcTEST20191216174809908.mp4?Expires=3154480227&OSSAccessKeyId=81kgc0VJPbZ4WnpN&Signature=4x2g9prQnwsSq%2FVSvc%2BKfznespk%3D"
    };
  },
  mounted() {
    // hwplayerloaded(function() {
    //   var options = {
    //     //是否显示控制栏，包括进度条，播放暂停按钮，音量调节等组件
    //     controls: true,
    //     width: "100%",
    //     height: "100%",
    //     //是否开启播放质量数据上报功能
    //     stat: true,
    //     userId: "playerDemo01",
    //     domainId: "hwPlayer",
    //     flvjs: {
    //       mediaDataSource: {
    //         isLive: true
    //       }
    //     }
    //   };
    //   var player = new HWPlayer("test", options, function() {
    //     //播放器已经准备好了
    //     player.src(
    //       "https://35.cdn-vod.huaweicloud.com/asset/ba4f5df688f4ed6f569470d688ec4a22/c5d8003cb1d108035d3a902adb2bc5cc.mp4"
    //     );
    //     // "this"指向的是HWPlayer的实例对象player
    //     player.play();
    //     // 使用事件监听
    //     player.on("ended", function() {
    //       //播放结束了
    //     });
    //   });
    // });
    var _this = this;
    var hwPlayer;

    hwplayerloaded(function() {
      var player = new HWPlayer(
        "test",
        {
          width: 380,
          height: 220,
          flvjs: {
            mediaDataSource: {
              isLive: true
            }
          }
        },
        function() {
          var playForm = document.querySelector(".playForm");

          player.updateSrc([
            {
              // src:"https://861.cdn-vod.huaweicloud.com/asset/6718ae888e4a0349b4501f859df4acd2/play_video/69a36eb618d7e55200f77fa50b18d34f.m3u8",
              src: _this.src1,
              type: "video/mp4",
              label: "原画"
            },
            {
              // src:"https://861.cdn-vod.huaweicloud.com/asset/6718ae888e4a0349b4501f859df4acd2/play_video/69a36eb618d7e55200f77fa50b18d34f.m3u8",
              src: _this.src2,
              type: "video/mp4",
              label: "超清"
            }
          ]);
          // playForm.style.display = "block";
          // console.log(123)
          // console.log(player);
          let rate = 0;
          let nowTime = 0;
          player.on("timeupdate", function() {
            rate = parseInt(player.currentTime())||0;
            if (rate-nowTime>1) {
               player.currentTime(nowTime)
            } else {
              nowTime = rate
            }
            //  const num = parseInt(rate)||0
            // console.log(player.currentTime())
          });
          const playBtn = document.querySelector("video");
          // console.log(playBtn)
          playBtn.addEventListener("seeked", function(e) {
            // console.log(123)
            // nowTime = parseInt(player.currentTime());
            // const num = parseInt(rate) || 0;
            // console.log(nowTime, num);
            // if (num - nowTime > 1) {
            //   player.currentTime(rate);
            // }
          });
          playBtn.addEventListener("seeking", function(e) {
            // nowTime = parseInt(player.currentTime());
            // const num = parseInt(rate) || 0;
            // console.log(nowTime, num);
          });
          player.on("volumechange", function(e) {
            // console.log(e.target.firstChild.volume)
            // console.log(e.target.firstChild.volume)

            // console.log(e.muted)
            // console.log(document.querySelector('.vjs-volume-bar.vjs-slider-bar.vjs-slider.vjs-slider-vertical'))
            const voice = document
              .querySelector(
                ".vjs-volume-bar.vjs-slider-bar.vjs-slider.vjs-slider-vertical"
              )
              .getAttribute("aria-valuetext");
            console.log(voice);
            // player.volume();
            // console.log(player.currentTime());
          });
        }
      );

      hwPlayer = player;
    });

    (function() {
      if (
        !("flexWrap" in document.documentElement.style) &&
        !("flex-wrap" in document.documentElement.style)
      )
        document.querySelector(".box").className += " no-flex";
    })();

    /**
     * 获取视频类型
     * */
    function getType(str) {
      var index = str.lastIndexOf("?"),
        type,
        noParamUrl = index === -1 ? str : str.substr(0, index);

      type = noParamUrl
        .substr(noParamUrl.lastIndexOf(".") + 1)
        .toLocaleLowerCase();

      if (type === "m3u8") {
        return "application/x-mpegURL";
      } else if (type === "mp4") {
        return "video/mp4";
      } else if (type === "flv") {
        return "video/flv";
      } else if (type === "mpd") {
        return "application/dash+xml";
      } else {
        if (noParamUrl.substr(0, 4).toLocaleLowerCase() === "rtmp") {
          return "rtmp/flv";
        }
        return false;
      }
    }
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
  #id_test_video,
  #my-player,
  .video-js {
    height: 100%;
    width: 100%;
  }
}
</style>
