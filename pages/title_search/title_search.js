Page({
  /**
   * 页面的初始数据
   */
  data: {
    articles: [],
  },
  // 输入文章题目后，显示列表
  title_input: function(e) {
    let title = e.detail.value;
    let self = this;
    if (title === '' || title === ' ') return;
    wx.request({
      url: 'http://localhost:8080/search/title?title=' + title,
      method: 'GET',
      success: function(res) {
        console.log(res.data)
        self.setData({
          articles: res.data
        });
      }
    })
  },


  // 取消搜索,返回主页面
  hideInput: function() {
    wx.navigateBack({
      //跳转，返回主页面路径
      url: '../library/library'
    })
  }
});