import request from "../utils/http"

export const HttpTest = () => request({
  url: '/test',
  method: 'get'
}, {
  "code": 200,
  "msg": "成功",
  "data": {
    "name": "肥皂",
    "status": 1
  }
})
