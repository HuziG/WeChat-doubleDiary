import { HTTP } from '../utils/http.js'
import timeTool from '../utils/getDate.js'

import {
  SingleUserRequest
} from '../models/singleuser.js'

const SingleUserReq = new SingleUserRequest()

class PairUserRequest extends HTTP {

  register(openid1, openid2) {
    this.loadPop()

    return wx.BaaS.invokeFunction('pairuser_register', { openid1, openid2 }).then(res => {
      return this.request(res)
    })
  }

  deletePairUser() {
    this.loadPop()

    return wx.BaaS.invokeFunction(
      'pairuser_delete', { openid: wx.getStorageSync('openid') }
      ).then(res => {
      return this.request(res)
    })
  }

  deletePairDayTag() {
    this.loadPop()

    let pairOpenid = wx.getStorageSync('pairOpenid')

    return wx.BaaS.invokeFunction(
      'pairuser_deleteDayTag', { openid1: pairOpenid[0], openid2: pairOpenid[1] }
    ).then(res => {
      return this.request(res)
    })
  }

  checkPairUser(openid) { 
    this.loadPop()

    return wx.BaaS.invokeFunction('pairdiary_getPairUser', { openid }).then(res => {
      return this.request(res)
    })
  }

  addDiary({ openid = wx.getStorageSync('openid'), value }) {
    return wx.BaaS.invokeFunction('pairdiary_addDiary', { openid, value }).then(res => {
      return this.request(res)
    })
  }

  getPairDiary({ openid = wx.getStorageSync('openid'), page, pageSize = 4}) {
    this.loadBarTitlePop()

    return wx.BaaS.invokeFunction('pairdiary_getDiary', { openid, page, pageSize }).then(res => {
      return this.request(res)
    })
  }

  getIpAddress() {
    return new Promise((resolve, reject) => {
      resolve('')
    })
  }

  orgPairDiary(place, content, ip = '') {
    return {
      date: timeTool.getNowTime(),
      [wx.getStorageSync('openid')]: {
        content,
        place,
        time: timeTool.getNowHour()
      },
      ip
    }
  }

  getPairUserinfo(data) {
    let that = this
    return new Promise((resolve, reject) => {
      Promise
        .all([
          SingleUserReq.getUserInfo(data[0]),
          SingleUserReq.getUserInfo(data[1])
        ])
        .then((results) => {
          resolve(results)
        });
    })
  }

}

export {
  PairUserRequest
}