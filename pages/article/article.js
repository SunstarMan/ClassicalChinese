Page({
  data: {
    currentData: 0,

    bookContent: [{
      title: '岳阳楼记',
      author: '宋代 . 范仲淹',
      main:''            /*文章主体*/
    }],

    bookTranslate:[{
      title: '岳阳楼记',
      translate:''     /*整篇文章的翻译 */
    }],

    bookSentenceTranslate:[{
      title:'岳阳楼记',
      original:'[1] 越明年，政通人和，百废具兴。',     /*原句*/
      translate:'到了第二年，政事顺利，百姓安居乐业，各种荒废了的事业都兴办起来了。'    /*句子对应的翻译 */
    }],

    bookNotes:[{
      title: '岳阳楼记',
      word:'记：',
      notes:'一种文体。可以写景、叙事，多为议论。但目的是为了抒发作者的情怀和抱负（阐述作者的某些观念）。'
    }],

    bookExtends:[{
      authorName:'范仲淹',
      authorAbout:'范仲淹（989－1052年），字希文，汉族，北宋著名的政治家、思想家、军事家、文学家，世称“范文正公”。范仲淹文学素养很高，写有著名的《岳阳楼记》。',
      url:'https://i.loli.net/2020/05/06/mMUZ4GQETrpz6Y8.jpg',
      background:'   这篇文章写于庆历六年。范仲淹生活在北宋王朝内忧外患的年代，对内阶级矛盾日益突出。为巩固政权，以范仲淹为首的政治集团进行改革。但改革以失败告终。后来,他又因得罪吕夷简，被贬邓州，这篇文章写于邓州，而非写于岳阳楼。',
      videosrc: 'http://mvvideo1.meitudata.com/540d2f68acf7a9581.mp4',
    }]
  },

  // 视频错误回调
  videoErrorCallback: function (e) {
    console.log('视频错误信息: ')
    console.log(e.detail.errMsg)
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {},
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