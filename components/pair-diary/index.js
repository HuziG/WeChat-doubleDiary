// components/pair-diary/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    time: String,
    place: String,
    avatar: String,
    nickname: String,
    item: Object,
    content: {
      type: String,
      value: ''
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    contentHeight: ((Math.round(wx.getSystemInfoSync().windowHeight * 0.3 * 0.8 / 20)) * 20 + 3),
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
