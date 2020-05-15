<!-- 引导页 -->
<template>
  <div class="guide-body">
    <div class="guide">
      <img src="@static/images/APP_guide.png">
    </div>
    <div class="guide-button">
      <mu-button full-width round color="success" @click="downApp">下载APP立即体验</mu-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {
    downApp() {
      let system = this.tool.getSystem();
      let browser = this.tool.getWxBrowser();

      if(browser === 'wxBrowser'){
        this.$toast.info("请点击右上角按钮,选择在浏览器打开")
      }else{
        const downloadAppUrl = 'http://yw.cnzhjk.com/deployment_html_h5/ANETU_FINANCE';
        if(system === "iOS"){
          var loadDateTime = new Date();
          window.setTimeout(function() {
            var timeOutDateTime = new Date();
            if (timeOutDateTime - loadDateTime < 5000) {
              window.location = downloadAppUrl;
            } else {
              window.close();
            }
          },25);
          window.location = "anetuApp://";
          // var ifr = document.createElement("iframe");
          // ifr.src = "openwjtr://com.tyrbl.wjtr"; /***打开app的协议，有ios同事提供***/
          // ifr.style.display = "none"; 
          // document.body.appendChild(ifr);
          // window.setTimeout(function(){
          //   document.body.removeChild(ifr);
          //   window.location.href = downloadAppUrl; /***下载app的地址***/
          // },2000)
        }else if(system === "Android"){
          var state = null;
          try {
            state = window.open("puche://jp.app/openwith", '_blank');
          } catch(e) {}
          if (state) {
            window.close();
          } else {
            window.location = downloadAppUrl;
          }
          // window.location.href = "puche://jp.app/openwith";
          // window.setTimeout(function(){
          //   window.location.href = downloadAppUrl;
          // },2000);
        }
      }
      
    }
  }
}
</script>

<style lang="less"scoped>
  .guide-body {
    width: 100vw;
    height: 100vh;

    .guide {
      img{
        width: 100%;
      }
    }
    
    .guide-button {
      width: 100%;
      margin-top: -114px;
      display: flex;
      justify-content: center;
      align-items: center;
      button{
        width: 80%;
        height: 44px;
        font-size: 16px;
        background-color: rgb(0,198,123);
      }
    }
  }
</style>
