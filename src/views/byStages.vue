<!-- 车分期 -->
<template>
  <div class="byStages">
    <CityPicker ref="cityPicker" @getCityData="getCityData"></CityPicker>
    <div class="banner">
      <div class="block1">
        <img class="banner" src="../../static/images/banner_4.png">
        <div class="form">
          <div class="header">
            <div class="title"><img src="../../static/images/money.png"><span>选择安逸图,买车更优惠</span></div>
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
              <div class="basic">
                <img src="../../static/images/car.png">
                <mu-text-field v-model.trim="form.interestedModel" placeholder="输入兴趣车型"></mu-text-field>
              </div>
            </div>
            <div class="submitBtn" @click="submit(5)">提交申请</div>
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
  components: {
    CityPicker
  },
  data() {
    return {
      form:{
        leadsName:"",
        mobile:"",
        leadsType:"买车线索",
        addressCode:"",
        address:"",
        interestedModel:""
      }
    }
  },
  created () {
    this.setPageTitle("车分期");
  },
  methods: {
    getCityData(code, name, list){
      this.form.addressCode = code;
      this.form.address = name;
    },
  }
}
</script>
