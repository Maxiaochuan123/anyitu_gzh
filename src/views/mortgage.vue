<!-- 车抵贷 -->
<template>
  <div class="mortgage">
    <CityPicker ref="cityPicker" @getCityData="getCityData"></CityPicker>
    <div class="banner">
      <div class="block1">
        <img class="banner" src="../../static/images/banner_1.png">
        <div class="form">
          <div class="header">
            <div class="title"><img src="../../static/images/money.png"><span>贷款申请</span></div>
            <div class="describe">个人名下或亲属名下有车均可申请</div>
            <div class="inputBox">
              <div class="basic">
                <img src="../../static/images/name.png">
                <mu-text-field v-model.trim="form.leadsName" placeholder="请输入您的姓名"></mu-text-field>
              </div>
              <div class="basic">
                <img src="../../static/images/phone.png">
                <mu-text-field v-model.trim="form.mobile" placeholder="请输入您的手机号"></mu-text-field>
              </div>
              <div class="basic" @click="$refs.cityPicker.show()">
                <img src="../../static/images/city.png">
                <mu-text-field v-model.trim="form.address" placeholder="请选择您所在城市" disabled></mu-text-field>
              </div>
            </div>
            <!-- <mu-button @click="cc">提交申请</mu-button> -->
            <mu-button :class="['submitBtn', btnDisabled ? 'btnDisabled' : '']" :disabled="btnDisabled" @click="submit(4)">提交申请</mu-button>
          </div>
        </div>
      </div>
      <div class="block2"><img src="../../static/images/banner_2.png"></div>
      <div class="block3"><img src="../../static/images/banner_3.png"></div>
    </div>
  </div>
</template>

<script>
import CityPicker from '@components/CityPicker'
export default {
  components: { CityPicker },
  data() {
    return {
      form:{
        leadsName:"",
        mobile:"",
        leadsType:"车贷线索",
        address:"",
        addressCode:""
      }
    }
  },
  created () {
    this.setPageTitle("车抵贷");
  },
  methods: {
    getCityData(code, name, list){
      this.form.addressCode = code;
      this.form.address = name;
    }
  }
}
</script>

<style lang="less" scoped>
  .mortgage{
    .block1{
      height: 660px;
    .form{
      height: 330px;
      }
    }
  }
</style>
