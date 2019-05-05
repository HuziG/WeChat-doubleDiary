//app.js
const App = require('./utils/ald-stat.js').App;

App({
  onLaunch: function () {
    wx.BaaS = requirePlugin('sdkPlugin')
    wx.BaaS.wxExtend(wx.login, wx.getUserInfo)
    //让插件帮助完成登录、支付等功能
    wx.BaaS.init('01323cc0a0d7e3bbebd0')
  }
})