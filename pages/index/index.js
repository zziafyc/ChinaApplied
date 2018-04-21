//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    companyTrends: [
      {
        imageUrl: "../images/1.png",
        title: "踏春南下 体验徽州之美——记中用科技皖南行活动",
        content: "春盈歙县繁荣地，福满徽州浪漫天。3月31日，中用科技大家庭驱车南下，来到了山水秀丽的皖南”",
        sendTime: "2018-04-12"
      },
      {
        imageUrl: "../images/2.png",
        title: "喜讯 || 中用科技“超级玛丽”系统通过安徽省新产品鉴定",
        content: "日前，安徽省经济与信息化委员会发布“安徽省新产品鉴定会”名单，中用超级玛丽（语音物联网）系统V1.0通过审核，被认定为安徽省新产品",
        sendTime: "2018-04-12"
      },
      {
        imageUrl: "../images/3.png",
        title: "中用科技2018年春季登山活动圆满结束",
        content: "春回大地，为鼓励员工走出户外、激发工作热情，3月13日，中用科技部分成员在美丽的大蜀山开展了一场爬山比赛活动。当天下午，全员在蜀山森林公园门口集合...",
        sendTime: "2018-04-12"
      },
    ],
    imagUrls: ["../images/1.png", "../images/2.png", "../images/3.png"],
    bannerUrls: ["../images/1.png", "../images/2.png", "../images/3.png"],
  },
  onLoad: function () {
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
  }
})
