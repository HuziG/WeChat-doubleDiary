import { HTTP } from '../utils/http.js'

class SingleUserRequest extends HTTP{
  getOpenid(code) {
    this.loadPop()

    return wx.BaaS.invokeFunction('singleuser_getOpenid', { code }).then(res => {
      return this.request(res)
    })
  }

  getUserInfo(openid) {
    this.loadPop()

    return wx.BaaS.invokeFunction('singleuser_getUserinfo', { openid }).then(res => {
      return this.request(res)
    })
  }

  register(openid, userinfo, first) {
    this.loadPop()

    return wx.BaaS.invokeFunction('singleuser_rsgUser', { openid, userinfo, first }).then(res => {
      return this.request(res)
    })
  }
}

 export {
  SingleUserRequest
 }