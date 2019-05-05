class HTTP {
  constructor() {
    // wx.showLoading({
    //   title: '加载中'
    // })

    this.netError()
  }

  request(data) {
    return new Promise((resolve, reject) => {
      this._request(data, resolve, reject)
    })
  }

  _request(data, resolve, reject) {
    if (data.code === 0) {
      wx.hideLoading()
      wx.hideNavigationBarLoading()
      resolve(data.data)
    } else {
      wx.hideLoading()
      wx.hideNavigationBarLoading()
      reject(true)
      showError(data)
    }
  }

  showError(data) {
    console.log(data.errmsg)
  }

  netError() {
    wx.onNetworkStatusChange(function (res) {
      if (!res.isConnected) {
        wx.showToast({
          title: '网络崩溃~',
          icon: 'none',
          duration: 1500
        })
      }       
    })
  }

  loadPop() {
    wx.showLoading({
      title: '加载中'
    })
  }

  loadBarTitlePop() {
    wx.showNavigationBarLoading()
  }
}

export {
  HTTP
}