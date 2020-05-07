<template>
  <div class="city" v-show="picker">
    <div :class="['popup', picker ? 'show' : 'hidden']">
      <div class="xh-address">
        <div class="xh-address-header">
          <div class="xh-opt">
            <span @click="cancel">取消</span>
            <span :class="{ disable: disabled }" @click="onConfirm">确定</span>
          </div>
          <div class="xh-text-address">
            <span :style="{ color: isColor.province ? '#00C67B' : '' }" @click="textTab('province')" >
              <span v-if="province.name">{{ province.name }}</span>
              <span style="color: #ee0a24;" v-else-if="province_list.length > 0 && !province.name" >请选择</span >
            </span>
            <span v-if="city.name">-</span>
            <span :style="{ color: isColor.city ? '#00C67B' : '' }" @click="textTab('city')" >
              <span v-if="city.name">{{ city.name }}</span>
              <span style="color: #ee0a24;" v-else-if="city_list.length > 0 && !city.name" >- 请选择</span >
            </span>
            <span v-if="county.name">-</span>
            <span :style="{ color: isColor.county ? '#00C67B' : '' }" @click="textTab('county')" >
              <span v-if="county.name">{{ county.name }}</span>
              <span style="color: #ee0a24;" v-else-if="county_list.length > 0 && !county.name" >- 请选择</span>
            </span>
          </div>
        </div>
        <div class="content">
          <div
            :id="'province' + index"
            :key="index"
            :style="{ color: i.name == province.name ? '#00C67B' : '' }"
            @click="provinceChenge(i, index)"
            v-for="(i, index) in province_list"
            v-if="isColor.province"
          >
            {{ i.name }}
          </div>
          <div
            :id="'city' + index"
            :key="index"
            :style="{ color: i.name == city.name ? '#00C67B' : '' }"
            @click="cityChenge(i, index)"
            v-for="(i, index) in city_list"
            v-if="isColor.city"
          >
            {{ i.name }}
          </div>
          <div
            :id="'county' + index"
            :key="index"
            :style="{ color: i.name == county.name ? '#00C67B' : '' }"
            @click="countyChenge(i, index)"
            v-for="(i, index) in county_list"
            v-if="isColor.county"
          >
            {{ i.name }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  // props: {
  //   picker:{
  //     type: Boolean,
  //     default: false
  //   }
  // },
  data() {
    return {
      picker:false,

      // 获取的值 对象
      province: {},
      city: {},
      county: {},
      // 是否显示
      isColor: {
        province: false,
        city: false,
        county: false
      },
      // 省市区集合
      province_list: [],
      city_list: [],
      county_list: [],
      // 当前定点
      point: {
        province: "",
        city: "",
        county: ""
      }
    };
  },
  computed: {
    disabled() {
      return !(this.province.name && this.city.name && this.county.name);
    }
  },
  methods: {
    textTab(val) {
      this.showColor(val);
      this.activeAbc(this.point[val]);
      window.scrollTo(0, 0);
    },
    showColor(val) {
      for (var i in this.isColor) {
        if (i == val) {
          this.isColor[i] = true;
        } else {
          this.isColor[i] = false;
        }
      }
    },
    provinceChenge(row, index) {
      this.province = row;
      this.city_list = row.districts;
      this.county_list = [];
      this.showColor("city");
      this.city = {};
      this.county = {};
      this.point.province = "province" + index;
    },
    cityChenge(row, index) {
      this.city = row;
      this.county_list = row.districts;
      this.showColor("county");
      this.county = {};
      this.point.city = "city" + index;
    },
    countyChenge(row, index) {
      this.county = row;
      this.point.county = "county" + index;
    },
    activeAbc(ids) {
      // 找到锚点
      let anchorElement = document.getElementById(ids);
      // 如果对应id的锚点存在，就跳转到锚点
      if (anchorElement) {
        anchorElement.scrollIntoView();
      }
    },
    getMap() {
      let params = {
        key: "f0cca3e4367dbec23605783438908023",
        subdistrict: "3"
      };
      axios
        .get("https://restapi.amap.com/v3/config/district", { params: params })
        .then(res => {
          let { data } = res;
          this.province_list = data.districts[0].districts;
          this.showColor("province");
        });
    },
    show(){
      this.picker = true;
      document.querySelector('body').style.overflow = 'hidden';
    },
    cancel() {
      this.picker = false;
      document.querySelector('body').style.overflow = 'auto';
    },
    onConfirm() {
      if (this.disabled) {
        return;
      }
      let code = [],
        name = [],
        list = [];
      if (this.province.name) {
        list = [this.province];
      } else {
        return;
      }
      if (this.city.name) {
        list = [this.province, this.city];
      }
      if (this.county.name) {
        list = [this.province, this.city, this.county];
      }
      list.forEach(t => {
        code.push(t.adcode);
        name.push(t.name);
      });
      this.$emit("getCityData", code.join("-"), name.join("-"), list);
      this.cancel();
    }
  },
  mounted() {
    this.getMap();
  }
};
</script>

<style lang="less" scoped>
.city {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 9999;


  .popup {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100vw;
    height: 10vh;
    display: flex;
    .xh-address {
      width: 100%;
      .xh-address-header {
        width: 100%;
        background-color: #fff;
        .xh-opt {
          font-size: 16px;
          height: 40px;
          line-height: 40px;
          display: flex;
          padding: 0 10px;
          justify-content: space-between;
          span {
            color: #00C67B;
          }
        }
        .xh-text-address {
          padding: 4px 0;
          text-align: center;
          overflow-x: auto;
          box-sizing: border-box;
          word-break: break-all;
          white-space: nowrap;
          border-top: 1px solid #f7f8fa;
          border-bottom: 1px solid #f7f8fa;
          span {
            font-size: 16px;
          }
        }
      }
      .content {
        height: calc(100% - 70px);
        background-color: #fff !important;
        line-height: 44px;
        text-align: center;
        overflow-y: scroll;
        &::-webkit-scrollbar {
          display: none;
        }
      }
    }
    .xh-main-b {
      color: #00C67B;
    }
    .disable {
      color: #ccc !important;
    }
  }
  .show{
    animation: show 0.2s ease;
    animation-fill-mode: forwards;
  }
  .hidden{
    animation: hidden 0.2s ease;
    animation-fill-mode: forwards;
  }
  @keyframes show {
    from {
      height: 0vh;
      opacity: 0;
    }
    to {
      height: 40vh;
      opacity: 1;
    }
  }
  @keyframes hidden {
    from {
      height: 40vh;
      opacity: 1;
    }
    to {
      height: 0vh;
      opacity: 0;
    }
  }
}
</style>
