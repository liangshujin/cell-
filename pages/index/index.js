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
  getTextImg: function() {
    console.log(123)
    wx.request({
      url: 'https://timgsa.baidu.com/timg',
      method:"GET",
      data:{
        "image":"", 
        "quality": "80",
        "size": "b9999_10000",
        "sec": "1597059718571",
        "di": "3448c343b2ac2f767a7dae3b1d0a9c42",
        "imgtype": "0",
        "src": "http://a2.att.hudong.com/36/48/19300001357258133412489354717.jpg"
      },
      header:{
        'content-type': 'application/json' // 默认值
      },
      success(res){
        console.log(res)
        this.data.userImgSrc = "https://timgsa.baidu.com/timg";
      },
      fail:function(res){
        console.log(res);
      }
    })
  }
})
