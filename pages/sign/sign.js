Page({
  data: {
    index: 0,
    date: '未选择',
    listData: [
      { "number": "100010", "name": "方应春", "earliest": "07:20", "latest": "17:20", "isLate": false },
      { "number": "100011", "name": "沈越越", "earliest": "07:20", "latest": "17:23", "isLate": false },
      { "number": "100012", "name": "秦奇", "earliest": "07:30", "latest": "18:23", "isLate": false },
      { "number": "100013", "name": "钟生", "earliest": "08:15", "latest": "17:46", "isLate": true },
      { "number": "100014", "name": "王哲浩", "earliest": "07:45", "latest": "17:50", "isLate": false },
      { "number": "100015", "name": "胡增", "earliest": "08:50", "latest": "17:40", "isLate": true },
      { "number": "100016", "name": "李明媚", "earliest": "08:00", "latest": "18:21", "isLate": false },
      { "number": "100017", "name": "洪德能", "earliest": "07:15", "latest": "18:30", "isLate": false }
    ]
  },
  bindDateChange: function (e) {
    this.setData({
      date: e.detail.value
    })
  },
})
