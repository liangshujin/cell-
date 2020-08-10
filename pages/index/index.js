//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    userImgSrc: './Abstract1.jpg'
  },
  //事件处理函数
  bindViewTap: function() {},
  onLoad: function () {},
  getTextImg: function(e) {
    wx.request({
      url: 'http://img4.imgtn.bdimg.com/it/u=1906469856,4113625838&fm=26&gp=0.jpg',
      data:[],
      header:{
        'content-type': 'application/json' // 默认值
      },
      success(res){
        this.data.userImgSrc = "http://img4.imgtn.bdimg.com/it/u=1906469856,4113625838&fm=26&gp=0.jpg";
      }
    })
  }
})
