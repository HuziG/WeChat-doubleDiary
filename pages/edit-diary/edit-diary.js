// pages/edit-diary/edit-diary.js
import timeTool from '../../utils/getDate.js'

const Page = require('../../utils/ald-stat.js').Page;

Page({

  data: {

  },

  onLoad: function (options) {
    this.setData({
      date: timeTool.getNowTime()
    })
  }
})