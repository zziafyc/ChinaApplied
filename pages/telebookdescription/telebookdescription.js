// pages/telebookdescription/telebookdescription.js
var city_list = require('./city.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    telebook: null,
    cityList: city_list.city,
    chooseCity: '成员未选择！',
    isShowLayer: false,
    chooseIndex: 0,
    len: [],
    code: null,
    codeHeight: null,
    cityHeight: null,
    scrollTop: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //接受对象参数
    var telebookParam = JSON.parse(options.telebook)
    this.setData({
      telebook: telebookParam
    })

    var windowHeight = wx.getSystemInfoSync().windowHeight;
    var arr = [];

    this.data.cityList.forEach(current => arr.push(current.cityList.length + 1));
    this.setData({
      codeHeight: (windowHeight - 50) / this.data.cityList.length,
      cityHeight: windowHeight ,
      len: arr
    });
  },
  getCurrentCode: function (e) {
    var index = e.target.dataset.index, sum = 0, self = this;

    for (var j = 0; j < index; j++) {
      sum += this.data.len[j];
    }

    this.setData({
      code: e.target.dataset.code,
      scrollTop: sum * 40,
      chooseIndex: index,
      isShowLayer: true
    });

    setTimeout(() => {
      self.setData({ isShowLayer: false })
    }, 500);
  },
  getChooseCity: function (e) {
    this.setData({ chooseCity: e.target.dataset.city });
  },
  goCard:function(){
    wx.navigateTo({
      url: '../card/card',
    })

  }
})