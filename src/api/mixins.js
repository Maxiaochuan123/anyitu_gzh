// 日期处理
import dayjs from "dayjs";

// 工具函数
import tool from "@static/js/tool";

// 存储
import storage from "@static/js/storage";

// vuex
import store from "@/vuex/store";


export default {
  data() {
    return {
      btnDisabled: false, //按钮禁用状态
    };
  },
  methods: {
    // 车抵贷, 车分期 提交申请
    submit(num) {
      this.vilidata(num)
    },
    vilidata(num){
      let tag = 0;
      let flag = false;

      for (const key in this.form) {
        if (this.form[key] === ""){
          tag++;
        }
      }

      if (tag >= num){

        this.$toast.info("请填写内容后再提交申请")

      }else{

        if (!this.form.leadsName){
          this.$toast.info("请填写姓名");
        }else{
          if (!/^[\u4e00-\u9fa5]{1,10}$/.test(this.form.leadsName)){
            this.$toast.warning("姓名只能由10位以内的汉字组成");
          }else{

            if (!this.form.mobile) {
              this.$toast.info("请填写手机号");
            } else {

              if (!/^(?:(?:\+|00)86)?1[3-9]\d{9}$/.test(this.form.mobile)){
                this.$toast.warning("请检查手机号码是否正确");
              }else{

                if (!this.form.address) {
                  this.$toast.info("请选择城市");
                }else{

                  if (this.form.interestedModel && !/^.{1,20}$/.test(this.form.interestedModel)) {
                    this.$toast.warning("兴趣车型由20位以内的字符组成");
                  }else{
                    this.submitCallback();
                  }

                }

              }

            }

          }
        }
      }
    },
    // 提交申请 API
    submitCallback(){
      this.btnDisabled = true;
      this.api.submitCheck({ leadsType: this.form.leadsType, mobile: this.form.mobile }).then(res => {
        if (res.msg === "success"){
          this.api.submitApplication({ entity: { ...this.form } }).then(res => {
            console.log(res)
            if (res.msg === "success"){
              this.btnDisabled = false;
              this.$toast.success("申请成功!");
              for (const key in this.form) {
                this.form[key] = "";
              }
              this.$router.push("submitSuccess");
            }else{
              this.$toast.error(res.msg)
            }
          })
        }else{
          this.$toast.warning(res.msg)
        }
      })
    },
    // 设置页面标题
    setPageTitle(title) {
      document.title = title;
    }
  }
};
