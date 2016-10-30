//index.js

Page({
  data:{
   
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    
    console.log("onload");
  },
  onReady:function(){
    // 页面渲染完成
    
     console.log("onReady");
  },
  onShow:function(){
    // 页面显示
    //String4
    console.log("onShow");
  },
  onHide:function(){
    // 页面隐藏
   // String5
    console.log("onHide");
  },
  onUnload:function(){
    // 页面关闭
   // String6
    console.log("onUnload");
  },
  clickJump:function(){

    //第一种页面跳转方式
    wx.navigateTo({
      url: 'second?id=22',
      success: function(res){
        // success
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    })
  

  //第二种跳转方式--会关闭当前页面

  // wx.redirectTo({
  //   url: 'second',
  //   success: function(res){
  //     // success
  //   },
  //   fail: function() {
  //     // fail
  //   },
  //   complete: function() {
  //     // complete
  //   }
  // })




  }

})