// pages/card/card.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  callPhone: function () {
    wx.makePhoneCall({
      phoneNumber: '18756993820',
    })

  }
})