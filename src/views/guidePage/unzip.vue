<template>
  <div>
    <div class="guide-body">
      <div class="guide">
        <img src="../../../static/images/APP_guide.jpg">
      </div>
      <div class="guide-button">
        <div class="guide-button-padding">
          <mu-button full-width round color="success" @click="newPath">下载APP立即体验</mu-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {
    newPath() {
      window.location.href = 'http://yw.cnzhjk.com/deployment_html_h5/ANETU_FINANCE';
    }
  }
}
</script>

<style lang="less">
@import "./main.less";
</style>
