import http from "./request"

// 公用请求头 - 存放token 支持单个请求重新定义headers
const headers = {}

headers['token'] = 'Bear token'

const request = http.create({
  baseURL: 'http://localhost/test',
  timeout: 20000,
  headers
})

export default request
