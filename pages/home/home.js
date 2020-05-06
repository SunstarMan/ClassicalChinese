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
    contentImgUrls: [{
      bookid: 26,
      title: '爱莲说',
      url: 'https://i.loli.net/2020/04/29/aflWCki2Vm4Guzt.png',
      author: '周敦颐'
    }, {
        bookid: 26,
      title: '鸿门宴',
      url: 'https://i.loli.net/2020/04/29/SFWChlr6gta5RQL.png',
      author: '司马迁'
    }, {
        bookid: 26,
      title: '窦娥冤',
      url: 'https://i.loli.net/2020/04/29/vCyuAsJSRMlemOc.png',
      author: '关汉卿'
    }, {
        bookid: 26,
      title: '登泰山记',
      url: 'https://i.loli.net/2020/04/29/BsjRuCwSDPmMeHp.png',
      author: '姚鼐'
    }, {
        bookid: 26,
      title: '爱莲说',
      url: 'https://i.loli.net/2020/04/29/aflWCki2Vm4Guzt.png',
      author: '周敦颐'
    }, {
        bookid: 26,
      title: '鸿门宴',
      url: 'https://i.loli.net/2020/04/29/SFWChlr6gta5RQL.png',
      author: '司马迁'
    }, {
        bookid: 26,
      title: '窦娥冤',
      url: 'https://i.loli.net/2020/04/29/vCyuAsJSRMlemOc.png',
      author: '关汉卿'
    }, {
        bookid: 26,
      title: '登泰山记',
      url: 'https://i.loli.net/2020/04/29/BsjRuCwSDPmMeHp.png',
      author: '姚鼐'
    }],
    indicatorDots: true, //显示面板显示点
    autoplay: true, //自动切换
    interval: 5000, //切换时间
    duration: 100, //动画时长

    //音乐分类
    ranks: [{
        bookid: 26,
        title: "揠苗助长",
        author: "《孟子.公孙丑上》",
        url: 'https://i.loli.net/2020/04/29/tUb1xk6qSGQWlKB.png'
      },
      {
        bookid: 23,
        title: "守株待兔",
        author: "战国·韩·韩非《韩非子·五蠹》",
        url: 'https://i.loli.net/2020/04/29/FifPxG2X7o3RgtK.png'
      },
      {
        bookid: 18,
        title: "精卫填海",
        author: "先秦时代《山海经》",
        url: 'https://i.loli.net/2020/04/29/eBox6PNMAX9dY71.png'
      },
      {
        bookid: 19,
        title: "两小儿辩日",
        author: "《列子·汤问》（一作《列御寇·汤问》）",
        url: 'https://i.loli.net/2020/04/29/hLB9zGlqWQwukp6.png'
      },
      {
        bookid: 26,
        title: "揠苗助长",
        author: "《孟子.公孙丑上》",
        url: 'https://i.loli.net/2020/04/29/tUb1xk6qSGQWlKB.png'
      },
      {
        bookid: 23,
        title: "守株待兔",
        author: "战国·韩·韩非《韩非子·五蠹》",
        url: 'https://i.loli.net/2020/04/29/FifPxG2X7o3RgtK.png'
      },
      {
        bookid: 18,
        title: "精卫填海",
        author: "先秦时代《山海经》",
        url: 'https://i.loli.net/2020/04/29/eBox6PNMAX9dY71.png'
      },
      {
        bookid: 19,
        title: "两小儿辩日",
        author: "《列子·汤问》（一作《列御寇·汤问》）",
        url: 'https://i.loli.net/2020/04/29/hLB9zGlqWQwukp6.png'
      }
    ],
  },

  // 设置的初中跳转的一篇文章
  yueyanglouji(e){
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



})