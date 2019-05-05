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
  /**
   * 组件的属性列表
   */
  properties: {
    date: String,
    place: String,
    value: {
      type: String,
      value: ''
    }
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
    valueInput(event) {
      this.setData({
        value: event.detail.value
      })
    },

    submitBtn() {
      if (this.data.value === '') {
        return
      }

      OtherFunReq.getDayTagResult().then(res => {
        if (res) {
          return OtherFunReq.getLocation()
        }
        wx.showToast({title: '今天已经提交咯~',icon: 'none',duration: 1500})
      }).then(res => {
        return PairUserReq.orgPairDiary(res, this.data.value)
      }).then(res => {
        return PairUserReq.addDiary({ value: res })
      }).then(res => {
        return OtherFunReq.rshDayTag(wx.getStorageSync('openid'))
      }).then(res => {
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
