// components/add-diary/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

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
    editDiaryTo() {
      wx.navigateTo({
        url: '/pages/edit-diary/edit-diary'
      })
    }
  }
})
