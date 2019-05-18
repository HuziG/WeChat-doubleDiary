// pages/detail-diary/detail-diary.js
const Page = require('../../utils/ald-stat.js').Page;

Page({

  data: {

  },
                  
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