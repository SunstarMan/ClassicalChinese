Page({

  /**
   * 页面的初始数据
   */
  data: {
    isLoading: true,
    typeData: {},
    tabs: [{
        id: 0,
        name: "推荐",
        isActive: true
      },
      {
        id: 1,
        name: "小学",
        isActive: false
      },
      {
        id: 2,
        name: "初中",
        isActive: false
      },
      {
        id: 3,
        name: "高中",
        isActive: false
      },
      {
        id: 4,
        name: "课外",
        isActive: false
      }
    ],

    //顶部轮播图
    imgUrls: [
      'https://i.loli.net/2020/04/29/6izBUQJIWYK9loe.jpg',
      'https://i.loli.net/2020/04/29/SB2HMuq5tCpEWv1.jpg',
      'https://i.loli.net/2020/04/29/6KBPGYDflJktqRb.png'
    ],

    //推荐部分书本数据数组
    contentImgUrls: [],
    indicatorDots: true, //显示面板显示点
    autoplay: true, //自动切换
    interval: 5000, //切换时间
    duration: 100, //动画时长

    //音乐分类
    primary: [],
    //初中和高中
    articles: [],
    //课外
    extra: []
  },

  // 设置的初中跳转的一篇文章
  yueyanglouji(e) {
    wx.navigateTo({
      url: '../article/article'
    })
  },
  // 设置的课外跳转的一篇文章
  bind26(e) {
    wx.navigateTo({
      url: '../article/article'
    })
  },

  handleItemChange(e) {
    //接收传递过来的参数
    //console.log(e);
    const {
      index
    } = e.detail;
    console.log(index);
    let {
      tabs
    } = this.data;
    tabs.forEach((v, i) => i === index ? v.isActive = true : v.isActive = false);
    this.setData({
      tabs
    })
  },


  gotoDetail: function(event) {
    let article_id = event.currentTarget.dataset.id;
    wx.navigateTo({
      url: '../article/article?article_id=' + article_id
    })
  },


  gradeBook: function(grade, book, index) {
    let self = this;
    wx.request({
      url: 'http://localhost:8080/home/gradebook?grade=' + grade + "&book=" + book,
      method: 'GET',
      success: function(res) {
        let key = 'articles[' + index + ']';
        self.setData({
          [key]: res.data
        })
      }
    })
  },


  onLoad: function() {
    let self = this;
    
    wx.request({
      url: 'http://localhost:8080/home/recommend?index=0',
      method: 'GET',
      success: function(res) {
        self.setData({
          contentImgUrls: res.data
        })
      }
    });

    wx.request({
      url: 'http://localhost:8080/home/grade?grade=小学',
      method: 'GET',
      success: function(res) {
        self.setData({
          primary: res.data
        })
      }
    });

    wx.request({
      url: 'http://localhost:8080/home/extra?index=0',
      method: 'GET',
      success: function (res) {
        self.setData({
          extra: res.data
        })
      }
    });

    this.gradeBook('初中', '七年级上册', 0);
    this.gradeBook('初中', '七年级下册', 1);
    this.gradeBook('初中', '八年级上册', 2);
    this.gradeBook('初中', '八年级下册', 3);
    this.gradeBook('初中', '九年级上册', 4);
    this.gradeBook('初中', '九年级下册', 5);
    this.gradeBook('高中', '必修上册', 6);
    this.gradeBook('高中', '必修下册', 7);
    this.gradeBook('高中', '选择性必修上册', 8);
    this.gradeBook('高中', '选择性必修中册', 9);
    this.gradeBook('高中', '选择性必修下册', 10);
    this.gradeBook('高中', '选修', 11);
  }
})