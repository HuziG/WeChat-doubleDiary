// components/mine/close-relation/index.js
import { PairUserRequest } from '../../../models/pairuser.js'
const PairUserReq = new PairUserRequest()

Component({
  /**
   * 组件的属性列表
   */
  properties: {

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
    closeRelationTo() {
      PairUserReq.deletePairUser().then(res => {
        return PairUserReq.deletePairDayTag()
      }).then(res => {
        if (res.code === 0 || res.code === 1) {
          wx.removeStorageSync('pairOpenid')
          wx.showModal({
            content: '解除成功',
            showCancel: false,
            success() {
              wx.reLaunch({
                url: '/pages/pair-user/pair-user'
              })
            }
          })
        }
      })
    }
  }
})
