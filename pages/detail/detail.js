// pages/detail/detail.js
var WxParse = require('../../wxParse/wxParse.js');
var url = 'https://www.gongzhujia.com.cn/News/newsinfo/id/1313.html';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title: '',
    time: '',
    progress: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    console.log(options)
    url = options.url

    if (url == undefined) {
      return
    }

    wx.setNavigationBarTitle({
      title: options.title,
    })
    this.detail(url)
  },

  detail: function(u) {
    var that = this;

    this.setData({
      progress: 80
    })

    wx.request({
      url: 'https://www.angcyo.com/wx/detail',
      method: 'post',
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      data: {
        url: u
      },
      success: (res) => {
        this.setData({
          title: res.data['title'],
          time: res.data['time'],
          progress: 0
        })
        WxParse.wxParse('article', 'html', res.data['content'], that, 5);
        wx.setNavigationBarTitle({
          title: this.data.title
        })
        wx.stopPullDownRefresh()
      }
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
    this.detail(url)
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {
    return {
      title: this.data.title,
      path: '/pages/detail/detail?url=' + url
    }
  }
})