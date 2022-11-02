import request from "../utils/http"

export const HttpTest = () => request({
  url: '/xxx',
  method: 'get'
})
