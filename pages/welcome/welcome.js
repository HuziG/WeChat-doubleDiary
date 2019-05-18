// pages/welcome/welcome.js
import {
  SingleUserRequest
} from '../../models/singleuser.js'

const Page = require('../../utils/ald-stat.js').Page;
const SingleUserReq = new SingleUserRequest()

Page({
  data: {

  },

  onLoad: function (options) {
    setTimeout(() => {
      let that = this
      wx.getSetting({
        success(res) {
          if (res.authSetting['scope.userInfo']) {
            wx.switchTab({
              url: '/pages/pair-user/pair-user'
            })
          } else {
            that.setOpenid()
          }
        }
      })
    },1500)
  },

  setOpenid() {
    let that = this
    wx.login({
      success(res) {

        SingleUserReq.getOpenid(res.code).then(res => {
          wx.setStorageSync('openid', res.data.openid)
          wx.redirectTo({
            url: '/pages/index/index'
          })
        })

      }
    })
    
  }
})