// pages/pair-user/pair-user.js
import timeTool from '../../utils/getDate.js'
import {
  OtherFunRequest
} from '../../models/otherfun.js'
import {
  PairUserRequest
} from '../../models/pairuser.js'

const OtherFunReq = new OtherFunRequest()
const PairUserReq = new PairUserRequest()

Page({

  data: {
    swiperItemH: wx.getSystemInfoSync().windowHeight * 0.92,
    page: 1
  },

  onLoad: function (options) {
    this.initHandle()
  },

  onShow() {
    this.showHandle()
  },

  showHandle() {
    if (this.data.isBack) {
      let o = {}

      PairUserReq.getPairDiary({ page: 1 }).then(res => {
        o['diaryList'] = res.data.reverse()
        o['isWriteToday'] = true
        o['isBack'] = false
        this.setData({ ...o })
      })

    }
  },

  initHandle() { // init
    let o = {}

    PairUserReq.checkPairUser(wx.getStorageSync('openid')).then(res => {
      if (res.data != null) {
        o['pairOpenid'] = res.data.openid_dou
        wx.setStorageSync('pairOpenid', res.data.openid_dou)
        return PairUserReq.getPairUserinfo(res.data.openid_dou)
      } else {
        wx.removeStorageSync('pairOpenid')
        throw new Error('stop')
      }
    }).then(res => {
      o['pairUserInfo'] = [res[0].data.userinfo, res[1].data.userinfo]
      return OtherFunReq.getDayTag()
    }).then(res => {
      o['isWriteToday'] = res.data === timeTool.getNowTime() ? true : false
      return PairUserReq.getPairDiary({ page: 1 })
    }).then(res => {
      o['diaryList'] = res.data.reverse()
      this.setData({ ...o })
    })
  },

  swiperChange(event) { // swiper 滑动
    if (this.data.benSwiperLoad) { return }
    let cur = event.detail.current
    if (this.data.diaryList.length != 1 && cur === 0) {

      PairUserReq.getPairDiary({ page: ++this.data.page }).then(res => {
        if (res.data.length === 0) {
          this.setData({ benSwiperLoad: true })
        }
        this.setDiaryData(cur, res.data)
      })
      
    }
  },

  setDiaryData(cur, data) {
    data.forEach(item => {
      this.data.diaryList.unshift(item)
    })
    this.setData({
      diaryList: this.data.diaryList,
      swiperCur: cur
    })
  },

  onShareAppMessage(res) { // invite
    return {
      imageUrl: '/static/img/pairShare.png',
      path: `/pages/pair-invited/pair-invited?openid=${wx.getStorageSync('openid')}&date=${timeTool.getNowTime()}`
    }
  },

  diaryDetailTo(event) { // diary detail nav
    wx.navigateTo({
      url: `/pages/detail-diary/detail-diary?item=${JSON.stringify(event.target.dataset.item)}&date=${event.target.dataset.date}`
    })
  },
})