import { get, post } from "./interceptor";
export default {
  // 登陆
  login: params => post({ params, url: "/login" }),
};
