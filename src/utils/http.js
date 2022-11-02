import http from "./request"
import config from '../config'

const request = http.create({
  timeout: 20000,
  ...config
})

export default request
