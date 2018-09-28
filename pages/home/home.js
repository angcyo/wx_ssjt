// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    logo: "../../images/logo.png",
    nav_pagers: ["../../images/page1.jpg", "../../images/page2.jpg"],
    contents: [{
      tip: "明星代言",
      tip_en: "CELEBRITY ENDORSEMENT",
      des: "公主家品牌形象代言人由人气偶像汪东城（Jiro Wang)担任。其高贵优雅的王子气质与”公主家“品牌高度契合。王子与公主的牵手将共同演绎出”外在生活轻松，内在心灵高贵“的护肤新理念。",
      img: "../../images/in01.jpg"
    }, {
      tip: "品牌理念",
      tip_en: "BRAND CONCEPT",
      des: "轻生活是一种全新的生活态度和方式，只有外在生活的轻松，才能唤醒内在心灵的高贵公主家护肤品能让你听从内心的声音，回归简单、自然的生活，追求心灵上的奢侈，成为美丽、智慧与坚定的现代都市女性。",
      img: "../../images/in03.jpg"
    }],
    product: {
      tip: "产品系列",
      tip_en: "PRODUCT SERIES",
      img: ["../../images/p1.jpg", "../../images/p2.jpg", "../../images/p3.jpg",
        "../../images/p4.jpg", "../../images/p5.jpg", "../../images/p6.jpg"
      ]
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    console.log("onLoad....")
    console.log(options)
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
    console.log("刷新")

    setTimeout(() => {
      wx.showToast({
        title: '刷新完成',
      })
      wx.stopPullDownRefresh()
    }, 1000)

    // wx.nextTick(() => {
    //   wx.showToast({
    //     title: '刷新完成',
    //   })
    //   wx.stopPullDownRefresh()
    // })
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {
    console.log("更多")
    wx.nextTick(() => {
      // wx.showToast({
      //   title: '加载更多',
      //   icon: 'loading'
      // })
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {
    console.log("分享")
  }
})