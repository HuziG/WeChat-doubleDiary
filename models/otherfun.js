import { HTTP } from '../utils/http.js'
import timeTool from '../utils/getDate.js'
const bmap = require('../utils/bmap-wx.min.js'); 

class OtherFunRequest extends HTTP {
  getDayTag() {
    this.loadPop()
    return wx.BaaS.invokeFunction('otherfun_getDayTag', { openid: wx.getStorageSync('openid') }).then(res => {
      return this.request(res)
    })
  }

  rshDayTag(openid) {
    this.loadPop()
    return wx.BaaS.invokeFunction('otherfun_rshDayTag', { openid }).then(res => {
      return this.request(res)
    })
  }

  addEvaluate(openid ,star, value) {
    this.loadPop()
    return wx.BaaS.invokeFunction('otherfun_evaluate', { openid, star, value }).then(res => {
      return this.request(res)
    })
  }

  getLocation() {
    this.loadPop()
    return new Promise((resolve, reject) => {
      var BMap = new bmap.BMapWX({
        ak: 'GYz0wtbsoNZBq27ey0ylAxgfhABOngL2'
      });
      BMap.regeocoding({
        success: function (res) {
          let detail = res.originalData.result.addressComponent
          resolve(`${detail.district} ${detail.city} ${detail.province}`)
        },
        fail() {
          reject()
        }
      });
    })
  }

  getDayTagResult() {
    this.loadPop()
    return new Promise((resolve, reject) => {
      this.getDayTag(wx.getStorageSync('openid')).then(res => {
        resolve(res.data === null || res.data != timeTool.getNowTime())
      })
    })
  }

}

export {
  OtherFunRequest
}