//获取应用实例
var app = getApp()
Page({
  data: {
    modalHidden: true,//是否隐藏对话框
  },

  // 跳转到收藏夹
  entercollection: function () {
    wx.navigateTo({
      url: '../collection/collection'
    })
  },
  //事件处理函数
  bindViewTap: function () {
    this.setData({
      modalHidden: !this.data.modalHidden
    })

  },
  //确定按钮点击事件
  modalBindaconfirm: function () {
    this.setData({
      modalHidden: !this.data.modalHidden,
    })
  },
  //取消按钮点击事件
  modalBindcancel: function () {
    this.setData({
      modalHidden: !this.data.modalHidden,
    })
  },

})
