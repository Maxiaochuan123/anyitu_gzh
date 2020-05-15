import { get, post } from "./interceptor";
export default {
  // 获取高德 3级联动数据 
  getCityData: params => get({ params, url: "/crmTencentClew/RequestAmap" }),

  // 提交申请校验
  submitCheck: params => post({ params, url: "/crmTencentClew/verifyRepeatLeads", headers: { "Content-Type": "application/json;charset=UTF-8" } }),

  // 车分期, 车抵贷 提交申请
  submitApplication: params => post({ params, url: "/crmTencentClew/newTencentAddLeads", headers: { "Content-Type": "application/json;charset=UTF-8" } }),

};
