//app.js

// 阿拉丁接入
const App = require('./utils/ald-stat.js').App;

// Bugout接入
var bugOut = require('./utils/bugOut.min.js')
bugOut.usePlugins = true
bugOut.init(true, 'ddd61d059191f856bb027f2150cceca1', '1.0.3')

App({
  onLaunch: function () {
    wx.BaaS = requirePlugin('sdkPlugin')
    wx.BaaS.wxExtend(wx.login, wx.getUserInfo)
    wx.BaaS.init('01323cc0a0d7e3bbebd0')
  },

  onError: function (res) {
    bugOut.track(res)
  }
})