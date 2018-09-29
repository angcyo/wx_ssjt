// pages/news/news.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    page: 1,
    news: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    wx.showToast({
      icon: 'loading',
      title: '加载中...',
    })
    this.data.page = 1
    getNews(this.data.page, (res) => {
      this.setData({
        news: res.data
      })
    })

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {
    this.data.page = 1
    getNews(this.data.page, (res) => {
      this.setData({
        news: res.data
      })
      wx.stopPullDownRefresh()
    })
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {
    var page = this.data.page + 1
    getNews(page, (res) => {
      // console.log('加载更多:' + page)
      // console.log(res.data)
      // console.log(this.data.news)
      this.setData({
        news: this.data.news.concat(res.data)
      })
      this.data.page = page
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})

function getNews(p, s) {
  console.log('获取新闻页:' + p)
  wx.request({
    url: 'https://www.angcyo.com/wx/get_news',
    method: 'post',
    header: {
      'content-type': 'application/x-www-form-urlencoded'
    },
    data: {
      page: p
    },
    success: s
  })
}