// components/detail-diary/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    date: String,
    time: String,
    place: String,
    content: String,
    showJoin: Boolean
  },

  /**
   * 组件的初始数据
   */
  data: {
    
  },

  attached() {
    this.showJoinHandle()
  },

  /**
   * 组件的方法列表
   */
  methods: {
    welcomeTo() {
      wx.redirectTo({
        url: '/pages/welcome/welcome'
      })
    },

    showJoinHandle() {
      if (getCurrentPages().length === 1) {
        this.setData({
          joinApp: true
        })
      }
    }
  }
})
