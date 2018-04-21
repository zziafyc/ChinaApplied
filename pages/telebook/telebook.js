// pages/telebook/telebook.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    telebooks: [
      {
        avatar: "../images/1.png",
        name: "中用科技",
        content: "这是中用科技的通讯录",
      },
      {
        avatar: "../images/2.png",
        name: "研发部",
        content: "这是研发部的通讯录",
      }
    ]

  },
  onLoad: function (options) {
    console.log(options)

  },

  /**
   *  创建通讯录
   */
  createTelebook: function () {
    wx.navigateTo({
      url: '../createtelebook/createtelebook',
    })
  },
  GoTelebookDescription: function (event) {
    //传递一个对象的方式，需要先转化为string
    var telebook = JSON.stringify(event.currentTarget.dataset.telebook)
    wx.navigateTo({
      url: '../telebookdescription/telebookdescription?telebook=' + telebook,
    })

  }
})