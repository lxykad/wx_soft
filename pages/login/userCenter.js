var app = getApp();
Page({
  data:{
    
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    //String2
    var userInfo = app.appData.userInfo;
    console.log("userinfo======"+userInfo);
    if(userInfo == null){
      //跳转到登录页面
      wx.navigateTo({
        url: 'login',
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
    }
  },
  onReady:function(){
    // 页面渲染完成
    //String3
  },
  onShow:function(){
    // 页面显示
    //String4
  },
  onHide:function(){
    // 页面隐藏
    //String5
  },
  onUnload:function(){
    // 页面关闭
    //String6
  }
})