// pages/detail-diary/detail-diary.js
/**
 * 1.通过options，获取参数date，time，place，content
 * 2.通过localstorage，获取openid
 * 3.传递
 */

Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
                  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let item = JSON.parse(options.item)
    this.setData({
      date: options.date,
      time: item.time,
      place: item.place,
      content: item.content
    })
  },

  onShareAppMessage(res) { // 分享
    return {
      imageUrl: '/static/img/diaryShare.png'
    }
  }
})