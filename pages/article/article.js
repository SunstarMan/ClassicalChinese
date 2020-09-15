Page({
  data: {
    currentData: 0,

    title: '',
    author: {},
    original: '',
    translation: '',
    translations: [],
    notes: [],
    background: '',
    videoSrc: '',

    bookNotes: [{
      title: '岳阳楼记',
      word: '记：',
      notes: '一种文体。可以写景、叙事，多为议论。但目的是为了抒发作者的情怀和抱负（阐述作者的某些观念）。'
    }],
  },

  // 视频错误回调
  videoErrorCallback: function(e) {
    console.log('视频错误信息: ')
    console.log(e.detail.errMsg)
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    let self = this;
    wx.request({
      url: 'http://localhost:8080/article/detail?article_id=' + options.article_id,
      method: 'GET',
      success: function(res) {
        let original = '';
        let translation = '';
        for (let i = 0; i<res.data.translations.length; i++) {
          original += res.data.translations[i].sentence + '\n';
          translation += res.data.translations[i].translation + '\n';
        }
        console.log(res.data);
        for (let i = 0; i < res.data.extensions.length; i++) {
          let extension = res.data.extensions[i];
          if (extension.type === "创作背景") {
            self.setData({
              background: extension.content
            })
          } else if (extension.type === "视频") {
            self.setData({
              videoSrc: extension.content
            })
          }
        }
        self.setData({
          title: res.data.title,
          author: res.data.author,
          notes: res.data.notes,
          original: original,
          translation: translation,
          translations: res.data.translations
        })
      }
    })
  },


  //获取当前滑块的article
  bindchange: function(e) {
    const that = this;
    that.setData({
      currentData: e.detail.current
    })
  },

  //点击切换，滑块article赋值
  checkCurrent: function(e) {
    const that = this;
    if (that.data.currentData === e.target.dataset.current) {
      return false;
    } else {

      that.setData({
        currentData: e.target.dataset.current
      })
    }
  }
})