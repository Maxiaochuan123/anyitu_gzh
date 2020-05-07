<!-- 车抵贷 -->
<template>
  <div class="mortgage">
    <CityPicker ref="cityPicker" @getCityData="getCityData"></CityPicker>
    <div class="banner">
      <div class="block1">
        <img src="../../static/images/banner_1.png">
        <div class="form">
          <div class="header">
            <div class="title"><img src="../../static/images/money.png"><span>贷款申请</span></div>
            <div class="describe">个人名下或亲属名下有车均可申请</div>
            <div class="inputBox">
              <div class="basic">
                <img src="../../static/images/name.png">
                <mu-text-field v-model.trim="form.name" placeholder="请输入您的姓名"></mu-text-field>
              </div>
              <div class="basic">
                <img src="../../static/images/phone.png">
                <mu-text-field v-model.trim="form.phone" placeholder="请输入您的手机号"></mu-text-field>
              </div>
              <div class="basic" @click="$refs.cityPicker.show()">
                <img src="../../static/images/city.png">
                <mu-text-field v-model.trim="form.city" placeholder="请选择您所在城市" disabled></mu-text-field>
              </div>
            </div>
            <div class="submitBtn" @click="submit">提交申请</div>
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
        name:'',
        phone:'',
        city:''
      },
      pickerTitle:"lala",
      pickerAnchor:[0],
      pickerList:[{text:'张三',value:1},{text:'李四',value:2},{text:'王二',value:3}],
    }
  },
  methods: {
    submit(){
      console.log(this.form)
    },

    getCityData(code, name, list){
      this.form.city = name;
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
