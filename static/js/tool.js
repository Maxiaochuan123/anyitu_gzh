export default {
  // 判断是否微信浏览器
  getWxBrowser(){
    return navigator.userAgent.toLowerCase().match(/MicroMessenger/i) == 'micromessenger' ? 'wxBrowser' : 'otherBrowser';
  },
  
  // 判断操作系统
  getSystem() {
    var u = navigator.userAgent;
    var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; //g
    var isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
    var Agents = ["Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod"];
    var isWeb = true;
    for (var v = 0; v < Agents.length; v++) {
      if (u.indexOf(Agents[v]) > 0) {
        isWeb = false;
        break;
      }
    }

    if (isWeb) {
      return 'Web'
    } else {
      if (isAndroid) {
        return 'Android';
      }
      if (isIOS) {
        return 'iOS'
      }
    }
  }
}