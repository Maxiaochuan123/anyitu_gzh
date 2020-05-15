<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
import VConsole from "vConsole";
export default {
  created () {
    new VConsole();
  }
}
</script>
<style lang="less">
  @import url("../static/css/public.less");
</style>