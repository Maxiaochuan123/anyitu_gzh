<!-- 提交成功 -->
<template>
  <div class="submitSuccess">
    <div class="content">
      <img src="@static/images/success.png">
      <span>提交成功</span>
      <mu-button @click="closePage">关闭申请</mu-button>
    </div>
  </div>
</template>

<script>
// wx sdk
import wx from 'weixin-js-sdk'
// 原生通讯
import bridge from "@static/js/JSbridge";

export default {
  methods: {
    closePage(){
      let system = this.tool.getSystem();
      let browser = this.tool.getWxBrowser();
      if (system === "iOS" || system === "Android") {
        if (browser === "wxBrowser") {
          wx.closeWindow();
        } else {
          bridge.callHandler("returnBack", null, null);
        }
      }
    }
  }
}
</script>

<style lang="less" scoped>
  .submitSuccess{
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;

    .content{
      margin-top: -150px;
      display: flex;
      flex-direction: column;
      align-items: center;
      img{
        width: 176px;
        height: 147px;
      }
      span{
        font-size: 16px;
        color: #0C0C0C;
        margin: 12px 0 12px 20px;
      }
      .mu-button{
        width: 92px;
        height: 30px;
        margin-left: 20px;
        font-size: 14px;
        color: #fff;
        background-color: #00C67B;
      }
    }
  }
</style>
