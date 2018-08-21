//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    imgUrls:[
      '/assets/images/img1.jpg',
      '/assets/images/img1.jpg',
      '/assets/images/img1.jpg'
    ],
    indicatorDots:true,
    autoplay:true,
    interval:3000
  },
  //事件处理函数
  //页面被加载时调的函数
  onLoad: function () {
  },
  getUserInfo: function(e) {

  }
})
