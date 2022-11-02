/**
 * by. touchitvoid
 * 基于wx.request二次封装
 */
class ZaoRequest {
  baseURI = ''
  timeout = 50000
  headers = {}
  constructor() {
    return this
  }
  create(options) {
    Object.keys(options).forEach(key => {
      if (this.hasOwnProperty(key)) this[key] = options[key]
    })
    return this.send
  }
  send(options) {
    const { baseURI, timeout, headers } = this
    return new Promise((resolve, reject) => {
      wx.request({
        ...options,
        // 如果url为完整请求地址不拼接
        url: (options.url.includes('http') ? '' : baseURI) + options.url,
        header: headers,
        timeout,
        success: result => resolve(result.data),
        fail: ({ errMsg }) => reject(errMsg)
      })
    })
  }
}

export default new ZaoRequest()
