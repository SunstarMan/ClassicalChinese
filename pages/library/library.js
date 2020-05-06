Page({

  /**
   * 页面的初始数据
   */
  data: {
    //顶部轮播图
    imgUrls: [
      'https://i.loli.net/2020/04/29/6izBUQJIWYK9loe.jpg',
      'https://i.loli.net/2020/04/29/SB2HMuq5tCpEWv1.jpg',
      'https://i.loli.net/2020/04/29/6KBPGYDflJktqRb.png'
    ],
    indicatorDots: true, //显示面板显示点
    autoplay: true, //自动切换
    interval: 5000, //切换时间
    duration: 100, //动画时长
    circular: true, //循环播放

    // 文人名字和头像网址集合
    authorImgUrls: [{
        authorid: 0,
        url: 'https://i.loli.net/2020/05/02/sE8RNtdwUgG7qmr.jpg',
        authorname: '苏轼'
      },
      {
        authorid: 1,
        url: 'https://i.loli.net/2020/05/02/amiH8vVxYLAEPtU.jpg',
        authorname: '欧阳修'
      },
      {
        authorid: 2,
        url: 'https://i.loli.net/2020/05/02/geJK26dl5NqCGPI.jpg',
        authorname: '王安石'
      },
      {
        authorid: 3,
        url: 'https://i.loli.net/2020/05/02/5ykRihuTALoEQpM.jpg',
        authorname: '柳宗元'
      },
      {
        authorid: 4,
        url: 'https://i.loli.net/2020/05/02/wkQFDByYb63GjZX.jpg',
        authorname: '韩愈'
      },
      {
        authorid: 5,
        url: 'https://i.loli.net/2020/05/02/HUgfYGRIb72KFpe.jpg',
        authorname: '刘禹锡'
      },
      {
        authorid: 6,
        url: 'https://i.loli.net/2020/05/02/oU3hc1vQZFyigIt.jpg',
        authorname: '范仲淹'
      }
    ],
    // 书籍名字和头像网址集合
    bookImgUrls: [{
        bookid: 0,
        url: 'https://i.loli.net/2020/05/02/4OA3ImpwKtCXcun.jpg',
        bookname: '论语'
      },

      {
        authorid: 1,
        url: 'https://i.loli.net/2020/05/02/n6g82Rl1JsxOjZN.jpg',
        bookname: '列子'
      },
      {
        authorid: 2,
        url: 'https://i.loli.net/2020/05/02/Bc4dSQ3DHtVo7yw.jpg',
        bookname: '礼记'
      },
      {
        authorid: 3,
        url: 'https://i.loli.net/2020/05/02/XiMQ5tUWJ8dcPa4.jpg',
        bookname: '世说新语'
      }

    ],
  },

  // 跳转到按题目搜索界面
  title_search: function() {
    wx.navigateTo({
      url: '../title_search/title_search'
    })
  },
  // 跳转到按作者搜索界面
  author_search: function () {
    wx.navigateTo({
      url: '../author_search/author_search'
    })
  },
  // 跳转到按书籍搜索界面
  book_search: function () {
    wx.navigateTo({
      url: '../book_search/book_search'
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

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

  }
})