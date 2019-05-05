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
    this.loadPop()
    return wx.BaaS.invokeFunction('pairdiary_addDiary', { openid, value }).then(res => {
      return this.request(res)
    })
  }

  getPairDiary({ openid = wx.getStorageSync('openid'), page, pageSize = 4}) {
    this.loadBarTitlePop()

    return wx.BaaS.invokeFunction('pairdiary_getDiary', { openid, page, pageSize }).then(res => {
      let _res = this.diaryHandle(res)
          _res.data.data = this.filterDiary(_res.data.data)

      return this.request(_res)
    })
  }

  diaryHandle(res) {
    let _res = []
    res.data.data.forEach(res => {
      _res.push(JSON.parse(res))
    })
    res.data.data = _res
    return res
  } 

  filterDiary(value) {
    let arr = []
    let dateArr = new Set(value.map(item => { return item.date }))
    dateArr.forEach(i => {
      let o = {}
      o['date'] = i
      value.forEach(j => {
        if (i === j.date) {
          o = Object.assign(o, j)
        }
      })
      arr.push(o)
    })
    return arr
  }

  orgPairDiary(place, content) {
    return {
      date: timeTool.getNowTime(),
      [wx.getStorageSync('openid')]: {
        content,
        place,
        time: timeTool.getNowHour()
      }
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