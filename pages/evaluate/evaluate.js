// pages/evaluate/evaluate.js
import {
  OtherFunRequest
} from '../../models/otherfun.js'

const OtherFunReq = new OtherFunRequest()

Page({

  data: {

  },
  
  onLoad: function (options) {

  },
  
  submitBtn() {
    let [openid, star, value] = [ wx.getStorageSync('openid'),
                                  this.selectComponent('#evaluate-star-cmp').data.value,
                                  this.selectComponent('#evaluate-text-cmp').data.value]
    
    if (star === 0 && value === '') {
      wx.showToast({title: '什么都没写，提交失败~',icon: 'none',duration: 1800})
      return 
    }

    OtherFunReq.addEvaluate(openid, star, value).then(res => {
      if (res.code === 0) {

        wx.showModal({
          content: '提交成功',
          showCancel: false,
          success(res) {
            if (res.confirm) {
              wx.switchTab({
                url: '/pages/mine/mine'
              })
            }
          }
        })

      }
    })
    
  }
})