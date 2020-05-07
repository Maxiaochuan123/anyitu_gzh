<!-- 车分期 -->
<template>
  <div class="byStages">
    <CityPicker ref="cityPicker" @getCityData="getCityData"></CityPicker>
    <Picker :anchor="pickerAnchor" :data="pickerList" :textTitle="pickerTitle" @confirm="pickerConfirm" picker-class="pickerClass" ref="picker"></Picker>
    <div class="banner">
      <div class="block1">
        <img src="../../static/images/banner_4.png">
        <div class="form">
          <div class="header">
            <div class="title"><img src="../../static/images/money.png"><span>贷款申请</span></div>
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
              <div class="basic" @click="showPicker">
                <img src="../../static/images/city.png">
                <mu-text-field v-model.trim="form.carType" placeholder="选择购买新车或二手车" disabled></mu-text-field>
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
import Picker from "dm-vue-picker-h5";
import CityPicker from '@components/CityPicker'
export default {
  components: {
    Picker, CityPicker
  },
  data() {
    return {
      form:{
        name:'',
        phone:'',
        city:'',
        carType:''
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
    },

    // picker 弹出
    showPicker(){
      this.$refs.picker.show();
      this.pickerAnchor = [0];

      // this.pickerList.forEach((item,index)=>{
      //   // console.log(item.text, row)
      //   if(item.text === row.field.value){
      //     this.pickerAnchor = [index]
      //   }
      // })
    },
    // picker 确认
    pickerConfirm(value, column, text){
      this.pickerAnchor = [column];
      this.form.carType = text[0];
    },
  }
}
</script>
