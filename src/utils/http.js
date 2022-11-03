import http from "./request"

// console.log(process)

const request = http.create({
  baseURL: 'http://localhost/test',
  timeout: 20000
})

export default request
