export const getStorage = theKey => new Promise((resolve, reject) => {
  wx.getStorage({
    key: theKey,
    success (res) {
      resolve(res.data)
    },
    fail (e) {
      reject(e)
    }
  })
})

export const setStorage = (theKey, theValue) => new Promise((resolve, reject) => {
  wx.setStorage({
    key: theKey,
    data: theValue,
    success () {
      resolve()
    },
    fail (e) {
      reject(e)
    }
  })
})

export const getLocation = () => new Promise((resolve) => {
  wx.getLocation({
    success ({ latitude, longitude, speed, accuracy }) {
      resolve({ latitude, longitude, speed, accuracy })
    },
    fail () {
      resolve({
        latitude: -999,
        longitude: -999
      })
    }
  })
})

export const chooseLocation = () => new Promise((resolve, reject) => {
  wx.chooseLocation({
    success (res) {
      resolve(res)
    },
    fail (e) {
      reject(e)
    }
  })
})

export const removeStorage = theKey => new Promise((resolve, reject) => {
  wx.removeStorage({
    key: theKey,
    success (res) {
      resolve(res.data)
    },
    fail (e) {
      reject(e)
    }
  })
})

export const clearStorage = () => new Promise((resolve, reject) => {
  try {
    wx.clearStorageSync()
    resolve()
  } catch (e) {
    reject(e)
  }
})

export const login = () => new Promise((resolve, reject) => {
  wx.login({
    success (res) {
      resolve(res)
    },
    fail (e) {
      reject(e)
    }
  })
})

export const request = obj => new Promise((resolve, reject) => {
  wx.request({
    url: obj.url,
    data: obj.data,
    header: { 'content-type': 'application/x-www-form-urlencoded', ...obj.header },
    method: obj.method,
    success (res) {
      resolve(res.data.data)
    },
    fail (e) {
      console.log(e)
      reject(e)
    }
  })
})

export const chooseImage = (count = 1, sourceType = ['album']) => new Promise((resolve, reject) => {
  wx.chooseImage({
    count,
    sourceType,
    success (res) {
      resolve(res)
    },
    fail (e) {
      reject(e)
    }
  })
})

export const showShareMenu = () => {
  return wx.showShareMenu
}

export const pageScrollTo = () => {
  return wx.pageScrollTo
}

export const getUserInfo = (obj) => new Promise((resolve, reject) => {
  wx.getUserInfo({
    ...obj,
    success (res) {
      resolve(res)
    },
    fail (e) {
      reject(e)
    }
  })
})

export const alert = (content) => {
  wx.showModal({
    title: '',
    content,
    showCancel: false
  })
}

export const navigateTo = (url) => {
  wx.navigateTo({
    url
  })
}

export const redirectTo = (redirectUrl) => {
  wx.redirectTo({
    url: redirectUrl
  })
}

export const startPullDownRefresh = () => new Promise((resolve, reject) => {
  wx.startPullDownRefresh({
    success (res) {
      resolve(res)
    },
    fail (e) {
      reject(e)
    }
  })
})

export const stopPullDownRefresh = () => new Promise((resolve, reject) => {
  wx.stopPullDownRefresh({
    success (res) {
      resolve(res)
    },
    fail (e) {
      reject(e)
    }
  })
})

export const uploadFile = (obj) => new Promise((resolve, reject) => {
  wx.uploadFile({
    ...obj,
    success (res) {
      resolve(res)
    },
    fail (e) {
      reject(e)
    }
  })
})

export default {
  getStorage,
  setStorage,
  getLocation,
  chooseLocation,
  removeStorage,
  clearStorage,
  login,
  request,
  chooseImage,
  showShareMenu,
  pageScrollTo,
  getUserInfo,
  alert,
  navigateTo,
  redirectTo,
  startPullDownRefresh,
  stopPullDownRefresh,
  uploadFile
}
