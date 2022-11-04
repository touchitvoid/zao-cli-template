import Mock from "mockjs";
/**
 * 基于wx.request二次封装
 * 支持mock模拟数据
 */
class ZaoRequest {
  baseURL = ''
  timeout = 50000
  headers = {}

  constructor() {
    return this
  }
  /**
   * 创建request配置
   * @param options
   * @returns {any}
   */
  create(options) {
    Object.keys(options).forEach(key => {
      if (this.hasOwnProperty(key)) this[key] = options[key]
    })
    return this.send.bind(this)
  }

  /**
   * 发送请求create之后新实例绑定这个
   * @param options
   * @param mockData 返回模拟数据
   * @returns {Promise}
   */
  send(options, mockData) {
    const { baseURL, timeout, headers } = this

    return new Promise((resolve, reject) => {
      // is mock return mock data
      if (mockData) return resolve(Mock.mock(mockData))

      wx.request({
        ...options,
        // 如果url为完整请求地址不拼接
        url: (options.url.includes('http') ? '' : baseURL) + options.url,
        header: headers,
        timeout,
        success: result => resolve(result.data),
        fail: ({ errMsg }) => reject(errMsg)
      })
    })
  }
}

export default new ZaoRequest()
