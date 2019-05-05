// pages/mine/mine.js
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
    
  },

  onShow() {
    this.setData({
      pairOpenid: wx.getStorageSync('pairOpenid')
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  evaluateTo() {
    wx.navigateTo({
      url: '/pages/evaluate/evaluate'
    })
  },

  aboutusTo() {
    wx.navigateTo({
      url: '/pages/aboutus/aboutus'
    })
  }
})