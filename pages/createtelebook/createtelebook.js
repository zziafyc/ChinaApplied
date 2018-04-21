// pages/createtelebook/createtelebook.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    backgroundUrl: "../images/1.png",
    name: null,
    description: null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  changeBackground: function () {
    var that = this
    wx.chooseImage({
      count: 1, // 默认9
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        var tempFilePaths = res.tempFilePaths
        that.setData({
          backgroundUrl: tempFilePaths[0]
        })
      }
    })
  },
  nameInput: function (event) {
    this.setData({
      name: event.detail.value
    })

  },
  contentInput: function (event) {
    this.setData({
      description: event.detail.value

    })
  },
  savaTelebook: function () {
    if (this.data.name == '' || this.data.name == null) {
      wx.showToast({
        title: '群名称不能为空',
        icon: 'none',
        duration: 2000
      })
    } else {
      if (this.data.description == '' || this.data.description == null) {
        wx.showToast({
          title: '群简介不能为空',
          icon: 'none',
          duration: 2000
        })
      } else {
        //界面跳转并传递参数
        var pages = getCurrentPages();
        var previewPage = pages[pages.length - 2]
        var newTelebooks = previewPage.data.telebooks
        newTelebooks.push({
          avatar: this.data.backgroundUrl,
          name: this.data.name,
          content: this.data.description,
        })
        previewPage.setData({
          telebooks: newTelebooks
        })
        wx.navigateBack({
          delta: 1
        })
      }
    }

  },
})