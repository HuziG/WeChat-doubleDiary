// components/edit-diary/index.js
import {
  PairUserRequest
} from '../../models/pairuser.js'
import {
  OtherFunRequest
} from '../../models/otherfun.js'


const PairUserReq = new PairUserRequest()
const OtherFunReq = new OtherFunRequest()

Component({
  
  properties: {
    date: String,
    place: String,
    value: {
      type: String,
      value: ''
    }
  },

  data: {

  },

  methods: {
    valueInput(event) {
      this.setData({
        value: event.detail.value
      })
    },

    submitBtn(event) {
      let place = ''

      if (this.data.value === '') {
        return
      }

      OtherFunReq.getDayTagResult().then(res => {
        if (res) {
          return OtherFunReq.getLocation()
        }
        wx.showToast({
          title: '今天已经提交咯~',
          icon: 'none',
          duration: 1500,
          success() {
            wx.hideLoading()
          }
        })
      }).then(res => {
        place = res
        return PairUserReq.getIpAddress()
      }).then(res => {
        return PairUserReq.orgPairDiary(place, this.data.value, res)
      }).then(res => {
        return PairUserReq.addDiary({ value: res })
      }).then(res => {
        return OtherFunReq.rshDayTag(wx.getStorageSync('openid'))
      }).then(res => {
        wx.hideLoading()
        this.backHandle()
      })

    },

    backHandle() {
      let pages = getCurrentPages()
      let prevPage = pages[0]

      prevPage.setData({
        isBack: true
      })

      wx.switchTab({
        url: `/pages/pair-user/pair-user`
      })
    }
  }
})
