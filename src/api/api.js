import { get, post } from "./interceptor";
export default {
  // 获取高德 3级联动数据 
  getCityData: params => get({ params, url: "/crmTencentClew/RequestAmap" }),
};
