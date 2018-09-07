function formatNumber (n) {
  const str = n.toString()
  return str[1] ? str : `0${str}`
}

export function formatTime (date) {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()

  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  const t1 = [year, month, day].map(formatNumber).join('/')
  const t2 = [hour, minute, second].map(formatNumber).join(':')

  return `${t1} ${t2}`
}

const ERR_OK = 200
const request = (url, data = {}, method) => new Promise((resolve, reject) => {
  wx.request({
    url,
    data,
    method,
    success: res => resolve(res.data),
    fail: res => reject(res)
  })
})

export default {
  formatNumber,
  formatTime,
  request,
  ERR_OK
}
