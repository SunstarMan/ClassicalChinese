Page({
  data: {
    //按书籍搜索显示文章列表
    articles: []
  },

  // 输入书籍后，显示列表
  book_input: function (e) {
    let provenance = e.detail.value;
    let self = this;
    if (provenance === '' || provenance === ' ') return;
    wx.request({
      url: 'http://localhost:8080/search/provenance?provenance=' + provenance,
      method: 'GET',
      success: function (res) {
        self.setData({
          articles: res.data
        });
      }
    })
  },

  // 取消搜索,返回主页面
  hideInput: function () {
    wx.navigateBack({
      //跳转，返回主页面路径
      url: '../library/library'
    })
  },


  onLoad: function(options) {
    let self = this;
    let provenance = options.provenance
    if (provenance === '' || provenance === ' ') return;
    wx.request({
      url: 'http://localhost:8080/search/provenance?provenance=' + provenance,
      method: 'GET',
      success: function (res) {
        self.setData({
          articles: res.data
        });
      }
    })
  }
});