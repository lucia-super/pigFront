// pages/me/information/information.js
//取微信的openID  API配置文件  陆续调逻辑
const app = getApp()
//var card = getApp().globalData.cardId
//var plate = getApp().globalData.plateId
var cardId = wx.getStorageSync('CARDID')
var plateId = wx.getStorageSync('PLATENUM')

Page({
  data: {
    toast1Hidden: true,
    modalHidden: true,
    modalHidden2: true,
    notice_str: '',
    cardId: wx.getStorageSync('CARDID'),
    plateId: wx.getStorageSync('PLATENUM')
 
  },  
  //事件处理函数
  onLoad: function () {
   // cardId = wx.getStorageSync('CARDID')
   // plateId = wx.getStorageSync('PLATENUM')
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  editInfor: function(e) {
    wx.navigateTo({
      url: '../information/edit/edit'
    })
  }
})