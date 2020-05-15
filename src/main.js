/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-25 15:40:36
 * @LastEditTime: 2020-03-30 11:07:58
 * @LastEditors: shenah
 */
import Vue from "vue";
import App from "./App";
import router from "./router";
import store from "./vuex/store";

import MuseUI from "muse-ui";
import "muse-ui/dist/muse-ui.css";
Vue.use(MuseUI);

import Toast from 'muse-ui-toast';
import options from "@static/js/options";
Vue.use(Toast);
Toast.config(options.toast);

import mixins from "@/api/mixins";
Vue.mixin(mixins);

import dayjs from "dayjs";
Vue.prototype.dayjs = dayjs;

import tool from "@static/js/tool";
Vue.prototype.tool = tool;

import storage from "@static/js/storage";
Vue.prototype.storage = storage;

import api from "./api/api";
Vue.prototype.api = api;

import AlloyFinger from "alloyfinger";
import AlloyFingerPlugin from "alloyfinger/vue/alloy_finger_vue";

Vue.use(AlloyFingerPlugin, {
  AlloyFinger
});

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  store,
  components: { App },
  template: "<App/>"
});
