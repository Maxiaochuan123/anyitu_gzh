<template>
  <div class="city">
    <h1>{{cityStr}}</h1>
    <button @click="popup = !popup">选择城市</button>

    <div :class="['popup', popup ? 'setH' : '']" v-show="popup">

      <div>
        <p v-for="(item,index) in 20" :key="index">成都</p>
      </div>
      <div>
        <p v-for="(item,index) in 20" :key="index">南充</p>
      </div>
      <div>
        <p v-for="(item,index) in 20" :key="index">西充</p>
      </div>

    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      cityStr:'',
      cityData:[],

      popup:false
    }
  },
  methods: {
    getData(){
      let params = {
        key: "f0cca3e4367dbec23605783438908023",
        subdistrict: "3"
      }
      axios.get('https://restapi.amap.com/v3/config/district', { params: params }).then(res => {
        this.cityData = res.data;
      })
    }
  }
}
</script>

<style lang="less" scoped>
  .city{
    .popup{
      position: fixed;
      left: 0;
      bottom: 0;
      width: 100vw;
      height: 10vh;
      display: flex;
      background-color: #ff6600;
      animation: setH .2s cubic-bezier(0,-1.46,.86,.65);
      animation-fill-mode: forwards;

      >div{
        width: 33.33%;
        overflow-y: scroll;
        // background-color: #fff;
        &::-webkit-scrollbar {
          display: none;
        }
        &:nth-child(2){
          border-left: 1px solid #eee;
          border-right: 1px solid #eee;
        }
        >p{
          // display: inline-block;
          // width: 100%;
          text-align: center;
          padding: 8px 4px;
          height: 24px;
          line-height: 24px;
          font-size: 16px;
          color: #333;
        }
      }
    }
    @keyframes setH {
      from{ height: 0vh; opacity: 0;}
      to{ height: 40vh; opacity: 1;}
    }
  }
</style>
