// pages/product/product.js
var WxParse = require('../../wxParse/wxParse.js');
var url = 'https://www.gongzhujia.com.cn/Product/proinfo/id/200.html';

Page({

  /**
   * 页面的初始数据
   */
  data: {
    progress: 0,
    imgs: [],
    title: ""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    url = options.url
    this.onPullDownRefresh()
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
    if (url == undefined) {
      return
    }
    this.getWebData(url);
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
      path: '/pages/product/product?url=' + url
    }
  },

  getWebData: function(u) {
    var that = this;

    this.setData({
      progress: 80
    })

    wx.request({
      url: 'https://www.angcyo.com/wx/product',
      method: 'post',
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      data: {
        url: u
      },
      success: (res) => {
        //console.log(res.data)
        this.setData({
          // title: res.data['title'],
          // time: res.data['time'],
          progress: 0,
          imgs: res.data.imgs,
          title: res.data['title']
        })
        wx.setNavigationBarTitle({
          title: this.data.title
        })
        //WxParse.wxParse('article', 'html', res.data, that, 5);
        wx.stopPullDownRefresh()
      }
    })
  },
  onImageClick: function(event) {
    var img = event.currentTarget.dataset.src
    var link = event.currentTarget.dataset.link
    var imags = event.currentTarget.dataset.srcs

    if (link == undefined) {
      wx.previewImage({
        current: img, // 当前显示图片的http链接
        urls: imags // 需要预览的图片http链接列表
      })
    } else {
      wx.navigateTo({
        url: '../product/product?url=' + link
      })
    }
  }
})