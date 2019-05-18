// pages/index/index.js
import {
  SingleUserRequest
} from '../../models/singleuser.js'

const Page = require('../../utils/ald-stat.js').Page;
const SingleUserReq = new SingleUserRequest()

Page({

  data: {

  },

  onLoad: function (options) {

  },

  getUserInfo(event) { // 获取用户授权信息
    if (event.detail.userInfo === undefined) { // fail
      wx.showToast({
        title: '授权失败~',
        icon: 'none',
        duration: 1500
      })
    } else { // success
      this.authSuccess(event)
    }
  },

  authSuccess(event) {
    let openid = wx.getStorageSync('openid')

    SingleUserReq.getUserInfo(openid).then(res => {
      return SingleUserReq.register(
        openid, event.detail.userInfo, res.data === undefined
      )
    }).then(res => {
      wx.switchTab({
        url: '/pages/pair-user/pair-user'
      })
    })
  }
})