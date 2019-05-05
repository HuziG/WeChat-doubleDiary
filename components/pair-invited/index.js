// components/pair-invited/index.js
import {
  PairUserRequest
} from '../../models/pairuser.js'
import {
  SingleUserRequest
} from '../../models/singleuser.js'

const SingleUserReq = new SingleUserRequest()
const PairUserReq = new PairUserRequest()

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    nickName: String,
    openid: String
  },

  /**
   * 组件的初始数据
   */
  data: {
    
  },

  /**
   * 组件的方法列表
   */
  methods: {
    getUserInfo(event) { // 获取用户授权信息
      if (event.detail.userInfo === undefined) { 
        wx.showToast({
          title: '授权失败~',
          icon: 'none',
          duration: 1500
        })
      } else { 
        this.landSuccess(event)
      }
    },

    landSuccess(event) {
      let that = this
      wx.login({
        success(res) {

          SingleUserReq.getOpenid(res.code).then(res => {
            wx.setStorageSync('openid', res.data.openid)

            that.checkPerPair().then(res => { if (res) { 
              that.authSuccess(event)} 
            })
          })

        }
      })
    },

    authSuccess(event) {
      let openid = wx.getStorageSync('openid')

      SingleUserReq.getUserInfo(openid).then(res => {
        return SingleUserReq.register(openid, event.detail.userInfo, res.data === undefined)
      }).then(res => {
        return PairUserReq.register(this.data.openid, openid)
      }).then(res => {
        wx.switchTab({
          url: '/pages/pair-user/pair-user'
        })
      })
    },

    checkPerPair() {
      return new Promise((resolve, reject) => {
        let openid = wx.getStorageSync('openid')

        if (this.data.openid === openid) {
          wx.showModal({
            content: '自己不能邀请自己',
            showCancel: false
          })
          return; resolve(false)
        }

        Promise
          .all([PairUserReq.checkPairUser(this.data.openid),
                PairUserReq.checkPairUser(openid)])
          .then(function (results) {
            let isPer = (results[0].data === null && results[1].data === null)
            if (!isPer) {
              wx.showModal({
                content: '对方可能有人了',
                showCancel: false
              })
            }
            resolve(isPer)
          });
      })
    },

    welcomeTo() {
      wx.redirectTo({
        url: '/pages/welcome/welcome'
      })
    }
    
  }
})
