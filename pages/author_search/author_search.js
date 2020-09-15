Page({
  data: {
    articles: []
  },

  // 输入作者姓名后，显示列表
  author_input: function (e) {
    let author = e.detail.value;
    let self = this;
    if (author === '' || author === ' ') return;
    wx.request({
      url: 'http://localhost:8080/search/author?author=' + author,
      method: 'GET',
      success: function (res) {
        console.log(res.data)
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
    let author = options.author
    if (author == null || author === '') return
    wx.request({
      url: 'http://localhost:8080/search/author?author=' + author,
      method: 'GET',
      success: function (res) {
        console.log(res.data)
        self.setData({
          articles: res.data
        });
      }
    })
  }
});