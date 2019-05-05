// pages/pair-invited/pair-invited.js
import timeTool from '../../utils/getDate.js'
import {
  SingleUserRequest
} from '../../models/singleuser.js'

const SingleUserReq = new SingleUserRequest()

Page({

  data: {
    nickName: '',
    isOverDate: false
  },

  onLoad: function (options) {
    this.init(options)
  },

  init(options) { // init
    SingleUserReq.getUserInfo(options.openid).then(res => {
      let _isOverDate = options.date === timeTool.getNowTime()

      this.setData({
        nickName: res.data.userinfo.nickName,
        isOverDate: _isOverDate,
        openid: options.openid
      })

      wx.setNavigationBarColor({
        frontColor: '#ffffff',
        backgroundColor: _isOverDate === true ? '#EFF3F5' : '#77797A'
      })
    })
  }

})